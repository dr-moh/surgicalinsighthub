import glob, json, random, time, sys
sys.path.insert(0, '.')
from bulk_sharp_processor import build_fallback_sharp

# Sample size
N = 200

files = sorted(glob.glob('MCQ Bank/extracted/*.json'))
all_q = []
for f in files:
    try:
        arr = json.load(open(f, encoding='utf-8'))
        for q in arr:
            q['_file'] = f
        all_q.extend(arr)
    except Exception:
        pass

print('Arena pool size:', len(all_q))
if not all_q:
    sys.exit(0)

sample = random.sample(all_q, min(N, len(all_q)))
results = []
for i,q in enumerate(sample, start=1):
    sharp = build_fallback_sharp(q, q.get('answer','A'))
    results.append({'id':q.get('id'), 'sharp': sharp, '_file': q.get('_file')})
    if i%20==0:
        print(f'Built fallback for {i}/{len(sample)}')
    time.sleep(0.05)

open('MCQ Bank/enriched_sharp_sample.json','w',encoding='utf-8').write(json.dumps(results, indent=2, ensure_ascii=False))
print('Saved fallback-enriched sample to MCQ Bank/enriched_sharp_sample.json')
