import json
import re
import os

# Paths
QUESTIONS_PATH = "/Users/dr.moh/Documents/GitHub/surgicalinsighthub/js/questions/canonical_questions.js"
RESEARCH_DB_PATH = "/Users/dr.moh/Documents/GitHub/surgicalinsighthub/scratch/research_database.json"
OUTPUT_PATH = "/Users/dr.moh/Documents/GitHub/surgicalinsighthub/js/questions/canonical_questions.js"

def load_json_from_js(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract the array part
    start_idx = content.find("[")
    end_idx = content.rfind("]")
    if start_idx == -1 or end_idx == -1:
        return None
    
    json_str = content[start_idx:end_idx+1]
    return json.loads(json_str)

def save_json_to_js(data, path):
    js_content = f"/** Consolidated MCQ Bank - {len(data)} questions **/\n"
    js_content += "window.QUESTIONS = " + json.dumps(data, indent=2, ensure_ascii=False) + ";"
    with open(path, "w", encoding="utf-8") as f:
        f.write(js_content)

def is_garbage(q):
    stem = q.get("question", "").strip()
    # Too short
    if len(stem) < 30:
        return True
    # Suspicious keywords
    garbage_keywords = ["DEDICATIONS", "this book is intended", "preface", "acknowledgments", "table of contents"]
    for kw in garbage_keywords:
        if kw.lower() in stem.lower():
            return True
    return False

def get_category(q):
    spec = q.get("specialty", "").lower()
    topic = q.get("topic", "").lower()
    
    # Cholecystectomy specific (high priority)
    if any(k in topic for k in ["cholecystectomy", "gallbladder", "biliary", "stones", "cholecystitis"]):
        return "cholecystectomy"
    
    # HPB
    if "hpb" in spec or any(k in topic for k in ["pancreas", "whipple", "liver", "hcc", "cholangitis", "bile duct", "spleen"]):
        return "hpb"
    
    # Colorectal & Pediatric
    if "colorectal" in spec or "pediatric" in spec or any(k in topic for k in ["colon", "rectum", "hemicolectomy", "appendic", "stoma", "fistula", "hernia", "bowel", "intestine", "intussusception", "pyloric stenosis", "hirschsprung"]):
        return "colorectal"
    
    # Endocrine & Breast
    if "endocrine" in spec or "breast" in spec or any(k in topic for k in ["thyroid", "adrenal", "parathyroid", "men ", "pheochromocytoma", "breast", "mastectomy"]):
        return "endocrine"
    
    # Trauma & Orthopedics
    if "trauma" in spec or "ortho" in spec or any(k in topic for k in ["laparotomy", "reboa", "atls", "damage control", "hemorrhage", "fracture", "shock", "trauma"]):
        return "trauma"
    
    # Vascular
    if "vascular" in spec or any(k in topic for k in ["aneurysm", "evar", "carotid", "bypass", "artery", "vein", "clot"]):
        return "vascular"
    
    # Anesthesia
    if "anesthesia" in spec:
        return "anesthesia"
    
    return "hpb" # Default to HPB if unknown

def main():
    print("Loading data...")
    questions = load_json_from_js(QUESTIONS_PATH)
    if not questions:
        print("Failed to load questions.")
        return

    with open(RESEARCH_DB_PATH, "r") as f:
        research_db = json.load(f)

    print(f"Original questions: {len(questions)}")
    
    # Filter garbage and enrich
    cleaned_questions = []
    enriched_count = 0
    garbage_count = 0
    
    for q in questions:
        if is_garbage(q):
            garbage_count += 1
            continue
            
        category = get_category(q)
        insight = research_db.get(category)
        
        if insight:
            q["research_insight"] = insight
            enriched_count += 1
        
        cleaned_questions.append(q)
    
    print(f"Removed {garbage_count} garbage questions.")
    print(f"Enriched {enriched_count} questions with 2025/26 research.")
    print(f"Final question count: {len(cleaned_questions)}")
    
    save_json_to_js(cleaned_questions, OUTPUT_PATH)
    print(f"Saved to {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
