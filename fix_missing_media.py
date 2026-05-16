import os
import re

count = 0
for root, dirs, files in os.walk('notes'):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            if '#sidebar-toggle' in content and 'max-width:900px' in content and 'top: auto;' not in content:
                # Find the media block and add the sidebar toggle css
                pattern = re.compile(r'(@media\s*\(\s*max-width\s*:\s*900px\s*\)\s*\{\s*\.content-wrap[^}]+}\s*#hero[^}]+}\s*#hero h1[^}]+})(\s*})', re.MULTILINE)
                
                replacement = r'\1\n  #sidebar-toggle {\n    top: auto;\n    bottom: 24px;\n    left: 24px;\n    z-index: 1200;\n    padding: 8px 16px;\n    font-size: 12px;\n  }\n\2'
                
                new_content, num_subs = pattern.subn(replacement, content)
                
                if num_subs > 0:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    count += 1
                    print(f"Fixed {filepath}")

print(f"Total files fixed: {count}")
