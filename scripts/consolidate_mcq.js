const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, '../js/questions');
const outputFile = path.join(__dirname, '../js/questions/canonical_questions.js');
const backupFile = path.join(__dirname, '../js/questions/canonical_questions.json');

let allQuestions = [];
let seenStems = new Set();

const files = fs.readdirSync(questionsDir).filter(f => f.endsWith('.js') && f !== 'canonical_questions.js');

// Add existing canonical if it exists
if (fs.existsSync(outputFile)) {
    files.push('canonical_questions.js');
}

console.log(`Analyzing ${files.length} files...`);

files.forEach(filename => {
    const filePath = path.join(questionsDir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // We will use a "sandbox" approach: mock the window object and eval the code
    // This is safe here because we trust the source files in this repo
    try {
        const mockWindow = { 
            QUESTIONS: [],
            location: { href: '' },
            localStorage: { getItem: () => null, setItem: () => null }
        };
        
        // Handle different assignment patterns
        // We'll wrap the content in a function to isolate it
        const sandboxCode = `
            (function(window) {
                ${content}
            })(mockWindow);
        `;
        
        // Using eval is usually bad, but for extracting data from local JS files it's the most robust way
        // since it handles backticks, template literals, comments, etc.
        eval(sandboxCode);
        
        let questions = mockWindow.QUESTIONS;
        if (Array.isArray(questions)) {
            // Flatten if nested
            if (questions.length > 0 && Array.isArray(questions[0])) {
                questions = questions.flat(Infinity);
            }
            
            let count = 0;
            questions.forEach(q => {
                if (q && q.question) {
                    const stem = q.question.replace(/\s+/g, ' ').trim().toLowerCase();
                    if (!seenStems.has(stem)) {
                        seenStems.add(stem);
                        q._src_file = filename;
                        allQuestions.push(q);
                        count++;
                    }
                }
            });
            console.log(`  ✓ ${filename}: added ${count} unique questions`);
        } else {
            console.log(`  ✗ ${filename}: window.QUESTIONS is not an array`);
        }
    } catch (err) {
        console.log(`  ✗ ${filename}: Error parsing JS: ${err.message}`);
    }
});

console.log(`\nTotal unique questions: ${allQuestions.length}`);

// Write JSON backup
fs.writeFileSync(backupFile, JSON.stringify(allQuestions, null, 2));

// Write consolidated JS
const jsContent = `/** Consolidated MCQ Bank - ${allQuestions.length} questions **/\nwindow.QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};`;
fs.writeFileSync(outputFile, jsContent);

console.log(`\nSUCCESS: Consolidated into ${outputFile}`);
