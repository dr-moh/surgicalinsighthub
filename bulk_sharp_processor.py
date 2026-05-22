import json
print("Imports loaded: json")
import os
print("Imports loaded: os")
import time
import re
import random
import threading
print("Imports loaded: threading")
from concurrent.futures import ThreadPoolExecutor, as_completed
print("Imports loaded: concurrent")

print("Initializing GenAI client...")
try:
    from google import genai
    from google.genai import types
    print("GenAI imported")
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
You are a world-class surgical educator and medical board examiner. Your task is to process the following medical MCQ and format it strictly into the SHARP 4.0 Cognitive & Surgical Debriefing Schema.

SHARP 4.0 FORMATTING RULES:
1. STRUCTURE & FORMATTING: Create a clear informational hierarchy. Use horizontal rules to clearly separate major sections. Format any structured lists or classification systems into clean Markdown tables with distinct column headers.
2. BULLET POINT NESTING RULES: Break down dense paragraphs into bullet points. NEVER combine multiple separate facts or steps into a single bullet point. If a point introduces a sub-concept, sub-type, or consequence, immediately indent it as a nested sub-bullet.
3. WRITING STYLE: Use bullets heavily. Use **bold text** for key clinical or technical terms at the start of a point to maximize visual scannability.

OUTPUT FORMAT:
Return ONLY a valid JSON object with the key "questions". No markdown wrappers, no conversational text.

SCHEMA FOR THE OUTPUT JSON:
{{
  "questions": [
    {{
      "specialty": "Primary medical/surgical specialty",
      "topic": "Core anatomical or disease system",
      "sub_topic": "Specific pathology or operation",
      "question": "The clinical stem or technical question. High-yield, board-style. Strip out all leaked answers completely.",
      "options": [
        "A) Option 1",
        "B) Option 2",
        "C) Option 3",
        "D) Option 4"
      ],
      "correct_answer": "The full text of the correct option",
      "sharp_3_debrief": {{
        "S_set_the_stage": {{
          "verdict": "Correct: [Letter]. [Direct answer confirmation].",
          "pivot": "[1-2 punchy sentences identifying the exact clinical crux]."
        }},
        "H_highlight_excellence": {{
          "surgical_mechanism": "[Deep dive into underlying surgical anatomy/pathophysiology using strict **bold-prefixed bullets**].",
          "clinical_execution": "[Explain why this specific mechanism dictates the selected maneuver using strict **bold-prefixed bullets**]."
        }},
        "A_address_the_gaps": {{
          "distractor_breakdown": [
            {{
              "option": "Wrong Option Letter (e.g., A)",
              "reason": "[Specific reason this option fails using strict bullet point rules]."
            }}
          ]
        }},
        "R_review_learning_points": {{
          "conceptual_overview": "[Macro-level clinical summary].",
          "matrix_headers": ["Classification/System/Criteria", "Key Diagnostic/Imaging Finding", "Immediate Surgical/Clinical Pivot", "Core Guideline/Surgical Society Consensus"],
          "matrix_rows": [
            ["Type/Stage/Grade A", "Pathognomonic clue or threshold", "First-line maneuver or intervention", "e.g., SAGES, ASCRS, ATLS, ASA, Tokyo"],
            ["Type/Stage/Grade B", "Pathognomonic clue or threshold", "First-line maneuver or intervention", "e.g., SAGES, ASCRS, ATLS, ASA, Tokyo"]
          ]
        }},
        "P_plan_for_improvement": {{
          "board_pearl": "[A single, high-density, conditional 'if/then' rule optimized for rapid recall]."
        }}
      }},
      "supplementary_callouts": {{
        "society_guideline": "[The primary, most current society guideline or consensus statement referenced].",
        "key_takeaway": "[A one-sentence, razor-sharp summary of the core clinical fact tested by this item].",
        "visualization": "[Describe exactly what the surgeon must 'see']."
      }}
    }}
  ]
}}

QUALITY CONTROLS:
- Apply the SHARP 4.0 bullet point nesting rules rigorously to the `surgical_mechanism`, `clinical_execution`, and `reason` fields.
- Use bolded keywords at the start of bullets.
- Do NOT output dense paragraphs.

Provided MCQ Text:
Q: {question_obj.get('question', '')}
Options: {json.dumps(question_obj.get('options', dict()))}
Answer Key: {question_obj.get('answer', '')}
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
                    res = json.loads(match.group(0))
                    if res.get('status') == 'REJECT':
                        return {'status': 'REJECT'}
                    if 'questions' in res and len(res['questions']) > 0:
                        q_data = res['questions'][0]
                        q_data['status'] = 'ACCEPT'
                        return q_data
                except Exception:
                    pass
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
                    res = json.loads(match.group(0))
                    if 'questions' in res and len(res['questions']) > 0:
                        q_data = res['questions'][0]
                        q_data['status'] = 'ACCEPT'
                        return q_data
                except Exception:
                    pass
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
                        res = json.loads(match.group(0))
                        if 'questions' in res and len(res['questions']) > 0:
                            q_data = res['questions'][0]
                            q_data['status'] = 'ACCEPT'
                            return q_data
                    except Exception:
                        pass
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
        try:
            # Handle SHARP 3.0 new schema vs fallback old schema
            s3 = sharp_data.get('sharp_3_debrief')
            if s3 and isinstance(s3, dict):
                s_obj = s3.get('S_set_the_stage', {})
                if not isinstance(s_obj, dict): s_obj = {}
                s_text = f"**Verdict:** {s_obj.get('verdict', '')}\\n\\n**The Pivot:** {s_obj.get('pivot', '')}".strip()
                
                h_obj = s3.get('H_highlight_excellence', {})
                if not isinstance(h_obj, dict): h_obj = {}
                h_text = f"**Surgical Mechanism:** {h_obj.get('surgical_mechanism', '')}\\n\\n**Clinical Execution:** {h_obj.get('clinical_execution', '')}".strip()
                
                a_obj = s3.get('A_address_the_gaps', {})
                if not isinstance(a_obj, dict): a_obj = {}
                distractors = a_obj.get('distractor_breakdown', [])
                if not isinstance(distractors, list): distractors = []
                expl_A = next((d.get('reason', '') for d in distractors if isinstance(d, dict) and str(d.get('option', '')).strip().upper().startswith('A')), '')
                expl_B = next((d.get('reason', '') for d in distractors if isinstance(d, dict) and str(d.get('option', '')).strip().upper().startswith('B')), '')
                expl_C = next((d.get('reason', '') for d in distractors if isinstance(d, dict) and str(d.get('option', '')).strip().upper().startswith('C')), '')
                expl_D = next((d.get('reason', '') for d in distractors if isinstance(d, dict) and str(d.get('option', '')).strip().upper().startswith('D')), '')
                
                r_obj = s3.get('R_review_learning_points', {})
                if not isinstance(r_obj, dict): r_obj = {}
                r_text = f"**Conceptual Overview:** {r_obj.get('conceptual_overview', '')}\\n\\n"
                headers = r_obj.get('matrix_headers', [])
                if isinstance(headers, list) and headers:
                    r_text += "| " + " | ".join(str(h) for h in headers) + " |\\n"
                    r_text += "| " + " | ".join(["---"] * len(headers)) + " |\\n"
                    rows = r_obj.get('matrix_rows', [])
                    if isinstance(rows, list):
                        for row in rows:
                            if isinstance(row, list):
                                r_text += "| " + " | ".join(str(c) for c in row) + " |\\n"
                r_text = r_text.strip()
                
                p_obj = s3.get('P_plan_for_improvement', {})
                if not isinstance(p_obj, dict): p_obj = {}
                p_text = f"**The Board Pearl:** *{p_obj.get('board_pearl', '')}*".strip()
                
                supp = sharp_data.get('supplementary_callouts', {})
                if not isinstance(supp, dict): supp = {}
                g_text = supp.get('society_guideline', '')
                t_text = supp.get('key_takeaway', '')
                v_text = supp.get('visualization', '')
                
                ca_raw = str(sharp_data.get('correct_answer', 'A')).strip()
                ca_letter = ca_raw[0] if ca_raw else q.get('answer', 'A')
                spec = sharp_data.get('specialty', q.get('specialty', 'General Surgery'))
                top = sharp_data.get('topic', q.get('topic', 'General'))
                q_text = sharp_data.get('question', q['question'])
                
                opts = sharp_data.get('options', [])
                opt_dict = q.get('options', {})
                if isinstance(opts, list) and len(opts) >= 4:
                    opt_dict = {'A': opts[0], 'B': opts[1], 'C': opts[2], 'D': opts[3]}
            else:
                s_text = sharp_data.get('set_the_stage', '')
                h_text = sharp_data.get('highlight_excellence', '')
                expl_A = sharp_data.get('explanation_A', '')
                expl_B = sharp_data.get('explanation_B', '')
                expl_C = sharp_data.get('explanation_C', '')
                expl_D = sharp_data.get('explanation_D', '')
                r_text = sharp_data.get('review_learning_points', '')
                p_text = sharp_data.get('plan_for_improvement', '')
                ca_letter = sharp_data.get('correct_answer', q.get('answer', 'A'))
                spec = sharp_data.get('specialty', q.get('specialty', 'General Surgery'))
                top = sharp_data.get('topic', q.get('topic', 'General'))
                q_text = sharp_data.get('question', q['question'])
                opt_dict = sharp_data.get('options', q.get('options', {}))
                g_text = ''
                t_text = ''
                v_text = ''
        except Exception as e:
            print(f"Error parsing SHARP schema: {e}")
            return None
            
        final_q = {
            "id": q.get('id', random.randint(10000, 99999)),
            "specialty": spec,
            "topic": top,
            "question": q_text,
            "options": opt_dict,
            "answer": ca_letter,
            "explanation": {
                "correct": h_text,
                "A": expl_A,
                "B": expl_B,
                "C": expl_C,
                "D": expl_D,
                "E": ""
            },
            "sharp_debrief": {
                "S_set_the_stage": s_text,
                "H_highlight_excellence": h_text,
                "A_address_the_gaps": "",
                "R_review_learning_points": r_text,
                "P_plan_for_improvement": p_text
            },
            "supplementary_callouts": {
                "guideline": g_text,
                "takeaway": t_text,
                "visualization": v_text
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
    
    # Fast deduplication: Scan existing JS files for IDs
    existing_ids = set()
    questions_dir = 'js/questions'
    if os.path.exists(questions_dir):
        import glob
        for file in glob.glob(f"{questions_dir}/*.js"):
            with open(file, 'r') as f:
                content = f.read()
                # Find all "id": 12345 or "id": "12345"
                import re
                matches = re.findall(r'"id"\s*:\s*([^,\}\s]+)', content)
                for m in matches:
                    existing_ids.add(m.strip('"').strip("'"))
    
    print(f"Found {len(existing_ids)} already processed questions.")
    
    # Filter out already processed
    def get_q_id(q):
        return str(q.get('id', ''))
        
    all_raw_questions = [q for q in all_raw_questions if get_q_id(q) not in existing_ids or not get_q_id(q)]
    print(f"Remaining questions to process: {len(all_raw_questions)}")
    
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
