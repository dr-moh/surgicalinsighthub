import os
import glob
import re
import json

JS_DIRS = [
    "/Users/dr.moh/Documents/SIH/sih_project/js/questions",
    "/Users/dr.moh/Documents/SIH/sih_project/js/questions/review"
]

total_parsed = 0
duplicates = 0
options_too_few = 0  # < 4
options_too_many = 0 # > 5

seen_questions = set()

for d in JS_DIRS:
    for f in glob.glob(os.path.join(d, "*.js")):
        if "question-loader.js" in f: continue
        
        with open(f, "r", encoding="utf-8") as file:
            content = file.read()
            
        start_idx = content.find("[")
        end_idx = content.rfind("]")
        
        if start_idx != -1 and end_idx != -1:
            json_str = content[start_idx:end_idx+1]
            try:
                data = json.loads(json_str)
                for q in data:
                    total_parsed += 1
                    
                    q_text = q.get("question", "")
                    norm_q = re.sub(r'[^a-z0-9]', '', str(q_text).lower())
                    if norm_q in seen_questions and len(norm_q) > 10:
                        duplicates += 1
                        continue
                    if len(norm_q) > 10:
                        seen_questions.add(norm_q)
                        
                    opts = q.get("options", {})
                    if not isinstance(opts, dict):
                        options_too_few += 1
                    else:
                        opt_len = len(opts.keys())
                        if opt_len < 4:
                            options_too_few += 1
                        elif opt_len > 5:
                            options_too_many += 1
            except Exception as e:
                print(f"Failed to parse JSON in {f}: {e}")

print("--- FULL DATABASE ANALYSIS ---")
print(f"Total Parsed Successfully: {total_parsed}")
print(f"Duplicates to remove: {duplicates}")
print(f"Questions with < 4 options (needs AI fill): {options_too_few}")
print(f"Questions with > 5 options (needs trimming): {options_too_many}")
