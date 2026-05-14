# Install dependencies
!pip install -q PyPDF2 python-docx

import os
import json
import glob
import time
import requests
import datetime
from google.colab import drive
from openai import OpenAI

# Try to use the modern google-genai, fallback to older generativeai if needed
try:
    from google import genai
    from google.genai import types
    USE_MODERN_GENAI = True
except ImportError:
    import google.generativeai as google_genai
    USE_MODERN_GENAI = False

# 1. MOUNT GOOGLE DRIVE
drive.mount('/content/drive')

# ==========================================
# 2. YOUR API KEYS & ENDPOINTS
# ==========================================
API_KEYS = {
    "Gemini": "YOUR_GEMINI_API_KEY_HERE",
    "Groq": "YOUR_GROQ_API_KEY_HERE",
    "OpenRouter": "YOUR_OPENROUTER_API_KEY_HERE"
}

# --- LOCAL OLLAMA CONFIG (Via ngrok) ---
# Replace this with your actual ngrok URL from your terminal
LOCAL_OLLAMA_URL = "https://your-ngrok-url.ngrok-free.app/v1" 
LOCAL_MODEL_NAME = "llama3" # or "mistral", "medllama2", etc.

IPSTACK_URL = "https://api.ipstack.com/72.229.28.185,110.174.165.78?access_key=4a5053a4605c8b91e96145a211803fb9"

# ==========================================
# 3. TEST IPSTACK
# ==========================================
print("\n--- Testing IPStack API ---")
try:
    ip_response = requests.get(IPSTACK_URL).json()
    print("✅ Successfully connected to IPStack!")
except Exception as e:
    print(f"⚠️ IPStack test failed: {e}")
print("---------------------------\n")

# ==========================================
# 4. CONFIGURE THE LLM PROVIDERS
# ==========================================
# Configure Gemini
if USE_MODERN_GENAI:
    gemini_client = genai.Client(api_key=API_KEYS["Gemini"])
else:
    google_genai.configure(api_key=API_KEYS["Gemini"])

PROVIDERS = {
    "OpenRouter": {"base_url": "https://openrouter.ai/api/v1", "model": "nvidia/nemotron-3-super:free"},
    "Groq": {"base_url": "https://api.groq.com/openai/v1", "model": "llama-3.3-70b-versatile"},
    "Local-Ollama": {"base_url": LOCAL_OLLAMA_URL, "model": LOCAL_MODEL_NAME}
}

# Provider cooldown tracker (to skip 429'd providers temporarily)
COOLDOWNS = {}

clients = {}
for name, config in PROVIDERS.items():
    if name == "Local-Ollama":
        # Local Ollama usually doesn't need an API key
        clients[name] = OpenAI(base_url=config["base_url"], api_key="ollama")
    else:
        key = API_KEYS.get(name, "")
        if len(key) > 5:
            clients[name] = OpenAI(base_url=config["base_url"], api_key=key)

# ==========================================
# 5. DATA EXTRACTION & CHUNKING
# ==========================================
def extract_text(file_path):
    text = ""
    try:
        if file_path.endswith('.pdf'):
            with open(file_path, 'rb') as f:
                import PyPDF2
                reader = PyPDF2.PdfReader(f)
                for page in reader.pages:
                    if page.extract_text(): text += page.extract_text() + "\n"
        elif file_path.endswith('.docx'):
            import docx
            doc = docx.Document(file_path)
            for para in doc.paragraphs:
                text += para.text + "\n"
    except Exception as e:
        print(f"   [!] Error reading {file_path}: {e}")
    return text

def chunk_text(text, max_chars=10000):
    chunks = []
    while len(text) > max_chars:
        split_idx = text.rfind('\n', 0, max_chars)
        if split_idx == -1: split_idx = max_chars
        chunks.append(text[:split_idx])
        text = text[split_idx:]
    if text: chunks.append(text)
    return chunks

# ==========================================
# 6. THE "SHARP" AI PROMPT
# ==========================================
prompt_instructions = """
You are a world-class surgical educator and medical board examiner. 
Your task is to extract high-yield medical MCQs from the provided surgical text and format them into the SHARP 2.0 Pedagogical Schema.

OUTPUT FORMAT:
Return ONLY a valid JSON object with the key "questions". No markdown, no conversational text.

SCHEMA FOR EACH QUESTION:
{
  "question": "The clinical stem or technical question.",
  "options": ["A) Option 1", "B) Option 2", "C) Option 3", "D) Option 4"],
  "correct_answer": "The full text of the correct option (e.g., 'A) Option 1')",
  "tags": ["Specialty", "Topic", "Sub-topic"],
  "sharp_debrief": {
    "S_set_the_stage": "Definitive answer confirmation (e.g., 'Correct: A. The diagnosis is confirmed by...').",
    "H_highlight_excellence": "Detailed clinical 'Why'. Explain the underlying surgical anatomy, physiology, or pathology.",
    "A_address_the_gaps": "Systematic debunking of every incorrect distractor. Explain why B, C, and D are wrong.",
    "R_review_learning_points": "Comprehensive high-yield topic summary. Provide a brief conceptual review of the surgical topic involved (Anatomy, Physiology, or Management principles). Cite ASCRS, ASA, ATLS, SAGES, or other relevant surgical societies.",
    "P_plan_for_improvement": "A single high-yield 'Take-Home' pearl optimized for exam performance."
  },
  "supplementary_callouts": {
    "guideline": "The primary society guideline referenced.",
    "takeaway": "A one-sentence summary of the key clinical fact.",
    "visualization": "Describe what a surgeon should 'see' in the OR or on imaging to confirm this answer."
  }
}

QUALITY REQUIREMENTS:
- Questions must be board-style and high-yield.
- The 'A' (Address Gaps) section must be thorough.
- Use professional surgical terminology (e.g., 'mesorectal excision', 'harmonic scalpel').
- CRITICAL: Remove all leaked answers from the question stem (e.g., if the source says "Correct: A", STRIP IT OUT).
- CRITICAL: Fix character-level spacing issues (e.g., "A p p e n d i x" should be "Appendix").
- CRITICAL: Strip out source index markers (e.g., "A 31.", "D 32.") from the text.
- If the source text contains insufficient data for a section, use: 'Insufficient Data in Source'.
"""

def clean_json_response(raw_text):
    try:
        if "```json" in raw_text:
            raw_text = raw_text.split("```json")[1].split("```")[0]
        elif "```" in raw_text:
            raw_text = raw_text.split("```")[1].split("```")[0]
        return json.loads(raw_text.strip())
    except:
        try:
            start = raw_text.find("{")
            end = raw_text.rfind("}")
            if start != -1 and end != -1:
                return json.loads(raw_text[start:end+1])
        except: pass
        raise Exception("Failed to parse AI JSON response")

# ==========================================
# 7. ENHANCED WATERFALL ENGINE
# ==========================================
def is_cooling(name):
    if name in COOLDOWNS:
        if datetime.datetime.now() < COOLDOWNS[name]:
            return True
        else:
            del COOLDOWNS[name]
    return False

def call_gemini(text_chunk):
    try:
        if USE_MODERN_GENAI:
            response = gemini_client.models.generate_content(
                model='gemini-2.0-flash',
                contents=prompt_instructions + "\n\nTEXT:\n" + text_chunk,
                config=types.GenerateContentConfig(temperature=0.2, response_mime_type="application/json")
            )
            return response.text
        else:
            model = google_genai.GenerativeModel('gemini-2.0-flash')
            response = model.generate_content(
                prompt_instructions + "\n\nTEXT:\n" + text_chunk,
                generation_config=google_genai.types.GenerationConfig(temperature=0.2, response_mime_type="application/json")
            )
            return response.text
    except Exception as e:
        if "429" in str(e):
            COOLDOWNS["Gemini"] = datetime.datetime.now() + datetime.timedelta(seconds=90)
            raise Exception("429: Gemini Quota Exhausted")
        raise e

def process_with_waterfall(text_chunk):
    # 1. PRIMARY: Gemini 2.0 Flash
    if not is_cooling("Gemini"):
        try:
            print("     -> Trying Gemini 2.0 Flash...")
            raw_json_string = call_gemini(text_chunk)
            data = clean_json_response(raw_json_string)
            return data.get("questions", [])
        except Exception as e:
            print(f"        [!] Gemini failed: {str(e)[:100]}")

    # 2. FALLBACKS: OpenRouter Ultimate Waterfall
    or_fallbacks = [
        "nvidia/nemotron-3-super:free",
        "openai/gpt-oss-120b:free",
        "openrouter/owl-alpha:free",
        "poolside/laguna-m.1:free",
        "z-ai/glm-4.5-air:free"
    ]

    if "OpenRouter" in clients and not is_cooling("OpenRouter"):
        client = clients["OpenRouter"]
        for model_candidate in or_fallbacks:
            try:
                print(f"     -> Falling back to OpenRouter ({model_candidate})...")
                res = client.chat.completions.create(
                    messages=[{"role": "system", "content": prompt_instructions}, {"role": "user", "content": text_chunk}],
                    model=model_candidate,
                    temperature=0.2,
                    timeout=90
                )
                data = clean_json_response(res.choices[0].message.content)
                return data.get("questions", [])
            except Exception as e:
                if "404" in str(e):
                    print(f"        [!] Model {model_candidate} not found. Trying next...")
                    continue
                if "429" in str(e) or "limit" in str(e).lower():
                    print(f"        [!] OpenRouter Rate Limited. Trying next model...")
                    continue
                print(f"        [!] OpenRouter ({model_candidate}) failed: {str(e)[:100]}")

    # 3. FINAL FALLBACKS: Groq / Local Ollama
    for name in ["Groq", "Local-Ollama"]:
        if name in clients and not is_cooling(name):
            try:
                client = clients[name]
                model_to_use = PROVIDERS[name]["model"]
                print(f"     -> Falling back to {name} ({model_to_use})...")
                res = client.chat.completions.create(
                    messages=[{"role": "system", "content": prompt_instructions}, {"role": "user", "content": text_chunk}],
                    model=model_to_use,
                    temperature=0.2,
                    response_format={"type": "json_object"} if name == "Groq" else None,
                    timeout=90
                )
                data = clean_json_response(res.choices[0].message.content)
                return data.get("questions", [])
            except Exception as e:
                print(f"        [!] {name} failed: {str(e)[:100]}")
    
    return None

# ==========================================
# 8. RUN THE PIPELINE
# ==========================================
folder_path = '/content/drive/MyDrive/SIH_Questions/'
files = glob.glob(folder_path + '*.pdf') + glob.glob(folder_path + '*.docx')
all_questions = []

print(f"Found {len(files)} files to process.\n")

for file in files:
    filename = os.path.basename(file)
    print(f"Processing: {filename}...")
    raw_text = extract_text(file)
    if not raw_text.strip(): continue

    text_chunks = chunk_text(raw_text)
    print(f"  -> Document split into {len(text_chunks)} chunks.")

    for i, chunk in enumerate(text_chunks):
        print(f"  -> Chunk {i+1}/{len(text_chunks)}: (Current total: {len(all_questions)})")
        extracted = None
        for attempt in range(2):
            extracted = process_with_waterfall(chunk)
            if extracted is not None: break
            print(f"        [!] ALL providers failed/exhausted (Attempt {attempt+1}/2). Waiting 45s...")
            time.sleep(45)
        
        if extracted:
            all_questions.extend(extracted)
            print(f"        ✅ Extracted {len(extracted)} questions.")
        
        output_file = '/content/drive/MyDrive/SIH_Questions/AI_transformed_questions_BACKUP.json'
        with open(output_file, 'w') as f:
            json.dump(all_questions, f, indent=4)
        time.sleep(5)

# Final save
final_output = '/content/drive/MyDrive/SIH_Questions/AI_transformed_questions.json'
with open(final_output, 'w') as f:
    json.dump(all_questions, f, indent=4)

print(f"\n🎉 DONE! Processed {len(all_questions)} questions to {final_output}")
