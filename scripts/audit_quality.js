const fs = require('fs');
const path = require('path');

const QUESTIONS_DIR = path.join(__dirname, '../js/questions');
const files = fs.readdirSync(QUESTIONS_DIR).filter(f => f.endsWith('.js'));

let total = 0;
let highQuality = 0;
let mangled = 0;
let templates = 0;

function flatten(items) {
  const flat = [];
  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else if (item && typeof item === 'object') {
      flat.push(item);
    }
  });
  return flat;
}

files.forEach(file => {
  const content = fs.readFileSync(path.join(QUESTIONS_DIR, file), 'utf8');
  
  // Try to find anything that looks like an array literal
  // and evaluate it in a context where window.QUESTIONS exists
  const mockWindow = { QUESTIONS: { push: (...args) => {
    const flattened = flatten(args);
    let fileHQ = 0;
    flattened.forEach(q => {
      total++;
      const qText = q.question || '';
      const expl = q.explanation && q.explanation.correct ? q.explanation.correct : '';
      
      if (expl.includes("fits the source text") || expl.includes("Focus on the clue from")) {
        templates++;
      } else if (qText.match(/^\d+/) || qText.includes("Figure") || qText.length < 10) {
        mangled++;
      } else {
        highQuality++;
        fileHQ++;
      }
    });
    console.log(`${file}: ${fileHQ}/${flattened.length} High Quality`);
  } } };

  try {
    // Replace window with mockWindow and execute
    const script = content.replace(/window\./g, 'windowMock.');
    const fn = new Function('windowMock', script);
    fn(mockWindow);
  } catch (e) {
    // console.log(`Error parsing ${file}: ${e.message}`);
  }
});

console.log('\n--- FINAL REPOSITORY AUDIT ---');
console.log(`Total Questions: ${total}`);
console.log(`High Quality (Native): ${highQuality}`);
console.log(`Template Garbage: ${templates}`);
console.log(`Mangled/Incomplete: ${mangled}`);
console.log('------------------------------');
