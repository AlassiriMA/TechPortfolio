#!/usr/bin/env node

/**
 * Static site build script for GitHub Pages deployment
 * This script builds the React app and prepares it for static hosting
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Paths
const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(distDir, 'public');

console.log('🚀 Building static site for GitHub Pages...');

try {
  // Build the client-side application
  console.log('📦 Building React application...');
  execSync('vite build --config vite.static.config.js', { stdio: 'inherit' });
  
  // Create a CNAME file for GitHub Pages custom domain (if needed)
  // Uncomment and modify if you have a custom domain
  // fs.writeFileSync(path.join(publicDir, 'CNAME'), 'yourdomain.com');
  
  // Create a .nojekyll file to disable Jekyll processing on GitHub Pages
  console.log('🔧 Creating .nojekyll file...');
  fs.writeFileSync(path.join(publicDir, '.nojekyll'), '');
  
  // Create a basic 404.html that redirects to index.html for SPA routing
  console.log('🔄 Creating 404.html for SPA routing...');
  const notFoundContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found</title>
  <script>
    // Single Page App routing fix for GitHub Pages
    // Redirects 404s back to index.html with the original URL in the location hash
    const path = window.location.pathname;
    window.location.href = '/#' + path;
  </script>
</head>
<body>
  <!-- This page auto-redirects to the homepage with the path in the URL hash -->
  <noscript>
    <h1>Page Not Found</h1>
    <p>The page you're looking for doesn't exist. Please return to <a href="/">home</a>.</p>
  </noscript>
</body>
</html>
  `;
  
  fs.writeFileSync(path.join(publicDir, '404.html'), notFoundContent.trim());
  
  console.log('✅ Static site build complete! Ready for GitHub Pages deployment.');
  console.log('📂 Output directory: ' + publicDir);
  
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}