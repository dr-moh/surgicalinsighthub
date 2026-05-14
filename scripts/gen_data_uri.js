const fs = require('fs');
const path = require('path');

const docName = process.argv[2];
const RAW_FILE = path.join(__dirname, '../scratch/raw_text', docName);
const text = fs.readFileSync(RAW_FILE, 'utf8');

// Chunking for Llama-3-8B (keeping it small for Data URI limits)
const CHUNK_SIZE = 10000;
const chunks = [];
for (let i = 0; i < Math.min(text.length, 50000); i += CHUNK_SIZE) {
    chunks.push(text.substring(i, i + CHUNK_SIZE));
}

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Harvesting ${docName}</title>
    <style>
        body { background: #0f172a; color: #94a3b8; font-family: sans-serif; padding: 20px; }
        #log { background: #000; color: #10b981; padding: 10px; height: 200px; overflow: auto; }
    </style>
</head>
<body>
    <h2>Harvesting: ${docName}</h2>
    <div id="status">Initializing...</div>
    <div id="log"></div>
    <pre id="output"></pre>

    <script>
        const CHUNKS = ${JSON.stringify(chunks)};
        const API_KEY = 'e13a5f9ecd8487a2389c75f56b091e16';
        const MODEL = 'meta-llama/Llama-3-8b-instruct';

        async function run() {
            let results = [];
            const logEl = document.getElementById('log');
            const statusEl = document.getElementById('status');
            
            for (let i = 0; i < CHUNKS.length; i++) {
                logEl.innerHTML += "<div>Processing " + (i+1) + "...</div>";
                try {
                    const res = await fetch('https://api.bytez.com/models/v2/' + MODEL, {
                        method: 'POST',
                        headers: { 'Authorization': API_KEY, 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            messages: [{ role: 'user', content: 'Extract MCQs from this text into JSON array. Return ONLY the JSON array.\\n\\n' + CHUNKS[i] }],
                            params: { max_new_tokens: 1024 }
                        })
                    });
                    const data = await res.json();
                    const json = data.output.match(/\\[[\\s\\S]*\\]/)?.[0] || '[]';
                    results = results.concat(JSON.parse(json));
                } catch (e) {
                    logEl.innerHTML += "<div>Error: " + e.message + "</div>";
                }
            }
            statusEl.innerText = 'COMPLETE';
            document.getElementById('output').innerText = JSON.stringify(results);
        }
        run();
    </script>
</body>
</html>
`;

const base64 = Buffer.from(html).toString('base64');
const dataUri = 'data:text/html;base64,' + base64;

fs.writeFileSync(path.join(__dirname, '../scratch/data_uri.txt'), dataUri);
console.log('Data URI generated in scratch/data_uri.txt');
