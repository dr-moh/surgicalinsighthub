# GitHub Copilot Instructions — Surgical Insight Hub

## Project Overview

**Surgical Insight Hub (SIH)** is a medical education platform for surgical residents. It combines:
- **Frontend**: Static HTML/CSS/JS site with responsive design deployed to Cloudflare Pages
- **Backend**: Supabase (testimonials, MCQ scores), OpenRouter AI (clinical enrichment)
- **Content**: MCQ question bank (~1,500+ questions), Residency Journal clinical notes (A4 printable)
- **Data Pipeline**: Python scripts that extract, enrich, and validate MCQ questions using OpenRouter API

**Live site**: https://surgicalinsighthub.pages.dev  
**Repository**: https://github.com/dr-moh/surgicalinsighthub  
**Deployment**: Auto-deploy from `main` branch to Cloudflare Pages

---

## Build, Test & Development Commands

### Frontend (HTML/CSS/JS — no build step)
The frontend is static HTML with no build process. Changes are auto-deployed from GitHub to Cloudflare Pages.

**Local testing:**
```bash
# Serve locally using Python's built-in server
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Python Scripts (MCQ processing, enrichment)
All Python work uses the standard library + `requests`, `python-docx`, and `PyPDF2`:

```bash
# Install dependencies
pip install -r requirements.txt

# Run MCQ enrichment (SHARP debrief auto-fill via OpenRouter)
python3 enrich_questions.py

# Extract MCQs from DOCX files
python3 scripts/extract_docx_mcqs.py <path_to_file.docx>

# Extract MCQs from PDF files
python3 scripts/extract_pdf_mcqs.py <path_to_file.pdf>

# Bulk enrich questions in batches
python3 scripts/deploy_mcq_bank.py

# Deduplicate questions
python3 scripts/dedupe_questions.py
```

**No tests currently exist.** Add unit tests under `tests/` using Python's `unittest` or `pytest`.

---

## High-Level Architecture

### Frontend Structure
```
index.html              → Home page (hero, MCQ preview, testimonials, leaderboard)
arena.html             → MCQ Arena (20-question practice test + SHARP debrief)
mcq_bank.html          → Full MCQ bank browser
notes.html             → Clinical notes library with specialty filter
review.html            → AI Review (streams Claude API for surgical topics)
podcast.html           → YesSurgeryBet podcast episodes
about.html             → Author bio (Dr. Abdulmalik Moh)
[TOPIC]_ResidencyJournal.html  → Printable A4 clinical notes (Bowel Obstruction, etc.)

css/
  theme.css            → Global theme (CSS variables, light/dark mode support)
  index.css, arena.css, etc. → Page-specific styles

js/
  questions.js         → Main MCQ question array (auto-generated, ~1MB)
  questions/
    canonical_questions.js → Authority source for specialty + guideline mapping
  nav-pill.js, etc.    → Utility components
```

### Data Pipeline (Python)
```
Raw MCQs (DOCX/PDF) 
  ↓ [extract_docx_mcqs.py, extract_pdf_mcqs.py]
  ↓ JSON with raw question, options, answer
  ↓ [dedupe_questions.py]
  ↓ Remove duplicates
  ↓ [enrich_questions.py]  ← Calls OpenRouter API with prompt templates
  ↓ Adds "sharp" field (SHARP debrief: set_the_stage, highlight_excellence, address_gaps, review_guidelines, plan)
  ↓ [deploy_mcq_bank.py]
  ↓ Validates, merges into js/questions.js as `var QUESTIONS = [...]`
  ↓ Commit & push to GitHub
  ↓ Cloudflare Pages auto-deploys
```

### Backend (Supabase)
Two tables:
- `testimonials` — User testimonials (approved=false by default, set true to display)
- `mcq_scores` — Global leaderboard data (name, specialty, topic, score, time_taken)

Queries run from frontend JavaScript (no server-side API).

---

## Key Conventions

### 1. Brand Identity (CSS Variables in theme.css)
**Never hardcode colors.** Always use CSS variables:

```css
/* Core palette */
--brand-burgundy: #2b1810;      /* Headers, dark elements */
--brand-gold: #b8922a;           /* Accents, active states */
--brand-red: #a31515;            /* Callouts, warnings */
--text-primary: #1a1208;         /* Body text */

/* Use in stylesheets */
background: var(--brand-burgundy);
border-bottom: 3px solid var(--brand-gold);
```

Light mode CSS variables set in `:root`. Dark mode overrides in `[data-theme="dark"]`.

### 2. Typography (Brand Fonts)
**Residency Journal notes** (printable A4 pages use specific fonts):
- **Body**: Overpass 400/600/700 (sans-serif)
- **Headings**: EB Garamond 700 italic (serif)
- **Monospace**: Overpass Mono (for numbers, badges, code)
- **PDF fallback**: Liberation Serif / Liberation Sans / Liberation Mono

**Web pages** use Inter 400/600/700/800/900 (modern, readable).

### 3. MCQ Question Structure (js/questions.js)
Every question must have:
```javascript
{
  id: 831,                      // Unique ID
  specialty: "General Surgery", // From SPECIALTY_MAP in deploy_mcq_bank.py
  topic: "Inguinal Hernia",
  question: "...",
  options: { "A": "...", "B": "...", "C": "...", "D": "...", "E": "..." },
  answer: "C",                  // Single letter
  explanation: {
    correct: "Why C is right...",
    A: "Why A is wrong...",
    B: "Why B is wrong...",
    C: "",                       // Correct option is empty
    D: "Why D is wrong...",
    E: "Why E is wrong..."
  },
  guideline: "HerniaSurge Group International Guidelines for Groin Hernia Management",
  takeaway: "Key Concept: ...",
  sharp: {                       // ADDED by enrich_questions.py
    verified_answer: "C",
    set_the_stage: "...",
    highlight_excellence: "...",
    address_gaps: "...",
    review_guidelines: "...",
    plan: "..."
  }
}
```

### 4. Residency Journal Notes (STYLE_GUIDE.md is the authority)
All clinical notes follow the "Residency Journal" template:

**Page structure** (top to bottom):
1. **Tab strip** (8mm) — 4 tabs: Foundations · Presentation · Management · MCQ
2. **Page header** — Logo + title (page 1 only); topic title + page number (page 2+)
3. **Body** (flex, ruled line background) — Sections with numbered badges, tables, bullets, callouts
4. **Footer** (pinned) — "Surgical Insight Hub | Topic | Page N/Total"

**Critical rules:**
- Page height: **297mm fixed** (not min-height) for proper footer pinning in WeasyPrint
- Section numbers: **sequential across all pages**, never reset per page
- Descriptions (gold-bordered italic boxes): only in pathophysiology, classifications, conceptual sections
- **No paragraphs** — use tables, bullets, numbered steps, or callout boxes only
- Callout boxes: `.note` (gold border) for guidelines; `.warnbox` (red border) for emergencies
- Numbers in tables: use `.hi` class (red, monospaced) for critical values

**Every note must include:**
- Brutal Rule (page 1, one sentence, clinically lethal if ignored)
- Pathophysiology (with description)
- Classification (with description)
- Guideline references (with year)
- Eponyms table
- MCQ Numbers section (testable thresholds, doses, percentages)
- Ward Round / Never Miss checklist

### 5. API & Enrichment (OpenRouter Integration)
- **API Key**: stored in environment variable `OPENROUTER_API_KEY` (loaded in enrich_questions.py)
- **Models**: cycles through fallback list if primary model fails
- **Prompt template**: in `get_sharp_debrief()` function — asks for JSON response with SHARP structure
- **Rate limiting**: `time.sleep(2)` between API calls to respect OpenRouter rate limits
- **Validation**: parsed JSON checked for all required fields before saving

### 6. File Naming Conventions
- **HTML pages**: lowercase with underscores (e.g., `mcq_bank.html`, `surgery_talk.html`)
- **Residency Journal notes**: `[TOPIC]_ResidencyJournal.html` (e.g., `BO_ResidencyJournal_v3.html`)
- **CSS files**: lowercase with underscores, scoped to purpose (e.g., `arena.css`, `notes.css`)
- **Python scripts**: lowercase with underscores, placed in `scripts/` directory
- **Data files**: JSON in `js/questions/` or `MCQ Bank/`, JS exports as `js/questions.js`

### 7. Content Rules (from STYLE_GUIDE.md)
**Never use** (banned words & phrases):
- AI slop: "delve", "foster", "groundbreaking", "testament", "streamlined", "landscape", "realm", "comprehensive", "leverage", "cutting-edge", "game-changer", "paradigm shift"
- Fluff: "furthermore", "moreover", "it is worth noting", "in conclusion"
- Passive hedging: "it could be argued", "one might consider", "there are various factors"
- Corporate speak: "synergy", "holistic approach", "robust framework"

**Voice**: Ruthless senior resident mentor. Direct, aggressive, survival-focused. Active voice always. High burstiness (mix short + long sentences).

### 8. Deployment & Git Workflow
- **Main branch**: Always deployable. Auto-deploys to Cloudflare Pages on push.
- **Commits**: Include meaningful messages describing what changed and why.
- **MCQ updates**: Commit the generated `js/questions.js` file after enrichment completes.
- **Large files**: Never commit PDFs or binaries to `MCQ Bank/` (in .gitignore for a reason).

---

## Important Files Reference

| File | Purpose |
|------|---------|
| `STYLE_GUIDE.md` | Complete design system for Residency Journal notes (colors, fonts, page layout, content rules) |
| `README_CLAUDE_CODE.md` | Quick reference for site structure, backend services, deployment |
| `js/questions/canonical_questions.js` | Authority source for specialty-to-guideline mapping |
| `scripts/deploy_mcq_bank.py` | Main entry point for MCQ pipeline (extract → dedupe → enrich → deploy) |
| `requirements.txt` | Python dependencies (minimal: requests, python-docx, PyPDF2) |
| `.env` | Stores `OPENROUTER_API_KEY` (never commit) |
| `.gitignore` | Excludes venv, node_modules, MCQ Bank/, .env |

---

## Common Tasks

### Adding a New MCQ Question
1. Add to `add_questions.py` in the `new_questions` string
2. Run: `python3 add_questions.py`
3. Verify in `js/questions.js`
4. Run enrichment if SHARP debrief needed: `python3 enrich_questions.py`

### Extracting MCQs from a DOCX/PDF
```bash
python3 scripts/extract_docx_mcqs.py path/to/questions.docx
# Output: JSON array in stdout, save to file
python3 scripts/extract_pdf_mcqs.py path/to/questions.pdf
```

### Creating a New Residency Journal Note
1. Follow template in `STYLE_GUIDE.md` exactly (page height 297mm, footer pinning, section badges, etc.)
2. Include all required sections: Brutal Rule, Pathophysiology, Classification, Guidelines, Eponyms, MCQ Numbers, Ward Round Checklist
3. Name file: `[TOPIC]_ResidencyJournal.html`
4. Test print to PDF locally (WeasyPrint output should match screen layout)
5. Commit both HTML and final PDF

### Updating the Global Leaderboard
The leaderboard on `index.html` queries Supabase directly. To add scores:
1. Insert rows into `mcq_scores` table (Supabase dashboard or API)
2. Leaderboard refreshes automatically on page load

---

## Supabase Integration (Frontend)
- **URL**: https://sxushsvvmyokoknnsbuj.supabase.co
- **Tables**: `testimonials` (approved bool), `mcq_scores` (name, specialty, topic, score, total, percentage, time_taken)
- **Access**: Anonymous read (public RLS policies), no authentication required
- **Forminit**: Form ID `8fcbo3pg7br` for email signups

---

## Gotchas & Tips

1. **WeasyPrint & Fixed Heights**: The Residency Journal page height MUST be 297mm (not min-height). The footer uses `margin-top: auto` inside a flex column. Without fixed height, WeasyPrint places footer inline with text.

2. **OpenRouter Rate Limiting**: Enrichment scripts pause 2 seconds between API calls. Don't remove this or you'll hit rate limits.

3. **Question IDs**: Must be globally unique. Check `js/questions.js` before adding new questions to avoid collision.

4. **CSS Variables Scope**: Light mode variables in `:root`, dark mode in `[data-theme="dark"]`. Always test both themes.

5. **Large JSON File**: `js/questions.js` is ~1MB. Keep it minified. Never edit manually—regenerate via `deploy_mcq_bank.py`.

6. **No Server-Side API**: All backend calls are direct from browser to Supabase or OpenRouter (no Node.js server). Keep secrets in environment variables.

---

## Playwright Testing (Optional — MCP Server Available)

For automated browser testing of live features:

```bash
# Install Playwright (one-time)
npm install --save-dev @playwright/test

# Run tests (if tests/ directory exists with *.spec.js files)
npx playwright test

# Test specific page
npx playwright test --grep "arena"

# Debug mode (shows browser)
npx playwright test --debug
```

**Suggested test areas:**
- MCQ Arena: load questions, validate SHARP debrief display
- Leaderboard: verify Supabase data renders correctly
- Residency Journal notes: check PDF export (WeasyPrint output)
- Responsive design: test on mobile viewports

---

## Questions or Needed Extensions?

Refer back to:
- **STYLE_GUIDE.md** for all design & content rules (comprehensive)
- **README_CLAUDE_CODE.md** for quick site structure overview
- **scripts/deploy_mcq_bank.py** for data pipeline details
