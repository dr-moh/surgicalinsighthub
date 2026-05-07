import argparse
import datetime
import json
import os
import re
import sys
import time
import xml.etree.ElementTree as ET
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import requests

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from bulk_sharp_processor import build_fallback_sharp

try:
    from openai import OpenAI
except ImportError:  # pragma: no cover - optional dependency
    OpenAI = None

try:
    from google import genai
    from google.genai import types

    USE_MODERN_GENAI = True
except ImportError:  # pragma: no cover - optional dependency
    try:
        import google.generativeai as google_genai

        USE_MODERN_GENAI = False
    except ImportError:  # pragma: no cover - optional dependency
        google_genai = None
        USE_MODERN_GENAI = False


PROMPT_INSTRUCTIONS = """
You are an expert surgical educator. Extract the medical multiple-choice questions from this text.
For each question, provide a high-yield debrief using the SHARP Framework and supplementary clinical callouts.
Follow this exact structure always:

S (Set the Stage): Confirm the correct answer based on the source text and clinical context.
H (Highlight Excellence): Explain why this is the 'Single Best Answer' in a clinical context. Provide a detailed discussion of the topic.
A (Address the Gaps): Systematically debunk every incorrect distractor.
R (Review Learning Points): Include guideline-level review (ASCRS, ASA, ATLS, SAGES).
P (Plan for Improvement): Provide one exam-focused take-home pearl.

Supplementary Callouts:
Guideline: Discuss formal clinical guidelines.
Takeaway: Most important clinical 'bottom line'.
Visualization: Description of pathognomonic radiological or operative findings.

Discrepancy Protocol:
If conflict exists with standard guidelines, flag it. If insufficient data, say 'Insufficient Data in Source'.

Return ONLY a valid JSON object:
{
  "questions": [
    {
      "question": "...",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "correct_answer": "...",
      "tags": ["surgery", "topic"],
      "sharp_debrief": {
        "S_set_the_stage": "...",
        "H_highlight_excellence": "...",
        "A_address_the_gaps": "...",
        "R_review_learning_points": "...",
        "P_plan_for_improvement": "..."
      },
      "supplementary_callouts": {
        "guideline": "...",
        "takeaway": "...",
        "visualization": "..."
      },
      "discrepancy_flag": ""
    }
  ]
}
""".strip()

ENRICH_QUESTION_PROMPT = """
You are an expert surgical educator.
The question and answer choices are already extracted.
Return ONLY one valid JSON object using exactly this structure:
{
  "question": "...",
  "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
  "correct_answer": "...",
  "tags": ["surgery", "topic"],
  "sharp_debrief": {
    "S_set_the_stage": "...",
    "H_highlight_excellence": "...",
    "A_address_the_gaps": "...",
    "R_review_learning_points": "...",
    "P_plan_for_improvement": "..."
  },
  "supplementary_callouts": {
    "guideline": "...",
    "takeaway": "...",
    "visualization": "..."
  },
  "discrepancy_flag": ""
}
""".strip()

W_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
MAX_TAGS = 6
MIN_TAG_TOKEN_LENGTH = 3
DEFAULT_COOLDOWN_SECONDS = 90
DEFAULT_CHUNK_SIZE = 10000
UTC_TIMEZONE = datetime.timezone.utc
GEMINI_DEFAULT_MODEL = os.getenv("GEMINI_MODEL", "gemini-1.5-flash")
GROQ_DEFAULT_MODEL = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
OPENROUTER_DEFAULT_MODEL = os.getenv("OPENROUTER_MODEL", "meta-llama/llama-3.1-8b-instruct:free")


@dataclass
class Provider:
    name: str
    model: str
    base_url: str | None = None
    api_key: str | None = None


def load_dotenv(env_path: Path) -> None:
    if not env_path.exists():
        return
    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def chunk_text(text: str, max_chars: int = DEFAULT_CHUNK_SIZE) -> list[str]:
    chunks = []
    remaining = text.strip()
    while len(remaining) > max_chars:
        split_idx = remaining.rfind("\n", 0, max_chars)
        if split_idx <= 0:
            split_idx = max_chars
        chunks.append(remaining[:split_idx].strip())
        remaining = remaining[split_idx:].strip()
    if remaining:
        chunks.append(remaining)
    return chunks


def extract_pdf_text(file_path: Path) -> str:
    readers = []
    try:
        from pypdf import PdfReader as PyPdfReader

        readers.append(PyPdfReader)
    except ImportError:  # pragma: no cover - optional dependency
        pass
    try:
        from PyPDF2 import PdfReader as PyPdf2Reader

        readers.append(PyPdf2Reader)
    except ImportError:  # pragma: no cover - optional dependency
        pass

    if not readers:
        raise RuntimeError("Install pypdf or PyPDF2 to process PDF files.")

    for reader_cls in readers:
        try:
            with file_path.open("rb") as handle:
                reader = reader_cls(handle)
                text = []
                for page in reader.pages:
                    page_text = page.extract_text() or ""
                    if page_text:
                        text.append(page_text)
                if text:
                    return "\n".join(text)
        except Exception:
            continue
    raise RuntimeError(f"Unable to extract text from PDF: {file_path.name}")


def extract_docx_text(file_path: Path) -> str:
    try:
        import docx

        document = docx.Document(str(file_path))
        return "\n".join(paragraph.text for paragraph in document.paragraphs if paragraph.text.strip())
    except ImportError:  # pragma: no cover - optional dependency
        pass
    except Exception:
        pass

    paragraphs = []
    with zipfile.ZipFile(file_path) as archive:
        with archive.open("word/document.xml") as xml_file:
            in_paragraph = False
            pieces: list[str] = []
            for event, elem in ET.iterparse(xml_file, events=("start", "end")):
                if event == "start" and elem.tag == W_NS + "p":
                    in_paragraph = True
                    pieces = []
                elif event == "end" and elem.tag == W_NS + "t" and in_paragraph:
                    if elem.text:
                        pieces.append(elem.text)
                elif event == "end" and elem.tag == W_NS + "p" and in_paragraph:
                    paragraph = re.sub(r"\s+", " ", "".join(pieces)).strip()
                    if paragraph:
                        paragraphs.append(paragraph)
                    in_paragraph = False
                    pieces = []
                    elem.clear()
                elif event == "end":
                    elem.clear()
    return "\n".join(paragraphs)


def extract_text(file_path: Path) -> str:
    suffix = file_path.suffix.lower()
    if suffix == ".pdf":
        return extract_pdf_text(file_path)
    if suffix == ".docx":
        return extract_docx_text(file_path)
    raise ValueError(f"Unsupported file type: {file_path.suffix}")


def strip_code_fences(raw_text: str) -> str:
    text = raw_text.strip()
    if text.startswith("```"):
        lines = text.splitlines()
        if lines and re.match(r"^```[\w-]*\s*$", lines[0].strip()):
            lines = lines[1:]
        while lines and lines[-1].strip() == "```":
            lines = lines[:-1]
        return "\n".join(lines).strip()
    return text


def clean_json_response(raw_text: str) -> Any:
    text = strip_code_fences(raw_text)
    for candidate in (text, text[text.find("{"): text.rfind("}") + 1], text[text.find("["): text.rfind("]") + 1]):
        candidate = candidate.strip()
        if not candidate:
            continue
        try:
            return json.loads(candidate)
        except Exception:
            continue
    decoder = json.JSONDecoder()
    for index, char in enumerate(text):
        if char not in "[{":
            continue
        try:
            parsed, _ = decoder.raw_decode(text[index:])
            return parsed
        except Exception:
            continue
    raise ValueError("Failed to parse AI JSON response.")


def option_letter(value: str) -> str:
    match = re.match(r"^\s*([A-E])\b", str(value or "").upper())
    return match.group(1) if match else ""


def normalize_option_text(option: Any, index: int) -> str:
    letter = chr(ord("A") + index)
    text = str(option or "").strip()
    match = re.match(r"^\s*([A-E])[\)\.\:\-]?\s*(.*)$", text, re.IGNORECASE)
    if match:
        letter = match.group(1).upper()
        text = match.group(2).strip()
    return f"{letter}) {text}".strip()


def normalize_options(options: Any) -> list[str]:
    if isinstance(options, dict):
        normalized = []
        for letter in sorted(options):
            normalized.append(f"{letter.upper()}) {str(options[letter]).strip()}")
        return normalized
    if isinstance(options, list):
        return [normalize_option_text(option, index) for index, option in enumerate(options)]
    return []


def dedupe_tags(*values: str) -> list[str]:
    ignored = {
        "and",
        "are",
        "conv",
        "docx",
        "following",
        "json",
        "pdf",
        "question",
        "statement",
        "statements",
        "that",
        "the",
        "true",
        "which",
    }
    seen = set()
    tags = []
    for value in values:
        cleaned = re.sub(r"[^a-z0-9]+", " ", str(value or "").lower()).strip()
        for token in cleaned.split():
            if len(token) < MIN_TAG_TOKEN_LENGTH:
                continue
            if token in ignored:
                continue
            if token not in seen:
                seen.add(token)
                tags.append(token)
    return tags[:MAX_TAGS] or ["surgery"]


def build_fallback_question(question_obj: dict[str, Any]) -> dict[str, Any]:
    options = normalize_options(question_obj.get("options"))
    answer_letter = option_letter(question_obj.get("answer") or question_obj.get("correct_answer"))
    answer_text = next((option for option in options if option.startswith(f"{answer_letter})")), answer_letter or "")
    sharp = build_fallback_sharp(
        {
            "question": question_obj.get("question", ""),
            "options": {option_letter(option): option.split(")", 1)[1].strip() for option in options if ")" in option},
            "answer": answer_letter or "A",
            "topic": question_obj.get("topic", ""),
            "specialty": question_obj.get("specialty", "General Surgery"),
            "guideline": question_obj.get("guideline", ""),
            "takeaway": question_obj.get("takeaway", ""),
        },
        answer_letter or "A",
    )
    question_text = str(question_obj.get("question", "")).strip()
    set_the_stage = sharp.get("set_the_stage", "")
    if not set_the_stage or set_the_stage == question_obj.get("topic", ""):
        set_the_stage = question_text or "Review the stem and confirm the single best answer."
    guideline = sharp.get("guideline", "")
    if guideline == question_obj.get("topic", ""):
        guideline = ""
    return {
        "question": question_text,
        "options": options,
        "correct_answer": answer_text or answer_letter or "A",
        "tags": dedupe_tags(question_obj.get("specialty", ""), question_obj.get("topic", ""), question_obj.get("question", "")),
        "sharp_debrief": {
            "S_set_the_stage": set_the_stage,
            "H_highlight_excellence": sharp.get("highlight_excellence", ""),
            "A_address_the_gaps": sharp.get("address_gaps", ""),
            "R_review_learning_points": sharp.get("review_learning_points", ""),
            "P_plan_for_improvement": sharp.get("plan", ""),
        },
        "supplementary_callouts": {
            "guideline": guideline,
            "takeaway": sharp.get("takeaway", ""),
            "visualization": sharp.get("visualization", ""),
        },
        "discrepancy_flag": "",
    }


def normalize_question_payload(question_obj: dict[str, Any]) -> dict[str, Any]:
    normalized = {
        "question": str(question_obj.get("question", "")).strip(),
        "options": normalize_options(question_obj.get("options", [])),
        "correct_answer": str(question_obj.get("correct_answer", "")).strip(),
        "tags": question_obj.get("tags") if isinstance(question_obj.get("tags"), list) else [],
        "sharp_debrief": question_obj.get("sharp_debrief") if isinstance(question_obj.get("sharp_debrief"), dict) else {},
        "supplementary_callouts": question_obj.get("supplementary_callouts")
        if isinstance(question_obj.get("supplementary_callouts"), dict)
        else {},
        "discrepancy_flag": str(question_obj.get("discrepancy_flag", "")).strip(),
    }

    if not normalized["tags"]:
        normalized["tags"] = ["surgery"]

    sharp = normalized["sharp_debrief"]
    normalized["sharp_debrief"] = {
        "S_set_the_stage": str(sharp.get("S_set_the_stage", "")).strip(),
        "H_highlight_excellence": str(sharp.get("H_highlight_excellence", "")).strip(),
        "A_address_the_gaps": str(sharp.get("A_address_the_gaps", "")).strip(),
        "R_review_learning_points": str(sharp.get("R_review_learning_points", "")).strip(),
        "P_plan_for_improvement": str(sharp.get("P_plan_for_improvement", "")).strip(),
    }

    callouts = normalized["supplementary_callouts"]
    normalized["supplementary_callouts"] = {
        "guideline": str(callouts.get("guideline", "")).strip(),
        "takeaway": str(callouts.get("takeaway", "")).strip(),
        "visualization": str(callouts.get("visualization", "")).strip(),
    }

    if not normalized["correct_answer"]:
        answer_letter = option_letter(question_obj.get("answer"))
        matched = next((option for option in normalized["options"] if option.startswith(f"{answer_letter})")), "")
        normalized["correct_answer"] = matched or answer_letter

    return normalized


def is_rate_limit_error(exc: Exception) -> bool:
    status_code = getattr(exc, "status_code", None)
    if status_code == 429:
        return True
    response = getattr(exc, "response", None)
    if getattr(response, "status_code", None) == 429:
        return True
    message = str(exc)
    return "429" in message or "limit" in message.lower()


class WaterfallClient:
    def __init__(self, fallback_only: bool = False):
        load_dotenv(ROOT / ".env")
        self.fallback_only = fallback_only
        self.cooldowns: dict[str, datetime.datetime] = {}
        self.providers = self._build_providers()
        self.compat_clients = self._build_openai_clients()
        self.gemini_client = self._build_gemini_client()

    def _build_providers(self) -> list[Provider]:
        if self.fallback_only:
            return []
        providers = []
        groq_key = os.getenv("GROQ_API_KEY", "").strip()
        openrouter_key = os.getenv("OPENROUTER_API_KEY", "").strip()
        local_url = os.getenv("LOCAL_OLLAMA_URL", "").strip() or os.getenv("LOCAL_API_URL", "").strip()
        local_model = os.getenv("LOCAL_MODEL_NAME", "").strip() or os.getenv("LOCAL_MODEL", "").strip() or "llama3"

        if groq_key:
            providers.append(Provider(name="Groq", base_url="https://api.groq.com/openai/v1", model=GROQ_DEFAULT_MODEL, api_key=groq_key))
        if openrouter_key:
            providers.append(
                Provider(
                    name="OpenRouter",
                    base_url="https://openrouter.ai/api/v1",
                    model=OPENROUTER_DEFAULT_MODEL,
                    api_key=openrouter_key,
                )
            )
        if local_url:
            providers.append(Provider(name="Local-Ollama", base_url=local_url, model=local_model, api_key="ollama"))
        return providers

    def _build_openai_clients(self) -> dict[str, Any]:
        if OpenAI is None:
            return {}
        clients = {}
        for provider in self.providers:
            if provider.base_url:
                clients[provider.name] = OpenAI(base_url=provider.base_url, api_key=provider.api_key)
        return clients

    def _build_gemini_client(self) -> Any:
        if self.fallback_only:
            return None
        gemini_key = os.getenv("GEMINI_API_KEY", "").strip()
        if not gemini_key:
            return None
        if USE_MODERN_GENAI:
            return genai.Client(api_key=gemini_key)
        if google_genai is not None:
            google_genai.configure(api_key=gemini_key)
            return True
        return None

    def is_cooling(self, name: str) -> bool:
        until = self.cooldowns.get(name)
        if not until:
            return False
        if datetime.datetime.now(UTC_TIMEZONE) >= until:
            self.cooldowns.pop(name, None)
            return False
        return True

    def set_cooldown(self, name: str, seconds: int = DEFAULT_COOLDOWN_SECONDS) -> None:
        self.cooldowns[name] = datetime.datetime.now(UTC_TIMEZONE) + datetime.timedelta(seconds=seconds)

    def call_gemini(self, prompt: str) -> Any:
        if not self.gemini_client or self.is_cooling("Gemini"):
            return None
        try:
            if USE_MODERN_GENAI:
                response = self.gemini_client.models.generate_content(
                    model=GEMINI_DEFAULT_MODEL,
                    contents=prompt,
                    config=types.GenerateContentConfig(temperature=0.2, response_mime_type="application/json"),
                )
                return clean_json_response(response.text)
            model = google_genai.GenerativeModel(GEMINI_DEFAULT_MODEL)
            response = model.generate_content(
                prompt,
                generation_config=google_genai.types.GenerationConfig(temperature=0.2, response_mime_type="application/json"),
            )
            return clean_json_response(response.text)
        except Exception as exc:
            if is_rate_limit_error(exc):
                self.set_cooldown("Gemini")
            raise

    def call_compatible_provider(self, provider: Provider, prompt: str) -> Any:
        client = self.compat_clients.get(provider.name)
        if client is None:
            raise RuntimeError("openai package is required for OpenAI-compatible providers.")
        extra = {}
        if provider.name in {"Groq", "Local-Ollama"}:
            extra["response_format"] = {"type": "json_object"}
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model=provider.model,
            temperature=0.2,
            timeout=120,
            **extra,
        )
        content = response.choices[0].message.content or ""
        return clean_json_response(content)

    def run(self, prompt: str) -> Any:
        if self.gemini_client and not self.is_cooling("Gemini"):
            try:
                print(f"     -> Trying Gemini ({GEMINI_DEFAULT_MODEL})...")
                return self.call_gemini(prompt)
            except Exception as exc:
                print(f"        [!] Gemini failed: {str(exc)[:120]}")

        for provider in self.providers:
            if self.is_cooling(provider.name):
                continue
            try:
                print(f"     -> Falling back to {provider.name} ({provider.model})...")
                return self.call_compatible_provider(provider, prompt)
            except Exception as exc:
                message = str(exc)
                if is_rate_limit_error(exc):
                    print(f"        [!] {provider.name} rate limited. Cooling down for {DEFAULT_COOLDOWN_SECONDS}s.")
                    self.set_cooldown(provider.name)
                else:
                    print(f"        [!] {provider.name} failed: {message[:120]}")
        return None


def collect_source_files(input_dir: Path) -> list[Path]:
    return sorted(list(input_dir.glob("*.pdf")) + list(input_dir.glob("*.docx")))


def extract_questions_from_chunk(client: WaterfallClient, text_chunk: str, max_attempts: int, retry_wait: float) -> list[dict[str, Any]] | None:
    prompt = f"{PROMPT_INSTRUCTIONS}\n\nTEXT:\n{text_chunk}"
    extracted = None
    for attempt in range(max_attempts):
        extracted = client.run(prompt)
        if isinstance(extracted, dict):
            questions = extracted.get("questions")
            if isinstance(questions, list):
                return [normalize_question_payload(question) for question in questions if isinstance(question, dict)]
        if attempt < max_attempts - 1:
            print(f"        [!] All configured providers failed for chunk. Waiting {retry_wait}s before retry...")
            time.sleep(retry_wait)
    return None


def enrich_existing_question(client: WaterfallClient, question_obj: dict[str, Any], fallback_only: bool) -> dict[str, Any]:
    if fallback_only or (not client.gemini_client and not client.providers):
        return build_fallback_question(question_obj)

    normalized_options = normalize_options(question_obj.get("options", {}))
    answer_letter = option_letter(question_obj.get("answer", ""))
    normalized_input = {
        "question": question_obj.get("question", ""),
        "options": normalized_options,
        "correct_answer": next(
            (option for option in normalized_options if option.startswith(f"{answer_letter})")),
            question_obj.get("answer", ""),
        ),
        "tags": dedupe_tags(question_obj.get("specialty", ""), question_obj.get("topic", ""), question_obj.get("question", "")),
    }
    prompt = (
        f"{ENRICH_QUESTION_PROMPT}\n\n"
        f"Question payload:\n{json.dumps(normalized_input, ensure_ascii=False)}"
    )
    enriched = client.run(prompt)
    if isinstance(enriched, dict):
        return normalize_question_payload(enriched)
    return build_fallback_question(question_obj)


def load_question_jsons(paths: list[Path], limit: int = 0) -> list[dict[str, Any]]:
    questions: list[dict[str, Any]] = []
    for path in paths:
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except json.JSONDecodeError as exc:
            raise ValueError(f"Failed to parse question JSON file {path}: {exc}") from exc
        items = data if isinstance(data, list) else data.get("questions", [])
        for item in items:
            if isinstance(item, dict):
                item.setdefault("source_file", path.name)
                questions.append(item)
    if limit > 0:
        return questions[:limit]
    return questions


def save_results(path: Path, items: list[dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(items, indent=2, ensure_ascii=False), encoding="utf-8")


def dedupe_question_list(questions: list[dict[str, Any]]) -> list[dict[str, Any]]:
    seen = set()
    deduped = []
    for question in questions:
        key = (
            question.get("question", "").strip().lower(),
            tuple(option.strip().lower() for option in question.get("options", [])),
        )
        if key in seen:
            continue
        seen.add(key)
        deduped.append(question)
    return deduped


def run_document_pipeline(args: argparse.Namespace, client: WaterfallClient) -> list[dict[str, Any]]:
    files = collect_source_files(args.input_dir)
    if args.limit_files > 0:
        files = files[: args.limit_files]
    print(f"Found {len(files)} source files to process.")
    all_questions: list[dict[str, Any]] = []

    for file_path in files:
        print(f"Processing: {file_path.name}...")
        raw_text = extract_text(file_path)
        if not raw_text.strip():
            print("  -> Skipping empty file.")
            continue

        chunks = chunk_text(raw_text, max_chars=args.chunk_size)
        print(f"  -> Document split into {len(chunks)} chunks.")

        for index, chunk in enumerate(chunks, start=1):
            print(f"  -> Chunk {index}/{len(chunks)}: current total {len(all_questions)}")
            extracted = extract_questions_from_chunk(client, chunk, args.max_attempts, args.retry_wait)
            if extracted:
                all_questions.extend(extracted)
                all_questions = dedupe_question_list(all_questions)
                print(f"        ✅ Extracted {len(extracted)} questions.")
            save_results(args.backup_output, all_questions)
            time.sleep(args.sleep_between_items)

    return all_questions


def run_question_json_pipeline(args: argparse.Namespace, client: WaterfallClient) -> list[dict[str, Any]]:
    questions = load_question_jsons(args.question_json, limit=args.limit_questions)
    print(f"Loaded {len(questions)} extracted questions.")
    results = []
    for index, question_obj in enumerate(questions, start=1):
        print(f"  -> Enriching question {index}/{len(questions)}")
        results.append(enrich_existing_question(client, question_obj, args.fallback_only))
        save_results(args.backup_output, results)
        time.sleep(args.sleep_between_items)
    return dedupe_question_list(results)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Import surgical MCQs from documents or extracted JSON.")
    parser.add_argument("--input-dir", type=Path, default=ROOT / "MCQ Bank", help="Directory containing PDF or DOCX files.")
    parser.add_argument("--question-json", type=Path, nargs="*", default=[], help="Existing extracted MCQ JSON file(s) to enrich.")
    parser.add_argument("--output", type=Path, default=ROOT / "MCQ Bank" / "ai_transformed_questions.json", help="Final output JSON path.")
    parser.add_argument("--backup-output", type=Path, default=ROOT / "MCQ Bank" / "ai_transformed_questions_BACKUP.json", help="Incremental backup JSON path.")
    parser.add_argument("--chunk-size", type=int, default=DEFAULT_CHUNK_SIZE, help="Maximum characters per text chunk.")
    parser.add_argument("--max-attempts", type=int, default=2, help="Attempts per chunk before giving up.")
    parser.add_argument("--retry-wait", type=float, default=45.0, help="Seconds to wait before retrying a failed chunk.")
    parser.add_argument("--sleep-between-items", type=float, default=1.0, help="Seconds to wait between chunks or questions.")
    parser.add_argument("--limit-files", type=int, default=0, help="Process only the first N PDF/DOCX files.")
    parser.add_argument("--limit-questions", type=int, default=0, help="Process only the first N questions from question JSON mode.")
    parser.add_argument("--fallback-only", action="store_true", help="Skip network providers and use deterministic fallback output where possible.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    client = WaterfallClient(fallback_only=args.fallback_only)

    if args.question_json:
        results = run_question_json_pipeline(args, client)
    else:
        if args.fallback_only:
            print("Document extraction requires at least one configured provider; fallback-only mode only supports --question-json.")
            return 1
        if not client.gemini_client and not client.providers:
            print("No AI providers are configured. Set GEMINI_API_KEY, GROQ_API_KEY, OPENROUTER_API_KEY, or LOCAL_OLLAMA_URL first.")
            return 1
        results = run_document_pipeline(args, client)

    save_results(args.output, results)
    print(f"\nDone. Saved {len(results)} questions to {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
