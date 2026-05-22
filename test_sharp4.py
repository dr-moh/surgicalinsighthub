import json, glob
total=0
has_md=0
for f in glob.glob('compiled_mcqs/*.json'):
    if 'removed_bad_mcqs' in f or 'Recovered' in f: continue
    try:
        data = json.load(open(f))
        for q in data:
            total += 1
            if 'markdown_debrief' in q and 'SHARP 4.0' in q.get('markdown_debrief', ''):
                has_md += 1
    except: pass
print(f'Total valid questions: {total}')
print(f'Questions with SHARP 4.0 markdown: {has_md}')
