# MCQ Quality Audit

## Raw extraction
- Total rows: 7750
- No question text: 276
- Short question text (<20 chars): 55
- Rows with parseable options: 6263

## Canonical bank
- Total records: 3605
- Records with generic guideline fallback: 3605
- Records with synthetic distractors: 1713
- Records with placeholder takeaway text: 1124

## Example records to review
- ID 1: generic_guideline | The parathyroid glands:
- ID 2: generic_guideline | Which of the following statement(s) is/are true concerning the effect of various hormones on breast physiology?
- ID 3: generic_guideline | Which of the following statement(s) is/are true concerning non-invasive breast carcinoma?
- ID 4: generic_guideline | Which of the following statement(s) is/are true concerning local recurrence of breast cancer?
- ID 5: generic_guideline | Adrenocortical carcinoma:
- ID 6: generic_guideline | Addisonian crisis, or acute adrenocortical insufficiency:
- ID 7: generic_guideline | Primary aldosteronism:
- ID 8: generic_guideline | True statements about pituitary anatomy and physiology include:

## Interpretation
- The playable set is structurally valid, but many entries still contain fallback-generated SHARP text rather than source-specific explanations.
- The raw corpus includes a small noise tail (blank or too-short rows) that is skipped by normalization.
- If you want a truly hand-checked bank, the next step is a review pass over the flagged canonical records.
