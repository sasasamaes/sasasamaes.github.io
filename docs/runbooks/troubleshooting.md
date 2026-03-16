# Troubleshooting Guide

## Build Failures

### "Module not found" errors

- Run `npm install` to ensure all dependencies are installed
- Check import paths use `@/` alias (maps to `./src/`)
- Verify the file exists at the expected path

### Contentful API errors during build

- The app handles Contentful being unreachable gracefully — blog pages will be empty
- Check `.env.local` has valid `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`
- Verify tokens haven't expired in Contentful dashboard

### ESLint errors blocking commit

- Run `npm run lint:fix` to auto-fix what's possible
- For remaining errors, fix manually or add specific rule overrides in `eslint.config.mjs`
- Pre-commit hook runs lint-staged only on staged files

## Runtime Issues

### Blog posts not loading

1. Check Contentful entries are **published** (not draft)
2. Verify content exists for the current locale (`en-US` or `es-419`)
3. Check browser network tab for failed API calls
4. ISR revalidates every 60 seconds — wait or rebuild

### Theme toggle not working

- Check `localStorage` for `theme` key in browser dev tools
- `ThemeProvider.js` reads from localStorage and sets `data-theme` on `<html>`
- Clear localStorage and refresh to reset

### Contact form not sending

- EmailJS service/template/user IDs must be configured in `src/content_option.js`
- Currently using placeholder values — replace with real EmailJS credentials
- Check browser console for EmailJS errors

### Custom cursor not showing

- `AnimatedCursorWrapper.js` only renders on non-touch devices
- Check if `document.body.style.cursor` is set to `none`

### i18n / Language switching

- Routes are prefixed with locale: `/en/...` and `/es/...`
- Middleware in `src/middleware.js` handles locale detection and redirects
- Translation files are in `messages/en.json` and `messages/es.json`

## Performance

### Slow page loads

- Check if images are optimized (use `next/image` instead of `<img>`)
- Verify Vercel CDN is working (check response headers)
- Check Google Analytics real-time for actual user metrics

### Large bundle size

- Run `npx next build` and check the output for large pages
- Look for unnecessary dependencies in `package.json`

## Development Environment

### Port already in use

```bash
npm run dev -- -p 3001
```

### Hot reload not working

- Delete `.next` directory and restart: `rm -rf .next && npm run dev`

### Pre-commit hook not running

- Run `npx husky` to reinstall hooks
- Check `.husky/pre-commit` exists and is executable
- Run `chmod +x .husky/pre-commit` if needed
