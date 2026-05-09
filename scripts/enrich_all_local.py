import argparse
import glob
import json
import os
import random
import re
import sys
import time
from pathlib import Path

import requests

sys.path.insert(0, str(Path('.').resolve()))

from bulk_sharp_processor import build_fallback_sharp, normalize_sharp_payload, recover_partial_sharp_payload


DEFAULT_API_URL = os.getenv('LOCAL_API_URL', 'http://127.0.0.1:11434/v1/chat/completions')
DEFAULT_MODEL = os.getenv('LOCAL_MODEL', 'gemma3:4b')
DEFAULT_OUT = Path('MCQ Bank/enriched_sharp_all_local.json')


def load_questions() -> list:
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


def make_prompt(question_obj: dict) -> str:
    return f"""
Act as a RUTHLESS Senior Surgical Resident preparing a junior for boards. 
Your tone is technical, efficient, and intolerant of fluff.

Question: {question_obj.get('question', '')}
Options: {json.dumps(question_obj.get('options', {}), ensure_ascii=False)}
Correct Answer: {question_obj.get('answer', '')}

Return ONLY valid JSON in this exact structure:
{{
  "status": "ACCEPT",
  "verified_answer": "{question_obj.get('answer', '')}",
  "set_the_stage": "One sentence clinical context. No 'Focus on the clue'.",
  "highlight_excellence": "The single technical or pathophysiological fact that makes the answer correct.",
  "address_gaps": "Concise disqualification of distractors. Kill the noise.",
  "review_learning_points": "The gold-standard guideline (e.g., NCCN, ATLS, SAGES) and the core principle.",
  "plan": "A high-yield 'Take-home Pearl' for the next shift.",
  "visualization": "A vivid mental image of the operative or radiological finding.",
  "guideline": "Official Guideline Name",
  "takeaway": "One-line board pearl"
}}
"""


def make_batch_prompt(batch: list) -> str:
    payload = []
    for question_obj in batch:
        payload.append(
            {
                'id': question_obj.get('id'),
                'question': question_obj.get('question', ''),
                'options': question_obj.get('options', {}),
                'answer': question_obj.get('answer', ''),
            }
        )

    return f"""
Act as a RUTHLESS Senior Surgical Resident. 
For each MCQ in the array below, provide a SHARP 2.0 debrief.
No fluff. No generic placeholders. Precise surgical terminology only.

JSON Array of Questions: {json.dumps(payload, ensure_ascii=False)}

Return a JSON array of objects, each containing:
id, verified_answer, set_the_stage, highlight_excellence, address_gaps, review_learning_points, plan, visualization, guideline, takeaway.
"""


def call_local_model(question_obj: dict, api_url: str, model: str, timeout: int = 120):
    payload = {
        'model': model,
        'messages': [{'role': 'user', 'content': make_prompt(question_obj)}],
        'temperature': 0.1,
        'max_tokens': 160,
    }

    response = requests.post(api_url, json=payload, timeout=timeout)
    response.raise_for_status()
    content = response.json()['choices'][0]['message']['content']
    match = re.search(r'\{.*\}', content, re.DOTALL)
    if match:
        try:
            return normalize_sharp_payload(json.loads(match.group(0)))
        except Exception:
            recovered = recover_partial_sharp_payload(content)
            if recovered:
                return recovered
    return recover_partial_sharp_payload(content)


def call_local_model_batch(batch: list, api_url: str, model: str, timeout: int = 180):
    payload = {
        'model': model,
        'messages': [{'role': 'user', 'content': make_batch_prompt(batch)}],
        'temperature': 0.1,
        'max_tokens': 900,
    }

    response = requests.post(api_url, json=payload, timeout=timeout)
    response.raise_for_status()
    content = response.json()['choices'][0]['message']['content']
    match = re.search(r'\[.*\]', content, re.DOTALL)
    if match:
        try:
            data = json.loads(match.group(0))
            if isinstance(data, list):
                return [normalize_sharp_payload(item) for item in data if isinstance(item, dict)]
        except Exception:
            pass
    return []


def enrich_question(question_obj: dict, api_url: str, model: str):
    try:
        sharp = call_local_model(question_obj, api_url, model)
        if sharp and sharp.get('status') == 'ACCEPT':
            return {
                'id': question_obj.get('id'),
                'question': question_obj.get('question', ''),
                'specialty': question_obj.get('specialty', ''),
                'source_file': question_obj.get('_file', ''),
                'sharp': sharp,
                'mode': 'local-llm',
            }
    except Exception as exc:
        return {
            'id': question_obj.get('id'),
            'question': question_obj.get('question', ''),
            'specialty': question_obj.get('specialty', ''),
            'source_file': question_obj.get('_file', ''),
            'sharp': build_fallback_sharp(question_obj, question_obj.get('answer', 'A')),
            'mode': 'fallback',
            'error': str(exc),
        }

    return {
        'id': question_obj.get('id'),
        'question': question_obj.get('question', ''),
        'specialty': question_obj.get('specialty', ''),
        'source_file': question_obj.get('_file', ''),
        'sharp': build_fallback_sharp(question_obj, question_obj.get('answer', 'A')),
        'mode': 'fallback',
    }


def enrich_batch(batch: list, api_url: str, model: str):
    try:
        batch_results = call_local_model_batch(batch, api_url, model)
        by_id = {}
        for item in batch_results:
            if isinstance(item, dict) and item.get('verified_answer'):
                by_id[item.get('id')] = item

        results = []
        for question_obj in batch:
            sharp = by_id.get(question_obj.get('id'))
            if sharp and sharp.get('status', 'ACCEPT').upper() == 'ACCEPT':
                results.append({
                    'id': question_obj.get('id'),
                    'question': question_obj.get('question', ''),
                    'specialty': question_obj.get('specialty', ''),
                    'source_file': question_obj.get('_file', ''),
                    'sharp': sharp,
                    'mode': 'local-batch',
                })
            else:
                results.append({
                    'id': question_obj.get('id'),
                    'question': question_obj.get('question', ''),
                    'specialty': question_obj.get('specialty', ''),
                    'source_file': question_obj.get('_file', ''),
                    'sharp': build_fallback_sharp(question_obj, question_obj.get('answer', 'A')),
                    'mode': 'fallback',
                })
        return results
    except Exception as exc:
        return [
            {
                'id': question_obj.get('id'),
                'question': question_obj.get('question', ''),
                'specialty': question_obj.get('specialty', ''),
                'source_file': question_obj.get('_file', ''),
                'sharp': build_fallback_sharp(question_obj, question_obj.get('answer', 'A')),
                'mode': 'fallback',
                'error': str(exc),
            }
            for question_obj in batch
        ]


def main():
    parser = argparse.ArgumentParser(description='Enrich all extracted questions using local Ollama.')
    parser.add_argument('--limit', type=int, default=0, help='Process only the first N questions.')
    parser.add_argument('--api-url', default=DEFAULT_API_URL, help='Local OpenAI-compatible chat completion URL.')
    parser.add_argument('--model', default=DEFAULT_MODEL, help='Local model name.')
    parser.add_argument('--output', default=str(DEFAULT_OUT), help='Output JSON file path.')
    parser.add_argument('--shuffle', action='store_true', help='Shuffle questions before processing.')
    parser.add_argument('--batch-size', type=int, default=5, help='Questions per local model request.')
    args = parser.parse_args()

    questions = load_questions()
    if args.shuffle:
        random.shuffle(questions)
    if args.limit and args.limit > 0:
        questions = questions[:args.limit]

    print(f'Loaded {len(questions)} questions from MCQ Bank/extracted')
    if not questions:
        print('No questions found.')
        return 1

    results = []
    out_path = Path(args.output)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    batch_size = max(1, args.batch_size)
    total_batches = (len(questions) + batch_size - 1) // batch_size

    for batch_index, start in enumerate(range(0, len(questions), batch_size), start=1):
        batch = questions[start:start + batch_size]
        batch_results = enrich_batch(batch, args.api_url, args.model)
        results.extend(batch_results)
        print(f'{min(start + len(batch), len(questions))}/{len(questions)} processed (batch {batch_index}/{total_batches})')
        out_path.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding='utf-8')
        time.sleep(0.05)

    out_path.write_text(json.dumps(results, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f'Saved enriched output to {out_path}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())