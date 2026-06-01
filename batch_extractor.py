import asyncio
import json
import re
import time
import os
from google import genai
from google.genai import types

CONCURRENCY = 15

CONFIGS = [
    {
        "name": "Schwartz's 9th",
        "input_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/Schwartz's 9th - @Medicine_Way  conv.txt",
        "output_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_schwartz.json",
        "checkpoint_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_schwartz_checkpoint.json",
        "total_questions": 1142,
        "chunk_size": 40,
        "prompt_template": """You are an expert data extractor. I have provided the text of "Schwartz's Principles of Surgery ABSITE and Board Review" below.
The book contains MCQs where the Answer and Explanation immediately follow the question options.

Your task is to extract Questions {chunk_start} to {chunk_end} ONLY.

Output a JSON array where each object has:
- "id": number
- "question": string
- "options": object mapping "A", "B", "C", "D", "E" to the option strings
- "answer_key": string (the correct option letter)
- "raw_answer_text": string (the explanation text that follows "Answer: ")

Do not include any markdown formatting outside the JSON array. Output raw JSON only.

--- BOOK TEXT ---
{full_text}
"""
    },
    {
        "name": "Surgery Clinical Cases MCQ's",
        "input_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/Surgery Clinical Cases MCQ_s_copy conv.txt",
        "output_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_clinical_cases.json",
        "checkpoint_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_clinical_cases_checkpoint.json",
        "total_questions": 1056,
        "chunk_size": 40,
        "prompt_template": """You are an expert data extractor. I have provided the text of "Surgery Clinical Cases MCQ's" (Lange Q&A) below.
The book contains questions followed by Answers and Explanations at the end of chapters.

Your task is to extract Questions {chunk_start} to {chunk_end} ONLY.
If there are less than {chunk_end} questions available in total that you can find, extract up to the highest available.

Output a JSON array where each object has:
- "id": number
- "question": string
- "options": object mapping "A", "B", "C", "D", "E" to the option strings
- "answer_key": string (the correct option letter from the answers section)
- "raw_answer_text": string (the explanation text from the answers section)

Do not include any markdown formatting outside the JSON array. Output raw JSON only.

--- BOOK TEXT ---
{full_text}
"""
    },
    {
        "name": "SBAs for the MRCS Part A",
        "input_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/Single_best_answers_SBAs_for_the_MRCS_Part_A_a_Bailey_&_Love_revision conv.txt",
        "output_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_sbas.json",
        "checkpoint_file": "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_sbas_checkpoint.json",
        "total_questions": 600,
        "chunk_size": 40,
        "prompt_template": """You are an expert data extractor. I have provided the text of "SBAs for the MRCS Part A" below.
The book contains questions followed by a section of Answers and Explanations.

Your task is to extract Questions {chunk_start} to {chunk_end} ONLY.

Output a JSON array where each object has:
- "id": number
- "question": string
- "options": object mapping "A", "B", "C", "D", "E" to the option strings
- "answer_key": string (the correct option letter)
- "raw_answer_text": string (the explanation text for that question)

Do not include any markdown formatting outside the JSON array. Output raw JSON only.

--- BOOK TEXT ---
{full_text}
"""
    }
]

async def extract_chunk(client, chunk_start, chunk_end, full_text, prompt_template, semaphore):
    async with semaphore:
        prompt = prompt_template.format(chunk_start=chunk_start, chunk_end=chunk_end, full_text=full_text)
        for attempt in range(5):
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
                data = json.loads(text)
                print(f"Extracted {len(data)} items for chunk {chunk_start}-{chunk_end}")
                return chunk_start, data
            except Exception as e:
                print(f"Failed chunk {chunk_start}-{chunk_end} on attempt {attempt+1}: {e}")
                await asyncio.sleep(5 + attempt * 5)
        return chunk_start, []

async def process_book(client, config):
    print(f"\n=======================================================")
    print(f"  Processing: {config['name']}")
    print(f"=======================================================")
    
    if os.path.exists(config['output_file']):
        print(f"Skipping {config['name']} as output file already exists.")
        return

    with open(config['input_file'], "r", encoding="utf-8") as f:
        full_text = f.read()

    completed_chunks = set()
    all_questions = []
    
    if os.path.exists(config['checkpoint_file']):
        with open(config['checkpoint_file'], "r", encoding="utf-8") as f:
            checkpoint_data = json.load(f)
            completed_chunks = set(checkpoint_data.get("completed_chunks", []))
            all_questions = checkpoint_data.get("questions", [])
            print(f"Resuming from checkpoint: {len(completed_chunks)} chunks done, {len(all_questions)} questions loaded.")

    chunks = []
    for i in range(1, config['total_questions'] + 1, config['chunk_size']):
        end = min(i + config['chunk_size'] - 1, config['total_questions'])
        if i not in completed_chunks:
            chunks.append((i, end))

    print(f"Remaining chunks to process: {len(chunks)}")
    
    if not chunks:
        print("All chunks completed!")
        try:
            all_questions.sort(key=lambda x: int(x.get("id", 0)) if str(x.get("id", 0)).isdigit() else 0)
        except:
            pass
        with open(config['output_file'], "w", encoding="utf-8") as f:
            json.dump(all_questions, f, indent=2)
        print(f"Saved to {config['output_file']}")
        return

    semaphore = asyncio.Semaphore(CONCURRENCY)
    
    async def process_and_save(start, end):
        chunk_start, data = await extract_chunk(client, start, end, full_text, config['prompt_template'], semaphore)
        
        all_questions.extend(data)
        completed_chunks.add(chunk_start)
        
        # Save checkpoint after every successful chunk
        with open(config['checkpoint_file'], "w", encoding="utf-8") as f:
            json.dump({
                "completed_chunks": list(completed_chunks),
                "questions": all_questions
            }, f)
            
    tasks = [process_and_save(start, end) for start, end in chunks]
    await asyncio.gather(*tasks)

    try:
        all_questions.sort(key=lambda x: int(x.get("id", 0)) if str(x.get("id", 0)).isdigit() else 0)
    except:
        pass

    print(f"\n✅ Extraction Complete for {config['name']}! Extracted {len(all_questions)} questions total.")
    
    with open(config['output_file'], "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2)
    print(f"Saved to {config['output_file']}")

async def main():
    client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
    for config in CONFIGS:
        await process_book(client, config)

if __name__ == "__main__":
    asyncio.run(main())
