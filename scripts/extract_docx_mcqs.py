import json
import re
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

W_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
OPTION_RE = re.compile(r"^\s*([A-Ea-e])[\)\.:\-]\s*(.+?)\s*$")
OPTION_ALT_RE = re.compile(r"^\s*([A-Ea-e])\s+(.+?)\s*$")
QUESTION_NUM_RE = re.compile(r"^\s*(?:Q\s*\d+|\d{1,4})[\)\.:\-]?\s+(.+)$", re.IGNORECASE)
ANSWER_HINT_RE = re.compile(r"\b(?:answer|ans|correct)\b\s*[:\-]?\s*([A-E])\b", re.IGNORECASE)


def normalize_text(text: str) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    return text


def infer_specialty(file_name: str) -> str:
    s = file_name.lower()
    if "anesthesia" in s:
        return "Anesthesia"
    if "urology" in s:
        return "Urology"
    if "ortho" in s:
        return "Orthopedics"
    if "plastic" in s:
        return "Plastic Surgery"
    if "vascular" in s:
        return "Vascular"
    if "cardio" in s or "thoracic" in s:
        return "Cardiothoracic"
    if "colorectal" in s:
        return "Colorectal"
    if "hpb" in s or "liver" in s or "biliary" in s:
        return "HPB"
    if "pediatric" in s:
        return "Pediatric Surgery"
    if "breast" in s or "endocrine" in s:
        return "Breast Surgery"
    if "neuro" in s:
        return "Neurosurgery"
    if "trauma" in s:
        return "Trauma"
    return "General Surgery"


def extract_paragraphs_from_docx(docx_path: Path):
    paragraphs = []
    with zipfile.ZipFile(docx_path) as zf:
        with zf.open("word/document.xml") as xf:
            in_paragraph = False
            pieces = []
            for event, elem in ET.iterparse(xf, events=("start", "end")):
                if event == "start" and elem.tag == W_NS + "p":
                    in_paragraph = True
                    pieces = []
                elif event == "end" and elem.tag == W_NS + "t" and in_paragraph:
                    if elem.text:
                        pieces.append(elem.text)
                elif event == "end" and elem.tag == W_NS + "p" and in_paragraph:
                    text = normalize_text("".join(pieces))
                    if text:
                        paragraphs.append(text)
                    in_paragraph = False
                    pieces = []
                    elem.clear()
                elif event == "end":
                    elem.clear()
    return paragraphs


def is_question_start(line: str) -> bool:
    if len(line) < 20:
        return False
    if line.endswith("?"):
        return True
    m = QUESTION_NUM_RE.match(line)
    if not m:
        return False
    candidate = m.group(1).strip()
    return len(candidate) >= 20


def parse_questions(paragraphs, source_name: str, starting_id: int):
    questions = []
    q_text = ""
    options = {}
    current_opt = None
    next_id = starting_id
    seen = set()

    def flush(answer_hint: str = ""):
        nonlocal q_text, options, current_opt, next_id
        if q_text and all(k in options and options[k] for k in ["A", "B", "C", "D"]):
            key = (q_text, options.get("A", ""), options.get("B", ""), options.get("C", ""), options.get("D", ""))
            if key not in seen:
                seen.add(key)
                questions.append(
                    {
                        "id": next_id,
                        "specialty": infer_specialty(source_name),
                        "topic": source_name,
                        "source_file": source_name,
                        "question": q_text,
                        "options": {k: options[k] for k in ["A", "B", "C", "D"]},
                        "answer": answer_hint if answer_hint in {"A", "B", "C", "D"} else "A",
                    }
                )
                next_id += 1
        q_text = ""
        options = {}
        current_opt = None

    pending_answer_hint = ""

    for raw_line in paragraphs:
        line = raw_line.strip()
        if not line:
            continue

        answer_match = ANSWER_HINT_RE.search(line)
        if answer_match:
            pending_answer_hint = answer_match.group(1).upper()
            continue

        m = OPTION_RE.match(line) or OPTION_ALT_RE.match(line)
        if m and q_text:
            letter = m.group(1).upper()
            text = normalize_text(m.group(2))
            if letter in {"A", "B", "C", "D", "E"} and text:
                options[letter] = text
                current_opt = letter
            continue

        if current_opt and q_text and line and not is_question_start(line):
            options[current_opt] = normalize_text(options.get(current_opt, "") + " " + line)
            continue

        if is_question_start(line):
            if q_text:
                flush(pending_answer_hint)
                pending_answer_hint = ""
            m_q = QUESTION_NUM_RE.match(line)
            q_text = normalize_text(m_q.group(1) if m_q else line)
            options = {}
            current_opt = None
            continue

        if q_text and not options:
            q_text = normalize_text(q_text + " " + line)

    flush(pending_answer_hint)
    return questions, next_id


def find_max_existing_id():
    max_id = 0
    js_dir = Path("js/questions")
    if not js_dir.exists():
        return 10000

    id_re = re.compile(r'"id"\s*:\s*(\d+)')
    for f in js_dir.glob("*.js"):
        try:
            text = f.read_text(encoding="utf-8")
            for m in id_re.finditer(text):
                n = int(m.group(1))
                if n > max_id:
                    max_id = n
        except Exception:
            continue
    return max(10000, max_id + 1)


def main():
    bank = Path("MCQ Bank")
    out_path = bank / "docx_extracted_questions.json"
    docx_files = sorted(bank.glob("*.docx"))

    current_id = find_max_existing_id()
    all_questions = []
    summary = []

    for docx_path in docx_files:
        try:
            paragraphs = extract_paragraphs_from_docx(docx_path)
            questions, current_id = parse_questions(paragraphs, docx_path.name, current_id)
            all_questions.extend(questions)
            summary.append({"file": docx_path.name, "extracted": len(questions)})
            print(f"{docx_path.name}: extracted {len(questions)}")
        except Exception as e:
            summary.append({"file": docx_path.name, "extracted": 0, "error": str(e)})
            print(f"{docx_path.name}: error {e}")

    out_path.write_text(json.dumps(all_questions, indent=2, ensure_ascii=False), encoding="utf-8")
    (bank / "docx_extracted_summary.json").write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"\nTotal extracted: {len(all_questions)}")
    print(f"Saved to: {out_path}")


if __name__ == "__main__":
    main()
