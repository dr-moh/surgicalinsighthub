import json, os, re, time, warnings, asyncio
import glob
warnings.filterwarnings("ignore")

from google import genai
from google.genai import types

CONCURRENCY = 15
SAVE_EVERY = 20

RAW_DIR = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/review"
OUTPUT_DIR = "/Users/dr.moh/Documents/SIH/sih_project/js/questions/review"
CHECKPOINT_DIR = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/review_checkpoints"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)
if not os.path.exists(CHECKPOINT_DIR):
    os.makedirs(CHECKPOINT_DIR)

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
        "If there are image tags like `![Image](...)` in the question, YOU MUST INCLUDE THEM in the 'imaging_intraoperative_pearl' section if applicable.",
        "{",
        '  "status": "ACCEPT",',
        '  "set_the_stage": "<2-3 sentences: restate the verdict and explain WHY this answer is correct — the clinical/anatomical logic>",',
        '  "highlight_excellence": "<3-5 sentences: the surgical mechanism, anatomical basis, or physiology that makes the answer correct>",',
        '  "address_gaps": "<For each WRONG option write: Option X (Incorrect): [why wrong in 1-2 sentences]. Separate with \\n>",',
        '  "review_learning_points": "<A markdown table comparing 3-4 related items. Must include | header | header | format>",',
        '  "plan": "Board Pearl: <one memorable exam heuristic under 20 words>",',
        '  "imaging_intraoperative_pearl": "<What you would see on CT/X-ray/US/endoscopy OR in the OR for this topic. IF THE QUESTION HAS AN IMAGE, MENTION IT HERE>",',
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

def build_markdown(p, q, source):
    tw = p.get("takeaway", "")
    sts = p.get("set_the_stage", "").replace("\\n", "\n")
    he = p.get("highlight_excellence", "").replace("\\n", "\n")
    ag = p.get("address_gaps", "").replace("\\n", "\n")
    rl = p.get("review_learning_points", "").replace("\\n", "\n")
    pl = p.get("plan", "").replace("\\n", "\n")
    img = p.get("imaging_intraoperative_pearl", "").replace("\\n", "\n")
    gl = p.get("guideline_anchor", "").replace("\\n", "\n")
    diff = p.get("difficulty", "Medium")
    
    va = str(q.get("answer_key", "?"))
    vat = str(q.get("raw_answer_text", ""))
    
    opts = q.get("options", {})
    if not isinstance(opts, dict): opts = {}
    
    va_list = [ans.strip() for ans in va.split(",")]
    rows = "\n".join(f"| {k} | {str(v)[:75]} | {'✅ Correct' if k in va_list else '❌ Incorrect'} |" for k, v in opts.items())

    return f"### SHARP 4.0 Cognitive & Surgical Debrief\n\n> **💡 {tw}**\n\n---\n\n## S — Set the Stage\n{sts}\n\n## H — Highlight Excellence\n{he}\n\n## A — Address the Gaps\n\n{ag}\n\n## R — Review Learning Points\n\n{rl}\n\n## P — Plan (Board Pearl)\n{pl}\n\n---\n\n## 🔬 Imaging & Intraoperative Pearl\n{img}\n\n## 📋 Guideline Anchor\n{gl}\n\n---\n\n### Answer Breakdown\n| Option | Text | Status |\n|--------|------|--------|\n{rows}\n\n**✅ Answer: {va}) {vat[:100]}** &nbsp;|&nbsp; **Difficulty: {diff}** &nbsp;|&nbsp; **Source: {source}**\n"

async def enrich_one(client, q, semaphore):
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

async def process_file(client, filepath, start_id, semaphore):
    base_name = os.path.basename(filepath)
    js_name = base_name.replace(".json", "").replace(".txt", "").replace(".pdf", "").replace(".docx", "").replace(" ", "_") + ".js"
    output_file = os.path.join(OUTPUT_DIR, js_name)
    checkpoint_file = os.path.join(CHECKPOINT_DIR, base_name)
    source_name = base_name.replace(".json", "")
    
    print(f"\n=======================================================")
    print(f"  Stage 2: SHARP 4.0 Enrichment — {source_name}")
    print(f"=======================================================")
    
    with open(filepath, "r") as f:
        raw_items = json.load(f)
        
    checkpoint = []
    if os.path.exists(checkpoint_file):
        with open(checkpoint_file, "r") as f:
            checkpoint = json.load(f)
            
    done_ids = {item["id"] for item in checkpoint}
    
    pending = []
    for i, raw in enumerate(raw_items):
        qid = start_id + i
        if qid not in done_ids:
            pending.append((qid, raw))
            
    total = len(raw_items)
    print(f"  Total           : {total}")
    print(f"  Already Done    : {len(done_ids)}")
    print(f"  To Process      : {len(pending)}")
    
    if not pending:
        print("✅ All done for this file!")
        return start_id + total
        
    start_time = time.time()
    enriched = 0
    failed = 0
    processed = 0
    
    final_questions = {item["id"]: item for item in checkpoint}
    
    async def process_task(qid, raw):
        nonlocal enriched, failed, processed
        payload = await enrich_one(client, raw, semaphore)
        if payload:
            md = build_markdown(payload, raw, source_name)
            va = str(raw.get("answer_key", ""))
            vat = str(raw.get("raw_answer_text", ""))
            final_questions[qid] = {
                "id": qid,
                "question": str(raw.get("question", "")),
                "options": raw.get("options", {}),
                "answer": f"{va}) {vat}",
                "chapter": "Review",
                "specialty": "Review",
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
            with open(checkpoint_file, "w") as f:
                json.dump(sorted_q, f)
            header = (
                f"// Auto-generated by review_folder_pipeline.py\n"
                f"// Source: {source_name}\n"
                f"// Total Processed So Far: {len(sorted_q)}\n"
                "if(!window.QUESTIONS) window.QUESTIONS = [];\n"
                f"window.QUESTIONS.push(...{json.dumps(sorted_q, indent=2, ensure_ascii=False)});\n"
            )
            with open(output_file, "w", encoding="utf-8") as f:
                f.write(header)
                
            elapsed = time.time() - start_time
            rate = processed / elapsed if elapsed > 0 else 1
            eta = (len(pending) - processed) / rate / 60
            print(f"  [{source_name}] 💾 Saved [{len(sorted_q)}/{total}] | ✅ {enriched} ❌ {failed} | Rate: {rate:.1f} Q/s | ETA: {eta:.0f} min")

    tasks = [process_task(qid, raw) for qid, raw in pending]
    await asyncio.gather(*tasks)

    sorted_q = [final_questions[k] for k in sorted(final_questions.keys())]
    with open(checkpoint_file, "w") as f:
        json.dump(sorted_q, f)
    header = (
        f"// Auto-generated by review_folder_pipeline.py\n"
        f"// Source: {source_name}\n"
        f"// Total: {len(sorted_q)}\n"
        "if(!window.QUESTIONS) window.QUESTIONS = [];\n"
        f"window.QUESTIONS.push(...{json.dumps(sorted_q, indent=2, ensure_ascii=False)});\n"
    )
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(header)
        
    print(f"\n✅ Finished {source_name}! Enriched {enriched}, Failed {failed}.")
    return start_id + total

async def main():
    print("Connecting to Vertex AI...")
    client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
    semaphore = asyncio.Semaphore(CONCURRENCY)
    
    files = glob.glob(os.path.join(RAW_DIR, "*.json"))
    start_id = 200000 # Starting block for the review folder
    
    for f in files:
        # Ignore 1001 MCQs since we did it manually
        if "1001 MCQs" in f:
            continue
        start_id = await process_file(client, f, start_id, semaphore)

if __name__ == "__main__":
    asyncio.run(main())
