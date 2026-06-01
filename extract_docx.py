import docx
import sys
import os

files = [
    "Schwartz's 9th - @Medicine_Way  conv.docx",
    "Radiology for Surgeons conv.docx",
    "Surgery Clinical Cases MCQ_s_copy conv.docx",
    "Single_best_answers_SBAs_for_the_MRCS_Part_A_a_Bailey_&_Love_revision conv.docx"
]

base_dir = "/Users/dr.moh/Documents/SIH/sih_project/MCQ Bank"
out_dir = os.path.join(base_dir, "extracted")

for fname in files:
    try:
        print(f"Extracting {fname}...")
        doc_path = os.path.join(base_dir, fname)
        doc = docx.Document(doc_path)
        
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)
            
        out_name = fname.replace(".docx", ".txt")
        out_path = os.path.join(out_dir, out_name)
        
        with open(out_path, "w", encoding="utf-8") as f:
            f.write("\n".join(full_text))
            
        size = os.path.getsize(out_path)
        print(f"Successfully saved to {out_name} (Size: {size / 1024 / 1024:.2f} MB)")
    except Exception as e:
        print(f"Failed to extract {fname}: {e}")
