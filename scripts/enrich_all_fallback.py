import glob
import json
from pathlib import Path

import sys

sys.path.insert(0, str(Path('.').resolve()))

from bulk_sharp_processor import build_fallback_sharp


OUT = Path('MCQ Bank/enriched_sharp_all.json')


def load_questions():
    questions = []
    for file_path in sorted(glob.glob('MCQ Bank/extracted/*.json')):
        try:
            with open(file_path, 'r', encoding='utf-8') as handle:
                items = json.load(handle)
            for item in items:
                item['_file'] = file_path
            questions.extend(items)
        except Exception:
            continue
    return questions


def main():
    questions = load_questions()
    print(f'Loaded {len(questions)} questions from MCQ Bank/extracted')
    if not questions:
        return 1

    results = []
    for index, question in enumerate(questions, start=1):
        results.append(
            {
                'id': question.get('id'),
                'question': question.get('question', ''),
                'specialty': question.get('specialty', ''),
                'source_file': question.get('_file', ''),
                'sharp': build_fallback_sharp(question, question.get('answer', 'A')),
                'mode': 'fallback',
            }
        )
        if index % 50 == 0 or index == len(questions):
            print(f'{index}/{len(questions)} processed')

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f'Saved enriched output to {OUT}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())