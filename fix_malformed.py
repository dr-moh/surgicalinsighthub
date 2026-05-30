import os
import re

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or 'archive' in root: continue
    for f in files:
        if f.endswith('.html'):
            filepath = os.path.join(root, f)
            with open(filepath, 'r') as file:
                content = file.read()
            
            pattern = re.compile(r'</div>\n\s*<a href="https://www\.linkedin\.com/company/surgical-insight-hub"[^>]*>.*?</a>\n</div>', re.DOTALL)
            if pattern.search(content):
                content = pattern.sub('</div>', content)
                with open(filepath, 'w') as file:
                    file.write(content)
                print(f'Fixed malformed tail in: {filepath}')

