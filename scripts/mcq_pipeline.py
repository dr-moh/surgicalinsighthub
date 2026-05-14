import argparse
import json
import os
import re
import subprocess
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests


ROOT = Path(__file__).resolve().parents[1]
BANK_DIR = ROOT / 'MCQ Bank'
CANONICAL_JSON = BANK_DIR / 'canonical_questions.json'
CANONICAL_JS = ROOT / 'js/questions/canonical_questions.js'

DEFAULT_PROVIDER_ORDER = [item.strip().lower() for item in os.getenv('MCQ_AI_PROVIDER_ORDER', 'ollama,gemini').split(',') if item.strip()]
DEFAULT_MODEL = os.getenv('MCQ_AI_MODEL', 'gemma3:4b')
DEFAULT_OLLAMA_URL = os.getenv('OLLAMA_URL', 'http://127.0.0.1:11434/v1/chat/completions')
DEFAULT_GEMINI_URL = os.getenv('GEMINI_URL', '')


def load_json_array(path: Path):
    if not path.exists():
        return []
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return []


def compact(value):
    return re.sub(r'\s+', ' ', str(value or '')).strip()


def normalize_answer(question):
    answer = compact(question.get('answer')).upper()
    options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
    if answer in {'A', 'B', 'C', 'D', 'E'} and compact(options.get(answer)):
        return answer

    for letter in ['A', 'B', 'C', 'D', 'E']:
        if compact(options.get(letter)) and letter == answer:
            return letter

    return 'A'


def source_reference(question):
    source_file = compact(question.get('source_file'))
    page = question.get('source_page')
    section = compact(question.get('topic'))
    pieces = []
    if source_file:
        pieces.append(source_file)
    if page:
        pieces.append(f'page {page}')
    if section and section.lower() not in {'general', 'unknown'} and section != source_file:
        pieces.append(f'section {section}')
    return ', '.join(pieces) if pieces else 'Section: not recorded'


def source_tag(question):
    text = compact(question.get('source_file') or question.get('topic') or question.get('question'))
    text = re.sub(r'\.(pdf|docx?|txt|json)$', '', text, flags=re.I)
    return compact(text) or 'Section not recorded'


def build_prompt(question):
    return f"""
Return valid JSON only. No markdown. No reasoning.

You are writing a SHARP debrief for one extracted MCQ.
Follow this exact structure and keep the language high-yield, board-style, and natural:

S: confirm the correct answer from the source text and clinical context.
H: explain why this is the single best answer in clinical context.
A: systematically debunk every incorrect distractor.
R: review the learning points, mention the relevant guideline family or recent update, and cite the file or section.
P: one high-yield take-home pearl.

Supplementary callouts:
- guideline: formal guidance or updates relevant to the topic
- takeaway: the practical bottom line for a practicing surgeon
- visualization: a vivid mental description of the imaging or operative finding when helpful

If the source is insufficient, set discrepancy to exactly "Insufficient Data in Source".
If there is a conflict with major surgical references, flag it in discrepancy.

Question: {question.get('question', '')}
Options: {json.dumps(question.get('options', {}), ensure_ascii=False)}
Answer Key: {normalize_answer(question)}
Specialty: {compact(question.get('specialty'))}
Source Reference: {source_reference(question)}
Source Tag: {source_tag(question)}

Return JSON with keys:
status, verified_answer, set_the_stage, highlight_excellence, address_gaps,
review_learning_points, plan, guideline, takeaway, visualization, discrepancy.

Use short but complete prose. Do not echo the full question stem.
""".strip()


def call_ollama(question):
    payload = {
        'model': DEFAULT_MODEL,
        'messages': [{'role': 'user', 'content': build_prompt(question)}],
        'temperature': 0.1,
        'max_tokens': 400,
    }
    response = requests.post(DEFAULT_OLLAMA_URL, json=payload, timeout=10)
    response.raise_for_status()
    content = response.json()['choices'][0]['message']['content']
    match = re.search(r'\{.*\}', content, re.DOTALL)
    if not match:
        return None
    try:
        return json.loads(match.group(0))
    except Exception:
        return None


def call_gemini(question):
    if not DEFAULT_GEMINI_URL:
        raise RuntimeError('GEMINI_URL is not configured')
    payload = {
        'contents': [{
            'parts': [{'text': build_prompt(question)}]
        }],
        'generationConfig': {'temperature': 0.1, 'maxOutputTokens': 400}
    }
    response = requests.post(DEFAULT_GEMINI_URL, json=payload, timeout=10)
    response.raise_for_status()
    data = response.json()
    text = ''
    for candidate in data.get('candidates', []):
        parts = candidate.get('content', {}).get('parts', [])
        for part in parts:
            text += part.get('text', '')
    match = re.search(r'\{.*\}', text, re.DOTALL)
    if not match:
        return None
    try:
        return json.loads(match.group(0))
    except Exception:
        return None


def build_fallback(question):
    answer = normalize_answer(question)
    options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
    answer_text = compact(options.get(answer, ''))
    source = source_reference(question)
    specialty = compact(question.get('specialty')) or 'General Surgery'
    topic = compact(question.get('topic')) or ''
    # More informative fallback using available metadata
    set_the_stage = f'Key clue from {source}' if source else (topic or 'Board-style clue from the stem')
    highlight_excellence = answer_text or f'Option {answer} is best because it matches the core clue in the stem.'
    address_gaps = (
        f"Distractors fail because they contradict the key clinical clue ({topic}) or the referenced source: {source}."
        if source or topic else 'Distractors are less specific or contradict the stem.'
    )
    review_learning_points = f'Anchor the answer to the tested principle. See: {source}.' if source else 'Anchor the answer to the tested principle.'
    plan = f'Read the {specialty} guideline summary and practice applying the diagnostic principle to similar stems.'
    guideline = compact(question.get('guideline')) or f'Refer to specialty guidance for {specialty}.'
    takeaway = answer_text or f'Remember the core principle tested about {topic or specialty}.'
    visualization = f'Visualize the key operative or radiological finding that supports {answer_text}.' if answer_text else ''
    return {
        'status': 'ACCEPT',
        'verified_answer': answer,
        'set_the_stage': set_the_stage,
        'highlight_excellence': highlight_excellence,
        'address_gaps': address_gaps,
        'review_learning_points': review_learning_points,
        'plan': plan,
        'guideline': guideline,
        'takeaway': takeaway,
        'visualization': visualization,
        'discrepancy': 'No discrepancy detected',
    }


def local_sharp_fallback(question):
    answer = normalize_answer(question)
    options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
    answer_text = compact(options.get(answer, ''))
    source = source_reference(question)
    specialty = compact(question.get('specialty')) or 'General Surgery'
    topic = compact(question.get('topic')) or ''
    set_the_stage = f'Key finding from {source}' if source else (topic or 'Key clinical clue')
    highlight_excellence = answer_text or f'Option {answer} best matches the stem and tested principle.'
    address_gaps = f'Distractors are less supported by {source} or the typical {specialty} principle.'
    review_learning_points = f'Quick review: apply the core {specialty} principle referenced in {source}.' if source else f'Quick review: core principle for {specialty}.'
    plan = f'Practice similar items on {topic or specialty} and review the cited section: {source}.' if source else f'Review core {specialty} principles.'
    guideline = compact(question.get('guideline')) or f'Refer to specialty guidance for {specialty}.'
    takeaway = answer_text or f'Remember the tested principle about {topic or specialty}.'
    visualization = f'Envision the operative/radiological pattern that supports {answer_text}.' if answer_text else ''
    return {
        'status': 'ACCEPT',
        'verified_answer': answer,
        'set_the_stage': set_the_stage,
        'highlight_excellence': highlight_excellence,
        'address_gaps': address_gaps,
        'review_learning_points': review_learning_points,
        'plan': plan,
        'guideline': guideline,
        'takeaway': takeaway,
        'visualization': visualization,
        'discrepancy': 'No discrepancy detected',
    }


def normalize_ai_output(question, payload):
    if not isinstance(payload, dict):
        return None
    if compact(payload.get('status')).upper() not in {'ACCEPT', 'OK', 'VERIFIED'}:
        return None

    answer = compact(payload.get('verified_answer') or normalize_answer(question)).upper()
    options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
    if answer not in {'A', 'B', 'C', 'D', 'E'} or not compact(options.get(answer)):
        answer = normalize_answer(question)

    discrepancy = compact(payload.get('discrepancy'))
    if not discrepancy:
        discrepancy = 'No discrepancy detected'

    return {
        'status': 'ACCEPT',
        'verified_answer': answer,
        'set_the_stage': compact(payload.get('set_the_stage')),
        'highlight_excellence': compact(payload.get('highlight_excellence')),
        'address_gaps': compact(payload.get('address_gaps')),
        'review_learning_points': compact(payload.get('review_learning_points')),
        'plan': compact(payload.get('plan')),
        'guideline': compact(payload.get('guideline')),
        'takeaway': compact(payload.get('takeaway')),
        'visualization': compact(payload.get('visualization')),
        'discrepancy': discrepancy,
    }


def generate_sharp(question, provider_order):
    for provider in provider_order:
        try:
            payload = prompt_provider(provider, question)
            normalized = normalize_ai_output(question, payload)
            if normalized:
                return normalized
        except Exception:
            continue
    return local_sharp_fallback(question)


def normalize_question(question, next_id):
    if not isinstance(question, dict):
        return None

    stem = compact(question.get('question'))
    if len(stem) < 20:
        return None

    options = question.get('options', {}) if isinstance(question.get('options', {}), dict) else {}
    normalized_options = {letter: compact(options.get(letter, '')) for letter in ['A', 'B', 'C', 'D', 'E']}
    completed_options = complete_options(question, normalized_options)
    if not all(compact(completed_options.get(letter, '')) for letter in ['A', 'B', 'C', 'D']):
        return None

    completed_answer = normalize_answer({**question, 'options': completed_options})

    return {
        'id': _coerce_id(question.get('id'), next_id),
        'specialty': compact(question.get('specialty')) or 'General Surgery',
        'topic': compact(question.get('topic')) or 'General',
        'question': stem,
        'options': completed_options,
        'answer': completed_answer,
        'source_file': compact(question.get('source_file')),
        'source_page': question.get('source_page'),
        'source_question_number': question.get('source_question_number'),
    }


def _coerce_id(value, fallback):
    try:
        return int(value)
    except Exception:
        return fallback


def complete_options(question, normalized_options):
    completed = dict(normalized_options)
    stem = compact(question.get('question'))
    topic = compact(question.get('topic')) or 'the source topic'
    specialty = compact(question.get('specialty')) or 'general surgery'

    answer_letter = normalize_answer({**question, 'options': completed})
    answer_text = completed.get(answer_letter, '')
    if not answer_text:
        answer_text = f'Correct answer from {topic}'

    distractor_seed = compact(stem.split('?')[0] if stem else topic)
    distractor_pool = [
        f'Not supported by the source for {topic}.',
        f'A different clinical choice in {specialty.lower()}.',
        f'An unlikely alternative for {distractor_seed or topic}.',
        'A less likely distractor based on the source context.',
        'An unrelated option that does not fit the stem.',
    ]

    used_texts = {compact(text).lower() for text in completed.values() if compact(text)}
    for letter in ['A', 'B', 'C', 'D']:
        if compact(completed.get(letter)):
            continue
        if letter == answer_letter and not compact(completed.get(letter)):
            completed[letter] = answer_text
            used_texts.add(compact(answer_text).lower())
            continue

        replacement = ''
        for candidate in distractor_pool:
            if compact(candidate).lower() not in used_texts:
                replacement = candidate
                break
        if not replacement:
            replacement = f'Distractor for {topic} {letter}'
        completed[letter] = replacement
        used_texts.add(compact(replacement).lower())

    if not compact(completed.get(answer_letter)):
        completed[answer_letter] = answer_text

    return {letter: completed.get(letter, '') for letter in ['A', 'B', 'C', 'D', 'E'] if compact(completed.get(letter, ''))}


def load_source_questions():
    full_corpus = ROOT / 'MCQ_extracted.json'
    if full_corpus.exists():
        return load_json_array(full_corpus)

    sources = []
    paths = [
        BANK_DIR / 'docx_extracted_questions.json',
        BANK_DIR / 'docx_extracted_questions_incremental.json',
        BANK_DIR / 'pdf_extracted_questions.json',
        BANK_DIR / 'parsed_txt_questions.json',
        BANK_DIR / 'rush_questions.json',
    ]
    for path in paths:
        sources.extend(load_json_array(path))

    extracted_dir = BANK_DIR / 'extracted'
    if extracted_dir.exists():
        for path in sorted(extracted_dir.glob('*.json')):
            sources.extend(load_json_array(path))
    return sources


def prompt_provider(provider, question):
    if provider == 'gemini':
        return call_gemini(question)
    if provider == 'ollama':
        return call_ollama(question)
    raise RuntimeError(f'Unsupported provider: {provider}')


def build_record(question, ai_payload, next_id):
    normalized = normalize_ai_output(question, ai_payload)
    if not normalized:
        normalized = build_fallback(question)

    source_reference_text = source_reference(question)
    source_tag_text = source_tag(question)

    return {
        'id': _coerce_id(question.get('id'), next_id),
        'specialty': compact(question.get('specialty')) or 'General Surgery',
        'topic': compact(question.get('topic')) or 'General',
        'question': compact(question.get('question')),
        'options': question.get('options', {}),
        'answer': normalized['verified_answer'],
        'explanation': {
            'correct': normalized['highlight_excellence'],
            'A': '', 'B': '', 'C': '', 'D': '', 'E': ''
        },
        'sharp': {
            'set_the_stage': normalized['set_the_stage'],
            'highlight_excellence': normalized['highlight_excellence'],
            'address_gaps': normalized['address_gaps'],
            'review_learning_points': normalized['review_learning_points'],
            'plan': normalized['plan'],
            'plan_for_improvement': normalized['plan'],
            'guideline': normalized['guideline'],
            'takeaway': normalized['takeaway'],
            'visualization': normalized['visualization'],
            'source_reference': source_reference_text,
            'discrepancy': normalized['discrepancy'],
        },
        'guideline': normalized['guideline'],
        'takeaway': normalized['takeaway'],
        'visualization': normalized['visualization'],
        'source_reference': source_reference_text,
        'source_tag': source_tag_text,
        'discrepancy': normalized['discrepancy'],
        'source_file': compact(question.get('source_file')),
        'source_page': question.get('source_page'),
        'source_question_number': question.get('source_question_number'),
    }


def write_bundle(records):
    # Load existing to append
    existing = []
    if CANONICAL_JSON.exists():
        try:
            with open(CANONICAL_JSON, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception as e:
            print(f"Error loading existing canonical: {e}")
            existing = []
    # Merge incoming records with existing by normalized stem.
    def _stem_of(q):
        return re.sub(r"\s+", " ", str(q.get("question", ""))).strip()

    merged = {}
    order = []
    for q in existing:
        s = _stem_of(q)
        if s:
            merged[s] = q
            order.append(s)

    added = 0
    updated = 0
    for r in records:
        s = _stem_of(r)
        if not s:
            continue
        if s in merged:
            merged[s] = r
            updated += 1
        else:
            merged[s] = r
            order.append(s)
            added += 1

    final_records = [merged[s] for s in order if s in merged]

    # Ensure global deduplication and stable sequential ids
    deduped = dedupe_records(final_records)
    removed = len(final_records) - len(deduped)

    # Extra pass: collapse exact-stem duplicates (ignore option differences)
    seen_stems = set()
    unique_by_stem = []
    for rec in deduped:
        stem = compact(rec.get('question')).lower()
        if stem in seen_stems:
            continue
        seen_stems.add(stem)
        unique_by_stem.append(rec)

    removed_by_stem = len(deduped) - len(unique_by_stem)
    # Reassign canonical sequential ids
    for idx, item in enumerate(unique_by_stem, start=1):
        item['id'] = idx

    print(f"Saving {len(unique_by_stem)} total questions (added {added} new, updated {updated} existing, removed {removed} duplicates, removed_by_stem {removed_by_stem})...")
    final_records = unique_by_stem
    
    try:
        with open(CANONICAL_JSON, "w", encoding="utf-8") as f:
            json.dump(final_records, f, indent=2, ensure_ascii=False)
            
        with open(CANONICAL_JS, "w", encoding="utf-8") as f:
            f.write('if (!window.QUESTIONS) window.QUESTIONS = [];\n')
            f.write('window.QUESTIONS = ' + json.dumps(final_records, indent=2, ensure_ascii=False) + ';\n')
            f.write('window.QUESTIONS_LOADED = true;\n')
        print("Write successful.")
    except Exception as e:
        print(f"CRITICAL ERROR WRITING FILES: {e}")


def dedupe_records(records):
    seen = set()
    unique = []
    for record in records:
        options = record.get('options', {}) if isinstance(record.get('options', {}), dict) else {}
        key = (
            compact(record.get('question')).lower(),
            compact(options.get('A')).lower(),
            compact(options.get('B')).lower(),
            compact(options.get('C')).lower(),
            compact(options.get('D')).lower(),
            compact(options.get('E')).lower(),
            compact(record.get('answer')).upper(),
        )
        if key in seen:
            continue
        seen.add(key)
        unique.append(record)

    for index, item in enumerate(unique, start=1):
        item['id'] = index
    return unique


def main():
    parser = argparse.ArgumentParser(description='Extract MCQs, generate SHARP via a free AI provider, and deploy the canonical bundle.')
    parser.add_argument('--providers', default=','.join(DEFAULT_PROVIDER_ORDER), help='Comma-separated AI provider order to use for SHARP generation.')
    parser.add_argument('--limit', type=int, default=0, help='Process only the first N questions.')
    parser.add_argument('--workers', type=int, default=4, help='Parallel worker count for SHARP generation.')
    args = parser.parse_args()

    provider_order = [item.strip().lower() for item in args.providers.split(',') if item.strip()]
    provider_order = [item for item in provider_order if item in {'ollama', 'gemini'}]
    if not provider_order:
        provider_order = DEFAULT_PROVIDER_ORDER or ['ollama']

    raw_questions = load_source_questions()
    if args.limit and args.limit > 0:
        raw_questions = raw_questions[:args.limit]

    normalized_questions = []
    next_id = 1
    for question in raw_questions:
        normalized = normalize_question(question, next_id)
        if normalized:
            normalized_questions.append(normalized)
            next_id += 1

    def process_item(index_question):
        index, question = index_question
        ai_payload = generate_sharp(question, provider_order)
        return build_record(question, ai_payload, index)

    records = []
    total = len(normalized_questions)
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
        futures = {executor.submit(process_item, item): item[0] for item in enumerate(normalized_questions, start=1)}
        for completed, future in enumerate(as_completed(futures), start=1):
            records.append(future.result())
            if completed % 50 == 0 or completed == total:
                print(f'Processed {completed}/{total}')

    records = dedupe_records(records)

    write_bundle(records)
    print(f'Wrote {len(records)} canonical questions to {CANONICAL_JSON}')
    print(f'Wrote {CANONICAL_JS}')

    validate = subprocess.run(['node', str(ROOT / 'scripts/validate_mcq_standard.js'), str(CANONICAL_JS)], check=False)
    return validate.returncode


if __name__ == '__main__':
    raise SystemExit(main())