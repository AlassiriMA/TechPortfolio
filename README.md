
# Mohammad A Alassiri - Professional Portfolio

This is my professional portfolio website built with Jekyll for GitHub Pages, showcasing my skills, projects, and professional experience.

## Features

- Responsive design for all devices
- Interactive typing animation on homepage
- Project showcase with detailed project pages
- Skills section with horizontally scrolling tech icons
- Static color palette generator (no API keys required)
- Interactive code examples with syntax highlighting
- SEO optimized with meta tags
- Fast loading and high performance
- Secure HTTPS connection
- Custom domain setup (alassiri.nl)

## Tech Stack

- Jekyll for static site generation
- GitHub Pages for hosting
- GitHub Actions for CI/CD
- HTML5, CSS3, and JavaScript (vanilla)
- SCSS for styling
- Security headers and CSP
- Custom domain with HTTPS

## Project Structure

```
├── _data/              # Data files for the site (YAML, JSON)
├── _includes/          # Reusable components for templates
├── _layouts/           # Page layout templates
├── _posts/             # Blog posts
├── _projects/          # Project data files
├── _sass/              # SCSS files
├── assets/             # Static assets (images, JS, CSS)
├── docs/               # Documentation
├── .github/workflows/  # GitHub Actions workflow files
└── various root files  # Configuration files
```

## Development

1. Install dependencies:
   ```
   bundle install
   ```

2. Start the Jekyll development server:
   ```
   bundle exec jekyll serve --livereload
   ```

3. Open your browser and visit: `http://localhost:4000`

## API Independence

The website has been completely redesigned to remove all external API dependencies:

- **Code Highlighter**: Uses a static implementation with pre-written explanations in YAML
- **Color Palette Generator**: Uses predefined color palettes instead of OpenAI-generated ones
- **Content Security Policy**: Updated to reflect the removal of API dependencies

This approach ensures the site can be deployed to GitHub Pages without any API keys or external services required.

## Deployment

Deployment is handled automatically through GitHub Actions:

1. Push changes to the main branch
2. GitHub Actions builds the Jekyll site
3. The site is deployed to the gh-pages branch
4. GitHub Pages serves the site with HTTPS

For detailed instructions, see the [deployment guide](docs/deployment-guide.md).

### Troubleshooting GitHub Actions Deployment

If you encounter a "Permission denied" (403) error during deployment:

1. **Check Workflow Permissions**:
   - Ensure the `.github/workflows/deploy.yml` file has the correct permissions section:
     ```yaml
     permissions:
       contents: write
       pages: write
       id-token: write
     ```

2. **Update Repository Settings**:
   - Go to your repository's Settings > Actions > General
   - Scroll down to "Workflow permissions"
   - Select "Read and write permissions"
   - Save the changes
   
3. **Personal Access Token Alternative**:
   - If the default `GITHUB_TOKEN` doesn't work, you can create a Personal Access Token (PAT)
   - Add it as a repository secret named `DEPLOY_TOKEN`
   - The workflow is already configured to use this token if available
   - For detailed instructions, see the [GitHub Token Guide](docs/github-token-guide.md)

## Security

- HTTPS enforced
- Content Security Policy implemented
- Strict Transport Security (HSTS) enabled
- X-Content-Type-Options header
- X-Frame-Options header
- X-XSS-Protection header
- Referrer Policy header

## License

© 2024 Mohammad A Alassiri. All rights reserved.
