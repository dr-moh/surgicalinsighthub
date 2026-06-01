"""
1001 MCQs SHARP 4.0 Pipeline (Stage 2)
======================================
Reads raw_1001_mcqs.json, sends to Vertex AI concurrently using AsyncIO,
and saves the result to 1001_mcqs.js.
"""

import json, os, re, time, warnings, asyncio
warnings.filterwarnings("ignore")

from google import genai
from google.genai import types

print("Connecting to Vertex AI...")
client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
print("✅ Vertex AI — Gemini 2.5 Flash ready (Async)\n")

INPUT_FILE  = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_1001_mcqs.json"
OUTPUT_FILE = "/Users/dr.moh/Documents/SIH/sih_project/js/questions/1001_mcqs.js"
CHECKPOINT  = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/1001_mcqs_checkpoint.json"
SAVE_EVERY  = 20
CONCURRENCY = 20

def build_prompt(q):
    lines = [
        "You are an expert surgical board examiner and data extraction AI.",
        "You are given a raw question and its extracted options from a medical textbook.",
        "Write a SHARP 4.0 debrief based on the provided answer.",
        "",
        f"QUESTION:\n{q.get('question', '')}",
        "",
        f"OPTIONS:\n{json.dumps(q.get('options', {}), indent=2)}",
        "",
        f"CORRECT ANSWER KEY:\n{q.get('answer_key', '')} - {q.get('raw_answer_text', '')}",
        "",
        "Return ONLY a JSON object with these exact keys. Use \\n for newlines within strings. No literal line breaks.",
        "{",
        '  "status": "ACCEPT",',
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

def build_markdown(p, q):
    tw = p.get("takeaway", "")
    sts = p.get("set_the_stage", "").replace("\\n", "\n")
    he = p.get("highlight_excellence", "").replace("\\n", "\n")
    ag = p.get("address_gaps", "").replace("\\n", "\n")
    rl = p.get("review_learning_points", "").replace("\\n", "\n")
    pl = p.get("plan", "").replace("\\n", "\n")
    img = p.get("imaging_intraoperative_pearl", "").replace("\\n", "\n")
    gl = p.get("guideline_anchor", "").replace("\\n", "\n")
    diff = p.get("difficulty", "Medium")
    
    va = q.get("answer_key", "?")
    vat = q.get("raw_answer_text", "")
    
    opts = q.get("options", {})
    # Mark correct options. answer_key might be "A, C"
    va_list = [ans.strip() for ans in va.split(",")]
    
    rows = "\n".join(f"| {k} | {v[:75]} | {'✅ Correct' if k in va_list else '❌ Incorrect'} |" for k, v in opts.items())

    return f"### SHARP 4.0 Cognitive & Surgical Debrief\n\n> **💡 {tw}**\n\n---\n\n## S — Set the Stage\n{sts}\n\n## H — Highlight Excellence\n{he}\n\n## A — Address the Gaps\n\n{ag}\n\n## R — Review Learning Points\n\n{rl}\n\n## P — Plan (Board Pearl)\n{pl}\n\n---\n\n## 🔬 Imaging & Intraoperative Pearl\n{img}\n\n## 📋 Guideline Anchor\n{gl}\n\n---\n\n### Answer Breakdown\n| Option | Text | Status |\n|--------|------|--------|\n{rows}\n\n**✅ Answer: {va}) {vat}** &nbsp;|&nbsp; **Difficulty: {diff}** &nbsp;|&nbsp; **Source: 1001 MCQs**\n"

async def enrich_one(q, semaphore):
    async with semaphore:
        prompt = build_prompt(q)
        for attempt in range(2):
            try:
                resp = await client.aio.models.generate_content(
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
                await asyncio.sleep(1 + attempt)
        return None

async def main():
    print("=" * 65)
    print("  Stage 2: SHARP 4.0 Enrichment — 1001 MCQs (ASYNC)")
    print("=" * 65)
    
    with open(INPUT_FILE, "r") as f:
        raw_items = json.load(f)
        
    checkpoint = []
    if os.path.exists(CHECKPOINT):
        with open(CHECKPOINT, "r") as f:
            checkpoint = json.load(f)
            
    done_ids = {item["id"] for item in checkpoint}
    
    START_ID = 110000
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
    processed = 0
    
    final_questions = {item["id"]: item for item in checkpoint}
    semaphore = asyncio.Semaphore(CONCURRENCY)
    
    print(f"\n🚀 Starting async processing with concurrency {CONCURRENCY}...\n")
    
    async def process_task(qid, raw):
        nonlocal enriched, failed, processed
        payload = await enrich_one(raw, semaphore)
        if payload:
            md = build_markdown(payload, raw)
            va = raw.get("answer_key", "")
            vat = raw.get("raw_answer_text", "")
            final_questions[qid] = {
                "id": qid,
                "question": raw.get("question", ""),
                "options": raw.get("options", {}),
                "answer": f"{va}) {vat}",
                "chapter": "General Surgery",
                "specialty": "General Surgery",
                "difficulty": payload.get("difficulty", "Medium"),
                "markdown_debrief": md,
                "verified_answer": va
            }
            enriched += 1
        else:
            failed += 1
        
        processed += 1
        
        if processed % SAVE_EVERY == 0:
            sorted_q = [final_questions[k] for k in sorted(final_questions.keys())]
            with open(CHECKPOINT, "w") as f:
                json.dump(sorted_q, f)
            header = (
                "// Auto-generated by 1001_mcqs_pipeline.py\n"
                "// Source: 1001 MCQs in Surgery\n"
                f"// Total Processed So Far: {len(sorted_q)}\\n"
                "if(!window.QUESTIONS) window.QUESTIONS = [];\n"
                f"window.QUESTIONS.push(...{json.dumps(sorted_q, indent=2, ensure_ascii=False)});\n"
            )
            with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
                f.write(header)
                
            elapsed = time.time() - start_time
            rate = processed / elapsed if elapsed > 0 else 1
            eta = (len(pending) - processed) / rate / 60
            print(f"  💾 Saved [{len(sorted_q)}/{total}] | ✅ {enriched} ❌ {failed} | Rate: {rate:.1f} Q/s | ETA: {eta:.0f} min")

    tasks = [process_task(qid, raw) for qid, raw in pending]
    await asyncio.gather(*tasks)

    # Final Save
    sorted_q = [final_questions[k] for k in sorted(final_questions.keys())]
    with open(CHECKPOINT, "w") as f:
        json.dump(sorted_q, f)
    header = (
        "// Auto-generated by 1001_mcqs_pipeline.py\n"
        "// Source: 1001 MCQs in Surgery\n"
        f"// Total: {len(sorted_q)}\n"
        "if(!window.QUESTIONS) window.QUESTIONS = [];\n"
        f"window.QUESTIONS.push(...{json.dumps(sorted_q, indent=2, ensure_ascii=False)});\n"
    )
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(header)
        
    print(f"\n✅ Finished! Enriched {enriched}, Failed {failed}.")

if __name__ == "__main__":
    asyncio.run(main())
