# Mohammad A Alassiri - Professional Portfolio

This is my professional portfolio website built with Jekyll and hosted on GitHub Pages with HTTPS support at [alassiri.nl](https://alassiri.nl).

## Features

- Responsive design for all devices
- Project showcase with detailed project pages
- Skills section with interactive tech icons
- AI-powered color palette generator
- SEO optimized with Schema.org markup
- Fast loading and high performance
- SSL/HTTPS security
- Custom domain setup with automatic certificate management

## Local Development

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem
- Jekyll 4.2 or higher

### Installation

1. Clone this repository
   ```
   git clone https://github.com/mohammadalassiri/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```
   bundle install
   ```

3. Run the development server
   ```
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### SSL/HTTPS Setup

The website is configured with automatic SSL/HTTPS via GitHub Pages:

1. The custom domain (alassiri.nl) is set in the repository settings and through the CNAME file
2. GitHub Pages automatically issues and renews SSL certificates for the domain
3. All HTTP traffic is automatically redirected to HTTPS
4. Secure cookies and HSTS headers are enabled for enhanced security

For detailed instructions, see:
- [Deployment Guide](docs/deployment-guide.md)
- [DNS Configuration](docs/dns-setup.md)

### Deployment Checklist

- [x] Custom domain configuration in GitHub repository settings
- [x] CNAME file in repository root
- [x] Proper DNS records (A, CNAME) pointing to GitHub Pages servers
- [x] SSL certificate auto-provisioned by GitHub
- [x] Forced HTTPS in repository settings
- [x] Security headers implementation (CSP, HSTS, etc.)
- [x] Automatic HTTPS redirection
- [x] GitHub Actions workflow for automated deployment
- [x] Sitemap.xml for search engine optimization
- [x] Robots.txt with proper sitemap reference
- [x] Security.txt file in .well-known directory

## AI Color Palette Generator

The website includes an AI-powered color palette generator that uses the OpenAI API. To use this feature:

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Enter the key when prompted in the Color Palette Generator section
3. Enter a description of the color scheme you want to generate
4. Click "Generate Palette" to see your custom colors
5. Apply the palette to preview how it would look on the website

## License

© 2025 Mohammad A Alassiri. All rights reserved.