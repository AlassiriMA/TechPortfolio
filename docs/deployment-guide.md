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

### Workflow Permissions

The workflow requires proper permissions to deploy to GitHub Pages. The following permissions are set in the workflow file:

```yaml
permissions:
  contents: write  # Needed to push to the repository
  pages: write     # Needed for GitHub Pages
  id-token: write  # Needed for token authentication
```

If you encounter deployment errors like "Permission denied" (403), make sure these permissions are correctly set in your workflow file. Additionally, you may need to check the repository settings:

1. Go to your repository's Settings > Actions > General
2. Scroll down to "Workflow permissions"
3. Select "Read and write permissions"
4. Save the changes

For detailed instructions on setting up tokens and permissions, see the [GitHub Token Guide](github-token-guide.md).

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

### SSL Certificate Issues

When you first set up a custom domain, you might see this error in curl or browser:
```
SSL: no alternative certificate subject name matches target host name 'alassiri.nl'
```

This is normal and occurs because:
1. GitHub needs time to provision the SSL certificate (up to 24 hours)
2. The DNS records might not have fully propagated yet

To resolve SSL certificate issues:

1. **Wait for provisioning**: GitHub automatically provisions certificates, but it takes time
2. **Verify DNS configuration**:
   - Ensure your DNS records match GitHub's requirements (see DNS Configuration section)
   - Wait for DNS propagation (can take up to 48 hours)
3. **Check GitHub Pages settings**:
   - Go to repository Settings > Pages
   - Verify the custom domain is correctly set
   - Look for any error messages or warnings
4. **Force certificate regeneration**:
   - If certificate provisioning fails after 24 hours, remove and re-add the custom domain

### Deployment Permission Issues

For permission-related errors, refer to the [GitHub Token Guide](github-token-guide.md).

## Maintenance

- GitHub automatically renews the SSL certificate
- Keep your GitHub Actions workflow up to date
- Periodically review security headers for best practices

## Support

For issues with GitHub Pages HTTPS:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Support](https://support.github.com)