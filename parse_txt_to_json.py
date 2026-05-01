import os
import json
import re
import uuid


SOURCE_FILES = [
    ("MCQ Bank/anesthesia_extracted.txt", "anesthesia"),
    ("MCQ Bank/essence_chunk.txt", "general surgery"),
    ("MCQ Bank/rush_extracted.txt", "general surgery"),
    ("MCQ Bank/tash_chunk.txt", "general surgery"),
    ("MCQ Bank/tash_chunk_2.txt", "general surgery"),
    ("MCQ Bank/urology_source.txt", "urology"),
]


def is_probable_question(block):
    return bool(
        re.search(r'^(\d+\.|Which|What|When|Where|Why|How|A \d{1,3}-year-old|An \d{1,3}-year-old)', block, re.I)
        or block.endswith('?')
    )

def parse_txt_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by double newlines to get blocks
    blocks = content.split('\n\n')
    questions = []
    
    current_q = None
    
    for block in blocks:
        block = block.strip()
        if not block:
            continue
            
        # Is this an option?
        if re.match(r'^[A-E]\.', block):
            if current_q:
                opt_letter = block[0]
                opt_text = block[2:].strip()
                current_q["options"][opt_letter] = opt_text
        else:
            # If we had a previous question, save it
            if current_q and len(current_q["options"]) >= 2:
                questions.append(current_q)
            
            # Start a new question
            # Ignore short headers like "MCQ Compilled"
            if len(block) > 15 and is_probable_question(block):
                current_q = {
                    "id": str(uuid.uuid4())[:8],  # generate a short unique ID
                    "question": block,
                    "options": {}
                }
            else:
                current_q = None

    # Add the last one
    if current_q and len(current_q["options"]) >= 2:
        questions.append(current_q)
        
    return questions

def main():
    all_qs = []
    for filepath, specialty in SOURCE_FILES:
        f = filepath
        if os.path.exists(f):
            print(f"Parsing {f}...")
            qs = parse_txt_file(f)
            for q in qs:
                q["specialty"] = specialty
                q["source_file"] = os.path.basename(f)
            all_qs.extend(qs)
            
    out_file = "MCQ Bank/parsed_txt_questions.json"
    with open(out_file, 'w') as f:
        json.dump(all_qs, f, indent=2)
        
    print(f"Extracted {len(all_qs)} questions to {out_file}")

if __name__ == "__main__":
    main()
