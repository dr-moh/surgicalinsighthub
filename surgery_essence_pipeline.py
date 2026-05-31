"""
Surgery Essence SHARP 4.0 Pipeline
==================================
Reads raw_essence.json (Phase 1 output), sends to Vertex AI for extraction + SHARP 4.0 generation,
and saves the result to surgery_essence_4850.js.
"""

import json, os, re, time, warnings
warnings.filterwarnings("ignore")

from google import genai
from google.genai import types

print("Connecting to Vertex AI...")
client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
print("✅ Vertex AI — Gemini 2.5 Flash ready\n")

INPUT_FILE  = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_essence.json"
OUTPUT_FILE = "/Users/dr.moh/Documents/SIH/sih_project/js/questions/surgery_essence_4850.js"
CHECKPOINT  = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/surgery_essence_checkpoint.json"
SAVE_EVERY  = 25

def build_prompt(q):
    lines = [
        "You are an expert surgical board examiner and data extraction AI.",
        "You are given a raw question and its raw answer text from a medical textbook.",
        "1. Extract the clean question text (remove the leading question number).",
        "2. Extract the options into A, B, C, D.",
        "3. Determine the correct answer from the raw_answer text.",
        "4. Write a SHARP 4.0 debrief based on the provided answer.",
        "",
        f"RAW_QUESTION:\n{q['raw_question']}",
        "",
        f"RAW_ANSWER:\n{q['raw_answer']}",
        "",
        "Return ONLY a JSON object with these exact keys. Use \\n for newlines within strings. No literal line breaks.",
        "{",
        '  "status": "ACCEPT",',
        '  "question": "<clean question text>",',
        '  "options": {"A": "<text>", "B": "<text>", "C": "<text>", "D": "<text>"},',
        '  "verified_answer": "<single letter: A B C or D>",',
        '  "verified_answer_text": "<exact text of the correct option>",',
        '  "set_the_stage": "<2-3 sentences: restate the verdict and explain WHY this answer is correct — the clinical/anatomical logic>",',
        '  "highlight_excellence": "<3-5 sentences: the surgical mechanism, anatomical basis, or physiology that makes the answer correct>",',
        '  "address_gaps": "<For each WRONG option write: Option X (Incorrect): [why wrong in 1-2 sentences]. Separate with \\n>",',
        '  "review_learning_points": "<A markdown table comparing 3-4 related items. Must include | header | header | format>",',
        '  "plan": "Board Pearl: <one memorable exam heuristic under 20 words>",',
        '  "imaging_intraoperative_pearl": "<What you would see on CT/X-ray/US/endoscopy OR in the OR for this topic>",',
        '  "guideline_anchor": "<Name the most relevant society guideline with year. State what it recommends>",',
        '  "takeaway": "<One memorable line under 20 words. Make it witty and impossible to forget>",',
        '  "difficulty": "<Easy or Medium or Hard or Very Hard>"',
        "}"
    ]
    return "\n".join(lines)

def safe_parse(text):
    if not text: return None
    try: return json.loads(text)
    except: pass
    
    cleaned = re.sub(r"^```(?:json)?\s*", "", text.strip())
    cleaned = re.sub(r"\s*```$", "", cleaned)
    try: return json.loads(cleaned)
    except: pass
    
    try:
        m = re.search(r"\{[\s\S]*\}", cleaned)
        if m: return json.loads(m.group(0))
    except: pass
    
    try:
        fixed = re.sub(r'(?<!\\)\n(?=[^"]*")', r"\\n", cleaned)
        return json.loads(fixed)
    except: pass
    
    return None

def build_markdown(p):
    tw = p.get("takeaway", "")
    sts = p.get("set_the_stage", "").replace("\\n", "\n")
    he = p.get("highlight_excellence", "").replace("\\n", "\n")
    ag = p.get("address_gaps", "").replace("\\n", "\n")
    rl = p.get("review_learning_points", "").replace("\\n", "\n")
    pl = p.get("plan", "").replace("\\n", "\n")
    img = p.get("imaging_intraoperative_pearl", "").replace("\\n", "\n")
    gl = p.get("guideline_anchor", "").replace("\\n", "\n")
    va = p.get("verified_answer", "?")
    vat = p.get("verified_answer_text", "")
    diff = p.get("difficulty", "Medium")
    
    opts = p.get("options", {})
    rows = "\n".join(f"| {k} | {v[:75]} | {'✅ Correct' if k == va else '❌ Incorrect'} |" for k, v in opts.items())

    return f"""### SHARP 4.0 Cognitive & Surgical Debrief

> **💡 {tw}**

---

## S — Set the Stage
{sts}

## H — Highlight Excellence
{he}

## A — Address the Gaps

{ag}

## R — Review Learning Points

{rl}

## P — Plan (Board Pearl)
{pl}

---

## 🔬 Imaging & Intraoperative Pearl
{img}

## 📋 Guideline Anchor
{gl}

---

### Answer Breakdown
| Option | Text | Status |
|--------|------|--------|
{rows}

**✅ Answer: {va}) {vat}** &nbsp;|&nbsp; **Difficulty: {diff}** &nbsp;|&nbsp; **Source: Surgery Essence**
"""

def enrich_one(q):
    prompt = build_prompt(q)
    for attempt in range(3):
        try:
            resp = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    temperature=0.15,
                    max_output_tokens=2500,
                )
            )
            payload = safe_parse(resp.text)
            if payload and payload.get("status", "").upper() in ("ACCEPT", "ACCEPTED", "OK", "VERIFIED"):
                return payload
        except Exception as e:
            time.sleep(2 ** attempt)
    return None

def main():
    print("=" * 65)
    print("  Phase 2: Extract & SHARP 4.0 Enrichment — Surgery Essence")
    print("=" * 65)
    
    with open(INPUT_FILE, "r") as f:
        raw_items = json.load(f)
        
    checkpoint = []
    if os.path.exists(CHECKPOINT):
        with open(CHECKPOINT, "r") as f:
            checkpoint = json.load(f)
            
    done_ids = {item["id"] for item in checkpoint}
    
    # We assign persistent IDs to these questions based on their original numbering + offset
    # Let's say Surgery Essence starts at ID 100000 to keep it distinct from the 92000 block
    START_ID = 100000
    
    pending = []
    for i, raw in enumerate(raw_items):
        qid = START_ID + i
        if qid not in done_ids:
            pending.append((qid, raw))
            
    total = len(raw_items)
    print(f"  Total           : {total}")
    print(f"  Already Done    : {len(done_ids)}")
    print(f"  To Process      : {len(pending)}")
    
    if not pending:
        print("✅ All done!")
        return
        
    start_time = time.time()
    enriched = 0
    failed = 0
    
    # Pre-populate the final list with already done items to maintain order
    final_questions = {item["id"]: item for item in checkpoint}
    
    print("\n🚀 Starting sequential processing...\n")
    
    for count, (qid, raw) in enumerate(pending, 1):
        payload = enrich_one(raw)
        if payload:
            md = build_markdown(payload)
            va = payload.get("verified_answer", "")
            vat = payload.get("verified_answer_text", "")
            
            final_item = {
                "id": qid,
                "question": payload.get("question", raw["raw_question"]),
                "options": payload.get("options", {}),
                "answer": f"{va}) {vat}",
                "chapter": f"Surgery Essence Chapter {raw.get('chapter_id', 'Unknown')}",
                "specialty": "General Surgery",
                "difficulty": payload.get("difficulty", "Medium"),
                "markdown_debrief": md,
                "verified_answer": va
            }
            final_questions[qid] = final_item
            enriched += 1
            done_ids.add(qid)
        else:
            failed += 1
            
        if count % SAVE_EVERY == 0:
            # Save Checkpoint
            sorted_q = [final_questions[k] for k in sorted(final_questions.keys())]
            with open(CHECKPOINT, "w") as f:
                json.dump(sorted_q, f)
            
            # Save JS file
            header = (
                "// Auto-generated by surgery_essence_pipeline.py\\n"
                "// Source: Surgery Essence by Pritesh\\n"
                f"// Total Processed So Far: {len(sorted_q)}\\n"
                "if(!window.QUESTIONS) window.QUESTIONS = [];\\n"
                f"window.QUESTIONS.push(...{json.dumps(sorted_q, indent=2, ensure_ascii=False)});\\n"
            )
            with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
                f.write(header)
                
            elapsed = time.time() - start_time
            rate = enriched / elapsed if elapsed > 0 else 1
            eta = (len(pending) - count) / rate / 60
            print(f"  💾 Saved [{len(sorted_q)}/{total}] | ✅ {enriched} ❌ {failed} | Rate: {rate:.1f} Q/s | ETA: {eta:.0f} min")

    # Final Save
    sorted_q = [final_questions[k] for k in sorted(final_questions.keys())]
    with open(CHECKPOINT, "w") as f:
        json.dump(sorted_q, f)
    header = (
        "// Auto-generated by surgery_essence_pipeline.py\n"
        "// Source: Surgery Essence by Pritesh\n"
        f"// Total: {len(sorted_q)}\n"
        "if(!window.QUESTIONS) window.QUESTIONS = [];\n"
        f"window.QUESTIONS.push(...{json.dumps(sorted_q, indent=2, ensure_ascii=False)});\n"
    )
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(header)
        
    print(f"\n✅ Finished! Enriched {enriched}, Failed {failed}.")

if __name__ == "__main__":
    main()
