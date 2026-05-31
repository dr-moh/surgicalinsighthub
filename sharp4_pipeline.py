"""
SHARP 4.0 Enrichment Pipeline — Production Version
====================================================
Upgrades every question in competency_2500.js to full SHARP 4.0 debriefs.

SHARP 4.0 Sections:
  S – Set the Stage (Verdict + Diagnostic Pivot)
  H – Highlight Excellence (Surgical Mechanism + Pathophysiology)
  A – Address the Gaps (Each wrong option explained individually)
  R – Review Learning Points (Markdown comparison table)
  P – Plan (Board Pearl exam heuristic)
  I – Imaging & Intraoperative Pearl [NEW]
  G – Guideline Anchor (Named society guideline + year) [NEW]
  T – One-Line Takeaway (≤20-word memorization hook) [NEW]
  + Difficulty rating [NEW]

Run:  python3 sharp4_pipeline.py
"""

import json, os, re, time, threading, warnings
warnings.filterwarnings("ignore")
from concurrent.futures import ThreadPoolExecutor, as_completed

from google import genai
from google.genai import types

print("Connecting to Vertex AI...")
client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
print("✅ Vertex AI — Gemini 2.5 Flash ready\n")

# ── Config ────────────────────────────────────────────────────────────────────
INPUT_FILE  = "js/questions/competency_2500.js"
OUTPUT_FILE = "js/questions/competency_2500.js"
CHECKPOINT  = "sharp4_checkpoint.json"
MAX_WORKERS = 3
SAVE_EVERY  = 25
RATE_LIMIT  = 0.3

file_lock = threading.RLock()

# ── Prompt Builder (avoids quote collision) ───────────────────────────────────
def build_prompt(q):
    opts = q.get("options", {})
    lines = [
        "You are a world-class surgical board examiner. Write a SHARP 4.0 debrief.",
        "",
        f"QUESTION: {q.get('question', '')}",
        f"OPTION_A: {opts.get('A', '')}",
        f"OPTION_B: {opts.get('B', '')}",
        f"OPTION_C: {opts.get('C', '')}",
        f"OPTION_D: {opts.get('D', '')}",
        f"ANSWER_KEY: {q.get('answer', '')}",
        f"CHAPTER: {q.get('chapter', '')}",
        f"SPECIALTY: {q.get('specialty', 'General Surgery')}",
        "",
        "Return ONLY a JSON object with these exact keys.",
        "All string values must be on one line — no literal line breaks inside strings.",
        "Use \\n for newlines within strings.",
        "",
        "{",
        '  "status": "ACCEPT",',
        '  "verified_answer": "<single letter: A B C or D>",',
        '  "verified_answer_text": "<exact text of the correct option>",',
        '  "set_the_stage": "<2-3 sentences: restate the verdict and explain WHY this answer is correct — the clinical/anatomical logic>",',
        '  "highlight_excellence": "<3-5 sentences: the surgical mechanism, anatomical basis, or physiology that makes the answer correct. Be specific and educational>",',
        '  "address_gaps": "<For each WRONG option write: Option X (Incorrect): [why wrong in 1-2 sentences]. Separate with \\n>",',
        '  "review_learning_points": "<A markdown table comparing 3-4 related items. Must include | header | header | format with a separator row>",',
        '  "plan": "Board Pearl: <one memorable exam heuristic under 20 words>",',
        '  "imaging_intraoperative_pearl": "<What you would see on CT/X-ray/US/endoscopy OR in the OR for this topic. Name the specific sign or finding if one exists>",',
        '  "guideline_anchor": "<Name the most relevant society guideline (ASCRS/WSES/ACS/NICE/ESMO etc) with year. State what it recommends relevant to this question>",',
        '  "takeaway": "<One memorable line under 20 words. Make it witty and impossible to forget>",',
        '  "difficulty": "<Easy or Medium or Hard or Very Hard>"',
        "}",
    ]
    return "\n".join(lines)

# ── Robust JSON Parser ────────────────────────────────────────────────────────
def safe_parse(text):
    """Parse JSON with multiple fallback strategies."""
    if not text:
        return None

    # Strategy 1: Direct parse
    try:
        return json.loads(text)
    except Exception:
        pass

    # Strategy 2: Strip markdown code fence
    cleaned = re.sub(r"^```(?:json)?\s*", "", text.strip())
    cleaned = re.sub(r"\s*```$", "", cleaned)
    try:
        return json.loads(cleaned)
    except Exception:
        pass

    # Strategy 3: Extract first complete JSON object
    try:
        m = re.search(r"\{[\s\S]*\}", cleaned)
        if m:
            return json.loads(m.group(0))
    except Exception:
        pass

    # Strategy 4: Fix common issues (unescaped newlines inside strings)
    try:
        # Replace literal newlines inside quoted strings with \n
        fixed = re.sub(r'(?<!\\)\n(?=[^"]*")', r"\\n", cleaned)
        return json.loads(fixed)
    except Exception:
        pass

    return None

# ── Build SHARP 4.0 Markdown ──────────────────────────────────────────────────
def build_markdown(q, p):
    va   = p.get("verified_answer", "?")
    vat  = p.get("verified_answer_text", "")
    sts  = p.get("set_the_stage", "").replace("\\n", "\n")
    he   = p.get("highlight_excellence", "").replace("\\n", "\n")
    ag   = p.get("address_gaps", "").replace("\\n", "\n")
    rl   = p.get("review_learning_points", "").replace("\\n", "\n")
    pl   = p.get("plan", "").replace("\\n", "\n")
    img  = p.get("imaging_intraoperative_pearl", "").replace("\\n", "\n")
    gl   = p.get("guideline_anchor", "").replace("\\n", "\n")
    tw   = p.get("takeaway", "")
    diff = p.get("difficulty", "Medium")

    opts = q.get("options", {})
    rows = "\n".join(
        f"| {k} | {v[:75]} | {'✅ Correct' if k == va else '❌ Incorrect'} |"
        for k, v in opts.items()
    )

    chapter = q.get("chapter", "").title()
    specialty = q.get("specialty", "")

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

**✅ Answer: {va}) {vat}** &nbsp;|&nbsp; **Difficulty: {diff}** &nbsp;|&nbsp; **Chapter: {chapter}** &nbsp;|&nbsp; **Specialty: {specialty}**
"""

# ── Call Gemini ───────────────────────────────────────────────────────────────
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
                    max_output_tokens=2000,
                )
            )
            payload = safe_parse(resp.text)
            if payload and payload.get("status", "").upper() in (
                "ACCEPT", "ACCEPTED", "OK", "VERIFIED"
            ):
                return payload
        except Exception as e:
            time.sleep(2 ** attempt)
    return None

# ── Load / Save helpers ───────────────────────────────────────────────────────
def load_questions():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"window\.QUESTIONS\.push\(\.\.\.(.*)\);", content, re.DOTALL)
    if not m:
        raise ValueError("Cannot find question array in JS file")
    return json.loads(m.group(1))

def save_questions(questions):
    header = (
        "// Auto-generated by sharp4_pipeline.py\n"
        "// Source: Competency-Based 2500 MCQs in Surgery — U. Santosh Pai (CBS, 2022)\n"
        f"// Total: {len(questions)} questions | SHARP 4.0 Enriched\n"
        "// SHARP 4.0: Imaging Pearl + Guideline Anchor + One-Line Takeaway + Difficulty\n"
        "if(!window.QUESTIONS) window.QUESTIONS = [];\n"
        f"window.QUESTIONS.push(...{json.dumps(questions, indent=2, ensure_ascii=False)});\n"
    )
    with file_lock:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write(header)

def load_checkpoint():
    if os.path.exists(CHECKPOINT):
        with open(CHECKPOINT, "r") as f:
            return set(json.load(f))
    return set()

def save_checkpoint(done_ids):
    with file_lock:
        with open(CHECKPOINT, "w") as f:
            json.dump(sorted(list(done_ids)), f)

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    print("=" * 65)
    print("  SHARP 4.0 Pipeline — Competency-Based 2500 MCQs")
    print("=" * 65)

    questions  = load_questions()
    done_ids   = load_checkpoint()
    total      = len(questions)
    pending    = [q for q in questions
                  if str(q.get("id")) not in done_ids
                  and "See textbook" not in q.get("answer", "")]

    print(f"\n  Total questions : {total}")
    print(f"  Already done    : {len(done_ids)}")
    print(f"  To enrich       : {len(pending)}")
    print(f"  Skipped (no ans): {total - len(done_ids) - len(pending)}")
    print(f"  Workers         : {MAX_WORKERS}")
    print(f"  Save every      : {SAVE_EVERY} questions\n")

    if not pending:
        print("✅ All questions already enriched!")
        return

    enriched  = 0
    failed    = 0
    batch_n   = 0
    start     = time.time()

    def worker(q):
        nonlocal enriched, failed, batch_n
        time.sleep(RATE_LIMIT)
        qid = str(q.get("id"))

        payload = enrich_one(q)
        if payload:
            md = build_markdown(q, payload)
            va = payload.get("verified_answer", "")
            vat = payload.get("verified_answer_text", "")

            with file_lock:
                for i, orig in enumerate(questions):
                    if str(orig.get("id")) == qid:
                        questions[i]["markdown_debrief"] = md
                        questions[i]["difficulty"]       = payload.get("difficulty", "Medium")
                        if va:
                            questions[i]["verified_answer"]  = va
                            questions[i]["answer"] = f"{va}) {vat}"
                        break
                enriched += 1
                done_ids.add(qid)
                batch_n  += 1
                if batch_n % SAVE_EVERY == 0:
                    save_questions(questions)
                    save_checkpoint(done_ids)
                    pct = len(done_ids) / total * 100
                    elapsed = time.time() - start
                    rate = enriched / elapsed if elapsed > 0 else 1
                    eta_min = (len(pending) - enriched) / rate / 60
                    print(f"  💾 [{len(done_ids)}/{total} | {pct:.0f}%] "
                          f"✅{enriched} ❌{failed} | "
                          f"Rate:{rate:.1f} Q/s | ETA:{eta_min:.0f}min")
        else:
            with file_lock:
                failed += 1
                done_ids.add(qid)

        return qid

    print("🚀 Starting enrichment (Sequential Mode)...\n")

    for i, q in enumerate(pending, 1):
        print(f"  -> Processing Q{q.get('id')}...", end=" ")
        qid = worker(q)
        print("Done.")
        if i % 100 == 0:
            elapsed = time.time() - start
            rate = i / elapsed if elapsed > 0 else 1
            eta = (len(pending) - i) / rate / 60
            print(f"  [{i}/{len(pending)}] ✅{enriched} ❌{failed} "
                  f"| Rate:{rate:.1f} Q/s | ETA:{eta:.0f}min")

    # Final save
    save_questions(questions)
    save_checkpoint(done_ids)

    elapsed = time.time() - start
    print(f"\n{'='*65}")
    print(f"  ✅ SHARP 4.0 Complete!")
    print(f"     Enriched : {enriched}")
    print(f"     Failed   : {failed}")
    print(f"     Time     : {elapsed/60:.1f} minutes")
    print(f"     Output   : {OUTPUT_FILE}")
    print(f"{'='*65}")

if __name__ == "__main__":
    main()
