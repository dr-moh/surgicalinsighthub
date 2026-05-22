import os
import json
import time
import glob
import random
import requests
import itertools
from concurrent.futures import ThreadPoolExecutor, as_completed
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")
OLLAMA_ENDPOINTS = [os.environ.get("LOCAL_OLLAMA_URL", "http://localhost:11434")]
OLLAMA_MODEL = os.environ.get("LOCAL_MODEL_NAME", "llama3")

SYSTEM_INSTRUCTION = """You are a world-class surgical educator and medical board examiner. Your task is to extract high-yield medical MCQs from the provided surgical text and format them strictly into the SHARP 4.0 Cognitive & Surgical Debriefing Schema.

Please format all output according to the following strict layout and structural rules:

1. STRUCTURE & FORMATTING:
   - Create a clear informational hierarchy.
   - Use horizontal rules (---) to clearly separate major sections or pillars.
   - Format any structured lists, criteria, scoring, or grading systems into clean Markdown tables with distinct column headers.

2. BULLET POINT NESTING RULES:
   - Break down dense paragraphs into bullet points.
   - Never combine multiple separate facts or steps into a single bullet point.
   - If a point introduces a sub-concept, sub-type, or consequence, immediately indent it as a nested sub-bullet.

3. WRITING STYLE:
   - Use bullets.
   - Use bold text for key clinical or technical terms at the start of a point to maximize visual scannability.

Output format should be:

### 🩺 Surgical Board Practice Item

**Metadata:** [Specialty] | [Topic] | [Sub-topic]
**Target Level:** [medical_student / resident / attending]

**📝 The Clinical Vignette**
[The clinical stem or technical question. High-yield, board-style. Ensure all leaked answers, tracking indicators, or source index markers are completely stripped out.]

* A) [Option 1]
* B) [Option 2]
* C) [Option 3]
* D) [Option 4]

**Correct Answer:** Option [Letter]

---

### ⚡ SHARP 4.0 High-Yield Surgical Debrief

**📌 S – Set the Stage (The Diagnostic Pivot)**
- **The Verdict:** Option [Letter] ([Answer Text]) is correct because [Direct answer confirmation].
- **The Pivot Point:** [The exact 1–2 pathognomonic clinical, laboratory, or imaging triggers in the vignette that unlock the diagnosis].

**🎯 H – Highlight Excellence (The Surgical Mechanism)**
- **Pathophysiology:** [The underlying anatomical, cellular, or pathophysiological flaw].
- **Gold-Standard Execution:** [Why this is the single best management path to optimize survival or avoid catastrophe].
- **👁️ Mental Operative Theatre:** [A vivid description of the pathognomonic radiological or intraoperative findings. What does the surgeon see, feel, or encounter?]

**❌ A – Address the Gaps (Distractor Demolition)**
- **Option [Wrong Letter] (Incorrect):** [Explains why it fails here, but identifies the exact clinical scenario where this option WOULD be the correct choice].
- **Option [Wrong Letter] (Incorrect):** [Reasoning].
- **Option [Wrong Letter] (Incorrect):** [Reasoning].

**📊 R – Review Learning Points (The Evidence-Based Matrix)**
- **Core Principle:** [Cites the specific conceptual core principle or rule].
- **Classification / Decision Tree:**

| [Classification / System / Criteria] | [Key Diagnostic / Imaging Finding] | [Immediate Surgical / Clinical Pivot] | [Core Guideline / Surgical Society Consensus] |
| :--- | :--- | :--- | :--- |
| **[Type / Stage / Grade A]** | [Pathognomonic clue or threshold] | [First-line maneuver or intervention] | [e.g., SAGES, ASCRS, ATLS, ASA, Tokyo] |
| **[Type / Stage / Grade B]** | [Pathognomonic clue or threshold] | [First-line maneuver or intervention] | [e.g., SAGES, ASCRS, ATLS, ASA, Tokyo] |

> **⚠️ Guideline Consensus & Discrepancies**
> - **Standard Textbooks (Bailey & Love / Sabiston):** [Standard text teaching]
> - **Society Guidelines (ATLS / SAGES / NCCN):** [Current guideline teaching]
> - **The Conflict:** [Flags if the exam answer differs from real-world practice or if guidelines conflict].

**💡 P – Plan for Improvement (The Rapid-Fire Heuristic)**
- **The Board Pearl:** [A 1-sentence, high-yield "If X, then do Y" rule for rapid retention].
"""

PREMIUM_MODELS = [
    "openai/gpt-4o-mini",
    "anthropic/claude-3-5-haiku-20241022",
    "google-ai-studio/gemini-flash-1.5",
    "mistral/ministral-8b",
    "groq/llama-3.1-8b-instant"
]
model_cycle = itertools.cycle(PREMIUM_MODELS)

def call_atxp(prompt):
    ATXP_CONNECTION = "https://accounts.atxp.ai?connection_token=I8ybZQAMDOfH42JDuv76M&account_id=atxp_acct_TyqIFldoHcKLRF4gA0gE0"
    url = "https://llm.atxp.ai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {ATXP_CONNECTION}", "Content-Type": "application/json"}
    
    current_model = next(model_cycle)
    payload = {
        "model": current_model,
        "messages": [{"role": "system", "content": SYSTEM_INSTRUCTION}, {"role": "user", "content": prompt}],
        "temperature": 0.2
    }
    
    max_retries = 10
    for attempt in range(max_retries):
        try:
            resp = requests.post(url, headers=headers, json=payload, timeout=60)
            resp.raise_for_status()
            return resp.json()["choices"][0]["message"]["content"]
        except requests.exceptions.HTTPError as e:
            if resp.status_code == 429:
                print(f"⚠️ ATXP 429 Rate Limit. Backing off for {2 ** attempt}s...")
                time.sleep(2 ** attempt)
            else:
                raise e
        except Exception as e:
            if attempt == max_retries - 1:
                raise e
            time.sleep(2 ** attempt)
            
    raise Exception("Max retries exceeded for ATXP")

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
    
    # Tier 1: ATXP Premium Gateway (Blazing Fast)
    try:
        res = call_atxp(prompt_text)
        if res: return res
    except Exception as e:
        print(f"⚠️ ATXP failed: {e}. Falling back to Ollama...")
        
    # Tier 2: Ollama Local
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
        
        return q
        
    with ThreadPoolExecutor(max_workers=5) as executor:
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
