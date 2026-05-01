import json
import re
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET

W_NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
OPTION_RE = re.compile(r"^\s*([A-Ea-e])[\)\.:\-]\s*(.+?)\s*$")
QUESTION_NUM_RE = re.compile(r"^\s*(?:Q\s*\d+|\d{1,4})[\)\.:\-]?\s+(.+)$", re.IGNORECASE)
ANSWER_HINT_RE = re.compile(r"\b(?:answer|ans|correct)\b\s*[:\-]?\s*([A-E])\b", re.IGNORECASE)


def normalize_text(text: str) -> str:
    return re.sub(r"\s+", " ", (text or "")).strip()


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


def extract_paragraphs(docx_path: Path):
    paras = []
    with zipfile.ZipFile(docx_path) as zf:
        with zf.open('word/document.xml') as xf:
            in_p = False
            pieces = []
            for event, elem in ET.iterparse(xf, events=('start','end')):
                if event=='start' and elem.tag==W_NS+'p':
                    in_p = True
                    pieces = []
                elif event=='end' and elem.tag==W_NS+'t' and in_p:
                    if elem.text:
                        pieces.append(elem.text)
                elif event=='end' and elem.tag==W_NS+'p' and in_p:
                    text = normalize_text(''.join(pieces))
                    if text:
                        paras.append(text)
                    in_p = False
                    pieces = []
                    elem.clear()
                elif event=='end':
                    elem.clear()
    return paras


def is_question_start(line: str) -> bool:
    if len(line) < 20:
        return False
    if line.endswith('?'):
        return True
    return bool(QUESTION_NUM_RE.match(line))


def parse_questions(paragraphs, source_name, start_id):
    questions = []
    q_text = ''
    options = {}
    current_opt = None
    next_id = start_id
    seen = set()
    pending_answer = ''

    def flush():
        nonlocal q_text, options, current_opt, next_id, pending_answer
        if q_text and all(k in options for k in ('A','B','C','D')):
            key = (q_text, options['A'], options['B'], options['C'], options['D'])
            if key not in seen:
                seen.add(key)
                questions.append({
                    'id': next_id,
                    'specialty': infer_specialty(source_name),
                    'topic': source_name,
                    'source_file': source_name,
                    'question': q_text,
                    'options': {k: options[k] for k in ('A','B','C','D')},
                    'answer': pending_answer if pending_answer in ('A','B','C','D') else 'A'
                })
                next_id += 1
        q_text = ''
        options = {}
        current_opt = None
        pending_answer = ''

    for line in paragraphs:
        if not line.strip():
            continue
        am = ANSWER_HINT_RE.search(line)
        if am:
            pending_answer = am.group(1).upper()
            continue
        m = OPTION_RE.match(line)
        if m and q_text:
            letter = m.group(1).upper()
            text = normalize_text(m.group(2))
            options[letter] = text
            current_opt = letter
            continue
        if current_opt and q_text and not is_question_start(line):
            options[current_opt] = normalize_text(options.get(current_opt,'') + ' ' + line)
            continue
        if is_question_start(line):
            if q_text:
                flush()
            qm = QUESTION_NUM_RE.match(line)
            q_text = normalize_text(qm.group(1) if qm else line)
            options = {}
            current_opt = None
            continue
        # continuation of stem
        if q_text and not options:
            q_text = normalize_text(q_text + ' ' + line)
    flush()
    return questions, next_id


def find_start_id():
    max_id = 0
    p = Path('js/questions')
    if not p.exists():
        return 10000
    for f in p.glob('*.js'):
        try:
            t = f.read_text(encoding='utf-8')
            for m in re.finditer(r'"id"\s*:\s*(\d+)', t):
                n = int(m.group(1))
                if n > max_id:
                    max_id = n
        except Exception:
            continue
    return max(10000, max_id+1)


def main():
    bank = Path('MCQ Bank')
    out_dir = bank / 'extracted'
    out_dir.mkdir(exist_ok=True)
    master = []
    start_id = find_start_id()
    summary = []
    for f in sorted(bank.glob('*.docx')):
        try:
            paras = extract_paragraphs(f)
            qs, start_id = parse_questions(paras, f.name, start_id)
            summary.append({'file': f.name, 'extracted': len(qs)})
            (out_dir / (f.name + '.json')).write_text(json.dumps(qs, indent=2, ensure_ascii=False), encoding='utf-8')
            master.extend(qs)
            print(f'{f.name}: extracted {len(qs)}')
        except Exception as e:
            summary.append({'file': f.name, 'extracted': 0, 'error': str(e)})
            print(f'{f.name}: error {e}')
    (bank / 'docx_extracted_summary_incremental.json').write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding='utf-8')
    (bank / 'docx_extracted_questions_incremental.json').write_text(json.dumps(master, indent=2, ensure_ascii=False), encoding='utf-8')
    print('\nTotal extracted (incremental):', len(master))

if __name__=='__main__':
    main()
