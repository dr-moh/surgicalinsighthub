---
inclusion: always
---

# SIH Git & Deployment Workflow

## Deployment Chain
GitHub `main` → Cloudflare Pages auto-deploy → https://surgicalinsighthub.pages.dev

Every push to `main` goes live. No staging environment. Be deliberate.

## Commit Message Convention
```
type: short description (≤70 chars)

- Detail 1
- Detail 2
```

Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`

Examples:
- `feat: add ARM Residency Journal note (8 pages)`
- `fix: pin footer on Thyroidectomy monograph`
- `chore: run MCQ consolidation — 4,800 → 5,200 questions`
- `refactor: migrate notes.html to data.json integration`

## What to Stage vs Skip
**Always stage:**
- HTML pages, CSS, JS
- `js/questions/canonical_questions.js` and `.json`
- `scripts/*.py` and `scripts/*.js`
- `notes/**/*.html`
- `README_CLAUDE_CODE.md` (keep updated)
- `.kiro/steering/*.md` (keep updated)

**Never stage:**
- `.DS_Store`
- `*.log` files
- `scratch_*.txt` files
- Temp/test JSON files at root level
- `venv/`, `__pycache__/`, `.env`

## After Any Significant Change
1. Update `README_CLAUDE_CODE.md` — feature status, pending items, MCQ count
2. Update `.kiro/steering/sih-project-context.md` — MCQ count, pending work list
3. Commit with a clear message
4. Push to `main`

## Issue #5 — Active Agent Tasks
Track progress on GitHub Issue #5 (Antigravity Swarm coordination):
1. ✅ Consolidation scripts added (`scripts/consolidate_mcq.py`)
2. ⬜ Run consolidation and verify canonical bundle
3. ⬜ UI audit for Residency Journal compliance
4. ⬜ Update docs to reflect 5,000+ questions
5. ⬜ Scale to 10,000+ questions

## Branch Strategy
- Work directly on `main` for solo development (current pattern)
- Use feature branches only for large experimental changes
- Never force push to `main`
