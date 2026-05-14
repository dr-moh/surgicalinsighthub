const fs = require('fs');
const path = require('fs'); // Wait, typo in my head.

const fs_node = require('fs');
const path_node = require('path');

const RAW_FILE = '/Users/dr.moh/Documents/SIH/sih_project/scratch/raw_text/MCS 2022 Case 1.docx.txt';
const HTML_OUT = '/Users/dr.moh/Documents/SIH/sih_project/scratch/harvest_mcs_case1.html';

const text = fs_node.readFileSync(RAW_FILE, 'utf8');
const escapedText = JSON.stringify(text);

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Harvesting MCS Case 1</title>
    <style>
        body { background: #111; color: #0f0; font-family: monospace; padding: 20px; }
        #status { color: #fff; font-size: 1.2em; }
        pre { border: 1px solid #333; padding: 10px; max-height: 500px; overflow: auto; }
    </style>
</head>
<body>
    <h1>SIH Harvest Worker</h1>
    <div id="status">Initializing...</div>
    <h3>Output JSON:</h3>
    <pre id="output">[]</pre>

    <script>
        const TEXT = ${escapedText};
        const API_KEY = 'e13a5f9ecd8487a2389c75f56b091e16';
        const MODEL = 'meta-llama/Llama-3-8b-instruct'; // Use 8B for testing

        async function run() {
            const status = document.getElementById('status');
            const output = document.getElementById('output');
            
            status.innerText = 'Calling ByteZ...';
            
            try {
                const res = await fetch('https://api.bytez.com/models/v2/' + MODEL, {
                    method: 'POST',
                    headers: { 'Authorization': API_KEY, 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        messages: [{ role: 'user', content: 'Extract surgical MCQs from this text into a JSON array. Return ONLY the JSON array.\\n\\n' + TEXT }],
                        params: { max_new_tokens: 2048 }
                    })
                });

                if (!res.ok) throw new Error(res.status + ' ' + await res.text());
                
                const data = await res.json();
                const content = data.output;
                const jsonMatch = content.match(/\\[[\\s\\S]*\\]/);
                output.innerText = jsonMatch ? jsonMatch[0] : content;
                status.innerText = 'COMPLETE';
            } catch (err) {
                status.innerText = 'FAILED: ' + err.message;
            }
        }
        run();
    </script>
</body>
</html>
`;

fs_node.writeFileSync(HTML_OUT, html);
console.log('Standalone harvest file created at: ' + HTML_OUT);
