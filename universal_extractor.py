import asyncio
import json
import re
import time
from google import genai
from google.genai import types

INPUT_FILE = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/review/1001 MCQs.txt"
OUTPUT_FILE = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_1001_mcqs.json"
CONCURRENCY = 15

async def extract_chunk(client, chunk_start, chunk_end, full_text, semaphore):
    async with semaphore:
        prompt = f"""
You are an expert data extractor. I have provided the entire text of a medical MCQ book below.
The book contains exactly 1001 questions, followed by an Answer Key at the end (Part Two).
The options for each question are indented, but usually not labeled with A,B,C,D.

Your task is to extract Questions {chunk_start} to {chunk_end} ONLY, along with their correct answers from the answer key.
Note: Some questions might be True/False for each option (multiple true options). If so, state ALL the correct answers.

Output a JSON array where each object has:
- "id": number
- "question": string
- "options": object mapping "A", "B", "C", "D", "E" to the option strings
- "answer_key": string (e.g. "A, C", meaning options A and C are true)
- "raw_answer_text": string (the exact text of the true options)

Do not include any markdown formatting outside the JSON array. Output raw JSON only.

--- BOOK TEXT ---
{full_text}
"""
        for attempt in range(3):
            try:
                resp = await client.aio.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        temperature=0.1,
                        response_mime_type="application/json",
                    )
                )
                text = resp.text.strip()
                if text.startswith("```json"): text = text[7:]
                if text.endswith("```"): text = text[:-3]
                return json.loads(text)
            except Exception as e:
                print(f"Failed chunk {chunk_start}-{chunk_end} on attempt {attempt+1}: {e}")
                await asyncio.sleep(2 + attempt)
        return []

async def main():
    print("=" * 65)
    print("  Stage 1: AI Chunk Extraction — 1001 MCQs")
    print("=" * 65)

    client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
    
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        full_text = f.read()

    # Create chunks of 50 questions each
    chunks = []
    for i in range(1, 1002, 50):
        end = min(i + 49, 1001)
        chunks.append((i, end))

    print(f"Created {len(chunks)} chunks to process {1001} questions.")
    
    semaphore = asyncio.Semaphore(CONCURRENCY)
    start_time = time.time()

    tasks = [extract_chunk(client, start, end, full_text, semaphore) for start, end in chunks]
    results = await asyncio.gather(*tasks)

    # Flatten the list of lists
    all_questions = []
    for chunk_res in results:
        all_questions.extend(chunk_res)
        
    # Sort by ID to ensure correct order
    all_questions.sort(key=lambda x: int(x.get("id", 0)))

    print(f"\n✅ Extraction Complete! Extracted {len(all_questions)} questions in {time.time() - start_time:.1f} seconds.")
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2)
    print(f"Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    asyncio.run(main())
