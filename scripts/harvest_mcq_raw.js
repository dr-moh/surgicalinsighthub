#!/usr/bin/env node
/**
 * SIH MCQ Harvester v3 — Fast linear parser
 * Handles single-line concatenated format.
 * No backtracking regex on big strings.
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE  = process.argv[2] || 'scratch/raw_text/MCQ Compilled TASH.docx.txt';
const MODULE_NAME = process.argv[3] || 'tash_surgery';
const SPECIALTY   = process.argv[4] || 'General Surgery';
const ID_START    = parseInt(process.argv[5] || '9000', 10);
const OUT_DIR     = 'js/questions/';

const TOPIC_MAP = {
  'Urology':            ['bladder','prostat','urolog','renal cyst','kidney stone','testicular','ureter','urethr','nephrect','scrotum','fournier','PSA','gleason'],
  'Colorectal':         ['colon','colorectal','rectal','sigmoid','diverticular','ulcerative colitis','ileostomy','colostomy'],
  'HPB':                ['liver','hepatic','biliary','bile duct','gallbladder','pancrea','cholecyst','splenectomy','ERCP','jaundice','portal hypert'],
  'Cardiothoracic':     ['lung','thorac','oesophag','esophag','cardiac','pleural','pneumon','mediastin','trachea','bronch','pericardial'],
  'Trauma':             ['trauma','mangled','ATLS','FAST exam','haemodynamic instab','damage control'],
  'Vascular':           ['aneurysm','ischaemia','ischemia','bypass','carotid','AAA','arterial occl','venous insuffic','DVT'],
  'Breast & Endocrine': ['breast cancer','thyroid','parathyroid','adrenal','pheochromocytoma','cushing','aldosteron','goitre'],
  'Neurosurgery':       ['intracranial','neurosurg','subdural','extradural','cerebral','GCS','skull'],
  'Anesthesia':         ['general anaesth','epidural','regional block','spinal anaesth'],
  'Orthopedic':         ['fracture management','MESS score','osteomyelitis','arthroplasty'],
};

function detectSpecialty(text) {
  const t = text.toLowerCase();
  for (const [sp, kws] of Object.entries(TOPIC_MAP)) {
    if (kws.some(kw => t.includes(kw.toLowerCase()))) return sp;
  }
  return SPECIALTY;
}

// Fast split: find all positions of "A. " that look like option starts
// Then extract from each A. backwards to get the question
function fastParse(raw) {
  // Normalize all whitespace sequences to single space
  const text = raw.replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
  
  const questions = [];
  let idCounter = ID_START;
  
  // Step 1: Find all option "A. " positions
  // An option A start is: preceding text ends in a letter, number, or "?"
  // and is followed by at least 3 chars before "B. "
  
  // Walk through and find all MCQ structures
  // Pattern to find: [question][A. opt][B. opt][C. opt][D. opt][optional E. opt]
  // Split text at letter+". " boundaries where letter is A-E
  
  // Use indexOf approach instead of regex on the full string
  const optLetters = ['A', 'B', 'C', 'D', 'E'];
  
  // Find all positions of "A. " (potential option starts)
  const aPositions = [];
  let searchFrom = 0;
  while (true) {
    const idx = text.indexOf('A. ', searchFrom);
    if (idx === -1) break;
    aPositions.push(idx);
    searchFrom = idx + 3;
  }
  
  for (let pi = 0; pi < aPositions.length; pi++) {
    const aPos = aPositions[pi];
    
    // Try to find B, C, D options after this A
    let bPos = -1, cPos = -1, dPos = -1, ePos = -1;
    
    // Search for B. within 400 chars after A
    const windowEnd = Math.min(text.length, aPos + 600);
    const window = text.slice(aPos, windowEnd);
    
    const bIdx = window.indexOf('B. ');
    const cIdx = bIdx > 0 ? window.indexOf('C. ', bIdx) : -1;
    const dIdx = cIdx > 0 ? window.indexOf('D. ', cIdx) : -1;
    const eIdx = dIdx > 0 ? window.indexOf('E. ', dIdx) : -1;
    
    if (bIdx < 3 || cIdx < 0) continue; // need at least A, B, C
    
    // Extract question text: from previous question's end to aPos
    // Previous question end = end of previous D. option or start of text
    let qStart = 0;
    if (pi > 0) {
      // Find where previous block ended
      const prevAPos = aPositions[pi - 1];
      const prevWindow = text.slice(prevAPos, Math.min(text.length, prevAPos + 600));
      const prevDIdx = prevWindow.indexOf('D. ');
      if (prevDIdx > 0) {
        // Find end of prev D option (next capital sentence or next A.)
        const prevDEnd = prevAPos + prevDIdx + 3;
        const nextQ = text.slice(prevDEnd, aPos);
        qStart = prevDEnd;
      }
    }
    
    const qRaw = text.slice(qStart, aPos).trim();
    
    // Clean question text
    let qText = qRaw.replace(/^(\d{1,3}[\.\)]\s+)?/, '').trim();
    // Remove trailing "Answer: X" from previous question if present
    qText = qText.replace(/\s*[Aa]nswer\s*[:\s]+[A-E]\s*$/, '').trim();
    
    if (qText.length < 15) continue;
    
    // Extract options
    const opts = {};
    opts['A'] = window.slice(3, bIdx).trim();
    opts['B'] = window.slice(bIdx + 3, cIdx).trim();
    if (dIdx > 0) {
      opts['C'] = window.slice(cIdx + 3, dIdx).trim();
      if (eIdx > 0) {
        opts['D'] = window.slice(dIdx + 3, eIdx).trim();
        opts['E'] = window.slice(eIdx + 3).split(/[A-Z][a-z]/)[0].trim();
      } else {
        opts['D'] = window.slice(dIdx + 3).split(/(?=[A-Z][^.]{5,}\?)/).shift().trim();
      }
    } else {
      opts['C'] = window.slice(cIdx + 3).split(/(?=[A-Z][^.]{5,}\?)/).shift().trim();
    }
    
    // Clean option values: stop at next "X. " pattern
    for (const k of Object.keys(opts)) {
      opts[k] = opts[k].replace(/\s+[A-E]\.\s+.+$/, '').replace(/Answer\s*[:\s]+[A-E]/i, '').trim();
      if (opts[k].length > 200) opts[k] = opts[k].slice(0, 200);
    }
    
    // Skip if options are too short or clearly wrong
    if (Object.keys(opts).length < 3) continue;
    const validOpts = Object.values(opts).filter(v => v.length >= 2);
    if (validOpts.length < 3) continue;
    
    const sp = detectSpecialty(qText + ' ' + Object.values(opts).join(' '));
    const correctText = opts['A'] || '';
    
    questions.push({
      id: idCounter++,
      specialty: sp,
      topic: sp,
      question: qText,
      options: opts,
      answer: 'A', // default — needs review
      sharp: {
        S: `High-yield ${sp} board question.`,
        H: `Review each option carefully against the clinical stem.`,
        A: `Eliminate options that don't fit the primary diagnosis or guideline principle.`,
        R: `Refer to current ${sp} guidelines for this topic.`,
        P: `Remember the key fact and apply it to similar clinical scenarios.`,
      },
      guideline: `${sp} board principles`,
      takeaway: `Review ${qText.slice(0, 80)}...`,
      source_tag: path.basename(INPUT_FILE),
      needs_review: true,
    });
  }
  
  return questions;
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
try {
  console.log(`\n📖 Reading: ${INPUT_FILE}`);
  const raw = fs.readFileSync(INPUT_FILE, 'utf8');
  console.log(`   Size: ${(raw.length/1024).toFixed(0)} KB`);
  
  const questions = fastParse(raw);
  const valid = questions.filter(q => q && Object.values(q.options).filter(v=>v.length>2).length >= 3);
  
  console.log(`\n📊 Results: ${valid.length} questions extracted`);
  
  if (valid.length === 0) {
    console.log('\n⚠️  Zero questions. Showing raw text sample:');
    console.log(raw.slice(0, 500));
    process.exit(0);
  }
  
  // Show a sample
  console.log('\n📋 Sample question:');
  console.log('  Q:', valid[0].question.slice(0, 80));
  console.log('  A:', valid[0].options.A?.slice(0, 60));
  console.log('  B:', valid[0].options.B?.slice(0, 60));
  
  // Write JS module (all with needs_review=true since no explicit answers in this file)
  const outFile = path.join(OUT_DIR, MODULE_NAME + '.js');
  const content = `// Auto-harvested from: ${path.basename(INPUT_FILE)}
// Generated: ${new Date().toISOString()}
// NOTE: Answers default to A — all questions need manual review.
// Specialty: ${SPECIALTY} | Questions: ${valid.length}
if (!window.QUESTIONS) window.QUESTIONS = [];
window.QUESTIONS.push(...${JSON.stringify(valid, null, 2)});
`;
  fs.writeFileSync(outFile, content);
  console.log(`\n✅ Written: ${outFile} (${valid.length} questions)`);
  
  // Also write a JSON review file
  const reviewFile = `scratch/${MODULE_NAME}_to_review.json`;
  fs.writeFileSync(reviewFile, JSON.stringify(valid, null, 2));
  console.log(`📝 Review: ${reviewFile}`);
  
  console.log(`\n📋 To activate: add '${MODULE_NAME}.js' to js/questions.js modules array`);
  
} catch(e) {
  console.error('❌ Error:', e.message);
  process.exit(1);
}
