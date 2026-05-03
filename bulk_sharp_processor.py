import json
import os
import time
import requests
import re
import random
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

# Load API Key
if os.path.exists('.env'):
    with open('.env') as f:
        for line in f:
            if '=' in line:
                key, val = line.split('=', 1)
                os.environ[key.strip()] = val.strip()

API_KEY = os.getenv("OPENROUTER_API_KEY")

LOCAL_API_URL = os.getenv("LOCAL_API_URL", "http://localhost:11434/v1/chat/completions")
LOCAL_MODEL = os.getenv("LOCAL_MODEL", "gemma3:4b") # Auto-detected local model

MODELS = [
    "mistralai/mistral-7b-instruct-v0.1"
]

file_lock = threading.Lock()

def load_json_array(filepath):
    if not os.path.exists(filepath):
        return []
    with open(filepath, 'r') as f:
        try:
            return json.load(f)
        except:
            # Maybe it's formatted like `var QUESTIONS = [...]`
            f.seek(0)
            raw = f.read()
            json_str = raw.replace('var QUESTIONS = ', '').rstrip().rstrip(';')
            try:
                return json.loads(json_str)
            except:
                return []

def normalize_sharp_payload(payload):
    if not isinstance(payload, dict):
        return None

    status = str(payload.get('status', '')).strip().lower()
    if status not in {'accept', 'accepted', 'verified', 'ok'}:
        return None

    if isinstance(payload.get('review_learning_points'), list):
        payload['review_learning_points'] = ' '.join(str(item).strip() for item in payload['review_learning_points'] if str(item).strip())

    if isinstance(payload.get('review_learning_points'), dict):
        payload['review_learning_points'] = json.dumps(payload['review_learning_points'], ensure_ascii=False)

    for key in ['set_the_stage', 'highlight_excellence', 'address_gaps', 'review_learning_points', 'plan', 'guideline', 'takeaway', 'visualization']:
        value = payload.get(key, '')
        if isinstance(value, list):
            payload[key] = ' '.join(str(item).strip() for item in value if str(item).strip())
        elif isinstance(value, dict):
            payload[key] = json.dumps(value, ensure_ascii=False)

    return payload

def recover_partial_sharp_payload(content):
    if not isinstance(content, str):
        return None

    recovered = {}
    for key, value in re.findall(r'"([A-Za-z_]+)"\s*:\s*"((?:\\.|[^"\\])*)"', content):
        try:
            recovered[key] = json.loads('"' + value + '"')
        except Exception:
            recovered[key] = value

    if not recovered:
        return None

    recovered.setdefault('status', 'ACCEPT')
    return normalize_sharp_payload(recovered)

def build_fallback_sharp(question_obj, answer_letter):
    question_text = str(question_obj.get('question', '')).strip()
    options = question_obj.get('options', {}) or {}
    answer_text = options.get(answer_letter, '') if isinstance(options, dict) else ''
    topic = str(question_obj.get('topic', '')).strip()
    specialty = str(question_obj.get('specialty', 'General Surgery')).strip()

    def compact_text(text, fallback, limit=18):
        cleaned = re.sub(r'\s+', ' ', str(text or '')).strip()
        if not cleaned:
            return fallback
        words = cleaned.split(' ')
        return ' '.join(words[:limit]).strip() if len(words) > limit else cleaned

    return {
        'status': 'ACCEPT',
        'verified_answer': answer_letter,
        'set_the_stage': compact_text(topic, 'Review the stem and choose the best option.') or 'Review the stem and choose the best option.',
        'highlight_excellence': compact_text(
            answer_text or question_text,
            'The correct answer matches the key clinical principle.'
        ),
        'address_gaps': 'Eliminate options that conflict with the stem or core principle.',
        'review_learning_points': compact_text(
            question_obj.get('guideline') or specialty,
            'Review the topic-specific guideline or surgical principle.',
            14
        ),
        'plan': compact_text(
            question_obj.get('takeaway') or answer_text,
            'Memorize the one-line takeaway for revision.',
            16
        ),
        'guideline': compact_text(question_obj.get('guideline') or topic or specialty, '', 14),
        'takeaway': compact_text(question_obj.get('takeaway') or answer_text or question_text, 'Recall the correct option and core principle.', 18),
        'visualization': ''
    }

def get_sharp_debrief(question_obj):
    prompt = f"""
        Return valid JSON only. No markdown. No reasoning.
        If the question is invalid, return exactly {{"status": "REJECT"}}.
    
    Q: {question_obj.get('question', '')}
    Options: {json.dumps(question_obj.get('options', {}))}
    Provided Answer Key: {question_obj.get('answer', '')}
    
        If valid, return ONLY JSON with very short fields, ideally 8 words or fewer each:
    {{
      "status": "ACCEPT",
      "verified_answer": "A",
            "set_the_stage": "short phrase",
            "highlight_excellence": "short phrase",
            "address_gaps": "short phrase",
            "review_learning_points": "short phrase",
            "plan": "short phrase",
            "guideline": "short phrase",
            "takeaway": "short phrase",
            "visualization": "short phrase"
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
            payload = {"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.1, "max_tokens": 160}
            response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload, timeout=45)
            if response.status_code == 200:
                content = response.json()['choices'][0]['message']['content']
                match = re.search(r'\{.*\}', content, re.DOTALL)
                if match:
                    try:
                        return normalize_sharp_payload(json.loads(match.group(0)))
                    except Exception:
                        recovered = recover_partial_sharp_payload(content)
                        if recovered:
                            return recovered
            else:
                print(f"     [API Error {response.status_code} with {model}]: {response.text}")
                if response.status_code == 429:
                    time.sleep(5) # Slow down slightly if rate limited
            time.sleep(1) 
        except Exception as e:
            print(f"     [Exception with {model}]: {e}")
            continue
            
    # --- Local Failover ---
    print(f"     [OpenRouter limits hit]. Failing over to local model: {LOCAL_MODEL}...")
    try:
        # We reuse the same OpenAI-compatible payload format for Ollama/vLLM/LocalAI
        payload = {"model": LOCAL_MODEL, "messages": [{"role": "user", "content": prompt}], "temperature": 0.1, "max_tokens": 160}
        
        # Local instances might be slower, so we use a higher timeout (120s)
        response = requests.post(LOCAL_API_URL, json=payload, timeout=120)
        
        if response.status_code == 200:
            content = response.json()['choices'][0]['message']['content']
            match = re.search(r'\{.*\}', content, re.DOTALL)
            if match:
                try:
                    return normalize_sharp_payload(json.loads(match.group(0)))
                except Exception:
                    recovered = recover_partial_sharp_payload(content)
                    if recovered:
                        return recovered
                    return None
        else:
            print(f"     [Local API Error {response.status_code}]: {response.text}")
    except Exception as e:
        print(f"     [Local API Exception]: {e} (Is the Docker container running?)")

    return None

def normalize_specialty(spec):
    mapping = {
        "anesthesia": "anesthesia",
        "breast surgery": "breast_surgery",
        "cardiothoracic": "cardiothoracic",
        "colorectal": "colorectal",
        "endocrine": "endocrine",
        "general surgery": "general_surgery",
        "hpb": "hpb",
        "orthopedic": "orthopedics",
        "pediatric surgery": "pediatric_surgery",
        "plastic surgery": "plastic_surgery",
        "trauma": "trauma",
        "urology": "urology",
        "vascular": "vascular"
    }
    s = spec.lower().strip()
    return mapping.get(s, "general_surgery")

def save_to_module(q):
    spec_file = normalize_specialty(q.get('specialty', 'General Surgery'))
    filepath = f"js/questions/{spec_file}.js"
    
    with file_lock:
        # Check if ID already exists and append
        if os.path.exists(filepath):
            with open(filepath, 'r') as f:
                raw = f.read()
                if f'"id": {q["id"]}' in raw or f'"id":{q["id"]}' in raw:
                    return False
            
            # Append to existing file
            if "]);" in raw:
                new_content = raw.rsplit("]);", 1)[0]
                if new_content.strip().endswith('['):
                    new_content += "\n" + json.dumps(q, indent=2) + "\n]);\n"
                else:
                    new_content += ",\n" + json.dumps(q, indent=2) + "\n]);\n"
                with open(filepath, 'w') as f:
                    f.write(new_content)
            else:
                return False
        else:
            # Create new file
            with open(filepath, 'w') as f:
                f.write("if (!window.QUESTIONS) window.QUESTIONS = [];\n")
                f.write("window.QUESTIONS.push(...[\n")
                f.write(json.dumps(q, indent=2))
                f.write("\n]);\n")
                
        return True

def process_q(q):
    if not q.get('question') or len(q['question']) < 20 or "Incorrect distractor" in str(q):
        return None
        
    opts = q.get('options', {})
    if not all(k in opts and isinstance(opts[k], str) and len(opts[k].strip()) > 1 for k in ['A', 'B', 'C', 'D']):
        return None

    sharp_data = get_sharp_debrief(q)
    if not sharp_data or sharp_data.get('status') != 'ACCEPT':
        sharp_data = build_fallback_sharp(q, q.get('answer', 'A'))
    
    if sharp_data and sharp_data.get('status') == 'ACCEPT':
        final_q = {
            "id": q.get('id', random.randint(10000, 99999)),
            "specialty": q.get('specialty', 'General Surgery'),
            "topic": q.get('topic', 'General'),
            "question": q['question'],
            "options": q.get('options', {}),
            "answer": sharp_data.get('verified_answer', q.get('answer', 'A')),
            "explanation": {
                "correct": sharp_data.get('highlight_excellence', ''),
                "A": "", "B": "", "C": "", "D": "", "E": ""
            },
            "sharp": {
                "set_the_stage": sharp_data.get('set_the_stage', ''),
                "highlight_excellence": sharp_data.get('highlight_excellence', ''),
                "address_gaps": sharp_data.get('address_gaps', ''),
                "review_learning_points": sharp_data.get('review_learning_points', ''),
                "plan": sharp_data.get('plan', sharp_data.get('plan_for_improvement', '')),
                "plan_for_improvement": sharp_data.get('plan_for_improvement', sharp_data.get('plan', ''))
            },
            "guideline": sharp_data.get('guideline', ''),
            "takeaway": sharp_data.get('takeaway', ''),
            "visualization": sharp_data.get('visualization', '')
        }
        
        if save_to_module(final_q):
            return final_q
    return None

def main():
    print("--- Starting Bulk SHARP Processor (Concurrent) ---")
    
    sources = ['transformed_questions.json', 'js/questions.js.bak', 'MCQ Bank/rush_questions.json', 'MCQ Bank/parsed_txt_questions.json']
    all_raw_questions = []
    
    for s in sources:
        print(f"Loading {s}...")
        data = load_json_array(s)
        all_raw_questions.extend(data)
        
    print(f"Total raw questions loaded: {len(all_raw_questions)}")
    
    # Shuffle so we get a good mix
    random.shuffle(all_raw_questions)
    
    success_count = 0
    target_count = 2000
    
    # Use 4 parallel workers. This gives ~3-4x speedup 
    # without instantly triggering Free Tier API rate limits.
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(process_q, q): q for q in all_raw_questions}
        for future in as_completed(futures):
            res = future.result()
            if res:
                success_count += 1
                print(f"[{success_count}/2000] Saved Q#{res['id']} to {normalize_specialty(res['specialty'])}.js")
            
            if success_count >= target_count:
                print("Reached target of 2000 questions!")
                break

if __name__ == "__main__":
    main()
