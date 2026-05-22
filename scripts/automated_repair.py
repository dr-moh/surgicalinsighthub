import json
import os
import time
import random
import re
from concurrent.futures import ThreadPoolExecutor, as_completed

try:
    from google import genai
    from google.genai import types
    vertex_client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
except Exception as e:
    print(f"Vertex AI failed to initialize: {e}")
    vertex_client = None

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

def call_vertex_repair(corrupted_text):
    if not vertex_client:
        return None
        
    prompt = f"{SHARP_4_PROMPT}\n\nCORRUPTED TEXT TO REPAIR:\n{corrupted_text}"
    
    max_retries = 8
    for attempt in range(max_retries):
        try:
            response = vertex_client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    temperature=0.1
                )
            )
            content = response.text.strip()
            return json.loads(content)
        except Exception as e:
            err_msg = str(e)
            if attempt == max_retries - 1:
                print(f"Failed to repair: {err_msg}")
                return None
            if "429" in err_msg or "RESOURCE_EXHAUSTED" in err_msg:
                wait_time = random.uniform(3.0, 7.0)
                time.sleep(wait_time)
            else:
                time.sleep(1)
            
def process_question(item):
    corrupted_text = item.get("question", "") + "\n" + "\n".join(item.get("options", [])) if isinstance(item.get("options"), list) else item.get("question", "") + "\n" + str(item.get("options", ""))
    
    repaired_json = call_vertex_repair(corrupted_text)
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
    
    print(f"Processing in background using Vertex AI...", flush=True)
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
