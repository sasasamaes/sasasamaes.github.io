# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React SPA portfolio site for Francisco Campos, deployed to GitHub Pages at https://sasasamaes.github.io. Built with Create React App (react-scripts 5), React 18, React Router 6, and React Bootstrap.

## Commands

- **Install:** `yarn install` (Yarn 4.5.0 via Corepack)
- **Dev server:** `yarn start` (localhost:3000)
- **Build:** `yarn build`
- **Deploy:** `yarn deploy` (runs `yarn build`, copies index.html to 404.html for SPA routing, then pushes to gh-pages branch)
- **Tests:** `yarn test` (no test files exist currently)

## Architecture

### Content-Driven Design

All portfolio content lives in `src/content_option.js`. This is the single source of truth for text, skills, work history, portfolio items, contact info, and social links. To update site content, edit only this file.

### Routing & Page Transitions

`src/app/routes.js` defines routes wrapped with `react-transition-group` for animated page transitions (400ms enter/exit). A `ScrollToTop` HOC resets scroll on navigation. Routes map to page components in `src/pages/` (home, about, portfolio, contact).

### Theme System

Dark/light theming uses CSS custom properties defined in `src/index.css` (`:root` for dark, `[data-theme="light"]` for light). The `src/components/themetoggle/` component toggles the `data-theme` attribute on `<html>` and persists to localStorage.

### Key Directories

- `src/pages/` — Route-level page components, each with its own `style.css`
- `src/components/` — Reusable components (social icons, theme toggle, GitHub repos, GitHub contributions)
- `src/hooks/` — `withRouter.js` (Router v6 HOC), `AnimatedCursor.js` (custom cursor effect)
- `src/app/` — App shell (`App.js`), route definitions (`routes.js`)

### External Integrations

- **GitHub API** (unauthenticated): `src/components/githubRepos/` fetches user repos; `src/components/githuhContributions/` (note: folder typo) fetches merged PRs
- **EmailJS**: Contact form in `src/pages/contact/` — service/template/user IDs configured in `content_option.js` (currently placeholders)

### Styling

Global CSS with Bootstrap grid utilities. No CSS modules — each component/page has a co-located `style.css`. Theme colors use CSS variables throughout.

### Environment

`.env` disables source maps (`GENERATE_SOURCEMAP=false`) and ESLint plugin (`DISABLE_ESLINT_PLUGIN=true`) for builds.
