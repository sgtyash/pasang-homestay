# Deployment Guide: GitHub + Vercel

This guide will help you push your project to GitHub and deploy it to Vercel.

## Step 1: Push to GitHub

### 1.1 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `pasang-homestay` (or any name you prefer)
   - **Description**: "A Next.js website for Pasang Homestay in Mechuka"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### 1.2 Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Add all files to git
git add .

# Make your first commit
git commit -m "Initial commit: Pasang Homestay website"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/pasang-homestay.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: If you haven't set up Git credentials, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

## Step 2: Deploy to Vercel

### 2.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended - makes it easier)
4. Authorize Vercel to access your GitHub account

### 2.2 Deploy Your Project

1. After signing in, click **"Add New Project"** or **"Import Project"**
2. You'll see a list of your GitHub repositories
3. Find and select **"pasang-homestay"** (or whatever you named it)
4. Click **"Import"**

### 2.3 Configure Project Settings

Vercel will auto-detect Next.js settings, but verify:

- **Framework Preset**: Next.js (should be auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (should be auto-detected)
- **Output Directory**: `.next` (should be auto-detected)
- **Install Command**: `npm install` (should be auto-detected)

### 2.4 Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Once done, you'll get a live URL like: `https://pasang-homestay.vercel.app`

### 2.5 Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your custom domain (e.g., `pasanghomestay.com`)
3. Follow Vercel's instructions to update your DNS records

## Step 3: Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every time you push to the `main` branch
- Create preview deployments for pull requests
- Rebuild on every commit

## Troubleshooting

### Build Errors

If you get build errors:
1. Check the build logs in Vercel dashboard
2. Make sure all dependencies are in `package.json`
3. Run `npm run build` locally to test

### Environment Variables

If you need environment variables:
1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

### Common Issues

- **Module not found**: Make sure all dependencies are in `package.json`
- **Build timeout**: Check for large files or slow operations
- **404 errors**: Verify your routing structure matches Next.js App Router

## Next Steps

- Your site is now live! 🎉
- Share the Vercel URL with others
- Make changes locally and push to GitHub - Vercel will auto-deploy
- Monitor your site in the Vercel dashboard
