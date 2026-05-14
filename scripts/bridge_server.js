const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const HOST = '127.0.0.1';
const RAW_DIR = path.join(__dirname, '../scratch/raw_text');
const OUT_DIR = path.join(__dirname, '../scratch/harvested_json');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'GET' && req.url === '/list') {
        const files = fs.readdirSync(RAW_DIR).filter(f => f.endsWith('.txt'));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(files));
    } else if (req.method === 'GET' && req.url.startsWith('/raw/')) {
        const fileName = decodeURIComponent(req.url.replace('/raw/', ''));
        const filePath = path.join(RAW_DIR, fileName);
        if (fs.existsSync(filePath)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            fs.createReadStream(filePath).pipe(res);
        } else {
            res.writeHead(404);
            res.end('Not found');
        }
    } else if (req.method === 'POST' && req.url === '/save') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const fileName = data.fileName.replace('.txt', '.json');
                fs.writeFileSync(path.join(OUT_DIR, fileName), JSON.stringify(data.questions, null, 2));
                res.writeHead(200);
                res.end('Saved');
            } catch (err) {
                res.writeHead(500);
                res.end(err.message);
            }
        });
    } else if (req.method === 'GET' && req.url === '/portal') {
        const portalPath = path.join(__dirname, '../harvest_portal.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(portalPath).pipe(res);
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, HOST, () => {
    console.log(`Bridge server running at http://${HOST}:${PORT}`);
});
