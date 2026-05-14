import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BANK_DIR = ROOT / 'MCQ Bank'
CANONICAL_JS = ROOT / 'js/questions/canonical_questions.js'
CANONICAL_JSON = BANK_DIR / 'canonical_questions.json'


SPECIALTY_MAP = {
    'anesthesia': 'Anesthesia',
    'breast': 'Breast & Endocrine',
    'cardio': 'Cardiothoracic',
    'thoracic': 'Cardiothoracic',
    'colorectal': 'Colorectal',
    'endocrine': 'Breast & Endocrine',
    'general surgery': 'General Surgery',
    'hpb': 'HPB',
    'orthopedic': 'Orthopedic',
    'orthopaedic': 'Orthopedic',
    'neuro': 'Neurosurgery',
    'pediatric': 'Pediatric Surgery',
    'plastic': 'Plastic Surgery',
    'trauma': 'Trauma',
    'urology': 'Urology',
    'vascular': 'Vascular',
}

GUIDELINE_MAP = {
    'Anesthesia': 'ASA practice guidelines',
    'Breast & Endocrine': 'NCCN breast and endocrine guidelines',
    'Cardiothoracic': 'STS / AATS cardiothoracic guidelines',
    'Colorectal': 'ASCRS colorectal guidelines',
    'General Surgery': 'ACS / surgical board principles',
    'HPB': 'HPB surgical guidelines',
    'Neurosurgery': 'AANS / CNS neurosurgical guidelines',
    'Orthopedic': 'AAOS orthopedic guidelines',
    'Pediatric Surgery': 'APSA pediatric surgery principles',
    'Plastic Surgery': 'BSSH / reconstructive principles',
    'Trauma': 'ATLS / EAST trauma guidelines',
    'Urology': 'AUA / EAU urology guidelines',
    'Vascular': 'SVS / NICE vascular guidelines',
}


def load_json_array(path: Path):
    if not path.exists():
        return []
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        raw = path.read_text(encoding='utf-8')
        raw = raw.replace('var QUESTIONS = ', '').rstrip().rstrip(';')
        try:
            return json.loads(raw)
        except Exception:
            return []


def compact(value, fallback=''):
    cleaned = re.sub(r'\s+', ' ', str(value or '')).strip()
    return cleaned or fallback


def compact_sentence(value, fallback=''):
    cleaned = compact(value, fallback)
    if not cleaned:
        return fallback
    sentence = re.split(r'[.!?]', cleaned, maxsplit=1)[0].strip()
    return sentence or cleaned


def compact_words(value, fallback='', limit=14):
    cleaned = compact(value, fallback)
    words = cleaned.split()
    if len(words) > limit:
        return ' '.join(words[:limit])
    return cleaned


def normalize_specialty(value):
    text = compact(value, 'General Surgery').lower()
    for needle, specialty in SPECIALTY_MAP.items():
        if needle in text:
            return specialty
    return 'General Surgery'


def topic_label(question):
    topic = compact(question.get('topic'))
    if topic and topic.lower() not in {'general', 'unknown'} and not re.search(r'\.(pdf|docx?|pptx?|json|txt)$', topic, re.I):
        return compact_words(topic, 'Review the stem and choose the best option.', 12)
    source = compact(question.get('source_file'))
    stem = compact(question.get('question'))
    if stem:
        return compact_words(stem, 'Review the stem and choose the best option.', 12)
    if source:
        source = re.sub(r'\.(docx?|pdf|txt|json)$', '', source, flags=re.I)
    return compact_words(source or question.get('specialty') or 'Review the stem and choose the best option.', 'Review the stem and choose the best option.', 12)


def guideline_label(question):
    guideline = compact(question.get('guideline'))
    if guideline and not re.search(r'\.(pdf|docx?|pptx?)$', guideline, re.I):
        return compact_words(guideline, '', 14)
    specialty = normalize_specialty(question.get('specialty'))
    return compact_words(GUIDELINE_MAP.get(specialty, 'Review the topic-specific guideline.'), 'Review the topic-specific guideline.', 14)


def source_reference(question):
    source_file = compact(question.get('source_file'))
    page = question.get('source_page')
    question_number = question.get('source_question_number')
    topic = compact(question.get('topic'))
    stem = compact(question.get('question'))
    parts = []
    if source_file:
        parts.append(source_file)
    if page:
        parts.append(f'page {page}')
    if question_number:
        parts.append(f'question {question_number}')
    if not parts:
        if topic and topic.lower() not in {'general', 'unknown'}:
            return f'Section: {topic}'
        if stem:
            return f'Section: {compact_words(stem, stem, 10)}'
        return 'Section: not recorded'
    if len(parts) == 1:
        return parts[0]
    return ', '.join(parts)


def focus_clue(question):
    stem = compact(question.get('question'))
    if not stem:
        return 'the key clinical clue'

    cleaned = re.sub(r'^(Which of the following|What is|Which statement|Which of these|The following)\b[:\-\s]*', '', stem, flags=re.I)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    if len(cleaned) > 110:
        cleaned = compact_words(cleaned, cleaned, 16)
    return cleaned or 'the key clinical clue'


def answer_sentence(answer_letter, answer_text):
    label = answer_letter or 'A'
    text = compact(answer_text)
    if text:
        return f'The best choice is option {label}, because it matches the stem and the key clinical principle.'
    return f'The best choice is option {label}, because it matches the stem and the key clinical principle.'


def gap_sentence(question):
    specialty = normalize_specialty(question.get('specialty'))
    return f'Each distractor fails on the stem, the anatomy, or the guideline principles for {specialty.lower()}.'


def plan_sentence(question):
    guideline = guideline_label(question)
    return f'Take-home: spot the clue, remove the mismatches, and anchor your final choice to {guideline}.'


def visualization_text(question, answer_text):
    specialty = normalize_specialty(question.get('specialty'))
    clue = focus_clue(question)
    answer = compact(answer_text)

    if any(word in clue.lower() for word in ['x-ray', 'xray', 'ct', 'mri', 'ultrasound', 'radiograph', 'scan', 'image']):
        return compact_sentence(f'Picture the key imaging finding that matches {answer or clue}.', '')
    if any(word in clue.lower() for word in ['operative', 'surgery', 'procedure', 'lapar', 'incision', 'excision', 'repair']):
        return compact_sentence(f'Picture the operative field where {answer or clue} is the defining finding.', '')
    return compact_sentence(f'Picture the clinical pattern that makes {answer or clue} the correct answer for {specialty.lower()}.', '')


def discrepancy_note(question):
    stem = compact(question.get('question'))
    source = source_reference(question)
    if not stem or source == 'Source not recorded':
        return 'Insufficient Data in Source'
    return 'No discrepancy detected'


def build_sharp(question):
    options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
    answer = compact(question.get('answer'), 'A').upper()
    answer_text = compact(options.get(answer, ''))
    stem = compact(question.get('question', ''))
    specialty = normalize_specialty(question.get('specialty'))

    guideline = guideline_label(question)
    clue = focus_clue(question)

    return {
        'set_the_stage': f'Focus on the clue: {compact_sentence(clue, clue)}.',
        'highlight_excellence': answer_sentence(answer, answer_text or stem),
        'address_gaps': gap_sentence(question),
        'review_learning_points': f'{guideline}; source: {source_reference(question)}.',
        'plan': compact_sentence(question.get('takeaway') or plan_sentence(question), plan_sentence(question)),
        'guideline': guideline,
        'takeaway': compact_sentence(question.get('takeaway') or answer_text or stem or specialty, 'Recall the correct option and core principle.'),
        'visualization': visualization_text(question, answer_text or stem),
        'source_reference': source_reference(question),
        'discrepancy': discrepancy_note(question)
    }


def normalize_question(question, next_id):
    if not isinstance(question, dict):
        return None

    stem = compact(question.get('question'))
    if len(stem) < 20:
        return None

    options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
    normalized_options = {letter: compact(options.get(letter, '')) for letter in ['A', 'B', 'C', 'D', 'E']}
    if not all(normalized_options[letter] for letter in ['A', 'B', 'C', 'D']):
        return None

    answer = compact(question.get('answer'), 'A').upper()
    if answer not in {'A', 'B', 'C', 'D', 'E'} or not normalized_options.get(answer):
        return None

    specialty = normalize_specialty(question.get('specialty'))
    topic = topic_label({**question, 'specialty': specialty})
    sharp = build_sharp({**question, 'specialty': specialty, 'topic': topic})

    source_id = question.get('id')
    try:
        normalized_id = int(source_id)
    except Exception:
        normalized_id = next_id

    return {
        'id': normalized_id,
        'specialty': specialty,
        'topic': topic,
        'question': stem,
        'options': {letter: normalized_options[letter] for letter in ['A', 'B', 'C', 'D', 'E'] if normalized_options[letter]},
        'answer': answer,
        'explanation': {
            'correct': sharp['highlight_excellence'],
            'A': '',
            'B': '',
            'C': '',
            'D': '',
            'E': ''
        },
        'sharp': {
            'set_the_stage': sharp['set_the_stage'],
            'highlight_excellence': sharp['highlight_excellence'],
            'address_gaps': sharp['address_gaps'],
            'review_learning_points': sharp['review_learning_points'],
            'plan': sharp['plan'],
            'plan_for_improvement': sharp['plan'],
            'guideline': sharp['guideline'],
            'takeaway': sharp['takeaway'],
            'visualization': sharp['visualization'],
            'source_reference': sharp['source_reference'],
            'discrepancy': sharp['discrepancy']
        },
        'guideline': sharp['guideline'],
        'takeaway': sharp['takeaway'],
        'visualization': sharp['visualization'],
        'source_reference': sharp['source_reference'],
        'discrepancy': sharp['discrepancy'],
        'source_file': compact(question.get('source_file')),
    }


def load_source_questions():
    sources = []

    root_sources = [
        BANK_DIR / 'docx_extracted_questions_incremental.json',
        BANK_DIR / 'docx_extracted_questions.json',
        BANK_DIR / 'pdf_extracted_questions.json',
        BANK_DIR / 'parsed_txt_questions.json',
        BANK_DIR / 'rush_questions.json',
    ]

    for path in root_sources:
        sources.extend(load_json_array(path))

    extracted_dir = BANK_DIR / 'extracted'
    if extracted_dir.exists():
        for path in sorted(extracted_dir.glob('*.json')):
            sources.extend(load_json_array(path))

    return sources


def dedupe_questions(questions):
    seen = set()
    unique = []
    for question in questions:
        options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
        key = (
            compact(question.get('question')).lower(),
            compact(options.get('A')).lower(),
            compact(options.get('B')).lower(),
            compact(options.get('C')).lower(),
            compact(options.get('D')).lower(),
            compact(options.get('E')).lower(),
            compact(question.get('answer')).upper(),
        )
        if key in seen:
            continue
        seen.add(key)
        unique.append(question)
    return unique


def write_bundle(questions):
    CANONICAL_JSON.write_text(json.dumps(questions, indent=2, ensure_ascii=False), encoding='utf-8')
    CANONICAL_JS.write_text(
        'if (!window.QUESTIONS) window.QUESTIONS = [];\n'
        'window.QUESTIONS.push(...' + json.dumps(questions, indent=2, ensure_ascii=False) + ');\n'
        'window.QUESTIONS_LOADED = true;\n',
        encoding='utf-8'
    )


def main():
    raw_questions = load_source_questions()
    print(f'Loaded raw questions: {len(raw_questions)}')

    normalized = []
    next_id = 100000
    for question in raw_questions:
        normalized_question = normalize_question(question, next_id)
        if normalized_question:
            normalized.append(normalized_question)
            next_id += 1

    deduped = dedupe_questions(normalized)
    deduped.sort(key=lambda item: (item['specialty'], item['topic'], item['id']))

    for index, question in enumerate(deduped, start=1):
        question['id'] = index

    write_bundle(deduped)
    print(f'Validated deploy count: {len(deduped)}')
    print(f'Wrote {CANONICAL_JSON}')
    print(f'Wrote {CANONICAL_JS}')


if __name__ == '__main__':
    main()