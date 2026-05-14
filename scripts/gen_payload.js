const fs = require('fs');
const path = require('path');

const docName = process.argv[2];
if (!docName) {
    console.error('Usage: node gen_payload.js <doc_name>');
    process.exit(1);
}

const RAW_FILE = path.join(__dirname, '../scratch/raw_text', docName);
if (!fs.existsSync(RAW_FILE)) {
    console.error('File not found: ' + RAW_FILE);
    process.exit(1);
}

const text = fs.readFileSync(RAW_FILE, 'utf8');
// Split into 20KB chunks to keep API response times reasonable
const CHUNK_SIZE = 20000;
const chunks = [];
for (let i = 0; i < text.length; i += CHUNK_SIZE) {
    chunks.push(text.substring(i, i + CHUNK_SIZE));
}

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Harvesting ${docName}</title>
    <style>
        body { background: #0f172a; color: #94a3b8; font-family: 'Inter', sans-serif; padding: 40px; }
        .card { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
        #status { font-weight: bold; color: #6366f1; }
        #log { background: #000; color: #10b981; padding: 10px; height: 200px; overflow: auto; margin-top: 10px; font-size: 0.8rem; }
        #final-json { display: none; }
    </style>
</head>
<body>
    <div class="card">
        <h2>Harvesting: ${docName}</h2>
        <div id="status">Ready</div>
        <div id="progress">Chunk 0 / ${chunks.length}</div>
        <div id="log"></div>
        <pre id="final-json"></pre>
    </div>

    <script>
        const CHUNKS = ${JSON.stringify(chunks)};
        const API_KEY = 'e13a5f9ecd8487a2389c75f56b091e16';
        const MODEL = 'meta-llama/Llama-3-8b-instruct';

        const logEl = document.getElementById('log');
        const statusEl = document.getElementById('status');
        const progEl = document.getElementById('progress');
        const outEl = document.getElementById('final-json');

        function log(msg) {
            logEl.innerHTML += "<div>" + msg + "</div>";
            logEl.scrollTop = logEl.scrollHeight;
        }

        async function run() {
            let allQuestions = [];
            statusEl.innerText = 'Processing...';

            for (let i = 0; i < CHUNKS.length; i++) {
                progEl.innerText = "Chunk " + (i + 1) + " / " + CHUNKS.length;
                log("Processing chunk " + (i + 1) + "...");
                
                try {
                    const res = await fetch('https://api.bytez.com/models/v2/' + MODEL, {
                        method: 'POST',
                        headers: { 'Authorization': API_KEY, 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            messages: [{ role: 'user', content: 'Extract MCQs from this text into a JSON array. Each MCQ must have question, options (A,B,C,D), answer, and sharp_metadata (S,H,A,R,P). Return ONLY the JSON array.\\n\\n' + CHUNKS[i] }],
                            params: { max_new_tokens: 2048, temperature: 0.1 }
                        })
                    });

                    if (!res.ok) throw new Error("API Error: " + res.status);
                    
                    const data = await res.json();
                    const content = data.output;
                    const jsonMatch = content.match(/\\[[\\s\\S]*\\]/);
                    if (jsonMatch) {
                        const parsed = JSON.parse(jsonMatch[0]);
                        allQuestions = allQuestions.concat(parsed);
                        log("Success: Added " + parsed.length + " questions.");
                    } else {
                        log("Warning: No JSON in chunk " + (i + 1));
                    }
                } catch (err) {
                    log("Error in chunk " + (i + 1) + ": " + err.message);
                }
                
                // Small delay to avoid rate limits
                await new Promise(r => setTimeout(r, 1000));
            }

            statusEl.innerText = 'COMPLETE';
            outEl.innerText = JSON.stringify(allQuestions, null, 2);
            outEl.style.display = 'block';
            console.log("HARVEST_COMPLETE");
        }

        run();
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../scratch/worker.html'), html);
console.log('Worker generated for: ' + docName);
console.log('Chunks: ' + chunks.length);
