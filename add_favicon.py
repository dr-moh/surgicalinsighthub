import os
import re

def get_depth(filepath):
    parts = filepath.strip('./').split('/')
    return len(parts) - 1

def add_favicon():
    for root, dirs, files in os.walk('.'):
        if 'node_modules' in root or '.git' in root or 'archive' in root: continue
        for f in files:
            if f.endswith('.html'):
                filepath = os.path.join(root, f)
                with open(filepath, 'r') as file:
                    content = file.read()
                
                # Check if favicon already exists
                if '<link rel="icon"' in content:
                    print(f"Skipping {filepath}, favicon already exists.")
                    continue
                
                depth = get_depth(filepath)
                prefix = '../' * depth
                favicon_tag = f'<link rel="icon" type="image/png" href="{prefix}assets/images/Surgical_Insight_Hub_Logo.png">'
                
                # Insert right before </head>
                new_content = re.sub(r'</head>', f'  {favicon_tag}\n</head>', content, flags=re.IGNORECASE)
                
                if new_content != content:
                    with open(filepath, 'w') as file:
                        file.write(new_content)
                    print(f"Added favicon to {filepath}")

add_favicon()
