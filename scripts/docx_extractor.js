const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BANK_DIR = path.join(__dirname, '../MCQ Bank');
const RAW_DIR = path.join(__dirname, '../scratch/raw_text');

if (!fs.existsSync(RAW_DIR)) fs.mkdirSync(RAW_DIR, { recursive: true });

const files = fs.readdirSync(BANK_DIR).filter(f => f.endsWith('.docx'));

console.log(`Found ${files.length} .docx files. Starting extraction...`);

files.forEach(file => {
    const filePath = path.join(BANK_DIR, file);
    const outPath = path.join(RAW_DIR, `${file}.txt`);
    
    console.log(`Extracting: ${file}`);
    try {
        // Use redirection to avoid ENOBUFS for massive files
        const cmd = `unzip -p "${filePath}" word/document.xml | sed -e 's/<[^>]*>//g' > "${outPath}"`;
        execSync(cmd);
        const stats = fs.statSync(outPath);
        console.log(`Success: ${file} -> ${stats.size} bytes`);
    } catch (err) {
        console.error(`Failed to extract ${file}: ${err.message}`);
    }
});

console.log('Extraction complete.');
