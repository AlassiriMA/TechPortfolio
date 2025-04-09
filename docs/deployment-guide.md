# Deployment Guide for alassiri.nl with HTTPS

This guide outlines the process for deploying the portfolio website to GitHub Pages with HTTPS enabled for the custom domain alassiri.nl.

## Prerequisites

- GitHub account with owner/admin permissions
- Domain (alassiri.nl) with access to DNS settings
- Git installed on your local machine

## GitHub Repository Setup

1. Create or use an existing GitHub repository for your website
2. Ensure the repository is public (required for GitHub Pages)
3. Push your Jekyll site to the repository

## GitHub Pages Configuration

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set the following:
   - Source: Deploy from a branch
   - Branch: gh-pages (or main, depending on your setup)
   - Custom domain: alassiri.nl
   - Enforce HTTPS: ✓ (checked)

## DNS Configuration

Follow the instructions in [dns-setup.md](dns-setup.md) to configure your domain's DNS records.

## GitHub Actions Workflow

This repository includes a GitHub Actions workflow file at `.github/workflows/deploy.yml` that:

1. Builds the Jekyll site
2. Adds the CNAME file with your domain
3. Deploys to the gh-pages branch
4. Verifies the deployment

The workflow runs automatically when changes are pushed to the main branch.

## SSL/HTTPS Overview

GitHub Pages handles SSL/HTTPS automatically:

1. After setting your custom domain, GitHub begins provisioning a certificate
2. This process can take up to 24 hours
3. Once complete, your site will be accessible via HTTPS
4. The site implements HSTS for enhanced security

## Testing Your HTTPS Setup

After deployment, verify your HTTPS configuration:

1. Visit https://alassiri.nl and ensure it loads properly
2. Try http://alassiri.nl and confirm it redirects to HTTPS
3. Check security headers with online tools:
   - [SSL Labs](https://www.ssllabs.com/ssltest/)
   - [Security Headers](https://securityheaders.com/)

## Security Features Implemented

- HTTPS with modern TLS configuration
- HTTP to HTTPS redirection
- Strict Transport Security (HSTS)
- Content Security Policy
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer Policy

## Troubleshooting

If you encounter issues with HTTPS:

1. Ensure DNS propagation is complete (can take up to 48 hours)
2. Verify DNS records match GitHub's requirements
3. Check GitHub Pages settings for any errors
4. If certificate provisioning fails, remove and re-add the custom domain

## Maintenance

- GitHub automatically renews the SSL certificate
- Keep your GitHub Actions workflow up to date
- Periodically review security headers for best practices

## Support

For issues with GitHub Pages HTTPS:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Support](https://support.github.com)