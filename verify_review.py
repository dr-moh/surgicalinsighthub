import os
import glob

REVIEW_DIR = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/review"
EXTRACTED_JSON_DIR = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank/extracted/review"
JS_OUTPUT_DIR = "/Users/dr.moh/Documents/SIH/sih_project/js/questions/review"

raw_files = []
for ext in ["*.pdf", "*.docx", "*.txt"]:
    raw_files.extend(glob.glob(os.path.join(REVIEW_DIR, ext)))
    
extracted_jsons = glob.glob(os.path.join(EXTRACTED_JSON_DIR, "*.json"))
js_files = glob.glob(os.path.join(JS_OUTPUT_DIR, "*.js"))

print(f"Total files in MCQ Bank/review (PDF/DOCX/TXT): {len(raw_files)}")
print(f"Total raw JSON files extracted (Stage 1): {len(extracted_jsons)}")
print(f"Total final JS files created (Stage 2): {len(js_files)}")

# Check which ones are missing
raw_basenames = [os.path.basename(f) for f in raw_files]
json_basenames = [os.path.basename(f).replace(".json", "") for f in extracted_jsons]

missing = [f for f in raw_basenames if f not in json_basenames]

print("\nMissing files from extraction (Stage 1):")
if missing:
    for m in missing:
        print(f" - {m}")
else:
    print("None! All files were successfully processed in Stage 1.")
