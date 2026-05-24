import json
import os
import time
import random
import re
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests
import itertools
from google import genai
from google.genai import types

# Helper to load key-value pairs from .env-like files
def load_env_file(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            # Try to parse even if commented out with # but contains a valid key=value pattern
            if line.startswith("#"):
                # strip the hash and try to match a pattern like "KEY=VALUE"
                candidate = line[1:].strip()
                if "=" in candidate and not candidate.startswith("Use this") and not candidate.startswith("AI Provider"):
                    line = candidate
                else:
                    continue
            if "=" in line:
                key, val = line.split("=", 1)
                key = key.strip()
                val = val.strip()
                if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
                    val = val[1:-1]
                if key and val:
                    os.environ[key] = val

# Load all env files
load_env_file(".env")
load_env_file("openprovider-provider-keys-2026-05-22.env")
load_env_file("AI Provider API keys.env.txt")

ATXP_CONNECTION = os.environ.get("ATXP_CONNECTION") or ""
GROQ_API_KEY = os.environ.get("GROQ_API_KEY") or ""
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY") or ""

groq_lock = threading.Lock()
gemini_lock = threading.Lock()
vertex_lock = threading.Lock()

ATXP_MODELS = [
    "google-ai-studio/gemini-3.5-flash",
    "google-ai-studio/gemini-2.5-flash",
    "google-ai-studio/gemini-2.5-pro",
    "openai/gpt-4o-mini",
    "openai/gpt-4o",
    "anthropic/claude-3-5-sonnet-20241022",
    "anthropic/claude-3-5-haiku-20241022",
    "google-ai-studio/gemini-1.5-flash",
    "deepseek/deepseek-chat-v3"
]

MODEL = "llama-3.3-70b-versatile"

SHARP_4_PROMPT = """You are an expert medical educator and data engineer. 
I will provide you with a severely corrupted Multiple Choice Question (MCQ).
The text has suffered extreme OCR damage (e.g. spaces between every letter) and the correct answer or explanation has been leaked directly into the question text or options.

Your job is to read the garbled text, reconstruct the actual question, the 4 or 5 options, the correct answer, AND generate a SHARP 4.0 Debrief.

SHARP 4.0 FORMATTING RULES:
1. STRUCTURE: Create a clear informational hierarchy.
2. BULLETS: Break down all dense paragraphs into bullet points. NEVER combine multiple separate facts into a single bullet. If a point introduces a sub-concept, indent it as a nested sub-bullet.
3. SCANNABILITY: Use **bold text** for key clinical or technical terms at the start of a point.

OUTPUT JSON ONLY. Do not wrap in markdown blocks, just output the raw JSON object.
Use this exact JSON format:
{
  "question": "The reconstructed question text without any answer leaks?",
  "options": {
    "A": "Option A text",
    "B": "Option B text",
    "C": "Option C text",
    "D": "Option D text"
  },
  "answer": "A",
  "explanation": {
    "correct": "Why the correct answer is right",
    "A": "Why A is right/wrong",
    "B": "Why B is right/wrong",
    "C": "Why C is right/wrong",
    "D": "Why D is right/wrong"
  },
  "sharp_debrief": {
    "S_set_the_stage": "**Verdict:** Correct: A.\\n\\n**The Pivot:** 1-2 punchy sentences identifying the exact clinical crux.",
    "H_highlight_excellence": "**Surgical Mechanism:** Deep dive into pathophysiology using strict bullets.\\n\\n**Clinical Execution:** Explain specific maneuvers using strict bullets.",
    "A_address_the_gaps": "",
    "R_review_learning_points": "**Conceptual Overview:** Macro summary.\\n\\n| Classification | Key Finding | Immediate Pivot | Guideline |\\n|---|---|---|---|\\n| Type A | Finding | Action | Guideline |",
    "P_plan_for_improvement": "**The Board Pearl:** *A single unforgettable heuristic.*"
  },
  "supplementary_callouts": {
    "guideline": "Primary society guideline referenced",
    "takeaway": "One-sentence takeaway",
    "visualization": "What the surgeon must 'see'"
  },
  "specialty": "General Surgery",
  "topic": "General"
}
Ensure the output is clean JSON."""

def call_atxp_repair(prompt):
    url = "https://llm.atxp.ai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {ATXP_CONNECTION}", "Content-Type": "application/json"}
    
    for model in ATXP_MODELS:
        payload = {
            "model": model,
            "messages": [{"role": "system", "content": "Output clean JSON only."}, {"role": "user", "content": prompt}],
            "temperature": 0.1,
            "response_format": {"type": "json_object"}
        }
        try:
            resp = requests.post(url, headers=headers, json=payload, timeout=15)
            if resp.status_code == 429:
                continue # Try next model
            resp.raise_for_status()
            content = resp.json()["choices"][0]["message"]["content"].strip()
            if content.startswith("```json"): content = content[7:]
            if content.endswith("```"): content = content[:-3]
            return json.loads(content.strip(), strict=False)
        except Exception:
            continue # Try next model
            
    return None # All ATXP models exhausted

def call_groq_repair(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {GROQ_API_KEY}", "Content-Type": "application/json"}
    payload = {
        "model": MODEL,
        "messages": [{"role": "system", "content": "Output clean JSON only."}, {"role": "user", "content": prompt}],
        "temperature": 0.1,
        "response_format": {"type": "json_object"}
    }
    
    with groq_lock:
        time.sleep(2.1) # Strictly respect 30 RPM
        try:
            resp = requests.post(url, headers=headers, json=payload, timeout=60)
            resp.raise_for_status()
            content = resp.json()["choices"][0]["message"]["content"].strip()
            if content.startswith("```json"): content = content[7:]
            if content.endswith("```"): content = content[:-3]
            return json.loads(content.strip(), strict=False)
        except Exception as e:
            print(f"Groq fallback failed: {e}")
            return None

vertex_client = None
def call_vertex_repair(prompt):
    global vertex_client
    with vertex_lock:
        try:
            if vertex_client is None:
                vertex_client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
            response = vertex_client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt,
                config=types.GenerateContentConfig(
                    system_instruction="Output clean JSON only.",
                    response_mime_type="application/json",
                    temperature=0.1
                )
            )
            content = response.text.strip()
            if content.startswith("```json"): content = content[7:]
            if content.endswith("```"): content = content[:-3]
            return json.loads(content.strip(), strict=False)
        except Exception as e:
            print(f"Vertex AI fallback failed: {e}")
            return None

def call_gemini_repair(prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "systemInstruction": {"parts": [{"text": "Output clean JSON only."}]},
        "generationConfig": {
            "temperature": 0.1,
            "responseMimeType": "application/json"
        }
    }
    
    with gemini_lock:
        time.sleep(4.1) # Respect Gemini free tier 15 RPM
        try:
            resp = requests.post(url, headers={"Content-Type": "application/json"}, json=payload, timeout=60)
            resp.raise_for_status()
            content = resp.json()["candidates"][0]["content"]["parts"][0]["text"].strip()
            if content.startswith("```json"): content = content[7:]
            if content.endswith("```"): content = content[:-3]
            return json.loads(content.strip(), strict=False)
        except Exception as e:
            print(f"Gemini fallback failed: {e}")
            return None

def process_question(item):
    corrupted_text = item.get("question", "") + "\n" + "\n".join(item.get("options", [])) if isinstance(item.get("options"), list) else item.get("question", "") + "\n" + str(item.get("options", ""))
    
    prompt = f"{SHARP_4_PROMPT}\n\nCORRUPTED TEXT TO REPAIR:\n{corrupted_text}"
    
    # Try all ATXP models first
    repaired_json = call_atxp_repair(prompt)
    
    # If ATXP is totally exhausted, fall back to Groq
    if not repaired_json:
        repaired_json = call_groq_repair(prompt)
        
    # If Groq also fails, fall back to Enterprise Vertex AI
    if not repaired_json:
        repaired_json = call_vertex_repair(prompt)
        
    # If Vertex AI fails, fall back to Gemini Developer API
    if not repaired_json:
        repaired_json = call_gemini_repair(prompt)

    if repaired_json:
        repaired_json["id"] = item.get("id")
        return repaired_json
    return None

def main():
    bad_mcqs_path = "compiled_mcqs/removed_bad_mcqs.json"
    recovered_path = "compiled_mcqs/Recovered.json"
    
    if not os.path.exists(bad_mcqs_path):
        print("No bad MCQs found to process.")
        return
        
    with open(bad_mcqs_path, "r", encoding="utf-8") as f:
        bad_mcqs = json.load(f)
        
    print(f"Loaded {len(bad_mcqs)} corrupted questions.")
    
    recovered_mcqs = []
    if os.path.exists(recovered_path):
        with open(recovered_path, "r", encoding="utf-8") as f:
            try:
                recovered_mcqs = json.load(f)
            except:
                pass
                
    recovered_ids = {str(q.get("id")) for q in recovered_mcqs}
    to_process = [q for q in bad_mcqs if str(q.get("id")) not in recovered_ids]
    print(f"Skipping {len(recovered_mcqs)} already recovered. Processing {len(to_process)} questions...")
    
    limit = len(to_process)
    success_count = 0
    fail_count = 0
    
    print(f"Processing in background using 4-tier waterfall: ATXP (models), Groq, Vertex AI, Gemini AI Studio. 20 workers...", flush=True)
    with ThreadPoolExecutor(max_workers=20) as executor:
        futures = {executor.submit(process_question, q): q for q in to_process[:limit]}
        
        for i, future in enumerate(as_completed(futures)):
            result = future.result()
            if result:
                recovered_mcqs.append(result)
                success_count += 1
            else:
                fail_count += 1
                
            if i > 0 and i % 50 == 0:
                print(f"Progress: {i}/{limit} | Success: {success_count} | Failed: {fail_count}", flush=True)
                with open(recovered_path, "w", encoding="utf-8") as f:
                    json.dump(recovered_mcqs, f, indent=4)
                    
    with open(recovered_path, "w", encoding="utf-8") as f:
        json.dump(recovered_mcqs, f, indent=4)
        
    print(f"\nFinished! Successfully recovered {success_count} out of {limit}. Failed {fail_count}.")

if __name__ == "__main__":
    main()
