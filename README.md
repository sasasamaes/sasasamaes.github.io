# Francisco Campos Diaz - Portfolio

Personal portfolio and blog built with Next.js 14, featuring multi-language support (EN/ES), blog integration with Contentful CMS, and Google AdSense.

### [Live Preview](https://sasasamaes.github.io)

### Features

- **Next.js 14 App Router** with static site generation
- **Multi-language (i18n)** — English and Spanish with prefixed routes (`/en/`, `/es/`)
- **Blog** powered by Contentful headless CMS
- **Google AdSense** integration
- **Dark/Light theme** with animated sun/moon toggle
- **Responsive** design with React-Bootstrap
- **Contact form** with EmailJS
- **GitHub repos & contributions** displayed dynamically
- **SEO** with hreflang alternates and sitemap generation

### Tech Stack

- Next.js 14 (App Router)
- next-intl (internationalization)
- Contentful (headless CMS)
- React-Bootstrap
- next-sitemap
- EmailJS
- Vercel (deployment)

### Setup

Clone the repository

```bash
git clone https://github.com/sasasamaes/sasasamaes.github.io.git
cd sasasamaes.github.io
```

Install dependencies

```bash
corepack yarn install
```

Create `.env.local` with your keys

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXX
```

Start the dev server

```bash
corepack yarn dev
```

Build for production

```bash
corepack yarn build
```

### Project Structure

```
src/app/[locale]/       App Router pages (per-locale)
messages/en.json        English translations
messages/es.json        Spanish translations
src/components/         Reusable components
src/i18n/               i18n routing, request config, navigation
src/lib/contentful.js   Contentful CMS client
src/middleware.js        Locale detection middleware
```

### Content

All text content lives in `messages/en.json` and `messages/es.json`. Edit these files to update portfolio content in both languages.
