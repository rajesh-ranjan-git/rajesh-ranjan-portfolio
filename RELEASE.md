# Release Notes

## v2.0.0 — Next.js Rewrite

**Release date:** 2026-07-25

A ground-up rewrite of the portfolio on a new stack. This is not an incremental upgrade — it replaces the framework, routing model, styling approach, and deployment pipeline of the previous version (`rajesh-ranjan-portfolio-new`, kept for reference). Full technical detail is in [CHANGELOG.md](./CHANGELOG.md); this document summarizes the release for consumption at a glance.

### Highlights

- **Next.js 16 (App Router)** replaces the Vite + React SPA, with file-based routing, server components, server actions, and API routes.
- **React 19** with the React Compiler, replacing manual memoization.
- **TypeScript** across the entire codebase (previously plain JavaScript/JSX).
- **Tailwind CSS 4** (+ CSS Modules) replaces Sass and Bootstrap 5.
- **Zustand** introduced for client-side state management.
- **Server-side contact form** — AWS SES + a Next.js Server Action replaces client-side EmailJS.
- **Persistent sidebar navigation** replaces the top navbar.
- **Dark/light theme toggle**, **splash screen**, **breadcrumbs**, **project filters**, and a new animated **Orb** particle background.
- **PWA support** — web app manifest and service worker for installability.
- **New CI/CD pipeline** — GitHub Actions deploys to a self-managed EC2 host via SSH, rebuilding and reloading through PM2 (cluster mode, 2 instances), with email notifications on success/failure.

### Upgrade Notes

- This release has no backward-compatible upgrade path from `v0.0.0` — routing, styling, state management, and the contact form integration all changed. Treat it as a fresh deployment rather than an in-place upgrade.
- Environment variables changed shape (AWS SES credentials replace EmailJS keys). See [README.md § Environment Variables](./README.md#environment-variables) and copy `env/env.example.txt` as a starting point.
- Hosting moved from Netlify to a self-managed EC2 instance behind PM2, served from `rajeshranjan.dev`.

### Removed

`vite`, `bootstrap`, `styled-components`, `@emotion/react`, `@fortawesome/*`, `@emailjs/browser`, `react-router-dom`, `react-awesome-reveal`, `react-slick`/`slick-carousel`, `yet-another-react-lightbox`, `typewriter-effect`, `react-helmet`, `react-hot-toast`, `hamburger-react`, `sass-embedded`.

### Links

- [CHANGELOG.md](./CHANGELOG.md) — full list of changes by area (framework, styling, architecture, UI/UX, CI/CD, assets)
- [README.md](./README.md) — setup, tech stack, and deployment details

---

## v0.0.0 — Original Portfolio (Vite + React)

The original portfolio, preserved for reference in the `rajesh-ranjan-portfolio-new` repository. A client-side rendered single-page app built with Vite + React 18, Sass + Bootstrap 5, `react-router-dom`, EmailJS, and Netlify-based static deployment.
