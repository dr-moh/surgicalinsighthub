import os
import glob
import fitz  # PyMuPDF
import mammoth
from bs4 import BeautifulSoup
import base64
import json
import asyncio
from google import genai
from google.genai import types
import time

REVIEW_DIR = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/review"
OUTPUT_IMG_DIR = "/Users/dr.moh/Documents/SIH/sih_project/public/images/review_bank"
EXTRACTED_JSON_DIR = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/review"
CONCURRENCY = 10
CHUNK_SIZE = 15

if not os.path.exists(OUTPUT_IMG_DIR):
    os.makedirs(OUTPUT_IMG_DIR)
if not os.path.exists(EXTRACTED_JSON_DIR):
    os.makedirs(EXTRACTED_JSON_DIR)

prompt_template = """You are an expert data extractor. I have provided a chunk of text from a medical file below.
This chunk may contain questions with embedded images (represented as markdown `![Image](...)`).

Your task is to extract ANY AND ALL multiple-choice questions or short-answer questions you can find in this text.
If you find none, return an empty array `[]`.

Output a JSON array where each object has:
- "id": number (auto-incrementing or just use sequential numbers starting from 1)
- "question": string (MUST include any `![Image](...)` tags exactly as they appear)
- "options": object mapping "A", "B", "C", "D" to the option strings (if they exist, else empty {{}})
- "answer_key": string (the correct option letter or answer if provided, else "UNKNOWN")
- "raw_answer_text": string (the explanation or just empty if not provided)

Do not include any markdown formatting outside the JSON array. Output raw JSON only.

--- TEXT CHUNK ---
{chunk_text}
"""

async def extract_chunk(client, chunk_index, chunk_text, semaphore):
    async with semaphore:
        prompt = prompt_template.format(chunk_text=chunk_text)
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
                print(f"Extracted {len(data)} items from chunk {chunk_index}")
                return data
            except Exception as e:
                await asyncio.sleep(3 + attempt * 2)
        return []

def extract_pdf(filepath):
    doc = fitz.open(filepath)
    text_with_images = ""
    img_counter = 1
    
    file_prefix = os.path.basename(filepath).replace(" ", "_").split(".")[0]
    
    for page in doc:
        text = page.get_text()
        for img in page.get_images(full=True):
            xref = img[0]
            base_image = doc.extract_image(xref)
            if base_image["width"] < 50 or base_image["height"] < 50:
                continue
                
            filename = f"{file_prefix}_{img_counter}.{base_image['ext']}"
            out_path = os.path.join(OUTPUT_IMG_DIR, filename)
            
            with open(out_path, "wb") as f:
                f.write(base_image["image"])
                
            text += f"\n\n![Image](/images/review_bank/{filename})\n\n"
            img_counter += 1
            
        text_with_images += text + "\n---\n"
        
    return text_with_images

def extract_docx(filepath):
    img_counter = 1
    file_prefix = os.path.basename(filepath).replace(" ", "_").split(".")[0]
    
    def convert_image(image):
        nonlocal img_counter
        with image.open() as image_bytes:
            ext = image.content_type.split("/")[-1]
            if ext == "jpeg": ext = "jpg"
            filename = f"{file_prefix}_{img_counter}.{ext}"
            out_path = os.path.join(OUTPUT_IMG_DIR, filename)
            with open(out_path, "wb") as f:
                f.write(image_bytes.read())
            img_counter += 1
            return {"src": f"/images/review_bank/{filename}"}

    with open(filepath, "rb") as docx_file:
        result = mammoth.convert_to_html(docx_file, convert_image=mammoth.images.img_element(convert_image))
        soup = BeautifulSoup(result.value, "html.parser")
        for img in soup.find_all('img'):
            img.replace_with(f"\n\n![Image]({img['src']})\n\n")
        return soup.get_text(separator='\n')

async def process_file(client, filepath, semaphore):
    print(f"\nProcessing {os.path.basename(filepath)}...")
    json_path = os.path.join(EXTRACTED_JSON_DIR, os.path.basename(filepath) + ".json")
    if os.path.exists(json_path):
        print("Skipping, already extracted.")
        return

    ext = filepath.lower().split('.')[-1]
    if ext == 'pdf':
        text = extract_pdf(filepath)
    elif ext == 'docx':
        text = extract_docx(filepath)
    elif ext == 'txt':
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            text = f.read()
    else:
        return
        
    # Split text into chunks (approx 5000 chars per chunk to avoid massive context issues)
    chunks = [text[i:i+8000] for i in range(0, len(text), 8000)]
    print(f"Split into {len(chunks)} chunks.")
    
    tasks = [extract_chunk(client, i, chunk, semaphore) for i, chunk in enumerate(chunks)]
    results = await asyncio.gather(*tasks)
    
    all_q = []
    for r in results:
        all_q.extend(r)
        
    for i, q in enumerate(all_q):
        q["id"] = i + 1
        
    with open(json_path, "w") as f:
        json.dump(all_q, f, indent=2)
    print(f"✅ Extracted {len(all_q)} questions to {json_path}")

async def main():
    client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")
    semaphore = asyncio.Semaphore(CONCURRENCY)
    
    files = []
    for ext in ["*.pdf", "*.docx", "*.txt"]:
        files.extend(glob.glob(os.path.join(REVIEW_DIR, ext)))
        
    print(f"Found {len(files)} files to process.")
    for f in files:
        await process_file(client, f, semaphore)

if __name__ == "__main__":
    asyncio.run(main())
