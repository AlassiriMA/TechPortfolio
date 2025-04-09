# DNS Configuration for GitHub Pages with SSL

To properly configure your custom domain (alassiri.nl) with GitHub Pages and enable SSL/HTTPS:

## Option 1: Using an Apex Domain (alassiri.nl)

Add these A records to your domain's DNS configuration:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

## Option 2: Using a www Subdomain (www.alassiri.nl)

Add a CNAME record:

```
CNAME    www    mohammadalassiri.github.io.
```

## Option 3: Configuring Both (Recommended)

Configure both the apex domain and www subdomain:

1. Add the A records as in Option 1
2. Add this CNAME record:
   ```
   CNAME    www    mohammadalassiri.github.io.
   ```

## Verifying DNS Configuration

After updating your DNS records:

1. Wait for DNS propagation (can take up to 48 hours)
2. Verify with the dig command:
   ```
   dig alassiri.nl +noall +answer
   ```

## GitHub Repository Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Custom domain", enter: alassiri.nl
4. Check "Enforce HTTPS"
5. Save the changes

GitHub will automatically provision and manage SSL certificates for your domain.

## Troubleshooting

If you encounter issues with SSL:

1. Ensure DNS is properly configured
2. Check for CAA records that might restrict certificate issuance
3. Verify the CNAME file in your repository contains your domain name
4. Check for SSL provisioning status in GitHub Pages settings

For more help, refer to [GitHub's documentation on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).