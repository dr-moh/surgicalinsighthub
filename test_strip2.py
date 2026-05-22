import json
import glob
import re

count = 0
for filepath in glob.glob("compiled_mcqs/*.json"):
    if "removed_bad" in filepath or "test_markdown" in filepath:
        continue
    try:
        with open(filepath, "r") as f:
            data = json.load(f)
    except:
        continue
    for q in data:
        q_text = str(q.get("question", "")).lower()
        q_no_spaces = re.sub(r'\s+', '', q_text)
        
        is_bad = False
        if "correctanswer" in q_no_spaces or "answer:" in q_no_spaces or re.search(r'answer[a-e1-9]', q_no_spaces):
            is_bad = True
            
        options = q.get("options", {})
        if isinstance(options, dict):
            for k, v in options.items():
                o_text = str(v).lower()
                o_no_spaces = re.sub(r'\s+', '', o_text)
                if "correctanswer" in o_no_spaces or "answer:" in o_no_spaces or re.search(r'answer[a-e1-9]', o_no_spaces):
                    is_bad = True
        if is_bad:
            count += 1

print(f"Found {count} more bad questions")
