import os
import re

# Standardized Navbar Template (Residency Journal Style)
NAVBAR_TEMPLATE = """
  <!-- Standardized SIH Navbar -->
  <nav class="nav" id="mainNav">
    <div class="nav-left">
      <a href="../../index.html" class="nav-pill">
        <div class="nav-logo-img">
          <img src="../../assets/icons/apple-touch-icon.png" alt="SIH Logo">
        </div>
        <div>
          <div class="nav-brand-text">Surgical Insight Hub</div>
          <div class="nav-brand-sub">The Residency Journal</div>
        </div>
      </a>
    </div>

    <div class="nav-links-pill">
      <a href="../../index.html">Home</a>
      <a href="../../notes.html" class="active">Notes</a>
      <a href="../../playbook.html">Playbook</a>
      <a href="../../arena.html">MCQ Arena</a>
      <a href="../../podcast.html">Podcast</a>
      <a href="../../surgery_talk.html">Surgery Talk</a>
      <a href="../../about.html">About</a>
    </div>

    <div class="nav-right">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle Theme">
        <svg id="moonIcon" viewBox="0 0 24 24" width="18" height="18"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <svg id="sunIcon" style="display:none;" viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </button>
      <a href="https://t.me/sugicalInsightHub" target="_blank" class="nav-tg-btn" title="Join Telegram" style="background: var(--brand-burgundy); color: #f0d080; padding: 8px 12px; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s ease;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#f0d080"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 8.22l-1.97 9.28c-.15.66-.54.82-1.08.51l-3-2.21-1.45 1.39c-.16.16-.3.3-.61.3l.21-3.05 5.56-5.02c.24-.21-.05-.33-.37-.12l-6.87 4.33-2.96-.92c-.64-.2-.66-.64.14-.95l11.57-4.46c.54-.19 1.01.13.83.94z"/></svg>
      </a>
      <a href="../../arena.html" class="nav-btn arena-btn">MCQ Arena</a>
      <button class="mob-nav-toggle" onclick="openMobNav()" aria-label="Menu">
        <div class="hamburger"><span></span><span></span><span></span></div>
      </button>
    </div>
  </nav>

  <div class="mob-nav-overlay" id="mobNavOverlay" onclick="closeMobNav()"></div>
  <div class="mob-nav-sheet" id="mobNavSheet">
    <div class="mob-nav-handle"></div>
    <a href="../../index.html">Home</a>
    <a href="../../notes.html" class="active">Notes</a>
    <a href="../../playbook.html">Playbook</a>
    <a href="../../arena.html">MCQ Arena</a>
    <a href="../../podcast.html">Podcast</a>
    <a href="../../surgery_talk.html">Surgery Talk</a>
    <a href="../../about.html">About</a>
    <a href="https://t.me/sugicalInsightHub" target="_blank" style="color: var(--brand-gold); font-weight: 800;">Join Telegram Community</a>
  </div>
"""

def standardize_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define common nav patterns to replace
    nav_patterns = [
        r'<nav[^>]*id="mainNav"[^>]*>.*?</nav>',
        r'<nav[^>]*>.*?</nav>',
        r'<div[^>]*class="navbar"[^>]*>.*?</div>'
    ]

    updated_content = content
    replaced = False

    # First, strip existing mobile nav components to avoid duplication
    updated_content = re.sub(r'<div[^>]*id="mobNavOverlay"[^>]*>.*?</div>', '', updated_content, flags=re.DOTALL)
    updated_content = re.sub(r'<div[^>]*id="mobNavSheet"[^>]*>.*?</div>', '', updated_content, flags=re.DOTALL)

    for pattern in nav_patterns:
        if re.search(pattern, updated_content, re.DOTALL):
            updated_content = re.sub(pattern, NAVBAR_TEMPLATE, updated_content, count=1, flags=re.DOTALL)
            replaced = True
            break

    # If no nav was found to replace, inject after <body>
    if not replaced:
        if '<body' in updated_content:
            updated_content = re.sub(r'(<body[^>]*>)', r'\1' + NAVBAR_TEMPLATE, updated_content, count=1)
            replaced = True
    
    # Ensure navigation.js is included before </body>
    if '../../js/navigation.js' not in updated_content:
        updated_content = updated_content.replace('</body>', '<script src="../../js/navigation.js"></script>\n</body>')

    if content != updated_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        return True
    return False

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    notes_dir = os.path.join(base_dir, "notes")
    
    count = 0
    for root, _, files in os.walk(notes_dir):
        for file in files:
            if file.endswith(".html"):
                path = os.path.join(root, file)
                if standardize_file(path):
                    print(f"Standardized: {os.path.relpath(path, notes_dir)}")
                    count += 1
    
    print(f"\\nDone! Updated {count} files.")

if __name__ == "__main__":
    main()
