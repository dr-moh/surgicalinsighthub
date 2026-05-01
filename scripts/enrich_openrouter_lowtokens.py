import glob, json, random, time, re, sys
sys.path.insert(0, '.')
from bulk_sharp_processor import API_KEY, normalize_sharp_payload
import requests

# Sample size
N = 80
MAX_TOKENS = 50

files = sorted(glob.glob('MCQ Bank/extracted/*.json'))
all_q = []
for f in files:
    try:
        data = json.load(open(f, encoding='utf-8'))
        all_q.extend(data)
    except Exception:
        pass

print('Pool size:', len(all_q))
if not all_q:
    sys.exit(0)

sample = random.sample(all_q, min(N, len(all_q)))
results = []
headers = {'Authorization': f'Bearer {API_KEY}', 'Content-Type': 'application/json'}

for i, q in enumerate(sample, start=1):
    prompt = f"""
Return valid JSON only. No markdown. No reasoning.

Q: {q.get('question','')}
Options: {json.dumps(q.get('options',{}))}
Provided Answer Key: {q.get('answer','')}

If valid, return ONLY JSON with very short fields, ideally 8 words or fewer each:
{{
  "status": "ACCEPT",
  "verified_answer": "A",
        "set_the_stage": "short phrase",
        "highlight_excellence": "short phrase",
        "address_gaps": "short phrase",
        "review_learning_points": "short phrase",
        "plan": "short phrase",
        "guideline": "short phrase",
        "takeaway": "short phrase",
        "visualization": "short phrase"
}}
"""
    payload = {'model': 'openrouter/auto', 'messages': [{'role': 'user', 'content': prompt}], 'temperature': 0.1, 'max_tokens': MAX_TOKENS}
    try:
        r = requests.post('https://openrouter.ai/api/v1/chat/completions', headers=headers, json=payload, timeout=30)
        if r.status_code == 200:
            content = r.json()['choices'][0]['message']['content']
            m = re.search(r'\{.*\}', content, re.DOTALL)
            if m:
                try:
                    data = json.loads(m.group(0))
                    norm = normalize_sharp_payload(data)
                    results.append({'id': q.get('id'), 'sharp': norm, '_file': q.get('source_file')})
                    print(f'{i}/{len(sample)} OK')
                except Exception as e:
                    results.append({'id': q.get('id'), 'sharp': None, 'error': str(e), '_file': q.get('source_file')})
                    print(f'{i}/{len(sample)} PARSE_ERR')
            else:
                results.append({'id': q.get('id'), 'sharp': None, 'error': 'no json in content', '_file': q.get('source_file')})
                print(f'{i}/{len(sample)} NO_JSON')
        else:
            results.append({'id': q.get('id'), 'sharp': None, 'error': f'status_{r.status_code}', '_file': q.get('source_file')})
            print(f'{i}/{len(sample)} API_ERR {r.status_code}')
    except Exception as e:
        results.append({'id': q.get('id'), 'sharp': None, 'error': str(e), '_file': q.get('source_file')})
        print(f'{i}/{len(sample)} EXC')
    time.sleep(0.4)

open('MCQ Bank/enriched_sharp_sample.json', 'w', encoding='utf-8').write(json.dumps(results, indent=2, ensure_ascii=False))
print('Saved MCQ Bank/enriched_sharp_sample.json')
