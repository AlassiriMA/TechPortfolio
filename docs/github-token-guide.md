# GitHub Token Guide for Deployment

This guide explains how to set up the correct permissions for deploying to GitHub Pages, including using a Personal Access Token (PAT) if needed.

## Option 1: Configure Repository Workflow Permissions

The simplest approach is to ensure GitHub Actions has the correct permissions:

1. Go to your repository's **Settings** tab
2. Click on **Actions** in the left sidebar
3. Scroll down to **Workflow permissions**
4. Select **Read and write permissions**
5. Save the changes

Additionally, make sure your workflow file (`.github/workflows/deploy.yml`) includes the proper permissions:

```yaml
permissions:
  contents: write
  pages: write
  id-token: write
```

## Option 2: Create and Use a Personal Access Token (PAT)

If the default `GITHUB_TOKEN` doesn't work, a Personal Access Token (PAT) can provide direct access:

### Creating a PAT

1. Go to your GitHub account settings (click your profile picture, then **Settings**)
2. In the left sidebar, click on **Developer settings**
3. Click on **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give your token a descriptive name (e.g., "GitHub Pages Deployment")
6. Select the following permissions:
   - `repo` (Full control of private repositories)
   - `workflow` (optional, but helpful if you need to update workflows)
7. Click **Generate token**
8. **IMPORTANT**: Copy the token immediately and store it securely. GitHub will only show it once!

### Adding PAT to Repository Secrets

1. Go to your repository's **Settings** tab
2. Click on **Secrets and variables** in the left sidebar, then **Actions**
3. Click the **New repository secret** button
4. For the name, enter `DEPLOY_TOKEN`
5. For the value, paste your Personal Access Token
6. Click **Add secret**

### Using PAT in Workflow

The workflow file has already been updated to prioritize the PAT if available:

```yaml
- name: Deploy to GitHub Pages
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: _site
    branch: gh-pages
    token: ${{ secrets.DEPLOY_TOKEN || secrets.GITHUB_TOKEN }}
    clean: true
```

## Security Considerations

- PATs have an expiration date. You may need to update the token periodically.
- Only grant the minimum permissions needed.
- If you suspect a token has been compromised, revoke it immediately and generate a new one.
- For organization repositories, consider using a GitHub App instead of a personal token.

## Troubleshooting

If you're still having issues with deployment:

1. Check GitHub Actions logs for specific error messages
2. Verify your token has not expired
3. Confirm the token has the correct permissions
4. Make sure the workflow is using the correct token
5. Consider temporarily enabling more verbose output in your workflow

For ongoing issues, refer to the [GitHub Actions documentation](https://docs.github.com/en/actions) or contact GitHub Support.