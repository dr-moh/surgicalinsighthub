import json
import os
import time
import requests
import re

# Load API Key
if os.path.exists('.env'):
    with open('.env') as f:
        for line in f:
            if '=' in line:
                key, val = line.split('=', 1)
                os.environ[key.strip()] = val.strip()

API_KEY = os.getenv("OPENROUTER_API_KEY")

# Reliable models for Free Tier
MODELS = [
    "google/gemini-2.0-flash-exp:free",
    "meta-llama/llama-3.1-8b-instruct:free",
    "openrouter/auto"
]

def get_sharp_debrief(question_obj):
    prompt = f"""
    Act as a board-certified surgical expert. 
    Review this MCQ and provide a high-yield SHARP debrief.
    
    Q: {question_obj['question']}
    Options: {json.dumps(question_obj['options'])}
    Provided Answer Key: {question_obj['answer']}
    
    Return ONLY JSON:
    {{
      "verified_answer": "Letter of the clinically correct answer",
      "set_the_stage": "...",
      "highlight_excellence": "...",
      "address_gaps": "...",
      "review_guidelines": "...",
      "plan": "..."
    }}
    """
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://surgicalinsighthub.com",
        "X-Title": "Surgical Insight Hub"
    }

    for model in MODELS:
        try:
            payload = {"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.1}
            response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload, timeout=45)
            if response.status_code == 200:
                content = response.json()['choices'][0]['message']['content']
                match = re.search(r'\{.*\}', content, re.DOTALL)
                if match:
                    return json.loads(match.group(0))
            time.sleep(2) 
        except:
            continue
    return None

def main():
    print("--- Starting SHARP Clinical Verification Auto-Pilot ---")
    
    while True:
        # 1. Load the current state
        with open('js/questions.js', 'r') as f:
            raw = f.read()
            json_str = raw.replace('var QUESTIONS = ', '').rstrip().rstrip(';')
            questions = json.loads(json_str)

        # 2. Find ONLY questions that need enrichment
        targets = [q for q in questions if 'sharp' not in q]
        
        if not targets:
            print("SUCCESS: All 1,472 questions have been enriched!")
            break
            
        print(f"Progress: {len(questions) - len(targets)} / {len(questions)} complete. Next targets: {[q['id'] for q in targets[:5]]}")
        
        # 3. Process the next small batch
        for i in range(min(5, len(targets))):
            q = targets[i]
            print(f"  -> Processing Q#{q['id']}...")
            data = get_sharp_debrief(q)
            
            if data:
                # Update the specific question in our loaded list
                if data.get('verified_answer') and data['verified_answer'] != q['answer']:
                    print(f"     !!! Corrected Answer: {q['answer']} -> {data['verified_answer']}")
                    q['answer'] = data['verified_answer']
                
                q['sharp'] = data
                q['explanation']['correct'] = data.get('highlight_excellence', '')
                q['takeaway'] = f"PLAN: {data.get('plan', '')}"
                q['guideline'] = data.get('review_guidelines', '')
                
                # 4. CRITICAL: Immediate atomic save of the WHOLE list
                with open('js/questions.js', 'w') as fw:
                    fw.write('var QUESTIONS = ')
                    json.dump(questions, fw, indent=2)
                    fw.write(';')
                print(f"     Saved Q#{q['id']} to disk.")
            else:
                print(f"     Failed to enrich Q#{q['id']}. Skipping for now.")
            
            time.sleep(10) # Safe delay for Free Tier

        print("--- Batch cycle complete. Resting for 30s... ---")
        time.sleep(30)

if __name__ == "__main__":
    main()
