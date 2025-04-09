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

## SSL Certificate Provisioning

After setting up your DNS records and configuring GitHub Pages:

1. GitHub will automatically begin provisioning SSL certificates for your domain
2. This process can take up to 24 hours to complete
3. During this time, you might see SSL errors when accessing your site with HTTPS
4. You can check the provisioning status in your repository's Settings > Pages section

### Common SSL Certificate Errors

If you see errors like `no alternative certificate subject name matches target host name`:

1. This indicates that the SSL certificate doesn't yet include your custom domain
2. Be patient as GitHub needs time to issue and provision the certificate
3. The site will still be accessible via HTTP during this period
4. Once the certificate is provisioned, HTTPS will work automatically

## Troubleshooting DNS and SSL Issues

If you continue to experience issues with SSL after 24 hours:

1. **Verify DNS configuration**:
   - Run `dig alassiri.nl +noall +answer` to confirm DNS records are correct
   - Ensure all four GitHub Pages IP addresses are properly configured
   - Check that the CNAME record points to the correct GitHub Pages domain

2. **Check for conflicting records**:
   - Remove any conflicting AAAA records
   - Ensure there are no CAA records that restrict certificate issuance
   - Verify you don't have both CNAME and A records for the apex domain

3. **Force certificate regeneration**:
   - In GitHub Pages settings, temporarily remove your custom domain
   - Save the changes
   - Add your custom domain back
   - This will trigger a new certificate provisioning process

4. **Verify repository settings**:
   - Ensure the CNAME file in your repository contains only your domain name
   - Check that the custom domain field in GitHub Pages settings is correct
   - Make sure "Enforce HTTPS" is checked

For more help, refer to:
- [GitHub's documentation on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)