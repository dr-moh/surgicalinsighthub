import os
import json
import re

def extract_json_from_js(js_content):
    try:
        start_idx = js_content.find('[')
        end_idx = js_content.rfind(']')
        if start_idx == -1 or end_idx == -1:
            try: return json.loads(js_content)
            except: return None
        json_str = js_content[start_idx:end_idx+1].strip()
        json_str = json_str.replace('`', '"')
        json_str = re.sub(r',(\s*[\]}])', r'\1', json_str)
        clean_lines = []
        for line in json_str.splitlines():
            if line.strip().startswith('//'): continue
            line = re.sub(r'(?<!:)//.*', '', line)
            clean_lines.append(line)
        json_str = '\n'.join(clean_lines)
        return json.loads(json_str)
    except: return None

def main():
    seen_stems = set()
    all_unique = []
    
    search_dirs = ['js/questions', 'MCQ Bank']
    for d in search_dirs:
        for root, _, files in os.walk(d):
            for f in files:
                if f.endswith('.js') or f.endswith('.json'):
                    path = os.path.join(root, f)
                    try:
                        with open(path, 'r', encoding='utf-8') as file:
                            content = file.read()
                        questions = extract_json_from_js(content)
                        if questions and isinstance(questions, list):
                            for q in questions:
                                if isinstance(q, dict) and 'question' in q:
                                    stem = q['question'].strip().lower()
                                    if stem not in seen_stems:
                                        seen_stems.add(stem)
                                        all_unique.append(q)
                    except: pass
                    
    print(f"Total unique questions found in repo: {len(all_unique)}")

if __name__ == "__main__":
    main()
