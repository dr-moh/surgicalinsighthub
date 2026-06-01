import os
import glob
import re
import json

JS_DIRS = [
    "/Users/dr.moh/Documents/SIH/sih_project/js/questions",
    "/Users/dr.moh/Documents/SIH/sih_project/js/questions/review"
]

total_loaded = 0
invalid_options_count = 0
duplicate_count = 0
seen_questions = set()
files_to_process = []

def extract_json_array(content):
    # Try to find the array passed to push()
    match = re.search(r'window\.QUESTIONS\.push\(\.\.\.(.*?)\);', content, re.DOTALL)
    if match:
        arr_str = match.group(1).strip()
        try:
            return json.loads(arr_str)
        except:
            pass
    return None

for d in JS_DIRS:
    for f in glob.glob(os.path.join(d, "*.js")):
        if "question-loader.js" in f:
            continue
        files_to_process.append(f)

print(f"Scanning {len(files_to_process)} files for stats...")

for f in files_to_process:
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
        
    data = extract_json_array(content)
    if not data:
        continue
        
    for q in data:
        total_loaded += 1
        
        # Check options
        opts = q.get("options", {})
        if not isinstance(opts, dict):
            invalid_options_count += 1
        else:
            opt_len = len(opts.keys())
            if opt_len < 2 or opt_len > 5:
                invalid_options_count += 1
                
        # Check duplicates (fuzzy normalization: lowercase, strip punctuation and whitespace)
        q_text = q.get("question", "")
        norm_q = re.sub(r'[^a-z0-9]', '', str(q_text).lower())
        
        if norm_q in seen_questions:
            duplicate_count += 1
        else:
            if len(norm_q) > 10: # Only track meaningful questions
                seen_questions.add(norm_q)

print(f"Total Parsed: {total_loaded}")
print(f"Exact/Fuzzy Text Duplicates: {duplicate_count}")
print(f"Questions with <2 or >5 options: {invalid_options_count}")
