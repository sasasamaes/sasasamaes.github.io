# Deploy to Production

## Platform

The site is deployed on **Vercel** and auto-deploys from the `master` branch.

## Automatic Deployment

Every push to `master` triggers a Vercel build and deploy. No manual steps needed.

### Build Pipeline

1. Vercel detects push to `master`
2. Runs `next build` (which also runs `next-sitemap` via `postbuild`)
3. Deploys to https://sasasamaes.github.io

## Manual Deployment

If you need to trigger a manual deploy:

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select the `sasasamaes.github.io` project
3. Click "Redeploy" on the latest deployment

## Preview Deployments

Vercel automatically creates preview deployments for pull requests. Check the PR for the preview URL.

## Rollback

1. Go to Vercel Dashboard > Deployments
2. Find the last working deployment
3. Click the three dots menu > "Promote to Production"

## Environment Variables (Vercel)

These must be set in Vercel project settings:

| Variable                      | Description                             |
| ----------------------------- | --------------------------------------- |
| `CONTENTFUL_SPACE_ID`         | Contentful space ID                     |
| `CONTENTFUL_ACCESS_TOKEN`     | Contentful Content Delivery API token   |
| `CONTENTFUL_MANAGEMENT_TOKEN` | Contentful Content Management API token |

## Domain Configuration

The custom domain `sasasamaes.github.io` is configured in Vercel project settings under "Domains".

## Post-Deploy Verification

1. Check https://sasasamaes.github.io loads
2. Verify blog posts render (confirms Contentful connection)
3. Test language toggle (EN/ES)
4. Check Google Analytics real-time view for page hits
