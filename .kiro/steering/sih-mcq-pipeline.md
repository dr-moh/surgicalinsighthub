---
inclusion: fileMatch
fileMatchPattern: "scripts/**/*.py,scripts/**/*.js,js/questions/**,MCQ Bank/**,bulk_sharp_processor.py"
---

# SIH MCQ Pipeline — How It Works

## Data Flow
```
Source PDFs/DOCX
    → scripts/extract_pdf_mcqs.py / extract_docx_mcqs.py
    → Raw JSON (question, options A-D, answer, specialty)
    → scripts/import_mcq_pipeline.py (normalize, pad options, coerce answer key)
    → bulk_sharp_processor.py (SHARP enrichment: Gemini → Groq → OpenRouter → Ollama)
    → scripts/dedupe_questions.py (remove exact-stem duplicates, reassign IDs)
    → scripts/validate_mcq_standard.js (CI structural check)
    → js/questions/canonical_questions.js (window.QUESTIONS — the live bank)
    → js/questions/canonical_questions.json (JSON backup)
```

## Canonical Bundle Format
Every question in `canonical_questions.js` must have:
```json
{
  "id": "q_0001",
  "question": "...",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "answer": "A",
  "specialty": "General Surgery",
  "topic": "...",
  "explanation": "...",
  "sharp": {
    "set_the_stage": "...",
    "highlight_excellence": "...",
    "address_gaps": "...",
    "review_guidelines": "...",
    "plan": "..."
  },
  "guideline": "...",
  "takeaway": "..."
}
```

## SHARP Quality Rules (from EDITORIAL_GUIDELINES.md)
- `highlight_excellence` must be ≥ 20 words, not a placeholder
- `address_gaps` must explain each distractor individually
- `guideline` must name a specific guideline (not "General Surgery")
- `takeaway` must be board-level and memorable
- No placeholder language anywhere

## Synthetic Detection Flags
A question is flagged synthetic if it has:
- Placeholder text in any SHARP field
- `explanation` shorter than 6 words
- Options like "Distractor for [topic]"
- Generic guideline like "See guideline: General Surgery"

## Consolidation Script
Run `scripts/consolidate_mcq.py` to merge all specialty JS files into canonical bundle.
It deduplicates by question stem (case-insensitive) and writes both `.js` and `.json`.

## Provider Waterfall Order
1. Gemini 2.0 Flash (primary — fastest, best quality)
2. Groq (secondary fallback)
3. OpenRouter (tertiary fallback)
4. Local Ollama/llama3 via ngrok (final fallback)

## When Adding New Questions
1. Extract from source → normalize → enrich SHARP → dedupe → validate → commit
2. Never manually edit `canonical_questions.js` for bulk changes — use the pipeline
3. Always run `validate_mcq_standard.js` before committing MCQ changes
4. Update the question count in `README_CLAUDE_CODE.md` and `sih-project-context.md`
