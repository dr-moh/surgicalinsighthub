import os
from pathlib import Path
import re

def check_html_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return [f"Error reading file: {e}"]
        
    issues = []
    
    # 1. Check for shared.css and theme.css
    if "theme.css" not in content:
        issues.append("Missing theme.css")
    if "shared.css" not in content:
        issues.append("Missing shared.css")
        
    # 2. Check for navigation.js
    if "navigation.js" not in content:
        issues.append("Missing navigation.js")
        
    # 3. Check for main nav #mainNav
    if 'id="mainNav"' not in content:
        issues.append("Missing id=\"mainNav\"")
        
    # 4. Check for mob-nav-sheet
    if 'id="mobNavSheet"' not in content:
        issues.append("Missing id=\"mobNavSheet\"")
        
    # 5. Check for dark mode toggle script
    if 'themeToggle' not in content:
        issues.append("Missing themeToggle element")

    return issues

notes_dir = Path("notes")
html_files = list(notes_dir.rglob("*.html"))

results = {}
for file in html_files:
    if "Anesthesia_Perioperative_Care_Illustrated_Monograph.files" in str(file):
        continue
    if file.name in ["template.html", "procedure_template.html"]:
        continue
        
    issues = check_html_file(file)
    if issues:
        results[str(file)] = issues

if not results:
    print("All files passed basic UI/UX structure checks!")
else:
    for file, issues in results.items():
        print(f"{file}:")
        for issue in issues:
            print(f"  - {issue}")
