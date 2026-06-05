import os
import json
import re
import requests
import time

SUPA_URL = "https://sxushsvvmyokoknnsbuj.supabase.co"
SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4dXNoc3Z2bXlva29rbm5zYnVqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTc3MDI2MiwiZXhwIjoyMDkxMzQ2MjYyfQ.cECCywCo_Jrb8MiyBDo0C7freVG33TpH1Vvy32dTtCY"

HEADERS = {
    "apikey": SUPA_KEY,
    "Authorization": f"Bearer {SUPA_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

def extract_json_from_js(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            if "window.QUESTIONS.push(...[" not in content:
                return []
            
            # Extract array payload
            prefix, rest = content.split("window.QUESTIONS.push(...[", 1)
            json_str = "[" + rest.rsplit("]);", 1)[0] + "]"
            
            return json.loads(json_str)
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return []

def main():
    print("Starting migration to Supabase...")
    
    loader_path = "/Users/dr.moh/Documents/SIH/sih_project/js/question-loader.js"
    base_dir = "/Users/dr.moh/Documents/SIH/sih_project/js/questions"
    
    # Read modules from loader
    with open(loader_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    modules = re.findall(r'\"([^\"]+\.js)\"', content)
    print(f"Found {len(modules)} modules configured in loader.")
    
    seen_ids = set()
    valid_questions = []
    
    for mod in modules:
        filepath = os.path.join(base_dir, mod)
        if not os.path.exists(filepath):
            print(f"Skipping {mod} (not found)")
            continue
            
        data = extract_json_from_js(filepath)
        print(f"Parsing {mod}... Found {len(data)} raw questions.")
        
        for q in data:
            if 'id' not in q:
                continue
                
            # Filter logically (matching frontend logic)
            has_sharp = bool(q.get('markdown_debrief') and q['markdown_debrief'] != "Failed to generate Markdown.")
            not_rejected = q.get('status') != 'REJECT'
            
            if has_sharp and not_rejected and q['id'] not in seen_ids:
                seen_ids.add(q['id'])
                
                # Format for Supabase
                row = {
                    "id": q['id'],
                    "specialty": q.get('specialty', 'Unknown'),
                    "topic": q.get('topic', ''),
                    "raw_text": q.get('raw_text', ''),
                    "question": q.get('question', ''),
                    "options": q.get('options', []),
                    "correct_answer": q.get('correct_answer', ''),
                    "debrief": q.get('debrief', ''),
                    "markdown_debrief": q.get('markdown_debrief', ''),
                    "status": q.get('status', ''),
                    "media": q.get('media', '')
                }
                valid_questions.append(row)
                
    print(f"\nFinal count of unique valid questions: {len(valid_questions)}")
    
    # Batch insert to Supabase
    BATCH_SIZE = 1000
    total_inserted = 0
    
    # Supabase PostgREST bulk insert endpoint
    endpoint = f"{SUPA_URL}/rest/v1/mcq_questions"
    
    for i in range(0, len(valid_questions), BATCH_SIZE):
        batch = valid_questions[i:i+BATCH_SIZE]
        
        # Use upsert to gracefully handle exact duplicates or re-runs
        headers = HEADERS.copy()
        headers["Prefer"] = "resolution=merge-duplicates,return=minimal"
        
        response = requests.post(endpoint, headers=headers, json=batch)
        if response.status_code in [200, 201]:
            total_inserted += len(batch)
            print(f"Successfully inserted batch {i//BATCH_SIZE + 1} ({total_inserted}/{len(valid_questions)})")
        else:
            print(f"Failed to insert batch {i//BATCH_SIZE + 1}: {response.status_code}")
            print(response.text)
            
        time.sleep(0.5)
        
    print("\nMigration Complete!")

if __name__ == "__main__":
    main()
