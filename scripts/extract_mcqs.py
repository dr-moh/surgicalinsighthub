#!/usr/bin/env python3
"""Extract MCQs from files in 'MCQ Bank/' and emit structured JSON.

Usage: python scripts/extract_mcqs.py --input "MCQ Bank/" --output MCQ_extracted.json

This is a heuristic extractor intended to handle .docx, .pdf, .txt and .json files.
"""
import argparse
import json
import os
import re
from pathlib import Path

try:
    from docx import Document
except Exception:
    Document = None

try:
    from PyPDF2 import PdfReader
except Exception:
    PdfReader = None


def get_text_from_docx(path):
    if Document is None:
        raise RuntimeError('python-docx not installed')
    doc = Document(path)
    paragraphs = [p.text for p in doc.paragraphs]
    return "\n".join(paragraphs)


def get_text_from_pdf(path):
    if PdfReader is None:
        raise RuntimeError('PyPDF2 not installed')
    reader = PdfReader(path)
    texts = []
    for page in reader.pages:
        try:
            texts.append(page.extract_text() or "")
        except Exception:
            texts.append("")
    return "\n".join(texts)


def get_text_from_txt(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return f.read()


def parse_blocks(text):
    # Normalize line endings
    lines = [ln.rstrip() for ln in text.splitlines()]
    blocks = []
    cur = []
    for ln in lines:
        if re.match(r"^\s*\d{1,3}[\).\-:\s]", ln) and cur:
            blocks.append("\n".join(cur).strip())
            cur = [ln]
        elif ln.strip() == "" and cur:
            blocks.append("\n".join(cur).strip())
            cur = []
        else:
            cur.append(ln)
    if cur:
        blocks.append("\n".join(cur).strip())
    return blocks


def extract_from_block(block):
    # Find answer if present
    ans = None
    m = re.search(r"Answer[s]*\s*[:\-]\s*([A-D])", block, re.IGNORECASE)
    if not m:
        m = re.search(r"Key\s*[:\-]\s*([A-D])", block, re.IGNORECASE)
    if m:
        ans = m.group(1).upper()

    # Find options
    options = {}
    option_lines = re.split(r"\n(?=(?:[A-D][\)\.]|\([A-D]\)))", block)
    if len(option_lines) > 1:
        # first part is question, rest contain options
        qtext = option_lines[0].strip()
        for part in option_lines[1:]:
            m = re.match(r"^\(?([A-D])\)?[\)\.]?\s*(.*)$", part.strip(), re.S)
            if m:
                key = m.group(1)
                val = m.group(2).strip()
                # collapse trailing option continuation lines
                options[key] = re.sub(r"\s+", " ", val)
    else:
        # attempt to split by lines that look like options
        qtext = block
        opt_pattern = re.compile(r"^\s*([A-D])\s*[\)\.-]\s*(.+)$")
        for ln in block.splitlines():
            m = opt_pattern.match(ln)
            if m:
                options[m.group(1)] = m.group(2).strip()

    # If answer letter not found but an option contains '*', pick it
    if ans is None:
        for k, v in options.items():
            if "*" in v:
                ans = k
                options[k] = v.replace("*", "").strip()
                break

    # If still no explicit answer, try lines like "Correct answer: <text>"
    if ans is None:
        m = re.search(r"Correct answer\s*[:\-]\s*([A-D])", block, re.IGNORECASE)
        if m:
            ans = m.group(1).upper()

    return {
        "question": qtext.strip(),
        "options": options,
        "answer": ans,
        "raw": block,
    }


def process_file(path):
    path = Path(path)
    suffix = path.suffix.lower()
    text = ""
    try:
        if suffix == ".docx":
            text = get_text_from_docx(path)
        elif suffix == ".pdf":
            text = get_text_from_pdf(path)
        elif suffix in (".txt", ".md"):
            text = get_text_from_txt(path)
        elif suffix == ".json":
            # return json entries as-is if they look like parsed questions
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, list):
                    return [{"source_file": str(path), **item} for item in data]
                text = json.dumps(data)
        else:
            # unknown file type: try reading as text
            text = get_text_from_txt(path)
    except Exception as e:
        return [{"source_file": str(path), "error": str(e)}]

    blocks = parse_blocks(text)
    out = []
    for b in blocks:
        ex = extract_from_block(b)
        # simple filter: require question-like text
        if len(ex["question"]) > 20 and (ex["options"] or re.search(r"\?", ex["question"])):
            ex["source_file"] = str(path)
            out.append(ex)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True, help="Input folder (MCQ Bank)")
    ap.add_argument("--output", default="MCQ_extracted.json")
    args = ap.parse_args()

    input_path = Path(args.input)
    results = []
    for root, _, files in os.walk(input_path):
        for fname in files:
            if fname.startswith("~$"):
                continue
            fpath = Path(root) / fname
            if fpath.suffix.lower() in ('.docx', '.pdf', '.txt', '.json', '.md'):
                items = process_file(fpath)
                results.extend(items)

    with open(args.output, 'w', encoding='utf-8') as out:
        json.dump(results, out, ensure_ascii=False, indent=2)

    print(f"Wrote {len(results)} extracted items to {args.output}")


if __name__ == '__main__':
    main()
