# Contentful CMS Configuration

## Overview

Blog content is managed in [Contentful](https://app.contentful.com). The site fetches posts at build time (SSG) with 60-second ISR revalidation.

## Content Model: `blog`

| Field           | Type              | Description                               |
| --------------- | ----------------- | ----------------------------------------- |
| `title`         | Short text        | Post title                                |
| `slug`          | Short text        | URL-friendly identifier (unique)          |
| `excerpt`       | Short text        | Preview text for blog listing             |
| `content`       | Rich text         | Full post body (supports embedded assets) |
| `coverImage`    | Media             | Featured image                            |
| `tags`          | Short text (list) | Array of tags for filtering               |
| `publishedDate` | Date & time       | Publication date                          |

## Localization

Content supports two locales:

- `en-US` — English (default)
- `es-419` — Spanish (Latin America)

Each field can have localized content. The site maps:

- Route `/en/blog/*` → `en-US` content
- Route `/es/blog/*` → `es-419` content

## Creating a New Blog Post

1. Go to **Content** > **Add entry** > **blog**
2. Fill in all fields for both locales
3. Set the `slug` (must be unique, URL-friendly, e.g., `my-new-post`)
4. **Publish** the entry
5. The site will pick up the new post within 60 seconds (ISR) or on next build

## API Tokens

- **Content Delivery API**: Read-only, used at build time and ISR
- **Content Management API**: Read-write, used for content management scripts

Tokens are stored in `.env.local` (local) and Vercel environment variables (production).

## Troubleshooting

- **Posts not showing**: Check that the entry is published (not draft) and has content in the correct locale
- **Images broken**: Ensure `images.ctfassets.net` is in `next.config.js` remote patterns
- **Build fails with Contentful error**: The app gracefully handles Contentful being unreachable — blog will be empty but site will build
