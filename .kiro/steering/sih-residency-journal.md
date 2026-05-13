---
inclusion: fileMatch
fileMatchPattern: "notes/**/*.html,*.html"
---

# SIH Residency Journal — Note Building Guide

## The Only Approved Template
Every clinical note uses the "Residency Journal" template. No improvisation.
Full spec is in `STYLE_GUIDE.md`. This is the quick reference.

## Page Structure (A4 — 210mm × 297mm, height FIXED not min-height)
```
TAB STRIP (8mm) → 4 tabs: Foundations / Presentation / Management / MCQ
PAGE HEADER (burgundy bar) → Page 1: logo + title + subtitle + meta
                            → Pages 2+: topic title + page number
BODY (flex:1, overflow:hidden) → ruled background, 5mm padding
FOOTER (margin-top:auto) → pinned to bottom — CRITICAL
```

## Before Building Any Note — Checklist
- [ ] Read `STYLE_GUIDE.md` fully
- [ ] Check `STYLE_GUIDE.md §10` — is this topic already covered?
- [ ] Identify the Brutal Rule (one sentence, clinically lethal if ignored)
- [ ] List all sections needed across pages
- [ ] Plan page breaks at logical section boundaries (never mid-table)

## Required Sections (every note)
1. **Brutal Rule** — page 1 only, dark burgundy box, EB Garamond italic 1.05rem bold white
2. **Pathophysiology** — always with description (the "why" drives clinical decisions)
3. **Classification** — always with description (determines urgency)
4. **Current guidelines** — with year (e.g., WSES 2020, TG18, ASGE 2019)
5. **Eponyms table** — where applicable
6. **MCQ Numbers** — all testable thresholds, doses, timings (Overpass Mono `.hi` class)
7. **Ward Round / Never Miss** — actionable checklist

## Forbidden in Notes
- Textbook introductions
- Paragraphs of flowing prose outside description boxes
- Filler transitions between sections
- Disclaimers
- Em dashes
- Banned words (see STYLE_GUIDE.md §2)

## Description Boxes — When to Use
ONLY for: pathophysiology, definitions, classification systems, "why" context.
NEVER for: action tables, drug doses, eponym lists, ward round checklists.

## Color Reference (quick)
| Element | Color |
|---------|-------|
| Page header bg | `#2b1810` |
| Tab strip bg | `#3b2314` |
| Active tab text | `#b8922a` |
| Section badge | `#a31515` |
| Section heading | `#2b1810` |
| Section underline | `#b8922a` 1.5px |
| Brutal Rule bg | `#3b2314` |
| Brutal Rule border | `#b8922a` 5px left |
| Note callout border | `#b8922a` 3px |
| Warn box border | `#a31515` 3px |
| Table header bg | `#2b1810` |
| Footer bg | `#2b1810` |
| Footer top border | `#b8922a` 2px |

## Footer (pinned — non-negotiable)
```
Surgical Insight Hub  |  [TOPIC] — Residency Journal  |  Page N / Total · @sugicalInsightHub
```
Page must be `height:297mm` (not `min-height`). Footer uses `margin-top:auto` inside flex column.

## Delivery
Every note = two files:
- `[TOPIC]_ResidencyJournal.html` — screen version with Google Fonts
- `[TOPIC]_ResidencyJournal.pdf` — WeasyPrint, Liberation fonts, verified page count

## Topics Already Covered (do not duplicate)
- Fournier's Gangrene
- High-Yield CT / Imaging Findings
- Hepatopancreatobiliary (biliary anatomy, cholelithiasis, BDI/Strasberg, cholangiocarcinoma, Whipple, portal hypertension)
- Choledocholithiasis risk stratification (ASGE 2019)
- Bowel Obstruction (v3 — 8 pages)
- Colorectal & Anal Surgery (monograph)
- Anesthesia & Perioperative Care (monograph)
- Appendicitis 2025
- Ortho Trauma

## Next Notes to Build (priority order)
1. ARM (Anorectal Malformation)
2. Choledocholithiasis (full Residency Journal)
3. Fournier's Gangrene (full Residency Journal)
4. HPB deep-dives (Bismuth-Corlette, Whipple complications)
