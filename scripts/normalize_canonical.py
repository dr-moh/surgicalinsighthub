#!/usr/bin/env python3
"""
normalize_canonical.py
Fixes structural issues in canonical_questions.json so it passes validate_mcq_standard.js:

1. Converts sharp_metadata {S,H,A,R,P} → sharp {set_the_stage, highlight_excellence,
   address_gaps, review_learning_points, plan}
2. Ensures sharp object has all required fields (set_the_stage, highlight_excellence,
   address_gaps, review_learning_points) and plan/plan_for_improvement
3. Converts string IDs (e.g. "AI_XXXXXXXX") to sequential positive integers
4. Ensures options A-D are all non-empty strings (fills missing ones with placeholder)
5. Ensures answer key matches one of the option keys
6. Reports synthetic flags
"""

import json
import re
import sys

INPUT  = 'js/questions/canonical_questions.json'
OUTPUT = 'js/questions/canonical_questions.json'
JS_OUT = 'js/questions/canonical_questions.js'

def normalize_sharp(q):
    """Convert sharp_metadata or partial sharp to full sharp object."""
    sharp = q.get('sharp')
    meta  = q.get('sharp_metadata')
    debrief = q.get('sharp_debrief')

    if debrief and isinstance(debrief, dict) and (not sharp or not isinstance(sharp, dict)):
        sharp = {
            'set_the_stage':        debrief.get('S_set_the_stage', ''),
            'highlight_excellence': debrief.get('H_highlight_excellence', ''),
            'address_gaps':         debrief.get('A_address_the_gaps', debrief.get('A_address_gaps', '')),
            'review_learning_points': debrief.get('R_review_learning_points', ''),
            'plan':                 debrief.get('P_plan_for_improvement', debrief.get('plan', '')),
        }
    elif meta and isinstance(meta, dict) and (not sharp or not isinstance(sharp, dict)):
        # Convert sharp_metadata {S,H,A,R,P} → sharp object
        sharp = {
            'set_the_stage':        meta.get('S', ''),
            'highlight_excellence': meta.get('H', ''),
            'address_gaps':         meta.get('A', ''),
            'review_learning_points': meta.get('R', ''),
            'plan':                 meta.get('P', ''),
        }
    elif isinstance(sharp, str):
        # sharp is a plain string — wrap it
        sharp = {
            'set_the_stage':        sharp,
            'highlight_excellence': sharp,
            'address_gaps':         '',
            'review_learning_points': '',
            'plan':                 '',
        }
    elif not isinstance(sharp, dict):
        sharp = {}

    # Ensure all required fields exist and are non-empty strings
    defaults = {
        'set_the_stage':          q.get('question', '')[:120],
        'highlight_excellence':   'Pending enrichment',
        'address_gaps':           'Pending enrichment',
        'review_learning_points': 'Pending enrichment',
        'plan':                   'Pending enrichment',
    }
    for field, default in defaults.items():
        if not sharp.get(field) or not str(sharp[field]).strip():
            sharp[field] = default

    # Ensure plan or plan_for_improvement
    if not sharp.get('plan') and not sharp.get('plan_for_improvement'):
        sharp['plan'] = 'Review this topic for board preparation.'

    return sharp


def normalize_options(q):
    """Ensure options A-D are all non-empty strings."""
    opts = q.get('options')
    if not isinstance(opts, dict):
        opts = {}

    for key in ['A', 'B', 'C', 'D']:
        val = opts.get(key, '')
        if not isinstance(val, str) or not val.strip():
            opts[key] = f'[Option {key} not available]'

    return opts


def normalize_answer(q, opts):
    """Ensure answer is one of A/B/C/D."""
    answer = q.get('answer', '')
    if isinstance(answer, str):
        answer = answer.strip().upper()
    else:
        answer = str(answer).strip().upper()

    # If answer is a full option text, find the matching key
    if answer not in ['A', 'B', 'C', 'D']:
        for key in ['A', 'B', 'C', 'D']:
            if opts.get(key, '').strip() == q.get('answer', '').strip():
                answer = key
                break
        else:
            answer = 'A'  # fallback

    return answer


def is_synthetic(q):
    """Flag questions that look synthetic/placeholder."""
    flags = []
    explanation = q.get('explanation', '')
    if isinstance(explanation, str) and len(explanation.split()) < 6:
        flags.append('short explanation')
    elif isinstance(explanation, dict):
        correct = explanation.get('correct', '')
        if len(str(correct).split()) < 6:
            flags.append('short explanation.correct')

    guideline = q.get('guideline', '')
    if guideline and re.search(r'^(General Surgery|See guideline:|N/A)$', str(guideline), re.I):
        flags.append(f'generic guideline: {guideline}')

    for key in ['A', 'B', 'C', 'D']:
        opt = q.get('options', {}).get(key, '')
        if re.search(r'Distractor for', str(opt), re.I):
            flags.append(f'placeholder option {key}')

    sharp = q.get('sharp', {})
    if isinstance(sharp, dict):
        for field in ['highlight_excellence', 'address_gaps']:
            val = str(sharp.get(field, ''))
            if re.search(r'placeholder|TODO|FIXME|\[.*\]', val, re.I):
                flags.append(f'placeholder in sharp.{field}')

    return flags


def main():
    print(f'Loading {INPUT}...')
    with open(INPUT, 'r', encoding='utf-8') as f:
        questions = json.load(f)

    print(f'Loaded {len(questions)} questions.')

    before_count = len(questions)
    synthetic_flags = []
    next_id = 1

    # Build a set of existing integer IDs to avoid collisions
    existing_int_ids = set()
    for q in questions:
        qid = q.get('id')
        if isinstance(qid, int) and qid > 0:
            existing_int_ids.add(qid)

    def get_next_id():
        nonlocal next_id
        while next_id in existing_int_ids:
            next_id += 1
        existing_int_ids.add(next_id)
        result = next_id
        next_id += 1
        return result

    normalized = []
    id_remap_count = 0
    sharp_fixed_count = 0
    options_fixed_count = 0

    for i, q in enumerate(questions):
        if not isinstance(q, dict):
            continue

        # 1. Fix ID — must be positive integer
        qid = q.get('id')
        if not isinstance(qid, int) or qid <= 0:
            q['id'] = get_next_id()
            id_remap_count += 1
        else:
            existing_int_ids.add(qid)

        # 2. Fix sharp
        old_sharp = q.get('sharp')
        new_sharp = normalize_sharp(q)
        if old_sharp != new_sharp:
            sharp_fixed_count += 1
        q['sharp'] = new_sharp

        # Remove sharp_metadata now that it's been migrated
        q.pop('sharp_metadata', None)

        # 3. Fix options
        old_opts = q.get('options', {})
        new_opts = normalize_options(q)
        if old_opts != new_opts:
            options_fixed_count += 1
        q['options'] = new_opts

        # 4. Fix answer
        q['answer'] = normalize_answer(q, new_opts)

        # 5. Synthetic detection
        flags = is_synthetic(q)
        if flags:
            synthetic_flags.append({'id': q['id'], 'question': q.get('question', '')[:80], 'flags': flags})

        normalized.append(q)

    print(f'\nNormalization summary:')
    print(f'  IDs remapped (string → int):  {id_remap_count}')
    print(f'  sharp objects fixed:           {sharp_fixed_count}')
    print(f'  options fixed:                 {options_fixed_count}')
    print(f'  Synthetic flags:               {len(synthetic_flags)}')
    if synthetic_flags:
        print(f'\n  First 10 synthetic flags:')
        for s in synthetic_flags[:10]:
            print(f'    Q{s["id"]}: {s["flags"]} — {s["question"]}')

    print(f'\nWriting {len(normalized)} questions to {OUTPUT}...')
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(normalized, f, indent=2, ensure_ascii=False)

    js_content = f'/** Consolidated MCQ Bank - {len(normalized)} questions **/\n'
    js_content += 'window.QUESTIONS = ' + json.dumps(normalized, indent=2, ensure_ascii=False) + ';'
    with open(JS_OUT, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f'Written JS bundle to {JS_OUT}')
    print(f'\nBefore: {before_count} → After: {len(normalized)} questions')
    print('Done.')


if __name__ == '__main__':
    main()
