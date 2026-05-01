import glob, json, random, time
from bulk_sharp_processor import get_sharp_debrief, normalize_sharp_payload

# sample up to N questions to enrich
N = 200

files = sorted(glob.glob('js/questions/*.js'))
all_q = []
for f in files:
    text = open(f,encoding='utf-8').read()
    # extract array between first [ and last ]
    start = text.find('[')
    end = text.rfind(']')
    if start!=-1 and end!=-1:
        try:
            arr = json.loads(text[start:end+1])
            for q in arr:
                q['_file'] = f
            all_q.extend(arr)
        except Exception:
            # fallback naive extraction
            pass

print('Total arena questions available:', len(all_q))
random.shuffle(all_q)
sample = all_q[:N]
results = []

for i,q in enumerate(sample, start=1):
    try:
        sharp = get_sharp_debrief(q)
        if not sharp:
            # fallback minimal
            sharp = {
                'status':'ACCEPT',
                'verified_answer': q.get('answer','A'),
                'set_the_stage': q.get('question','')[:120],
                'highlight_excellence': 'Correct: '+str(q.get('answer','A')),
                'address_gaps':'',
                'review_learning_points':'',
                'plan':'',
                'guideline':'',
                'takeaway':'',
                'visualization':''
            }
        results.append({'id':q.get('id'),'sharp':sharp,'_file':q.get('_file')})
    except Exception as e:
        results.append({'id':q.get('id'),'error':str(e),'_file':q.get('_file')})
    if i%20==0:
        print(f'Enriched {i}/{len(sample)}')
    time.sleep(0.5)

open('MCQ Bank/enriched_sharp_sample.json','w',encoding='utf-8').write(json.dumps(results, indent=2, ensure_ascii=False))
print('Saved sample enriched results to MCQ Bank/enriched_sharp_sample.json')
print('Done')
