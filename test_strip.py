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
        if "answer:" in q_no_spaces or "ans:" in q_no_spaces or "correctanswer" in q_no_spaces:
            is_bad = True
            
        options = q.get("options", {})
        if isinstance(options, dict):
            for k, v in options.items():
                o_text = str(v).lower()
                o_no_spaces = re.sub(r'\s+', '', o_text)
                if "answer:" in o_no_spaces or "ans:" in o_no_spaces or "correctanswer" in o_no_spaces:
                    is_bad = True
        if is_bad:
            print(f"File: {filepath} | Q: {q_text[:100]}")
            count += 1
            if count > 20: break
    if count > 20: break
