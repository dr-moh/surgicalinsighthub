import json
import os
import time
import re
import random
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

try:
    from google import genai
    from google.genai import types
    vertex_client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
    print("✅ Successfully connected to Google Cloud Vertex AI!")
except Exception as e:
    print(f"⚠️ Vertex AI initialization failed: {e}")
    vertex_client = None

# Load API Key for fallback
if os.path.exists('.env'):
    with open('.env') as f:
        for line in f:
            if '=' in line:
                key, val = line.split('=', 1)
                os.environ[key.strip()] = val.strip()

API_KEY = os.getenv("OPENROUTER_API_KEY")

LOCAL_API_URL = os.getenv("LOCAL_API_URL", os.getenv("LOCAL_OLLAMA_URL", "http://localhost:11434").rstrip('/') + "/v1/chat/completions")
LOCAL_MODEL = os.getenv("LOCAL_MODEL", os.getenv("LOCAL_MODEL_NAME", "gemma3:4b")) # Auto-detected local model

MODELS = [
    "google/gemini-2.5-flash",
    "meta-llama/llama-3-8b-instruct:free",
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

    for key in ['set_the_stage', 'highlight_excellence', 'address_gaps', 'review_learning_points', 'plan', 'guideline', 'takeaway', 'visualization', 'discrepancy_flag', 'explanation_A', 'explanation_B', 'explanation_C', 'explanation_D']:
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
    import urllib.request
    import urllib.error

    prompt = f"""
        Return valid JSON only. No markdown formatting around the JSON (e.g. do not wrap in ```json). No conversational preamble or postscript.
        If the question is invalid, return exactly {{"status": "REJECT"}}.
    
    Q: {question_obj.get('question', '')}
    Options: {json.dumps(question_obj.get('options', {}))}
    Provided Answer Key: {question_obj.get('answer', '')}
    
    You must construct the pedagogical response using the strict SHARP 3.0 Cognitive & Surgical Debrief framework.
    Return a single JSON object matching this schema:
    {{
      "status": "ACCEPT",
      "verified_answer": "{question_obj.get('answer', 'A')}",
      "set_the_stage": "**Verdict:** Correct: [Correct Option Letter]. [Direct, active-voice confirmation of the correct clinical/operative choice].\\n**The Pivot:** [1-2 high-yield sentences identifying the exact clinical crux, timeline milestone, anatomical boundary, or physiological tipping point that eliminates all diagnostic ambiguity].",
      "highlight_excellence": "**Surgical Mechanism:** [Deep dive into underlying surgical anatomy, tissue planes, structural relationships, or pathophysiology. High-density operative/clinical details].\\n**Clinical Execution:** [Nuanced clinical decision-making. Why immediate action or specific management is chosen. Focus on patient safety, staging, and critical pitfalls].",
      "address_gaps": "**Distractor Breakdown:**\\n*Option A (Incorrect):* [Detailed surgical/clinical reasoning why Option A is incorrect in this scenario, what scenario it would be correct for, or its specific pitfall].\\n*Option B (Incorrect):* [Detailed reasoning for B].\\n*Option C (Incorrect):* [Detailed reasoning for C].\\n*Option D (Incorrect):* [Detailed reasoning for D].\\n*(Exclude the correct option from the breakdown list)*",
      "explanation_A": "[Surgical/clinical reasoning why Option A is correct/incorrect, concise and board-focused]",
      "explanation_B": "[Surgical/clinical reasoning why Option B is correct/incorrect, concise and board-focused]",
      "explanation_C": "[Surgical/clinical reasoning why Option C is correct/incorrect, concise and board-focused]",
      "explanation_D": "[Surgical/clinical reasoning why Option D is correct/incorrect, concise and board-focused]",
      "review_learning_points": "**Conceptual Overview:** [1-2 summary sentences linking anatomy/physiology to clinical pathology].\\n**Management Framework (High-Yield Matrix):**\\n\\n[A beautiful, highly structured Markdown comparison matrix/table summarizing diagnostic criteria, staging, anatomy, or management protocols relevant to this topic].",
      "plan": "**The Board Pearl:** *[Key high-yield takeaway in italics wrapped in single asterisks]*\\n**Surgical Action:**\\n1. [Actionable surgical/clinical checklist step 1]\\n2. [Actionable surgical/clinical checklist step 2]",
      "guideline": "[Exact reference to major surgical guideline, e.g., 'SAGES Guidelines for laparoscopic cholecystectomy, 2022' or 'ATLS 10th Edition']",
      "takeaway": "[Concise one-sentence board-style takeaway]",
      "visualization": "[Operative description of what the surgeon sees or does first upon entering the surgical field/anatomy]",
      "discrepancy_flag": ""
    }}
    """
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://surgicalinsighthub.com",
        "X-Title": "Surgical Insight Hub"
    }

    # --- Vertex AI Primary (High Speed & Quality) ---
    if vertex_client:
        try:
            print(f"     [Processing Vertex AI]: Using gemini-2.5-flash...")
            
            def make_vertex_call():
                return vertex_client.models.generate_content(
                    model='gemini-2.5-flash',
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        response_mime_type="application/json",
                        temperature=0.15
                    )
                )
            
            try:
                response = make_vertex_call()
            except Exception as call_err:
                err_msg = str(call_err)
                if "429" in err_msg or "RESOURCE_EXHAUSTED" in err_msg:
                    wait_time = random.uniform(3.0, 7.0)
                    print(f"     [Vertex AI 429] Rate limited. Retrying after {wait_time:.1f}s...")
                    time.sleep(wait_time)
                    response = make_vertex_call()
                else:
                    raise call_err
            
            content = response.text
            match = re.search(r'\{.*\}', content, re.DOTALL)
            if match:
                try:
                    res = normalize_sharp_payload(json.loads(match.group(0)))
                    if res and res.get('status') == 'ACCEPT':
                        return res
                except Exception:
                    recovered = recover_partial_sharp_payload(content)
                    if recovered:
                        return recovered
        except Exception as e:
            print(f"     [Vertex API Skip]: {e} (Falling back to Local...)")

    # --- Local Fallback (Zero Cost) ---
    print(f"     [Processing Local]: Using {LOCAL_MODEL}...")
    try:
        payload = {"model": LOCAL_MODEL, "messages": [{"role": "user", "content": prompt}], "temperature": 0.1, "max_tokens": 2048}
        req = urllib.request.Request(LOCAL_API_URL, data=json.dumps(payload).encode('utf-8'), headers={"Content-Type": "application/json"}, method='POST')
        
        with urllib.request.urlopen(req, timeout=90) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            content = res_data['choices'][0]['message']['content']
            match = re.search(r'\{.*\}', content, re.DOTALL)
            if match:
                try:
                    res = normalize_sharp_payload(json.loads(match.group(0)))
                    if res and res.get('status') == 'ACCEPT':
                        return res
                except Exception:
                    recovered = recover_partial_sharp_payload(content)
                    if recovered:
                        return recovered
    except Exception as e:
        print(f"     [Local API Skip]: {e} (Falling back to OpenRouter...)")

    # --- OpenRouter Fallback ---
    for model in MODELS:
        try:
            payload = {"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.1, "max_tokens": 2048}
            req = urllib.request.Request("https://openrouter.ai/api/v1/chat/completions", data=json.dumps(payload).encode('utf-8'), headers=headers, method='POST')
            
            with urllib.request.urlopen(req, timeout=45) as response:
                res_data = json.loads(response.read().decode('utf-8'))
                content = res_data['choices'][0]['message']['content']
                match = re.search(r'\{.*\}', content, re.DOTALL)
                if match:
                    try:
                        return normalize_sharp_payload(json.loads(match.group(0)))
                    except Exception:
                        recovered = recover_partial_sharp_payload(content)
                        if recovered:
                            return recovered
            time.sleep(0.5) 
        except urllib.error.HTTPError as e:
            if e.code == 429:
                print("     [OpenRouter Rate Limit] Waiting 5s...")
                time.sleep(5)
            continue
        except Exception as e:
            continue
            
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
                id_str = json.dumps(q["id"])
                if f'"id": {id_str}' in raw or f'"id":{id_str}' in raw:
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
                "A": sharp_data.get('explanation_A', ''),
                "B": sharp_data.get('explanation_B', ''),
                "C": sharp_data.get('explanation_C', ''),
                "D": sharp_data.get('explanation_D', ''),
                "E": ""
            },
            "sharp_debrief": {
                "S_set_the_stage": sharp_data.get('set_the_stage', ''),
                "H_highlight_excellence": sharp_data.get('highlight_excellence', ''),
                "A_address_the_gaps": sharp_data.get('address_gaps', ''),
                "R_review_learning_points": sharp_data.get('review_learning_points', ''),
                "P_plan_for_improvement": sharp_data.get('plan', sharp_data.get('plan_for_improvement', ''))
            },
            "supplementary_callouts": {
                "guideline": sharp_data.get('guideline', ''),
                "takeaway": sharp_data.get('takeaway', ''),
                "visualization": sharp_data.get('visualization', '')
            },
            "discrepancy_flag": sharp_data.get('discrepancy_flag', '')
        }
        
        if save_to_module(final_q):
            return final_q
    return None

def main():
    print("--- Starting Bulk SHARP Processor (Concurrent) ---")
    
    # Priority sources including the massive 150k backlog
    sources = [
        'MCQ_extracted.json', 
        'transformed_questions.json', 
        'MCQ Bank/rush_questions.json', 
        'MCQ Bank/parsed_txt_questions.json'
    ]
    all_raw_questions = []
    
    for s in sources:
        if not os.path.exists(s): continue
        print(f"Loading {s}...")
        data = load_json_array(s)
        # Filter out error entries from raw extraction
        valid_data = [q for q in data if isinstance(q, dict) and q.get('question') and not q.get('error')]
        all_raw_questions.extend(valid_data)
        
    print(f"Total valid raw questions loaded: {len(all_raw_questions)}")
    
    # Shuffle so we get a good mix
    random.shuffle(all_raw_questions)
    
    success_count = 0
    target_count = 50000
    
    # Vertex AI can handle massive concurrency. 
    # Slicing the array ensures we don't hold 150k tasks in memory at once.
    questions_to_process = all_raw_questions[:target_count + 5000]
    
    # Configure concurrency safely using environment variable MAX_WORKERS (default to 5).
    max_workers = int(os.getenv("MAX_WORKERS", "5"))
    print(f"⚡ Initializing ThreadPoolExecutor with {max_workers} concurrent workers...")
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(process_q, q): q for q in questions_to_process}
        for future in as_completed(futures):
            res = future.result()
            if res:
                success_count += 1
                print(f"[{success_count}/{target_count}] Saved Q#{res['id']} to {normalize_specialty(res['specialty'])}.js")
            
            if success_count >= target_count:
                print(f"Reached target of {target_count} questions!")
                break

if __name__ == "__main__":
    main()
