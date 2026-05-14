---
name: mcq-arena-standard
description: Canonical operating method for rebuilding MCQ Arena questions and SHARP debriefs.
---

# MCQ Arena Standard Skill

Use this method before adding or regenerating any MCQ content.

## Rules

- Keep the question stem at least 20 characters long.
- Require options A-D as non-empty text.
- Allow option E only when it is real content.
- Make the answer match one real option.
- Keep explanation text short and specific.
- Build SHARP with S, H, A, R, and P only.
- Make `R` specialty-aware and guideline-family-based.
- Reject placeholders, duplicated stems, and file-name leakage.

If the extracted source conflicts with established surgical references such as Bailey & Love, Sabiston, or Schwartz, flag the discrepancy clearly. If the source is not sufficient to support a reliable answer, use the exact phrase `Insufficient Data in Source`.

## SHARP Style

Write SHARP as a teaching flow, not as fragments copied from the stem.

- `S` should confirm the correct answer from the source text and clinical context.
- `H` should explain why it is the single best answer and teach the topic at board level.
- `A` should systematically debunk every incorrect distractor.
- `R` should provide a board-style review, cite the file or section, and mention the relevant guideline family or recent update.
- `P` should give one high-yield take-home pearl for revision.

Keep the wording natural, concise, and specific. Avoid repeating the full question stem or reusing the source filename except when citing the source reference.

## Supplementary Callouts

- `guideline` should capture formal guidance or updates relevant to the question.
- `takeaway` should be the practical bottom line for a practicing surgeon.
- `visualization` should describe the vivid mental image of the radiological or operative finding when that helps learning.

## Discrepancy Protocol

- If the extracted file and major guideline sources disagree, flag the discrepancy.
- If the source does not allow a reliable answer, mark the item as `Insufficient Data in Source`.
- If no discrepancy is present, keep the note short and explicit.

## Output Shape

Every final record should follow the canonical structure:

- `id`
- `specialty`
- `topic`
- `question`
- `options`
- `answer`
- `explanation.correct`
- `sharp.set_the_stage`
- `sharp.highlight_excellence`
- `sharp.address_gaps`
- `sharp.review_learning_points`
- `sharp.plan`
- `guideline`
- `takeaway`
- `visualization`
- `source_reference`
- `discrepancy`

## Rebuild Order

1. Extract source material.
2. Normalize into the canonical shape.
3. Validate every record.
4. Publish only the validated bundle.

If the content does not validate, do not load it into the arena.