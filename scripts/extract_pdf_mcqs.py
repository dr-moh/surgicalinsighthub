import json
import re
from pathlib import Path

from pypdf import PdfReader

BANK_DIR = Path('MCQ Bank')
OUT_JSON = BANK_DIR / 'pdf_extracted_questions.json'
OUT_JS = Path('js/questions/pdf_questions.js')

QUESTION_START_RE = re.compile(r'^\s*(\d{1,4})[\).:\-]?\s+(.+)$')
OPTION_RE = re.compile(r'^\s*([A-Ea-e])[\).:\-]?\s*(.*)$')


def normalize_text(text: str) -> str:
    return re.sub(r'\s+', ' ', (text or '')).strip()


def infer_specialty(file_name: str) -> str:
    lowered = file_name.lower()
    if 'anesthesia' in lowered:
        return 'Anesthesia'
    if 'biliary' in lowered or 'liver' in lowered or 'hpb' in lowered:
        return 'HPB'
    if 'urology' in lowered:
        return 'Urology'
    if 'vascular' in lowered:
        return 'Vascular'
    if 'thoracic' in lowered or 'cardio' in lowered:
        return 'Cardiothoracic'
    if 'plastic' in lowered:
        return 'Plastic Surgery'
    if 'ortho' in lowered:
        return 'Orthopedics'
    if 'breast' in lowered or 'endocrine' in lowered:
        return 'Breast Surgery'
    if 'pediatric' in lowered:
        return 'Pediatric Surgery'
    if 'trauma' in lowered:
        return 'Trauma'
    return 'General Surgery'


def extract_lines(reader: PdfReader, page_index: int) -> list[str]:
    try:
        text = reader.pages[page_index].extract_text() or ''
    except Exception:
        return []
    return [normalize_text(line) for line in text.splitlines() if normalize_text(line)]


def parse_option_block(lines: list[str], start_index: int) -> tuple[dict, int]:
    options = {}
    current_letter = None
    i = start_index
    while i < len(lines):
        line = lines[i]
        if line.startswith('Ref.:') or line.startswith('Comments') or line.startswith('Answer'):
            break
        option_match = OPTION_RE.match(line)
        if option_match:
            current_letter = option_match.group(1).upper()
            option_text = normalize_text(option_match.group(2))
            if option_text:
                options[current_letter] = option_text
            else:
                options.setdefault(current_letter, '')
            i += 1
            continue
        if current_letter:
            if options.get(current_letter):
                options[current_letter] = normalize_text(options[current_letter] + ' ' + line)
            else:
                options[current_letter] = line
        i += 1
    return options, i


def parse_question_page(lines: list[str], file_name: str, next_id: int, source_page: int) -> tuple[list[dict], int]:
    questions = []
    current_question = None
    current_lines = []
    current_question_number = None
    options = {}
    current_letter = None

    def flush():
        nonlocal next_id, current_question, current_lines, current_question_number, options, current_letter
        if current_question and len(options) >= 2:
            questions.append({
                'id': next_id,
                'specialty': infer_specialty(file_name),
                'source_file': file_name,
                'source_page': source_page,
                'source_question_number': current_question_number,
                'question': normalize_text(' '.join(current_lines)),
                'options': {k: options[k] for k in sorted(options.keys())},
                'answer': 'A',
            })
            next_id += 1
        current_question = None
        current_lines = []
        current_question_number = None
        options = {}
        current_letter = None

    for line in lines:
        if line.startswith('Answer') or line.startswith('Comments'):
            break
        option_match = OPTION_RE.match(line)
        question_match = QUESTION_START_RE.match(line)

        if question_match and not (len(line) <= 3 and current_question is None):
            if current_question and current_lines:
                flush()
            current_question = True
            current_question_number = int(question_match.group(1))
            current_lines = [normalize_text(question_match.group(2))]
            options = {}
            current_letter = None
            continue

        if current_question and option_match:
            current_letter = option_match.group(1).upper()
            option_text = normalize_text(option_match.group(2))
            options[current_letter] = option_text
            continue

        if current_question and current_letter and not question_match:
            options[current_letter] = normalize_text(options.get(current_letter, '') + ' ' + line)
            continue

        if current_question:
            current_lines.append(line)

    if current_question and current_lines:
        flush()

    return questions, next_id


def parse_answer_page(lines: list[str], file_name: str, next_id: int, source_page: int) -> tuple[list[dict], int]:
    if len(lines) < 4 or lines[0] != 'Answer':
        return [], next_id

    answer_letter = normalize_text(lines[1])[:1].upper()
    if answer_letter not in {'A', 'B', 'C', 'D', 'E'}:
        answer_letter = 'A'

    question_number = None
    try:
        question_number = int(re.match(r'^(\d+)', lines[2]).group(1))
    except Exception:
        question_number = None

    option_start = None
    for index in range(3, len(lines)):
        if OPTION_RE.match(lines[index]):
            option_start = index
            break
        if lines[index].startswith('Ref.:'):
            break
    if option_start is None:
        return [], next_id

    question_lines = []
    for line in lines[3:option_start]:
        if line and not line.startswith('Ref.:'):
            question_lines.append(line)

    options, _ = parse_option_block(lines, option_start)
    if len(options) < 2 or not question_lines:
        return [], next_id

    question = {
        'id': next_id,
        'specialty': infer_specialty(file_name),
        'source_file': file_name,
        'source_page': source_page,
        'source_question_number': question_number,
        'question': normalize_text(' '.join(question_lines)),
        'options': {k: options[k] for k in sorted(options.keys())},
        'answer': answer_letter,
    }
    return [question], next_id + 1


def main() -> int:
    all_questions = []
    next_id = 50000
    summary = []

    for pdf_path in sorted(BANK_DIR.glob('*.pdf')):
        try:
            reader = PdfReader(str(pdf_path))
        except Exception as exc:
            summary.append({'file': pdf_path.name, 'error': str(exc), 'extracted': 0})
            continue

        extracted = []
        for page_index in range(len(reader.pages)):
            lines = extract_lines(reader, page_index)
            if not lines:
                continue
            if lines[0] == 'Answer':
                page_questions, next_id = parse_answer_page(lines, pdf_path.name, next_id, page_index + 1)
            else:
                page_questions, next_id = parse_question_page(lines, pdf_path.name, next_id, page_index + 1)
            if page_questions:
                extracted.extend(page_questions)

        summary.append({'file': pdf_path.name, 'extracted': len(extracted)})
        all_questions.extend(extracted)
        print(f'{pdf_path.name}: extracted {len(extracted)}')

    BANK_DIR.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(all_questions, indent=2, ensure_ascii=False), encoding='utf-8')
    OUT_JS.parent.mkdir(parents=True, exist_ok=True)
    OUT_JS.write_text(
        'if (!window.QUESTIONS) window.QUESTIONS = [];\n' +
        'window.QUESTIONS.push(...' + json.dumps(all_questions, indent=2, ensure_ascii=False) + ');\n',
        encoding='utf-8'
    )
    (BANK_DIR / 'pdf_extracted_summary.json').write_text(json.dumps(summary, indent=2), encoding='utf-8')
    print(f'Total PDF questions extracted: {len(all_questions)}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
