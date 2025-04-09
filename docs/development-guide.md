# Development Guide

This guide provides instructions for setting up and developing the portfolio website locally.

## Prerequisites

- Ruby (2.7.0 or higher recommended)
- RubyGems
- Bundler
- Git

## Local Development Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   bundle install
   ```

3. Start the local Jekyll server:
   ```
   bundle exec jekyll serve --livereload
   ```

4. Visit `http://localhost:4000` in your browser to view the site.

## Common Issues and Solutions

### Common Jekyll Issues

#### Bundle Install Dependency Conflicts

If you encounter conflicts between `github-pages` gem and other dependencies like `jekyll-sass-converter`, try these solutions:

1. Remove specific version constraints for dependencies that GitHub Pages manages:
   ```ruby
   # DON'T specify jekyll-sass-converter in your Gemfile when using github-pages
   # This causes conflicts
   ```

2. Use the GitHub Pages gem version locking:
   ```ruby
   gem "github-pages", group: :jekyll_plugins
   ```

3. If you need a specific Jekyll version for local development but want to deploy to GitHub Pages, consider using different Gemfiles for development vs. production.

#### Invalid Date in Vendor Template Files

If you encounter an error like `Invalid date '<%= Time.now.strftime('%Y-%m-%d %H:%M:%S %z') %>'` during the Jekyll build process, it's likely related to Jekyll trying to process template files in the vendor directory. The solution is to exclude the vendor directory in your `_config.yml`:

```yaml
exclude:
  - vendor/
  - .sass-cache/
  - .jekyll-cache/
  - .jekyll-metadata
```

### Static Site Features

The portfolio site has been converted to fully static implementations with no API dependencies:

1. **Code Highlighter**: Uses a static implementation with pre-written explanations stored in `_data/code_explanations.yml`

2. **Color Palette Generator**: Uses predefined palettes instead of API-generated ones

These static implementations ensure the site can be deployed to GitHub Pages without requiring API keys or external service dependencies.

## Build Process

The build process is managed by GitHub Actions and documented in `.github/workflows/deploy.yml`. The workflow:

1. Sets up Ruby
2. Installs dependencies
3. Builds the Jekyll site
4. Deploys to GitHub Pages

## Folder Structure

```
├── _data/              # Data files for the site (YAML, JSON)
├── _includes/          # Reusable components for templates
├── _layouts/           # Page layout templates
├── _posts/             # Blog posts
├── _projects/          # Project data files
├── _sass/              # SCSS files
├── assets/             # Static assets (images, JS, CSS)
│   ├── css/            # Compiled CSS
│   ├── images/         # Image files
│   └── js/             # JavaScript files
├── docs/               # Documentation
├── .github/workflows/  # GitHub Actions workflow files
├── _config.yml         # Jekyll configuration
└── Gemfile             # Ruby dependencies
```

## Adding New Content

### Adding a New Project

1. Create a new file in `_projects/` with front matter:
   ```yaml
   ---
   layout: project
   title: "Project Title"
   description: "Short project description"
   image: /assets/images/projects/project-image.jpg
   order: 3
   technologies:
     - HTML
     - CSS
     - JavaScript
   ---
   Project content here...
   ```

### Adding Code Examples

1. Add explanations to `_data/code_explanations.yml`
2. Reference them in code snippets with the appropriate ID

## Security Features

The site implements several security features:

- Content Security Policy
- HTTPS enforcement
- Secure headers
- Static implementation of features that previously required API access

## Deployment

See [deployment-guide.md](deployment-guide.md) for instructions on deploying to GitHub Pages.