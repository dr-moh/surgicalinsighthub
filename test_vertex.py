import os
from google import genai

project_id = "sih-mcq-pipeline"
location = "us-central1"
try:
    client = genai.Client(vertexai=True, project=project_id, location=location)
    response = client.models.generate_content(
        model='gemini-2.5-pro',
        contents='Hello, this is a test. Reply with OK if you receive this.'
    )
    print("Success:", response.text)
except Exception as e:
    print("Error:", e)
