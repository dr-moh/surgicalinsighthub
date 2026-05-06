# MCQ Editorial Guidelines

## Overview
This document outlines best practices for reviewing, curating, and maintaining the Surgical Insight Hub (SIH) MCQ canonical bank. The bank contains 3,405+ peer-reviewed multiple-choice questions with SHARP debrief explanations.

## SHARP Framework

All questions follow the **SHARP** (Set-the-stage, Highlight, Address, Review, Plan) debrief structure:

### S — Set the Stage
Establishes the clinical context and key clue from the question stem. Should reference the source document or specialty.

**Quality markers:**
- Directly ties to the question scenario
- Concise (1–2 sentences)
- Cites source or specialty when available

**Red flags:**
- Generic phrases like "Focus on the clue" or "Key finding"
- No reference to question context

### H — Highlight Excellence
Explains why the correct answer is the single best choice in clinical context.

**Quality markers:**
- Explains the pathophysiology or clinical principle
- Uses board-level language
- Ties to surgical guidelines or evidence

**Red flags:**
- Placeholder: "Option X is best because it matches the source"
- Circular logic or tautology
- Extremely short explanations (< 20 words)

### A — Address Gaps
Systematically debunks each incorrect distractor.

**Quality markers:**
- One sentence per distractor explaining why it fails
- References the tested principle or anatomy
- Teaches differential reasoning

**Red flags:**
- Generic: "Distractors fail because they contradict the clue"
- Placeholder options: "Distractor for [topic]"
- Leaves distractors unexamined

### R — Review Learning Points
Cites relevant guidelines, recent updates, or board-exam principles.

**Quality markers:**
- Names specific guideline or reference (e.g., "ACS TPAST", "2023 Update")
- Explains the principle being tested
- Actionable for board prep

**Red flags:**
- Vague: "Review the core principle" or "See guideline: General Surgery"
- No specific source attribution

### P — Plan (Takeaway)
Provides the high-yield, take-home pearl for study and practice.

**Quality markers:**
- Memorable clinical rule or mnemonic
- Practical for a surgeon
- 1–2 sentences max

**Red flags:**
- "Remember the core principle about [topic]"
- Exactly matches the answer text
- Lacks actionable advice

## Synthetic Detection & Remediation

### Flagging Rules
Questions are flagged as "synthetic" if they contain:
- Placeholder language in guideline, takeaway, or SHARP fields
- Auto-generated options (e.g., "Distractor for X")
- Explanation shorter than 6 words
- Generic fallback phrases

### Triage Categories

#### ✓ **Good (Ready for Release)**
- Source-specific SHARP with clinical depth
- All distractors properly explained
- Clear guideline and takeaway
- No placeholder language

#### ✗ **Bad (Needs Editorial Work)**
- Heavy placeholder usage
- Missing or synthetic options
- Weak or absent explanation
- Generic guideline or takeaway
- Evidence of extraction errors (garbled stem)

#### — **Skip**
- Duplicate or unclear stem
- Out of scope for current specialization
- Insufficient source data to remediate

### Remediation Process

1. **For flagged questions:**
   - Open [triage.html](triage.html) and review each candidate
   - Categorize as Good, Bad, or Skip
   - Export results

2. **For Bad-flagged questions:**
   - Consult original source document
   - Rewrite SHARP fields with source-specific clinical content
   - Validate answer key against source
   - Re-run pipeline with `--limit 50` to regenerate SHARP for batch

3. **For Skip-flagged questions:**
   - Archive or delete from canonical bank
   - Document reason in audit log

## Content Standards

### Question Stem
- **Length:** 20+ words (allows test-taking time)
- **Clarity:** Single best answer should be unambiguous given stem
- **Grammar:** Proper surgical terminology
- **Scenario:** Realistic clinical presentation (not contrived edge cases)

### Options (A–D minimum, E optional)
- **Plausibility:** Each distractor is a reasonable clinical choice
- **Parallelism:** Similar grammatical structure
- **Distinctiveness:** No overlapping concepts
- **Completeness:** All options should be present in JSON

### Answer Key & Explanation
- **Verified:** Matched against source document
- **Clinical:** Grounded in surgical evidence
- **Board-level:** Aligned with ABSITE or specialty boards
- **Concise:** Explanation ≤ 200 words

### Guideline & Takeaway
- **Specificity:** Reference exact guideline name/version or cite source
- **Actionability:** Surgeon can act on this knowledge
- **Memorability:** Suitable for high-yield board review

## Quality Audit Checklist

- [ ] Stem is ≥ 20 words and clinically realistic
- [ ] Options A–D all present and distinct
- [ ] Answer key verified against source
- [ ] SHARP fields all non-empty
- [ ] Highlight_excellence ≥ 20 words (not placeholder)
- [ ] Address_gaps explains each distractor
- [ ] Guideline is specific (not "General Surgery")
- [ ] Takeaway is board-level and memorable
- [ ] No placeholder language in any field
- [ ] Source reference is clear

## Workflow Integration

### Extraction → Enrichment → Validation

1. **Extract:** Raw Q&A from source documents (PDFs, DOCX, etc.)
2. **Normalize:** Pad missing options, coerce answer key
3. **Enrich (SHARP):** Call LLM provider (Ollama/Gemini) to generate SHARP
4. **Fallback:** If LLM fails, use template-based fallback
5. **Dedupe:** Remove exact-stem duplicates, reassign sequential IDs
6. **Validate:** `validate_mcq_standard.js` checks structure
7. **Triage:** Manual review for synthetic detection
8. **Repair:** Update flagged records and re-run enrichment
9. **Publish:** Commit canonical bundle to GitHub

### Scripts

- `scripts/mcq_pipeline.py`: Main orchestrator (extract, normalize, enrich, dedupe, write)
- `scripts/automated_repair.py`: Lightweight repairs (fill options, expand explanations)
- `scripts/validate_mcq_standard.js`: Structural validation
- `MCQ Bank/review/triage.html`: Interactive UI for manual triage

## Continuous Improvement

### Regular Audits
- Run `triage.html` monthly on new/updated questions
- Export triage results for trending
- Track synthetic-flag reduction over time

### Provider Updates
- Test new LLM providers monthly
- Compare SHARP quality across providers
- Update `DEFAULT_PROVIDER_ORDER` if better provider emerges

### Feedback Loop
- Collect surgeon feedback on question clarity and accuracy
- Update source list if questions become outdated
- Re-run enrichment on affected questions

## Appendix: Example SHARP Debrief

**Question:** A 45-year-old male with a history of hypertension and smoking presents with acute lower limb claudication and foot pallor. Angiography shows occlusion of the left superficial femoral artery. What is the immediate management?

**Options:**
- A) Percutaneous transluminal angioplasty
- B) Immediate above-knee amputation
- C) Anticoagulation and observation
- D) Femoropopliteal bypass grafting

**Answer:** A

**SHARP Debrief:**

- **Set the Stage:** Acute limb-threatening ischemia (SFA occlusion) in a high-risk patient requires urgent revascularization. The presentation of sudden onset claudication and foot pallor indicates critical ischemia.

- **Highlight Excellence:** Percutaneous transluminal angioplasty (PTA) is the first-line endovascular intervention for acute SFA occlusion in suitable lesions. It is less invasive than surgical bypass, achieves rapid reperfusion, and preserves surgical options. The patient is a candidate for angioplasty given the single-vessel occlusion.

- **Address Gaps:**
  - **(B)** Immediate amputation is reserved for unsalvageable limbs with tissue loss and infection, not acute ischemia in a viable limb.
  - **(C)** Observation alone risks limb loss and is contraindicated in critical ischemia; anticoagulation must be paired with revascularization.
  - **(D)** Bypass grafting is second-line after failed PTA or for chronic disease; endovascular repair is preferred for acute presentation when feasible.

- **Review Learning Points:** The 2023 AHA/ACC guidelines emphasize endovascular-first approach for acute limb ischemia. ABSITE emphasizes triage: limb-threatening ischemia demands urgent intervention (PTA or bypass within hours).

- **Plan:** When faced with acute lower-limb ischemia: (1) assess limb viability (sensory/motor loss = threatened limb), (2) obtain emergent angiography, (3) attempt endovascular (PTA/thrombolysis) first, (4) escalate to surgical revascularization if endovascular fails or contraindicated.

- **Guideline:** 2023 AHA/ACC Guidelines on Acute Limb Ischemia

- **Takeaway:** Endovascular-first strategy for acute SFA occlusion; bypass is salvage therapy.

---

**Document Version:** 1.0  
**Last Updated:** May 7, 2026  
**Maintainer:** SIH Editorial Board
