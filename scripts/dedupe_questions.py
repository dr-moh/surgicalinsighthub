import json
import re
from pathlib import Path

JS_DIR = Path('js/questions')
OUT = JS_DIR

normalize = lambda s: re.sub(r'\s+',' ', (s or '').strip()).lower()

id_re = re.compile(r'\"id\"\s*:\s*(\d+)')

# load all questions
all_q = []
for f in sorted(JS_DIR.glob('*.js')):
    text = f.read_text(encoding='utf-8')
    # find first '[' after push(...[
    idx = text.find('push(...[')
    if idx != -1:
        arr_start = text.find('[', idx)
    else:
        arr_start = text.find('[', 0)
    arr_end = text.rfind('])')
    if arr_start==-1 or arr_end==-1:
        # try to extract {...} blocks
        objs = re.findall(r'\{[^}]*\}', text, re.DOTALL)
        qs = []
        for o in objs:
            try:
                qs.append(json.loads(o))
            except Exception:
                pass
    else:
        arr_text = text[arr_start:arr_end+1]
        try:
            qs = json.loads(arr_text)
        except Exception:
            # fallback: find all {...} blocks
            objs = re.findall(r'\{[^}]*\}', arr_text, re.DOTALL)
            qs = []
            for o in objs:
                try:
                    qs.append(json.loads(o))
                except Exception:
                    pass
    for q in qs:
        q['_src_file'] = f.name
    all_q.extend(qs)

print('Loaded total questions from files:', len(all_q))

# dedupe globally by (normalized question + options)
seen = set()
unique = []
for q in all_q:
    key = (normalize(q.get('question','')),
           normalize(q.get('options',{}).get('A','')),
           normalize(q.get('options',{}).get('B','')),
           normalize(q.get('options',{}).get('C','')),
           normalize(q.get('options',{}).get('D','')))
    if key in seen:
        continue
    seen.add(key)
    unique.append(q)

print('Unique count:', len(unique))

# group by specialty (lower, map safe)
mapping = {
    'anesthesia':'anesthesia','breast surgery':'breast_surgery','breast':'breast_surgery','cardiothoracic':'cardiothoracic',
    'colorectal':'colorectal','hpb':'hpb','orthopedics':'orthopedics','orthopedic':'orthopedics','pediatric surgery':'pediatric_surgery',
    'plastic surgery':'plastic_surgery','trauma':'trauma','urology':'urology','vascular':'vascular','general surgery':'general_surgery'
}

def norm_spec(s):
    s = (s or 'General Surgery').lower()
    for k,v in mapping.items():
        if k in s:
            return v
    return 'general_surgery'

groups = {}
for q in unique:
    spec = norm_spec(q.get('specialty',''))
    groups.setdefault(spec, []).append(q)

# write files
for spec, qs in groups.items():
    path = OUT / f'{spec}.js'
    with path.open('w', encoding='utf-8') as f:
        f.write('if (!window.QUESTIONS) window.QUESTIONS = [];\n')
        f.write('window.QUESTIONS.push(...[\n')
        f.write(json.dumps(qs, indent=2, ensure_ascii=False))
        f.write('\n]);\n')
    print('Wrote', path, 'count=', len(qs))

# report
total_after = sum(len(v) for v in groups.values())
print('Deduped total:', total_after)

# save summary
Path('MCQ Bank/dedupe_summary.json').write_text(json.dumps({'loaded':len(all_q),'unique':len(unique),'after':total_after}, indent=2), encoding='utf-8')
print('Saved summary to MCQ Bank/dedupe_summary.json')
