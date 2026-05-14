#!/usr/bin/env python3
import json
import re
import subprocess
from pathlib import Path
import importlib.util

ROOT = Path(__file__).resolve().parents[1]
CANONICAL = ROOT / 'MCQ Bank' / 'canonical_questions.json'
CANONICAL_JS = ROOT / 'js' / 'questions' / 'canonical_questions.js'


def load_pipeline_module():
    path = ROOT / 'scripts' / 'mcq_pipeline.py'
    spec = importlib.util.spec_from_file_location('mcq_pipeline', str(path))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def repair_record(mod, rec):
    changed = []
    # Ensure options A-D present and coherent
    options = rec.get('options', {}) if isinstance(rec.get('options', {}), dict) else {}
    normalized_options = {letter: mod.compact(options.get(letter, '')) for letter in ['A', 'B', 'C', 'D', 'E']}
    completed = mod.complete_options(rec, normalized_options)
    if completed != options:
        rec['options'] = completed
        changed.append('options_filled')

    # Ensure answer points to non-empty option
    ans = mod.normalize_answer(rec)
    if rec.get('answer') != ans:
        rec['answer'] = ans
        changed.append('answer_fixed')

    # Fix short explanation
    expl = (rec.get('explanation') or {}).get('correct', '')
    if len(str(expl).split()) < 6:
        sharp_h = (rec.get('sharp') or {}).get('highlight_excellence')
        if sharp_h:
            rec.setdefault('explanation', {})['correct'] = sharp_h
            changed.append('explanation_from_sharp')
        else:
            guideline = rec.get('guideline') or ''
            rec.setdefault('explanation', {})['correct'] = (guideline and f"See guideline: {guideline}") or 'See source reference.'
            changed.append('explanation_from_guideline')

    # Replace placeholder takeaways/guideline language
    takeaway = rec.get('takeaway', '') or ''
    if re.search(r'correct answer from|remember the core principle|board-style clue|refer to specialty guidance', takeaway, flags=re.I):
        new_take = (rec.get('sharp') or {}).get('takeaway') or ''
        if new_take:
            rec['takeaway'] = new_take
            changed.append('takeaway_replaced')

    # Clean visualization placeholder
    vis = rec.get('visualization', '') or ''
    if vis.lower().startswith('picture') or vis.lower().startswith('envision'):
        # keep as-is but shorten
        rec['visualization'] = vis[:200]

    return changed


def main():
    mod = load_pipeline_module()
    arr = json.loads(CANONICAL.read_text(encoding='utf-8'))
    repaired = 0
    detail = {}
    for rec in arr:
        ch = repair_record(mod, rec)
        if ch:
            repaired += 1
            detail[rec.get('id')] = ch

    # Dedupe and reassign ids
    final = mod.dedupe_records(arr)

    # Write out final canonical files (overwrite)
    with open(CANONICAL, 'w', encoding='utf-8') as f:
        json.dump(final, f, indent=2, ensure_ascii=False)

    CANONICAL_JS.parent.mkdir(parents=True, exist_ok=True)
    with open(CANONICAL_JS, 'w', encoding='utf-8') as f:
        f.write('if (!window.QUESTIONS) window.QUESTIONS = []\n')
        f.write('window.QUESTIONS = ' + json.dumps(final, indent=2, ensure_ascii=False) + ';\n')
        f.write('window.QUESTIONS_LOADED = true;\n')

    print('Total canonical before:', len(arr))
    print('Repaired records count:', repaired)
    print('Total canonical after dedupe:', len(final))

    # Run validation
    proc = subprocess.run(['node', str(ROOT / 'scripts' / 'validate_mcq_standard.js'), str(CANONICAL_JS)])
    print('Validation return code:', proc.returncode)


if __name__ == '__main__':
    main()
