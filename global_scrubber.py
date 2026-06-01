import os
import glob
import re
import json
import asyncio
from google import genai
from google.genai import types

JS_DIRS = [
    "/Users/dr.moh/Documents/SIH/sih_project/js/questions",
    "/Users/dr.moh/Documents/SIH/sih_project/js/questions/review"
]

CONCURRENCY = 15

prompt_template = """You are a medical board exam expert.
I have a multiple choice question that only has {num_opts} options. It needs exactly 5 options (A, B, C, D, E).
Please generate the missing {missing} plausible but incorrect medical distractors for this question.

Question: {question}

Current Options:
{opts}

Correct Answer: {answer}

Generate the missing options as a strict JSON object mapping the missing letters to the distractor text.
Example format if A and B exist:
{{
  "C": "Distractor 1 text",
  "D": "Distractor 2 text",
  "E": "Distractor 3 text"
}}

Output ONLY the raw JSON object. Do not include markdown formatting.
"""

async def fill_options(client, q, semaphore):
    opts = q.get("options", {})
    num_opts = len(opts)
    missing = 5 - num_opts
    if missing <= 0: return opts

    opts_str = "\n".join([f"{k}: {v}" for k, v in opts.items()])
    prompt = prompt_template.format(
        num_opts=num_opts,
        missing=missing,
        question=q.get("question", ""),
        opts=opts_str,
        answer=q.get("answer", "")
    )
    
    async with semaphore:
        for attempt in range(3):
            try:
                resp = await client.aio.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        temperature=0.7,
                        response_mime_type="application/json",
                    )
                )
                text = resp.text.strip()
                if text.startswith("```json"): text = text[7:]
                if text.endswith("```"): text = text[:-3]
                new_opts = json.loads(text)
                
                # Merge options
                merged = dict(opts)
                for k, v in new_opts.items():
                    merged[k] = v
                return merged
            except Exception as e:
                await asyncio.sleep(2 + attempt)
    return opts

async def main():
    print("Connecting to Vertex AI...")
    client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
    semaphore = asyncio.Semaphore(CONCURRENCY)
    
    seen_questions = set()
    total_parsed = 0
    total_deleted_dupes = 0
    total_deleted_invalid = 0
    total_trimmed = 0
    total_filled = 0
    
    files_to_process = []
    for d in JS_DIRS:
        for f in glob.glob(os.path.join(d, "*.js")):
            if "question-loader.js" in f: continue
            files_to_process.append(f)

    for f in files_to_process:
        with open(f, "r", encoding="utf-8") as file:
            content = file.read()
            
        # Robust JS parsing
        if "window.QUESTIONS.push(..." not in content:
            continue
            
        prefix, rest = content.split("window.QUESTIONS.push(...[", 1)
        # find the last ]);
        json_str = "[" + rest.rsplit("]);", 1)[0] + "]"
        
        try:
            data = json.loads(json_str)
        except Exception as e:
            print(f"Failed to parse {f}: {e}")
            continue
            
        modified = False
        new_data = []
        
        # Phase 1 tasks
        fill_tasks = []
        
        for q in data:
            total_parsed += 1
            
            # Deduplication
            q_text = q.get("question", "")
            norm_q = re.sub(r'[^a-z0-9]', '', str(q_text).lower())
            
            if len(norm_q) > 10:
                if norm_q in seen_questions:
                    total_deleted_dupes += 1
                    modified = True
                    continue
                seen_questions.add(norm_q)
            
            # Option constraints
            opts = q.get("options", {})
            if not isinstance(opts, dict):
                total_deleted_invalid += 1
                modified = True
                continue
                
            opt_keys = list(opts.keys())
            opt_len = len(opt_keys)
            
            if opt_len <= 1:
                total_deleted_invalid += 1
                modified = True
                continue
                
            if opt_len > 5:
                # Check if the correct answer is F or beyond
                ans = q.get("verified_answer", q.get("answer", ""))
                ans_letter = str(ans)[0].upper() if ans else ""
                
                if ans_letter in ["F", "G", "H", "I", "J"]:
                    total_deleted_invalid += 1
                    modified = True
                    continue
                
                # Safe to trim F+
                for k in opt_keys[5:]:
                    del opts[k]
                q["options"] = opts
                total_trimmed += 1
                modified = True
                
            elif opt_len < 4:
                # Needs AI fill
                fill_tasks.append(q)
                modified = True
                
            new_data.append(q)
            
        if fill_tasks:
            print(f"Filling {len(fill_tasks)} questions with distractors in {os.path.basename(f)}...")
            
            async def fill_and_update(q_obj):
                nonlocal total_filled
                new_opts = await fill_options(client, q_obj, semaphore)
                q_obj["options"] = new_opts
                total_filled += 1
                
            await asyncio.gather(*(fill_and_update(q) for q in fill_tasks))
            
        if modified:
            header = prefix + "window.QUESTIONS.push(...[\n"
            body = ",\n".join([json.dumps(q, indent=2, ensure_ascii=False) for q in new_data])
            footer = "\n]);\n"
            
            with open(f, "w", encoding="utf-8") as file:
                file.write(header + body + footer)
                
    print("\n--- GLOBAL SCRUB COMPLETE ---")
    print(f"Total Parsed: {total_parsed}")
    print(f"Duplicates Destroyed: {total_deleted_dupes}")
    print(f"Invalid/Unsalvageable Destroyed: {total_deleted_invalid}")
    print(f"Questions Trimmed (Removed option F+): {total_trimmed}")
    print(f"Questions Enhanced (AI generated distractors): {total_filled}")

if __name__ == "__main__":
    asyncio.run(main())
