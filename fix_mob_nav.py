import os
import re

def get_depth(file_path):
    parts = file_path.strip('./').split('/')
    return len(parts) - 1

def build_nav_sheet(depth):
    prefix = '../' * depth
    return f"""<div class="mob-nav-overlay" id="mobNavOverlay" onclick="closeMobNav()"></div>
<div class="mob-nav-sheet" id="mobNavSheet">
  <div class="mob-nav-handle"></div>
  <a href="{prefix}index.html" onclick="closeMobNav()">Home</a>
  <a href="{prefix}notes.html" onclick="closeMobNav()">Notes</a>
  <a href="{prefix}notes/operative_approach.html" onclick="closeMobNav()">Playbook</a>
  <a href="{prefix}podcast.html" onclick="closeMobNav()">Podcast</a>
  <a href="{prefix}surgery-talk.html" onclick="closeMobNav()">Surgery Talk</a>
  <a href="{prefix}arena.html" onclick="closeMobNav()">MCQ Arena</a>
  <a href="{prefix}about.html" onclick="closeMobNav()">About</a>
  <a href="https://t.me/sugicalInsightHub" target="_blank" rel="noopener" onclick="closeMobNav()" style="color: var(--brand-gold); font-weight: 800;">Join Telegram Community</a>
  <a href="https://www.linkedin.com/company/surgical-insight-hub" target="_blank" rel="noopener" onclick="closeMobNav()" style="color: var(--brand-gold); font-weight: 800;">LinkedIn Community</a>
</div>"""

def process_file(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()

    original = "".join(lines)
    depth = get_depth(filepath)

    new_lines = []
    in_nav = False
    replaced = False

    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Ensure button has onclick="openMobNav()"
        if '<button class="mob-nav-toggle"' in line and 'onclick' not in line:
            line = re.sub(
                r'<button class="mob-nav-toggle"(?!.*onclick)[^>]*>',
                '<button class="mob-nav-toggle" onclick="openMobNav()" title="Open Navigation Menu">',
                line
            )
        
        if '<div class="mob-nav-overlay"' in line:
            in_nav = True
            new_lines.append(build_nav_sheet(depth) + '\n')
            
            # Skip lines until we find the closing div of mob-nav-sheet
            while i < len(lines):
                i += 1
                if i >= len(lines): break
                l = lines[i].strip()
                if l == '</div>':
                    continue
                if l.startswith('<div class="mob-nav-sheet"') or l.startswith('<a ') or l.startswith('<!--') or l == '<div class="mob-nav-handle"></div>' or l == '<div class="mob-nav-handle">':
                    continue
                # If we get here, it's something else! Let's stop skipping
                break
            
            # The line `i` is now the FIRST line that is NOT part of the mob-nav-sheet
            # We don't append line `i` here, because the main loop `i` will be handled on the next iteration
            # Wait, the main loop does `i += 1` at the end, so we should actually do `i -= 1`
            # to let the main loop process this line `i`
            i -= 1
            replaced = True
            
            # actually, let's just do `i += 1` at the end of loop. So if we `continue`, we skip the rest of the loop block and `i += 1`.
            # Wait, no. If I just `continue`, it skips the `new_lines.append(line)` and does `i += 1`. But I WANT to append the line `i` that broke the loop!
            # So I should NOT `continue`, I should just append it. BUT wait, if I don't `continue`, then `new_lines.append(line)` will append `lines[i]` (from before the inner loop)?
            # No, `line` is still the OLD `line` (the overlay line). So I should update `line = lines[i]`.
            # Then I can just fall through to `new_lines.append(line)`.
            line = lines[i]
            # wait, I already appended the whole build_nav_sheet. I shouldn't append `line` if it was part of the overlay.
            # So let's just fall through and let it append `lines[i]`.
            
            # wait, if I `continue` here, it will do `i += 1` and SKIP `lines[i]`.
            # So I should do `new_lines.append(lines[i])` then `continue`.
            # No, if I do `new_lines.append(lines[i])`, it might do it twice if I'm not careful.
            
            # Let's be clean:
            # We found the overlay. We appended the new sheet.
            # `i` is now at the line AFTER the old sheet.
            # We want the main loop to process `lines[i]` NEXT.
            # If we do `i -= 1`, then `continue`, the main loop does `i += 1` and processes `lines[i]`.
            i -= 1
            replaced = True
            continue

        if '</body>' in line and 'navigation.js' not in original:
            prefix = '../' * depth
            new_lines.append(f'<script src="{prefix}js/navigation.js"></script>\n')
            
        new_lines.append(line)
        i += 1
        
    result = "".join(new_lines)
    if not replaced and ('<nav ' in original or 'class="nav"' in original):
        # Insert after </nav>
        result = re.sub(r'(</nav>\s*)', r'\1' + build_nav_sheet(depth) + '\n', result)
        
    if result != original:
        with open(filepath, 'w') as f:
            f.write(result)
        print(f"Updated {filepath}")

html_files = []
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or 'archive' in root or '.venv' in root or 'venv' in root or '.git' in root or '.agents' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

for f in html_files:
    process_file(f)

print("Done")
