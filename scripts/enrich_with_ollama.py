#!/usr/bin/env python3
"""Enrich extracted MCQs using a local Ollama instance (preferred) or OpenRouter fallback.

Requirements: run local Ollama server (default port 11434) or set OPENROUTER_API_KEY in .env

Usage: python scripts/enrich_with_ollama.py --input MCQ_extracted.json --output MCQ_enriched.json
"""
import json
import os
import re
import time
import requests
from pathlib import Path


def load_env():
    if os.path.exists('.env'):
        with open('.env') as f:
            for line in f:
                if '=' in line:
                    k, v = line.split('=', 1)
                    os.environ.setdefault(k.strip(), v.strip())


def call_ollama(prompt, model='llama2', timeout=30):
    url = f'http://127.0.0.1:11434/api/generate?model={model}'
    try:
        resp = requests.post(url, json={'prompt': prompt, 'max_tokens': 512}, timeout=timeout)
        if resp.status_code == 200:
            return resp.text
    except Exception:
        return None


def call_openrouter(prompt, model='google/gemini-2.0-flash-exp:free', timeout=30):
    api_key = os.getenv('OPENROUTER_API_KEY')
    if not api_key:
        return None
    headers = {'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'}
    payload = {'model': model, 'messages': [{'role': 'user', 'content': prompt}], 'temperature': 0.1}
    try:
        r = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json=payload, timeout=timeout)
        if r.status_code == 200:
            return r.json()['choices'][0]['message']['content']
    except Exception:
        return None


def extract_json_from_text(text):
    if not text:
        return None
    m = re.search(r'\{[\s\S]*\}', text)
    if m:
        try:
            return json.loads(m.group(0))
        except Exception:
            return None
    # fallback: try the whole text as json
    try:
        return json.loads(text)
    except Exception:
        return None


def build_prompt(q):
    return f"""
Act as a board-certified surgical/anesthesia expert. Review this MCQ and provide a concise SHARP debrief in JSON.

Q: {q.get('question')}
Options: {json.dumps(q.get('options', {}), ensure_ascii=False)}
Provided Answer Key: {q.get('answer')}

Return ONLY JSON with keys: verified_answer, set_the_stage, highlight_excellence, address_gaps, review_guidelines, plan, takeaway
"""


def main():
    load_env()
    p = Path('MCQ_extracted.json')
    if not p.exists():
        print('MCQ_extracted.json not found; run extractor first')
        return
    data = json.loads(p.read_text(encoding='utf-8'))

    out = []
    for i, q in enumerate(data):
        if 'sharp' in q:
            out.append(q)
            continue
        prompt = build_prompt(q)
        print(f'[{i+1}/{len(data)}] Enriching from {q.get("source_file","?")}')
        resp = call_ollama(prompt)
        if resp is None:
            resp = call_openrouter(prompt)
        parsed = extract_json_from_text(resp)
        if parsed:
            q['sharp'] = parsed
            if parsed.get('verified_answer') and parsed['verified_answer'] != q.get('answer'):
                q['answer_verified'] = parsed['verified_answer']
        else:
            q['sharp'] = {'error': 'enrichment_failed', 'raw': resp}

        out.append(q)
        # periodic save
        if (i + 1) % 50 == 0:
            Path('MCQ_enriched.json').write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
            print(f'Wrote progress at {i+1}')
        time.sleep(0.5)

    Path('MCQ_enriched.json').write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
    print('Enrichment complete: MCQ_enriched.json')


if __name__ == '__main__':
    main()
