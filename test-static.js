#!/usr/bin/env node

/**
 * Test static site build locally
 */

import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const docsDir = join(__dirname, 'docs');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
};

const server = createServer(async (req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  try {
    let filePath = join(docsDir, req.url === '/' ? 'index.html' : req.url);
    let extname = String(filePath.split('.').pop()).toLowerCase();
    let contentType = mimeTypes[`.${extname}`] || 'application/octet-stream';
    
    const content = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content, 'utf-8');
  } catch (error) {
    // Handle file not found - serve index.html for SPA routes
    if (error.code === 'ENOENT') {
      try {
        const content = await readFile(join(docsDir, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      } catch (err) {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(500);
      res.end(`Server Error: ${error.code}`);
    }
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Testing static site at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});