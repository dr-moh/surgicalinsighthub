# MCQ Arena Standard

This is the canonical format for all questions that enter MCQ Arena.

## Required Fields

Each question must contain:

- `id` unique numeric identifier
- `specialty` canonical specialty name
- `topic` short topic label
- `question` stem text, at least 20 characters
- `options.A`, `options.B`, `options.C`, `options.D` as non-empty strings
- `answer` matching one of the available option letters
- `explanation.correct` as the short rationale for the right answer
- `sharp.set_the_stage`
- `sharp.highlight_excellence`
- `sharp.address_gaps`
- `sharp.review_learning_points`
- `sharp.plan`
- `guideline`
- `takeaway`

`options.E` is allowed, but it is optional.

## SHARP Rules

SHARP is the only supported debrief structure.

- `S` Set the Stage: orient the learner to the stem
- `H` Highlight Excellence: say why the answer is correct
- `A` Address Gaps: say why distractors are wrong
- `R` Review Guidelines: reference the correct guideline family, not a file name
- `P` Plan: one short revision takeaway

The `R` field must be specialty-aware. It should read like a real guideline family, such as `ASA practice guidelines`, `ATLS / EAST trauma guidelines`, or `ACS / surgical board principles`.

## Acceptance Rules

A question is valid only if all of the following are true:

- The stem is substantive and not a placeholder.
- The answer key points to a real option.
- At least four options are present and non-empty.
- The question is not a duplicate of another stem + option set + answer.
- The SHARP fields are concise, specific, and free of raw source file names.
- The question can be rendered without missing values or generic placeholders.

## Rebuild Flow

1. Extract raw questions from DOCX, PDF, or other source files.
2. Normalize the stem, options, answer, specialty, and topic.
3. Generate or repair SHARP text using the canonical standard.
4. Validate the record set.
5. Publish only the validated bundle to MCQ Arena.

The live arena now reads only from the canonical bundle. Old bundles are no longer part of the active load path.
