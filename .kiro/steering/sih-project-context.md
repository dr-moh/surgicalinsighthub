---
inclusion: always
---

# Surgical Insight Hub (SIH) — Project Context

## What This Project Is
A surgical education platform for residents and board exam prep (ABSITE + specialty boards), built by Dr. Abdulmalik Moh (surgical resident). Live at https://surgicalinsighthub.pages.dev. Auto-deploys to Cloudflare Pages on every push to `main`.

## Tech Stack
- **Frontend:** Pure HTML/CSS/JS — no framework, no bundler
- **Fonts:** EB Garamond (serif headings), Overpass / Overpass Mono (body/mono)
- **Backend:** Supabase (PostgreSQL), Cloudflare Pages, Claude API (direct browser streaming)
- **MCQ Pipeline:** Python scripts — Gemini 2.0 Flash → Groq → OpenRouter → Ollama (waterfall)
- **Deployment:** GitHub push to `main` → Cloudflare auto-deploy

## Brand Colors (never deviate)
| Name | Hex | Use |
|------|-----|-----|
| Deep Burgundy | `#2b1810` | Headers, dark elements |
| Gold | `#b8922a` | Accents, borders, active states |
| Red | `#a31515` | Section badges, critical terms |
| Cream | `#f7f3ec` | Page background |
| Body Text | `#1a1410` | All body text |
| Muted | `#6b5a48` | Secondary text |

## File Map
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, MCQ bento, leaderboard, testimonials |
| `arena.html` | MCQ Arena — setup, questions, SHARP 2.0 debrief, leaderboard |
| `review.html` | AI High-Yield Review — Claude API SSE streaming |
| `notes.html` | Notes library with specialty filter |
| `podcast.html` | YesSurgeryBet podcast |
| `surgery-talk.html` | Surgery Talk section |
| `about.html` | About Dr. Moh |
| `js/questions/canonical_questions.js` | Master MCQ bank (4,014+ questions, `window.QUESTIONS`) |
| `js/navigation.js` | Shared nav module (dark mode, mobile bottom sheet) |
| `scripts/consolidate_mcq.py` | Consolidates fragmented specialty JS files into canonical bundle |
| `scripts/import_mcq_pipeline.py` | Full MCQ import/enrich/dedupe pipeline |
| `scripts/validate_mcq_standard.js` | CI validation for MCQ structure |
| `MCQ Bank/canonical_questions.json` | JSON backup of master MCQ bank |
| `STYLE_GUIDE.md` | Full brand + design system spec (v2.0) — READ THIS before building any note |
| `docs/EDITORIAL_GUIDELINES.md` | MCQ quality standards and SHARP framework |

## Supabase Tables
- `mcq_scores` — name, school, specialty, topic, score, total, percentage, time_taken
- `testimonials` — approved=false by default; set true to show publicly

## Navbar Order (all pages — never change)
Home · Podcast · Notes · MCQ Arena · AI Review · About
+ Mobile hamburger (☰) → bottom sheet

## Current MCQ Bank Status
- 4,014+ unique questions across 15+ specialties
- SHARP 2.0 debrief on all questions
- Target: 10,000+ questions
- Specialty files in `js/questions/` — canonical bundle is `canonical_questions.js`

## Active Pending Work (Issue #5)
1. Consolidate fragmented MCQ JS specialty files into canonical bundle
2. UI audit for Residency Journal compliance across all notes
3. Update docs to reflect 5,000+ questions milestone
4. Scale MCQ bank to 10,000+
5. New Residency Journal notes: Fournier's Gangrene (full), Choledocholithiasis (full), more HPB
6. ARM Residency Journal — COMPLETED (7 pages, 21 sections, notes/ARM_ResidencyJournal.html)

## SHARP Debrief Format
- **S** — Set the Stage (clinical context + correct answer)
- **H** — Highlight Excellence (why correct answer is right, pathophysiology)
- **A** — Address Gaps (debunk each wrong option)
- **R** — Review Guidelines (2024–2026 specific guideline reference)
- **P** — Plan (one take-home pearl)

## AI Review (review.html)
- Direct Claude API browser call with `anthropic-dangerous-direct-browser-access: true`
- Model: `claude-sonnet-4-20250514`, max tokens: 4000
- Streams SSE, renders markdown into structured sections

## Style Rules (enforced always)
- Zero paragraphs outside description boxes in notes
- Zero banned words (see STYLE_GUIDE.md §2)
- Zero em dashes
- Bold = critical clinical term only; Italic = mechanism/qualifier only
- Section numbers run sequentially across all pages — never reset per page
- Footer pinned to bottom via `margin-top:auto` on `height:297mm` flex column
- Every note: Brutal Rule box (page 1), SHARP sections, tables, callouts
- Deliver both HTML and PDF for every Residency Journal note
