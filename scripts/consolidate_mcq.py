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
            return None
            
        json_str = js_content[start_idx:end_idx+1].strip()
        
        # Initial cleanup
        # Replace backticks with double quotes
        json_str = json_str.replace('`', '"')
        # Remove trailing commas
        json_str = re.sub(r',(\s*[\]}])', r'\1', json_str)
        # Remove // comments (line by line to be safer)
        clean_lines = []
        for line in json_str.splitlines():
            if line.strip().startswith('//'):
                continue
            # Remove inline comments but be careful of URLs
            # Simple heuristic: only remove if it's not preceded by : (http://)
            line = re.sub(r'(?<!:)//.*', '', line)
            clean_lines.append(line)
        json_str = '\n'.join(clean_lines)
        
        try:
            return json.loads(json_str)
        except Exception:
            # If the whole thing fails, try finding all { ... } objects
            # Use a slightly smarter regex for objects that have 'question'
            matches = re.findall(r'\{[^{}]*"question"[^{}]*\}', json_str, re.DOTALL)
            if not matches:
                # Try even broader if needed
                matches = re.findall(r'\{.*?"question".*?\}', json_str, re.DOTALL)
            
            if matches:
                res = []
                for m in matches:
                    try:
                        # Clean the match too
                        m_clean = re.sub(r',(\s*[\]}])', r'\1', m)
                        res.append(json.loads(m_clean))
                    except:
                        pass
                if res: return res
            return None
    except Exception:
        return None
    
    json_str = js_content[start_idx:end_idx+1].strip()
    
    # Cleaning JSON for json.loads()
    # 1. Handle JS-style comments carefully (only if not in string - but we'll use a simpler heuristic)
    # Instead of regex, let's just try to parse it first. 
    # If it fails, we'll try to strip trailing commas.
    
    # Replace backticks with double quotes (rough approximation)
    json_str = json_str.replace('`', '"')
    
    # Remove trailing commas
    json_str = re.sub(r',(\s*[\]}])', r'\1', json_str)
    
    try:
        return json.loads(json_str)
    except Exception:
        # One last ditch effort: strip comments line by line if they start with //
        lines = []
        for line in json_str.splitlines():
            stripped = line.strip()
            if stripped.startswith('//'):
                continue
            lines.append(line)
        json_str = '\n'.join(lines)
        
        try:
            return json.loads(json_str)
        except Exception as e:
            # Final attempt: use a regex to extract anything that looks like a dict
            # This is a fallback if the whole array is too broken
            matches = re.findall(r'\{[^{}]+\}', json_str)
            if matches:
                res = []
                for m in matches:
                    try:
                        res.append(json.loads(m))
                    except:
                        pass
                if res: return res
            
            print(f"      Debug: JSON parse error: {e}")
            return None

def consolidate():
    questions_dir = 'js/questions'
    output_file = 'js/questions/canonical_questions.js'
    backup_file = 'js/questions/canonical_questions.json'
    
    all_questions = []
    seen_stems = set()
    
    # Files to process
    files = [f for f in os.listdir(questions_dir) if f.endswith('.js') and f != 'canonical_questions.js']
    
    # Also load the current canonical if it exists
    if os.path.exists(output_file):
        files.append('canonical_questions.js')

    print(f"Analyzing {len(files)} files...")

    for filename in files:
        path = os.path.join(questions_dir, filename)
        try:
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            questions = extract_json_from_js(content)
            if questions:
                count = 0
                # Flatten potential nested arrays (e.g. push(...[[...]]))
                def flatten(l):
                    for el in l:
                        if isinstance(el, list):
                            yield from flatten(el)
                        else:
                            yield el

                if isinstance(questions, list):
                    flat_questions = list(flatten(questions))
                    
                    for q in flat_questions:
                        if not isinstance(q, dict) or 'question' not in q:
                            continue
                        
                        stem = q['question'].strip().lower()
                        if stem not in seen_stems:
                            seen_stems.add(stem)
                            if '_src_file' not in q:
                                q['_src_file'] = filename
                            all_questions.append(q)
                            count += 1
                    print(f"  ✓ {filename}: added {count} unique questions")
                else:
                    print(f"  ✗ {filename}: extracted data is not a list")
            else:
                print(f"  ✗ {filename}: failed to extract data")
        except Exception as e:
            print(f"  ⚠ {filename}: error processing - {e}")

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
