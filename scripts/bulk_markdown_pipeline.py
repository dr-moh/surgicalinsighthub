import os
import json
import time
import glob
import random
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

def load_env():
    env_vars = {}
    env_file = "AI Provider API keys.env.txt"
    if os.path.exists(env_file):
        with open(env_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line.startswith('#'):
                    line = line[1:].strip()
                if '=' in line:
                    key, val = line.split('=', 1)
                    if key not in env_vars:
                        env_vars[key.strip()] = []
                    env_vars[key.strip()].append(val.strip())
    return env_vars

ENV = load_env()

GROQ_API_KEY = ENV.get("GROQ_API_KEY", [""])[0]
GEMINI_API_KEY = ENV.get("GEMINI_API_KEY", [""])[0]
OPENROUTER_API_KEY = ENV.get("OPENROUTER_API_KEY", [""])[0]
OLLAMA_ENDPOINTS = ENV.get("LOCAL_OLLAMA_URL", ["http://localhost:11434"])
OLLAMA_MODEL = ENV.get("LOCAL_MODEL_NAME", ["llama3"])[0]

SYSTEM_INSTRUCTION = """You are a world-class surgical educator and medical board examiner. Your task is to extract high-yield medical MCQs from the provided surgical text and format them strictly into the SHARP 3.0 Cognitive & Surgical Debriefing Schema 
Output format should be 
### Surgical Board Practice Item

**Tags:** [Specialty] | [Topic] | [Sub-topic]

### Question [X]
[The clinical stem or technical question. High-yield, board-style. Ensure all leaked answers, tracking indicators, or source index markers are completely stripped out.]

* A) [Option 1]
* B) [Option 2]
* C) [Option 3]
* D) [Option 4]

**Correct Answer:** [The full text of the correct option (e.g., 'A) Option 1')]

---

### SHARP 3.0 Cognitive & Surgical Debrief

* **S – Set the Stage (The Verdict & Diagnostic Pivot)**
  * **Verdict:** Correct: [Letter]. [Direct answer confirmation].
  * **The Pivot:** [1–2 punchy sentences identifying the exact clinical crux, timeline milestone, anatomical boundary, or physiological tipping point that eliminates all diagnostic ambiguity].

* **H – Highlight Excellence (The Surgical "Why" & Pathology)**
  * **Surgical Mechanism:** [Deep dive into underlying surgical anatomy, tissue planes, structural relationships, or pathophysiology. Use precise, expert-level terminology].
  * **Clinical Execution:** [Explain why this specific mechanism dictates the selected surgical maneuver, medical management, or diagnostic path forward for an operating surgeon].

* **A – Address the Gaps (Systematic Distractor Demolition)**
  * **Distractor Breakdown:**
    * *Option [Wrong Letter] (Incorrect):* [Specific anatomical, physiological, or clinical reason this option fails. State exactly how the stem would need to change for this option to become the correct choice].
    * *Option [Wrong Letter] (Incorrect):* [Reasoning].
    * *Option [Wrong Letter] (Incorrect):* [Reasoning].

* **R – Review Learning Points (Evidence-Based Framework)**
  * **Conceptual Overview:** [Macro-level clinical summary of the overarching disease process, anatomical system, or surgical principles involved].
  * **Classification / Management Framework:** 

| [Classification / System / Criteria] | [Key Diagnostic / Imaging Finding] | [Immediate Surgical / Clinical Pivot] | [Core Guideline / Surgical Society Consensus] |
| :--- | :--- | :--- | :--- |
| **[Type / Stage / Grade A]** | [Pathognomonic clue or threshold] | [First-line maneuver or intervention] | [e.g., SAGES, ASCRS, ATLS, ASA, Tokyo] |
| **[Type / Stage / Grade B]** | [Pathognomonic clue or threshold] | [First-line maneuver or intervention] | [e.g., SAGES, ASCRS, ATLS, ASA, Tokyo] |
| **[Type / Stage / Grade C]** | [Pathognomonic clue or threshold] | [First-line maneuver or intervention] | [e.g., SAGES, ASCRS, ATLS, ASA, Tokyo] |

* **P – Plan for Improvement (The Exam Heuristic)**
  * **The Board Pearl:** [A single, high-density, conditional "if/then" rule or unforgettable mental heuristic optimized for rapid recall under exam pressure].

---

### Supplementary Callouts

> **Society Guideline**
> [The primary, most current society guideline or consensus statement referenced—e.g., Tokyo Guidelines, ATLS 10th Edition, SAGES Guidelines, ASCRS Consensus Documents].

> **Key Takeaway**
> [A one-sentence, razor-sharp summary of the core clinical fact tested by this item].

> **Intraoperative / Imaging Visualization**
> [Describe exactly what the surgeon must "see" on cross-sectional imaging, endoscopic evaluation, or when dissecting the tissue plane in the OR to visually confirm this answer]."""

def call_groq(prompt):
    if not GROQ_API_KEY: raise Exception("No GROQ_API_KEY")
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {GROQ_API_KEY}", "Content-Type": "application/json"}
    payload = {
        "model": "llama-3.3-70b-versatile",
        "messages": [{"role": "system", "content": SYSTEM_INSTRUCTION}, {"role": "user", "content": prompt}],
        "temperature": 0.2
    }
    resp = requests.post(url, headers=headers, json=payload, timeout=30)
    resp.raise_for_status()
    return resp.json()["choices"][0]["message"]["content"]

def call_gemini(prompt):
    if not GEMINI_API_KEY: raise Exception("No GEMINI_API_KEY")
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [{"parts": [{"text": SYSTEM_INSTRUCTION + "\n\n" + prompt}]}],
        "generationConfig": {"temperature": 0.2, "topP": 0.8}
    }
    resp = requests.post(url, headers=headers, json=payload, timeout=60)
    resp.raise_for_status()
    return resp.json()["candidates"][0]["content"]["parts"][0]["text"]

def call_openrouter(prompt):
    if not OPENROUTER_API_KEY: raise Exception("No OPENROUTER_API_KEY")
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {"Authorization": f"Bearer {OPENROUTER_API_KEY}", "Content-Type": "application/json"}
    payload = {
        "model": "meta-llama/llama-3.1-8b-instruct:free",
        "messages": [{"role": "system", "content": SYSTEM_INSTRUCTION}, {"role": "user", "content": prompt}],
        "temperature": 0.2
    }
    resp = requests.post(url, headers=headers, json=payload, timeout=60)
    resp.raise_for_status()
    return resp.json()["choices"][0]["message"]["content"]

def call_ollama(prompt):
    if not OLLAMA_ENDPOINTS: raise Exception("No OLLAMA_ENDPOINTS")
    endpoint = random.choice(OLLAMA_ENDPOINTS)
    url = f"{endpoint}/api/generate"
    payload = {
        "model": OLLAMA_MODEL,
        "system": SYSTEM_INSTRUCTION,
        "prompt": prompt,
        "stream": False,
        "options": {"temperature": 0.2, "top_p": 0.8}
    }
    resp = requests.post(url, json=payload, timeout=120)
    resp.raise_for_status()
    return resp.json().get("response", "")

def process_question(q_obj):
    prompt_text = f"Question:\n{q_obj.get('question')}\n\nOptions:\n{json.dumps(q_obj.get('options', {}), indent=2)}\n\nCorrect Answer:\n{q_obj.get('answer', q_obj.get('correct_answer', 'Unknown'))}\n\nSpecialty:\n{q_obj.get('specialty', 'Unknown')}\n"
    
    # Tier 1: Groq
    try:
        res = call_groq(prompt_text)
        if res: return res
    except Exception as e:
        print(f"⚠️ Groq failed: {e}. Falling back to Gemini...")
        
    # Tier 2: Gemini
    try:
        res = call_gemini(prompt_text)
        if res: return res
    except Exception as e:
        print(f"⚠️ Gemini failed: {e}. Falling back to OpenRouter...")
        
    # Tier 3: OpenRouter
    try:
        res = call_openrouter(prompt_text)
        if res: return res
    except Exception as e:
        print(f"⚠️ OpenRouter failed: {e}. Falling back to Ollama...")
        
    # Tier 4: Ollama
    try:
        res = call_ollama(prompt_text)
        if res: return res
    except Exception as e:
        print(f"⚠️ Ollama failed: {e}. All providers exhausted.")
        
    return None

def export_to_js(json_path):
    # Convert compiled_mcqs/File.json to js/questions/file.js
    filename = os.path.basename(json_path)
    base_name = os.path.splitext(filename)[0]
    # Make safe js variable name
    safe_name = base_name.lower().replace(" ", "_").replace("&", "").replace("-", "_")
    js_path = os.path.join("js", "questions", f"{safe_name}.js")
    
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    js_content = f'// Auto-generated by SHARP 3.0 Markdown Pipeline\nif(typeof window !== "undefined") {{\n  window.QUESTIONS = window.QUESTIONS || [];\n  window.QUESTIONS.push(...{json.dumps(data, indent=2)});\n}} else {{\n  module.exports = {json.dumps(data, indent=2)};\n}}\n'
    
    os.makedirs(os.path.dirname(js_path), exist_ok=True)
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        questions = json.load(f)
        
    pending = [q for q in questions if not q.get('markdown_debrief') or q.get('markdown_debrief') == "Failed to generate Markdown."]
    if not pending:
        export_to_js(file_path)
        return
        
    print(f"[{os.path.basename(file_path)}] Processing {len(pending)} pending questions...")
    
    def worker(q):
        md = process_question(q)
        if md:
            q['markdown_debrief'] = md
        else:
            q['markdown_debrief'] = "Failed to generate Markdown."
        
        # Free-tier rate limiter: 4.5 seconds per question = ~13 RPM
        time.sleep(4.5)
        return q
        
    with ThreadPoolExecutor(max_workers=1) as executor:
        futures = {executor.submit(worker, q): q for q in pending}
        
        count = 0
        for future in as_completed(futures):
            count += 1
            if count % 10 == 0:
                print(f"[{os.path.basename(file_path)}] Progress: {count}/{len(pending)}")
                # Save intermediate progress
                with open(file_path, 'w', encoding='utf-8') as out_f:
                    json.dump(questions, out_f, indent=2, ensure_ascii=False)
                export_to_js(file_path)
                
    # Final save
    with open(file_path, 'w', encoding='utf-8') as out_f:
        json.dump(questions, out_f, indent=2, ensure_ascii=False)
    export_to_js(file_path)
    print(f"[{os.path.basename(file_path)}] Finished processing.")

def main():
    files = glob.glob("compiled_mcqs/*.json")
    # Exclude test files
    files = [f for f in files if "test_markdown.json" not in f]
    
    print(f"Found {len(files)} compiled MCQ files to process.")
    for f in files:
        process_file(f)

if __name__ == "__main__":
    main()
