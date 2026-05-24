import json
import os
import re
from google import genai
from google.genai import types

with open('compiled_mcqs/removed_bad_mcqs.json', 'r') as f:
    data = json.load(f)

q = data[0]

vertex_client = genai.Client(vertexai=True, project="sih-mcq-pipeline", location="us-central1")

prompt = f"""You are a world-class surgical educator and medical board examiner. Your task is to extract high-yield medical MCQs from the provided surgical text and format them strictly into the SHARP 3.0 Cognitive & Surgical Debriefing Schema.

OUTPUT FORMAT:
Return ONLY a valid JSON object with the key "questions". No markdown wrappers, no conversational text, no trailing explanations.
If the question is invalid, return exactly {{"status": "REJECT"}}.

Provided MCQ Text:
Q: {q.get('question', '')}
Options: {json.dumps(q.get('options', dict()))}
Answer Key: {q.get('answer', '')}
"""

print("Sending prompt...")
response = vertex_client.models.generate_content(
    model='gemini-2.5-flash',
    contents=prompt,
    config=types.GenerateContentConfig(
        response_mime_type="application/json",
        temperature=0.15
    )
)
print("Response text:")
print(response.text)
