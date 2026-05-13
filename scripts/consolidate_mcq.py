import os
import json
import re

def extract_json_from_js(js_content):
    """
    Greedy extraction of the outermost array from a JS file.
    """
    try:
        # Find the first '[' that is likely the start of data (not just '[]')
        start_idx = -1
        idx = 0
        while True:
            found = js_content.find('[', idx)
            if found == -1:
                break
            # Skip if it's '[]' (initialization)
            if found + 1 < len(js_content) and js_content[found+1] == ']':
                idx = found + 2
                continue
            start_idx = found
            break
            
        end_idx = js_content.rfind(']')
        
        if start_idx == -1 or end_idx == -1 or end_idx <= start_idx:
            # Fallback for pure JSON
            try:
                return json.loads(js_content)
            except:
                return None
            
        json_str = js_content[start_idx:end_idx+1].strip()
        
        # Initial cleanup
        json_str = json_str.replace('`', '"')
        json_str = re.sub(r',(\s*[\]}])', r'\1', json_str)
        
        clean_lines = []
        for line in json_str.splitlines():
            if line.strip().startswith('//'):
                continue
            line = re.sub(r'(?<!:)//.*', '', line)
            clean_lines.append(line)
        json_str = '\n'.join(clean_lines)
        
        try:
            return json.loads(json_str)
        except Exception:
            matches = re.findall(r'\{[^{}]*"question"[^{}]*\}', json_str, re.DOTALL)
            if matches:
                res = []
                for m in matches:
                    try:
                        m_clean = re.sub(r',(\s*[\]}])', r'\1', m)
                        res.append(json.loads(m_clean))
                    except:
                        pass
                if res: return res
            return None
    except Exception:
        return None

def process_file(path, filename, seen_stems, all_questions):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        questions = extract_json_from_js(content)
        if questions:
            count = 0
            if isinstance(questions, list):
                for q in questions:
                    if not isinstance(q, dict) or 'question' not in q:
                        continue
                    
                    stem = q['question'].strip().lower()
                    if stem not in seen_stems:
                        seen_stems.add(stem)
                        if '_src_file' not in q:
                            q['_src_file'] = filename
                        # Strip research_insight if it exists to ensure clean slate
                        if 'research_insight' in q:
                            del q['research_insight']
                        all_questions.append(q)
                        count += 1
                print(f"  ✓ {filename}: added {count} unique questions")
            else:
                print(f"  ✗ {filename}: extracted data is not a list")
        else:
            print(f"  ✗ {filename}: failed to extract data")
    except Exception as e:
        print(f"  ⚠ {filename}: error processing - {e}")

def consolidate():
    questions_dir = 'js/questions'
    output_file = 'js/questions/canonical_questions.js'
    backup_file = 'js/questions/canonical_questions.json'
    
    all_questions = []
    seen_stems = set()
    
    # Files to process
    js_files = [f for f in os.listdir(questions_dir) if f.endswith('.js') and f != 'canonical_questions.js']
    
    additional_sources = [
        'MCQ Bank/canonical_questions_final.json',
        'MCQ Bank/canonical_questions.json',
        'MCQ Bank/canonical_questions_updated.json',
        'js/anesthesia_questions.json',
        'js/extra_questions.js',
        'js/new_questions_bulk.json',
        'MCQ Bank/parsed_txt_questions.json',
        'MCQ Bank/ai_transformed_questions_BACKUP.json',
        'js/questions_enriched_test.js',
        'archive/root_junk/transformed_questions.json',
        'archive/root_junk/questions.json',
        'MCQ Bank/docx_extracted_questions_incremental.json'
    ]
    
    print(f"Analyzing {len(js_files)} JS files and {len(additional_sources)} JSON sources...")

    # Process JS files
    for filename in js_files:
        path = os.path.join(questions_dir, filename)
        process_file(path, filename, seen_stems, all_questions)

    # Process JSON sources
    for path in additional_sources:
        if os.path.exists(path):
            filename = os.path.basename(path)
            process_file(path, filename, seen_stems, all_questions)

    if not all_questions:
        print("\nCRITICAL: No questions found! Aborting to prevent data loss.")
        return

    print(f"\nTotal unique questions: {len(all_questions)}")

    # Write as JSON backup
    with open(backup_file, 'w', encoding='utf-8') as f:
        json.dump(all_questions, f, indent=2)

    # Write as consolidated JS
    js_content = f"/** Consolidated MCQ Bank - {len(all_questions)} questions **/\n"
    js_content += "window.QUESTIONS = " + json.dumps(all_questions, indent=2) + ";"
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"\nSUCCESS: Consolidated into {output_file}")

if __name__ == "__main__":
    consolidate()
