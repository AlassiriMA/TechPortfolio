# Migration to Static Website

This document outlines the changes made to convert the Portfolio website from an Express.js backend to a fully static Jekyll website suitable for GitHub Pages hosting.

## Architecture Changes

### Before: Full-Stack Application
- React frontend with Express.js backend
- API routes for data retrieval and form submissions
- Server-side rendering capabilities
- Security middleware (CSRF, secure headers)
- OpenAI API integration for code highlighting and color palette generation

### After: Static Jekyll Site
- Jekyll static site generator
- GitHub Pages for hosting
- Static HTML, CSS, and JavaScript files only
- No external API dependencies
- All features implemented with client-side JavaScript and predefined data

## Key Changes Made

1. **Migrated to Jekyll**: Converted from React/Express to Jekyll for GitHub Pages compatibility.

2. **Removed Express Backend**: Eliminated all server-side code and dependencies.

3. **Removed API Dependencies**: 
   - Converted code highlighter to use static pre-written explanations
   - Converted color palette generator to use predefined palettes
   - Removed all references to API keys and external services

4. **Updated Security**: 
   - Modified Content Security Policy to reflect removal of API dependencies
   - Implemented all necessary security headers for GitHub Pages hosting
   - Added SSL/HTTPS enforcement with HSTS

5. **Build Process**: Created GitHub Actions workflow to automate Jekyll building and GitHub Pages deployment.

6. **Documentation**: Updated all documentation to reflect the static, API-independent implementation.

## How to Use

### Development
```bash
# Install Ruby dependencies
bundle install

# Start Jekyll development server with live reload
bundle exec jekyll serve --livereload
```

### Production Build for GitHub Pages
```bash
# Build the Jekyll site for production
bundle exec jekyll build
```

### Testing
There are no automated tests in the Jekyll version. Manual testing is recommended for all site features.

## Deployment to GitHub Pages

The site is automatically deployed to GitHub Pages using GitHub Actions:

```yaml
name: Build and Deploy Jekyll Site

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
          
      - name: Build Jekyll site
        run: bundle exec jekyll build
        
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: _site
          branch: gh-pages
```

Additionally, GitHub Pages will automatically detect and build Jekyll sites from the main branch if no custom workflow is used.

## Notes for Future Development

### Static Implementations

All features that previously required APIs have been converted to fully static implementations:

1. **Code Highlighter**:
   - Pre-written explanations are stored in `_data/code_explanations.yml`
   - To add new code examples, add new entries to the YAML file and reference them in the HTML

2. **Color Palette Generator**:
   - Predefined palettes are stored in `assets/js/main.js` in the `ColorPaletteGenerator` class
   - To add new palettes, edit the `predefinedPalettes` object

### Adding New Content

- To add new projects, create Markdown files in the `_projects` folder
- To add blog posts, create Markdown files in the `_posts` folder
- To add new pages, create Markdown or HTML files in the root directory

### Extending Functionality

- The site is now completely independent of external APIs
- If future functionality requires external data:
  - Consider using static alternatives with predefined data
  - If client-side API calls are necessary, update the Content Security Policy
  - Use services that support CORS for client-side requests