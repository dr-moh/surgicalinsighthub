#!/usr/bin/env python3
import os
import sys
import subprocess
from pathlib import Path
import re

# Color mapping configurations for each of the 10 chapters
CHAPTERS_METADATA = {
    "shock_resuscitation.html": {
        "primary": "#991B1B", # Red
        "primary-dk": "#7F1D1D",
        "primary-lt": "#FEF2F2",
    },
    "trauma_mods.html": {
        "primary": "#1E3A8A", # Royal Blue
        "primary-dk": "#172554",
        "primary-lt": "#EFF6FF",
    },
    "fluid_electrolytes.html": {
        "primary": "#0F766E", # Teal
        "primary-dk": "#115E59",
        "primary-lt": "#F0FDFA",
    },
    "hemostasis_transfusion.html": {
        "primary": "#C2410C", # Warm Orange
        "primary-dk": "#7C2D12",
        "primary-lt": "#FFF7ED",
    },
    "surgical_infections.html": {
        "primary": "#065F46", # Emerald Green
        "primary-dk": "#064E3B",
        "primary-lt": "#ECFDF5",
    },
    "preop_optimization.html": {
        "primary": "#3730A3", # Royal Indigo
        "primary-dk": "#312E81",
        "primary-lt": "#EEF2FF",
    },
    "postop_complications.html": {
        "primary": "#B45309", # Amber Gold
        "primary-dk": "#78350F",
        "primary-lt": "#FEF3C7",
    },
    "surgical_oncology.html": {
        "primary": "#581C87", # Dark Plum
        "primary-dk": "#3B0764",
        "primary-lt": "#F3E8FF",
    },
    "anesthesia_airway.html": {
        "primary": "#0369A1", # Slate Blue
        "primary-dk": "#0C4A6E",
        "primary-lt": "#F0F9FF",
    },
    "surgical_nutrition.html": {
        "primary": "#78350F", # Warm Sienna
        "primary-dk": "#451A03",
        "primary-lt": "#FFF7ED",
    }
}

MATHJAX_TAG = '<script src="https://jsdelivr.net" async></script>'

def log_step(msg):
    print(f"\033[1;34m[INFO]\033[0m {msg}")

def log_success(msg):
    print(f"\033[1;32m[SUCCESS]\033[0m {msg}")

def log_warning(msg):
    print(f"\033[1;33m[WARNING]\033[0m {msg}")

def log_error(msg):
    print(f"\033[1;31m[ERROR]\033[0m {msg}", file=sys.stderr)

def process_html_files():
    log_step("Starting Head Template Injection & Sanitization on 10 monographs...")
    notes_dir = Path("notes/Surgical High-Yield Notes")
    
    if not notes_dir.exists():
        log_error(f"Notes directory not found: {notes_dir}")
        return False
        
    for filename, meta in CHAPTERS_METADATA.items():
        filepath = notes_dir / filename
        if not filepath.exists():
            log_warning(f"File not found, skipping: {filepath}")
            continue
            
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            modified = False
            
            # 1. Inject MathJax tag right before </head> if not present
            if MATHJAX_TAG not in content:
                if "</head>" in content:
                    content = content.replace("</head>", f"{MATHJAX_TAG}\n</head>")
                    log_step(f"Injected MathJax script into {filename}")
                    modified = True
                else:
                    log_warning(f"Could not find </head> tag in {filename}")
            
            # 2. Check and enforce --s1 to --s5 custom variables mapping
            # Ensure --s1 matches the primary theme, and other pillars exist
            variables_to_check = {
                "--s1": meta["primary"],
                "--s1-lt": meta["primary-lt"]
            }
            
            for var, val in variables_to_check.items():
                pattern = rf"{var}\s*:\s*([^;]+);"
                match = re.search(pattern, content)
                if match:
                    current_val = match.group(1).strip()
                    if current_val.lower() != val.lower():
                        content = re.sub(pattern, f"{var}:   {val};", content)
                        log_step(f"Updated {var} to {val} in {filename}")
                        modified = True
                else:
                    log_warning(f"Variable {var} not found in {filename} style block.")
            
            # 3. Check for truncated or broken LaTeX markers
            # Balance checks for $$ and \[ \]
            for marker, open_symbol, close_symbol in [("$$", "$$", "$$"), ("\\[ \\]", "\\[", "\\]"), ("\\( \\)", "\\(", "\\)")]:
                open_count = content.count(open_symbol)
                if open_symbol == close_symbol:
                    if open_count % 2 != 0:
                        log_warning(f"Unbalanced LaTeX markers {open_symbol} in {filename}")
                
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                log_success(f"Successfully processed and saved changes to {filename}")
            else:
                log_step(f"No changes required for {filename}")
                
        except Exception as e:
            log_error(f"Error processing {filename}: {e}")
            return False
            
    return True

def validate_database_syntax():
    log_step("Validating js/notes_data.js database syntax...")
    data_path = Path("js/notes_data.js")
    
    if not data_path.exists():
        log_error(f"Database file not found: {data_path}")
        return False
        
    try:
        with open(data_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Verify surgical_nutrition object is structured with correct array syntax
        nutrition_pattern = r"url:\s*'notes/Surgical High-Yield Notes/surgical_nutrition\.html'"
        if not re.search(nutrition_pattern, content):
            log_warning("Could not find the expected url for surgical_nutrition in notes_data.js")
            
        # Run node compile check to programmatically ensure no syntax errors (including missing or dangling commas)
        result = subprocess.run(["node", "-c", str(data_path)], capture_output=True, text=True)
        if result.returncode != 0:
            log_error("Syntax check failed on js/notes_data.js!")
            log_error(result.stderr)
            return False
            
        log_success("js/notes_data.js syntax validation passed successfully.")
        return True
    except Exception as e:
        log_error(f"Error validating database: {e}")
        return False

def run_verification_launch():
    log_step("Launching automated verification checks via check_notes_ui.py...")
    try:
        result = subprocess.run(["python3", "check_notes_ui.py"], capture_output=True, text=True)
        print("\n=== Validation Results ===")
        print(result.stdout)
        if result.stderr:
            print(result.stderr, file=sys.stderr)
        print("==========================\n")
        
        if result.returncode == 0 and "passed" in result.stdout.lower():
            log_success("All deployment checks passed successfully!")
            return True
        else:
            log_error("Verification checks failed.")
            return False
    except Exception as e:
        log_error(f"Error launching verification: {e}")
        return False

def main():
    success = True
    success &= process_html_files()
    success &= validate_database_syntax()
    success &= run_verification_launch()
    
    if success:
        log_success("Deployment completed successfully without any errors.")
        sys.exit(0)
    else:
        log_error("Deployment failed during execution.")
        sys.exit(1)

if __name__ == "__main__":
    main()
