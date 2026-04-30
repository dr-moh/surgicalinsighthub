# Updated enrich_questions.py
import json
import os
import time
import requests
import re

# Manual fallback for .env
if os.path.exists('.env'):
    with open('.env') as f:
        for line in f:
            if '=' in line:
                key, val = line.split('=', 1)
                os.environ[key.strip()] = val.strip()

API_KEY = os.getenv("OPENROUTER_API_KEY")
# Updated models for Free Tier (DeepSeek R1 and Gemma 2)
MODELS = [
    "deepseek/deepseek-r1:free",
    "google/gemma-2-9b-it:free", 
    "mistralai/mistral-7b-instruct:free",
    "openrouter/auto"
]

def get_sharp_debrief(question_obj, model):
    prompt = f"""
    You are a world-class surgical educator. Enhance the following MCQ into a high-yield 'SHARP' debriefing format.
    
    MCQ:
    Question: {question_obj['question']}
    Options: {json.dumps(question_obj['options'])}
    Correct Answer: {question_obj['answer']}
    Base Explanation: {question_obj.get('explanation', {}).get('correct', '')}

    STRICT OUTPUT FORMAT (JSON ONLY):
    {{
    "set_the_stage": "...",
    "highlight_excellence": "...",
    "address_gaps": "...",
    "review_guidelines": "...",
    "plan": "..."
    }}
    """
    
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    payload = {"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.5}

    try:
        # Increased timeout to 60s for reasoning models
        response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload, timeout=60)
        if response.status_code == 200:
            return response.json()['choices'][0]['message']['content']
        return None
    except Exception as e:
        print(f"  Error on {model}: {e}")
        return None

def process_batch(count=10):
    with open('js/questions.js', 'r') as f:
        raw = f.read()
        json_str = raw.replace('var QUESTIONS = ', '').rstrip().rstrip(';')
        questions = json.loads(json_str)

    enriched_count = 0
    for i in range(min(count, len(questions))):
        q = questions[i]
        print(f"Processing Q#{q['id']} ({i+1}/{count})...")
        for model in MODELS:
            print(f"  Trying {model}...")
            result = get_sharp_debrief(q, model)
            if result:
                try:
                    # Clean the response from potential markdown or CoT 'thinking'
                    match = re.search(r'\{.*\}', result, re.DOTALL)
                    if match:
                        clean_json = match.group(0)
                        sharp_data = json.loads(clean_json)
                        
                        q['explanation'] = {
                            "correct": sharp_data.get('highlight_excellence', ''),
                            "A": "", "B": "", "C": "", "D": "", "E": ""
                        }
                        q['sharp_metadata'] = sharp_data
                        q['takeaway'] = f"PLAN: {sharp_data.get('plan', '')}"
                        print(f"  Success!")
                        enriched_count += 1
                        break
                except Exception as e:
                    print(f"  JSON error: {e}")
                    continue
            time.sleep(2)

    with open('js/questions_enriched_test.js', 'w') as f:
        f.write('var QUESTIONS = ')
        json.dump(questions, f, indent=2)
        f.write(';')
    print(f"\nDone! Enriched {enriched_count} questions. Check js/questions_enriched_test.js")

if __name__ == "__main__":
    if not API_KEY:
        print("ERROR: OPENROUTER_API_KEY not found in .env")
    else:
        process_batch(10)
