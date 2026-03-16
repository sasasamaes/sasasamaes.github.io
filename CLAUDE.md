# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 (App Router) portfolio and blog site for Francisco Campos, deployed to Vercel at https://sasasamaes.github.io. Built with React 18, React Bootstrap, next-intl (EN/ES), and Contentful CMS for blog content.

## Commands

- **Install:** `npm install` (or `yarn install` with Yarn 4.5.0 via Corepack)
- **Dev server:** `npm run dev` (localhost:3000)
- **Build:** `npm run build` (also runs `next-sitemap` via postbuild)
- **Lint:** `npm run lint` / `npm run lint:fix`
- **Format:** `npm run format` / `npm run format:check`
- **Pre-commit:** Automatic via Husky — runs lint-staged (ESLint + Prettier) and build validation on JS changes

## Architecture

### Routing (Next.js App Router + next-intl)

Routes are defined as file-system routes under `src/app/[locale]/`:

- `/[locale]` — Home
- `/[locale]/about` — About
- `/[locale]/portfolio` — Portfolio
- `/[locale]/blog` — Blog listing (SSG + ISR 60s)
- `/[locale]/blog/[slug]` — Blog post detail
- `/[locale]/contact` — Contact form

Locales: `en` (default), `es`. Middleware in `src/middleware.js` handles locale detection and redirects. Navigation helpers in `src/i18n/navigation.js`.

### Layout Hierarchy

```
src/app/layout.js (Root — Bootstrap CSS, global styles)
└── src/app/[locale]/layout.js (Locale — analytics, i18n, theme, header, social icons)
```

### Blog (Contentful CMS)

- Content fetched via `src/lib/contentful.js` (Content Delivery API)
- Content model: `blog` with fields: title, slug, excerpt, content (rich text), coverImage, tags, publishedDate
- Locales: `en-US`, `es-419`
- Rich text rendered via `@contentful/rich-text-react-renderer`

### Analytics

- GA4 (`G-QMX4S3JFBC`) + GTM (`GTM-TZQ8CMJ6`) loaded in locale layout
- `src/components/AnalyticsTracker.js` — tracks page views on every route change
- `src/lib/analytics.js` — `pageview()` and `event()` helpers
- Custom events: `blog_post_view`, `blog_post_click`, `blog_filter`

### Theme System

Dark/light theming via CSS custom properties in `src/app/globals.css`. `src/components/themetoggle/ThemeProvider.js` toggles `data-theme` on `<html>` and persists to localStorage.

### Key Directories

- `src/app/[locale]/` — Route-level pages (each with Client component + CSS)
- `src/components/` — Reusable components (socialicons, themetoggle, blog/, AnalyticsTracker)
- `src/lib/` — Utilities (contentful.js, analytics.js)
- `src/i18n/` — Internationalization (routing.js, navigation.js, request.js)
- `src/header/` — Main navigation header
- `messages/` — Translation files (en.json, es.json)

### External Integrations

- **Contentful**: Blog CMS — credentials in `.env.local`
- **EmailJS**: Contact form — service/template IDs in `src/content_option.js`
- **GitHub API**: Repos and contributions components (unauthenticated)
- **Google AdSense** (`ca-pub-3451020767524769`): Ad banners in blog posts

### Code Quality

- **ESLint**: `eslint.config.mjs` — extends `next/core-web-vitals` + `prettier`
- **Prettier**: `.prettierrc` — double quotes, semicolons, trailing commas, 100 char width
- **Husky**: Pre-commit hook runs lint-staged + build validation
- **lint-staged**: ESLint fix + Prettier on staged JS/CSS/JSON/MD files

## Runbooks

Operational documentation in `docs/runbooks/`:

- `local-setup.md` — Development environment setup
- `deploy.md` — Vercel deployment process
- `contentful.md` — CMS configuration and content model
- `google-analytics.md` — Analytics setup and custom events
- `troubleshooting.md` — Common issues and fixes
