const fs = require('fs');
const path = require('path');

const QUESTIONS_DIR = path.join(__dirname, '../js/questions');
const RESTORED_DIR = path.join(__dirname, '../js/questions/restored');
if (!fs.existsSync(RESTORED_DIR)) fs.mkdirSync(RESTORED_DIR);

const files = fs.readdirSync(QUESTIONS_DIR).filter(f => f.endsWith('.js') && !f.startsWith('enriched_') && f !== 'canonical_questions.js');

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

let totalRestored = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(QUESTIONS_DIR, file), 'utf8');
  const mockWindow = { QUESTIONS: { push: (...args) => {
    const flattened = flatten(args);
    const cleaned = [];
    
    flattened.forEach(q => {
      const qText = q.question || '';
      const expl = q.explanation && q.explanation.correct ? q.explanation.correct : '';
      
      // Strict filters
      if (expl.includes("fits the source text") || expl.includes("Focus on the clue from")) return;
      if (qText.match(/^\d+/) || qText.includes("Figure") || qText.length < 15) return;
      if (qText.endsWith(' the') || qText.endsWith(' a')) return; // Cut off check
      
      // UPGRADE TO SHARP
      if (!q.sharp_metadata && !q.sharp) {
        q.sharp_metadata = {
          "S": `Review of ${q.specialty || 'surgical'} clinical scenario.`,
          "H": q.explanation && q.explanation.correct ? q.explanation.correct : "Focus on the core pathophysiological principle behind the correct choice.",
          "A": "Consider why the other options are less likely given the specific patient presentation or surgical anatomy.",
          "R": q.guideline || "Standard surgical board principles and current practice guidelines.",
          "P": q.takeaway || "Anchor your management plan to the verified guideline for this condition."
        };
      }
      
      cleaned.push(q);
      totalRestored++;
    });
    
    if (cleaned.length > 0) {
      const output = `if (!window.QUESTIONS) window.QUESTIONS = [];\nwindow.QUESTIONS.push(...${JSON.stringify(cleaned, null, 2)});\n`;
      fs.writeFileSync(path.join(RESTORED_DIR, file), output);
      console.log(`Restored ${cleaned.length} questions from ${file}`);
    }
  } } };

  try {
    const script = content.replace(/window\./g, 'windowMock.');
    const fn = new Function('windowMock', script);
    fn(mockWindow);
  } catch (e) {}
});

console.log(`\nTotal questions restored to 'restored/' directory: ${totalRestored}`);
