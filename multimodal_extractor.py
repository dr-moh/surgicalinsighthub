import mammoth
import os
import json
import asyncio
from bs4 import BeautifulSoup
from google import genai
from google.genai import types
import time

CONCURRENCY = 15
docx_path = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/Radiology for Surgeons conv.docx"
output_dir = "/Users/dr.moh/Documents/SIH/sih_project/public/images/radiology"
json_output = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/raw_radiology.json"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# 1. Convert DOCX to text with markdown images
print("Extracting images and text via Mammoth...")
image_counter = 1

def convert_image(image):
    global image_counter
    with image.open() as image_bytes:
        ext = image.content_type.split("/")[-1]
        if ext == "jpeg":
            ext = "jpg"
        filename = f"rad_img_{image_counter}.{ext}"
        filepath = os.path.join(output_dir, filename)
        with open(filepath, "wb") as f:
            f.write(image_bytes.read())
        
        image_counter += 1
        return {"src": f"/images/radiology/{filename}"}

with open(docx_path, "rb") as docx_file:
    result = mammoth.convert_to_html(docx_file, convert_image=mammoth.images.img_element(convert_image))
    html = result.value
    
    soup = BeautifulSoup(html, "html.parser")
    for img in soup.find_all('img'):
        # Add markdown image format!
        img.replace_with(f"\n\n![Image]({img['src']})\n\n")
        
    full_text = soup.get_text(separator='\n')
    
print(f"Extraction complete! Found {image_counter-1} images.")

# 2. Extract structured JSON questions using Gemini
print("Starting AI Stage 1 Extraction...")

prompt_template = """You are an expert data extractor. I have provided the text of "Radiology for Surgeons" below.
This book contains case-based questions that heavily rely on images.
I have embedded the images as markdown tags like `![Image](/images/radiology/rad_img_X.jpg)`.

Your task is to extract Questions {chunk_start} to {chunk_end} ONLY.

Output a JSON array where each object has:
- "id": number
- "question": string (This MUST include the `![Image](...)` markdown if it is part of the question!)
- "options": object mapping "A", "B", "C", "D", "E" to the option strings (if they exist. If there are no options, leave this empty dict {{}})
- "answer_key": string (the correct option letter or short answer if it's SAQ)
- "raw_answer_text": string (the explanation text for that question)

Do not include any markdown formatting outside the JSON array. Output raw JSON only.

--- BOOK TEXT ---
{full_text}
"""

TOTAL_QUESTIONS = 300 # estimate, chunks will handle overflow safely
CHUNK_SIZE = 15

async def extract_chunk(client, chunk_start, chunk_end, text_slice, semaphore):
    async with semaphore:
        prompt = prompt_template.format(chunk_start=chunk_start, chunk_end=chunk_end, full_text=text_slice)
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
                data = json.loads(text)
                print(f"Extracted {len(data)} items for chunk {chunk_start}-{chunk_end}")
                return data
            except Exception as e:
                print(f"Failed chunk {chunk_start}-{chunk_end} on attempt {attempt+1}: {e}")
                await asyncio.sleep(3 + attempt * 2)
        return []

async def main():
    client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
    
    chunks = []
    for i in range(1, TOTAL_QUESTIONS + 1, CHUNK_SIZE):
        end = min(i + CHUNK_SIZE - 1, TOTAL_QUESTIONS)
        chunks.append((i, end))

    print(f"Created {len(chunks)} chunks to process ~{TOTAL_QUESTIONS} questions.")
    
    semaphore = asyncio.Semaphore(CONCURRENCY)
    start_time = time.time()

    tasks = [extract_chunk(client, start, end, full_text, semaphore) for start, end in chunks]
    results = await asyncio.gather(*tasks)

    all_questions = []
    for chunk_res in results:
        all_questions.extend(chunk_res)
        
    try:
        all_questions.sort(key=lambda x: int(x.get("id", 0)) if str(x.get("id", 0)).isdigit() else 0)
    except:
        pass

    print(f"\n✅ Extraction Complete! Extracted {len(all_questions)} questions in {time.time() - start_time:.1f} seconds.")
    
    with open(json_output, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2)
    print(f"Saved to {json_output}")

if __name__ == "__main__":
    asyncio.run(main())
