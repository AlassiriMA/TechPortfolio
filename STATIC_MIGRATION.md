# Migration to Static Website

This document outlines the changes made to convert the Portfolio website from an Express.js backend to a fully static website suitable for GitHub Pages hosting.

## Architecture Changes

### Before: Full-Stack Application
- React frontend with Express.js backend
- API routes for data retrieval and form submissions
- Server-side rendering capabilities
- Security middleware (CSRF, secure headers)

### After: Static Single-Page Application
- Pure React frontend with no backend dependencies
- Static HTML, CSS, and JavaScript files only
- Client-side routing with wouter
- Form submissions handled via mailto links

## Key Changes Made

1. **Removed Express Backend**: Eliminated all server-side code and dependencies.

2. **Updated API Handling**: Modified the query client to work with static data instead of making API requests.

3. **Contact Form**: Updated to use `mailto:` links that open the user's email client with pre-filled data when submitted.

4. **Build Process**: Created a specialized build script for generating a static site optimized for GitHub Pages hosting.

5. **Routing**: Ensured client-side routing works properly in a static environment with appropriate fallbacks for direct URL access.

## How to Use

### Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build for Static Hosting
```bash
# Create a production build optimized for static hosting
npm run build:static

# The output will be in the dist/public directory
```

### Testing
```bash
# Run tests
npm test
```

## Deployment to GitHub Pages

1. Create a GitHub repository for your project
2. Run `npm run build:static` to create static files
3. Push the contents of `dist/public` to the `gh-pages` branch of your repository

Alternatively, you can set up GitHub Actions to automate this process. Here's a sample workflow file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build static site
        run: npm run build:static
        
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/public
```

## Notes for Future Development

- To add new data, update the static data files or modify the components directly
- For form submissions or dynamic features, use client-side solutions (mailto links, third-party form services, etc.)
- For API integrations, consider using client-side requests to third-party services that support CORS