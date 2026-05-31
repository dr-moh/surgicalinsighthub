import re
import json

INPUT_FILE = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/surgery_essence.txt"
OUTPUT_FILE = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_essence.json"

def main():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    items = []
    current_type = None  # 'q' or 'a' or None
    current_num = None
    current_text = []

    def save_current():
        if current_type is not None and current_num is not None:
            items.append({
                'type': current_type, 
                'num': current_num, 
                'text': '\n'.join(current_text).strip()
            })

    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Check for inline answers like "167.Ans. a. IV calcium 169.Ans. a..."
        ans_inline = list(re.finditer(r'(\d+)\.\s*Ans\.\s*([a-d])\.', line, re.IGNORECASE))
        if ans_inline:
            save_current()
            current_type = None
            current_num = None
            current_text = []
            
            for match in ans_inline:
                num = int(match.group(1))
                items.append({
                    'type': 'a',
                    'num': num,
                    'text': line[match.start():].strip() # Takes the rest of the line, which is usually correct
                })
            continue

        m_ans = re.match(r'^(\d+)\.\s*Ans\.', line, re.IGNORECASE)
        m_q = re.match(r'^(\d+)\.\s+[A-Z]', line)

        if m_ans:
            save_current()
            current_type = 'a'
            current_num = int(m_ans.group(1))
            current_text = [line]
            
        elif m_q:
            save_current()
            current_type = 'q'
            current_num = int(m_q.group(1))
            current_text = [line]
            
        else:
            if current_type is not None:
                # Accumulate text, stop at ALL CAPS short lines
                if len(line) < 50 and line.isupper() and " " not in line:
                    pass
                else:
                    current_text.append(line)
                    
    save_current()
    
    print(f"Parsed {len(items)} items.")
    
    # Merge Phase
    matched_pairs = []
    
    # We pair each answer with the MOST RECENT question having the same number
    # Keep a dictionary mapping question number -> question dict (we update it as we scan forward)
    # This automatically handles chapter resets.
    active_questions = {}
    
    for item in items:
        num = item['num']
        if item['type'] == 'q':
            active_questions[num] = item
        elif item['type'] == 'a':
            if num in active_questions:
                q = active_questions[num]
                matched_pairs.append({
                    'q_num': num,
                    'raw_question': q['text'],
                    'raw_answer': item['text']
                })
                # Remove it so we don't accidentally match it again if the number resets but the question wasn't seen yet
                del active_questions[num]
            else:
                # Answer found but no active question. This happens if regex missed the question.
                pass
                
    # Filter out bad parses
    valid_pairs = [p for p in matched_pairs if 'a.' in p['raw_question'].lower() or 'a)' in p['raw_question'].lower()]
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(valid_pairs, f, indent=2)
        
    print(f"Extracted {len(valid_pairs)} valid raw question/answer pairs out of {len(matched_pairs)} matched pairs.")

if __name__ == '__main__':
    main()
