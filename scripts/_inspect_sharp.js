#!/usr/bin/env node
const q = require('../js/questions/canonical_questions.json');

// Count sharp types
let sharpObj = 0, sharpStr = 0, sharpMissing = 0, sharpOther = 0;
for (const x of q) {
  if (!x.sharp) sharpMissing++;
  else if (typeof x.sharp === 'string') sharpStr++;
  else if (typeof x.sharp === 'object' && !Array.isArray(x.sharp)) sharpObj++;
  else sharpOther++;
}
console.log(`Total: ${q.length}`);
console.log(`sharp as object: ${sharpObj}`);
console.log(`sharp as string: ${sharpStr}`);
console.log(`sharp missing:   ${sharpMissing}`);
console.log(`sharp other:     ${sharpOther}`);

// Sample a string-sharp question
const strQ = q.find(x => x.sharp && typeof x.sharp === 'string');
if (strQ) {
  console.log('\n--- Sample string-sharp question ---');
  console.log(JSON.stringify(strQ, null, 2).slice(0, 1200));
}

// Sample a missing-options question
const missingOpts = q.find(x => x.options && (!x.options.A || !x.options.B || !x.options.C || !x.options.D));
if (missingOpts) {
  console.log('\n--- Sample missing-options question ---');
  console.log(JSON.stringify(missingOpts, null, 2).slice(0, 800));
}

// Check review_learning_points vs review_guidelines
const withRLP = q.filter(x => x.sharp && typeof x.sharp === 'object' && x.sharp.review_learning_points);
const withRG  = q.filter(x => x.sharp && typeof x.sharp === 'object' && x.sharp.review_guidelines);
console.log(`\nsharp.review_learning_points present: ${withRLP.length}`);
console.log(`sharp.review_guidelines present:       ${withRG.length}`);
