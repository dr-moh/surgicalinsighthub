const fs = require('fs');
const path = require('path');

const RAW_FILE = path.join(__dirname, '../scratch/raw_text/MCS 2022 Case 1.docx.txt');
const BATCH_FILE = path.join(__dirname, '../scratch/current_batch.js');

const text = fs.readFileSync(RAW_FILE, 'utf8');
const escapedText = JSON.stringify(text);

fs.writeFileSync(BATCH_FILE, `window.CURRENT_BATCH_TEXT = ${escapedText}; window.CURRENT_BATCH_FILE = "MCS 2022 Case 1.docx";`);
console.log('Batch prepared.');
