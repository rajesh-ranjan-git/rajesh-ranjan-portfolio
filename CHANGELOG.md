# Changelog

All notable changes to this project are documented in this file.

This project does not strictly follow [Keep a Changelog](https://keepachangelog.com) versioning conventions, since `v2.0.0` represents a full rewrite rather than an incremental release. Versions correspond to the `version` field in `package.json`.

## [2.0.0] — Next.js Rewrite

The entire portfolio was rebuilt from scratch on a new stack. This is not an incremental upgrade of the previous codebase (`rajesh-ranjan-portfolio-new`, kept for reference) — it is a ground-up rewrite with a different framework, routing model, styling approach, and deployment pipeline.

### Framework & Build

- **Migrated from Vite + React SPA to Next.js 16 (App Router)**, moving from client-side routing to file-based routing with server components, server actions, and API routes.
- **Upgraded React 18 → React 19**, adopting the new React Compiler (`babel-plugin-react-compiler`) instead of manual memoization.
- **Adopted TypeScript** across the entire codebase (previous version was plain JavaScript/JSX).
- Replaced Vite's `dev`/`build`/`preview` scripts with Next.js's `next dev` (`cross-env`-pinned to port 1995), `next build`, and `next start`.
- Replaced the Vite `index.html` entry point with the App Router's `src/app/layout.tsx` and Next.js Metadata API for `<head>` management.

### Styling

- **Migrated from Sass (`sass-embedded`) + Bootstrap 5 to Tailwind CSS 4**, with CSS Modules for component-scoped styles where Tailwind utilities weren't a fit.
- Removed `bootstrap`, `styled-components`, and `@emotion/react` in favor of Tailwind's utility-first approach.
- Removed FontAwesome (`@fortawesome/*`) in favor of `react-icons`.

### Architecture & State

- Reorganized `src/Components` / `src/Containers` / `src/Pages` (PascalCase, feature-mixed) into a flatter, domain-driven structure: `components/`, `sections/`, `config/`, `constants/`, `helpers/`, `hooks/`, `lib/`, `services/`, `store/`, `styles/`, `types/`, `utils/`, `validators/` (kebab/dot-case file naming).
- **Introduced Zustand** for client-side state management (previously no centralized state library was used).
- Replaced `react-router-dom` client-side routing with Next.js App Router routes, including a dynamic `project/[id]` route for project detail pages (previously `Pages/Detail`).
- Added a dedicated **logger service** (`services/logger`) with separate browser/node loggers, replacing ad-hoc `console` usage.
- Added a global **error service** and an `ErrorWrapper`/`global-error.tsx` boundary, replacing the previous standalone `Pages/Error` component.
- Added a **response service** (`services/response`) to standardize API/server action responses.

### Contact Form & Email

- **Replaced EmailJS (`@emailjs/browser`, client-side)** with a Next.js **Server Action** (`lib/actions/email.ts`) that sends email server-side via **AWS SES** (`@aws-sdk/client-ses`), rendered with `@react-email/render` templates.
- Added dedicated form validators (`validators/contact.validators.ts`, `validators/common.validators.ts`) and a `useInputFieldValidation` hook, replacing inline validation.
- Replaced `react-hot-toast` usage pattern with a custom `useToast` hook and toast helpers/config.

### UI & UX

- **Replaced the top navbar (`Menu` component + `hamburger-react`) with a persistent sidebar** (`components/sidebar`), including its own header/footer and a custom hamburger/menu button.
- **Replaced `react-awesome-reveal`** scroll animations with a custom `FadeIn` component and `useInView` hook.
- **Replaced `react-slick` / `slick-carousel`** with a custom carousel component.
- **Replaced `yet-another-react-lightbox`** with a custom image viewer/detailed information layout for project screenshots.
- **Replaced `typewriter-effect`** with a custom typewriter component.
- Upgraded particles from `@tsparticles/react` v3 / `@tsparticles/slim` v3 to `@tsparticles/engine` + `@tsparticles/react` + `@tsparticles/slim` v4, adding a dedicated animated `Orb` background component.
- Added a **splash screen/gate** (`ui/splash`) with its own loader, shown on initial app load.
- Added a **theme manager and toggle** for dark/light mode (not present in the previous version).
- Added a **breadcrumb** component for nested project pages.
- Added a **floating menu/badge** and a **scroll-to-top button** (replacing the previous `BackToTop` component).
- Added a **project filters** UI to the portfolio section (category-based filtering wasn't present before).
- Added a **tooltip** component and helpers.
- Replaced `react-helmet` (per-page `<title>` management) with a `TitleManager` component built on the Next.js Metadata API.

### PWA & Infra

- Added a **service worker** (`public/service-worker`) and **web app manifest** (`public/manifest`) for installability — the previous version had neither.
- Added a `Banner` service that prints a styled startup banner (via `figlet`, `gradient-string`, `boxen`) to the server console.
- Added environment-specific config loading (`env/.env.development`, `env/.env.production`) via `dotenv`, loaded manually in `next.config.ts`.

### Assets

- Renamed and reorganized `public`/`src/Assets` from PascaCase/underscore naming (e.g. `Assets/Projects/BancardifyMe/BancardifyMe_Home.png`) to kebab-case under `public/assets/**` (e.g. `assets/portfolio/bancardify-me/bancardify-me-home.webp`).
- Converted project/certificate/background images from PNG/JPEG to **WebP** for smaller payloads.
- Added new favicon set (`favicon-96x96.png`, `web-app-manifest-*.png`, `favicon.svg`) generated for PWA/manifest support.

### CI/CD & Deployment

- **Added GitHub Actions CI/CD** (`.github/workflows/deploy.yml`): on push to `main`, detects changed files, SSHes into the production host, conditionally reinstalls dependencies, rebuilds, and reloads the app via PM2 (with automatic clean-restart fallback), plus email notifications on success/failure.
- **Added PM2 process management** (`ecosystem.config.cjs`) — cluster mode, 2 instances, auto-restart, memory-based restart threshold, and file-based logging — replacing the previous static-hosting deployment (Netlify) implied by the old README.
- Site now served from a custom domain (`rajeshranjan.dev`) on self-managed infrastructure, rather than a Netlify subdomain.

### Removed

- `vite`, `@vitejs/plugin-react`, `vite.config.js`, `index.html`
- `bootstrap`, `styled-components`, `@emotion/react`
- `@fortawesome/*`, `react-fontawesome`
- `@emailjs/browser`
- `react-router-dom`
- `react-awesome-reveal`
- `react-slick`, `slick-carousel`
- `yet-another-react-lightbox`
- `typewriter-effect`
- `react-helmet`
- `react-hot-toast` (as a direct dependency; superseded by a custom hook)
- `hamburger-react` (superseded by a custom hamburger button)
- `sass-embedded` and all `.scss` stylesheets

## [0.0.0] — Original Portfolio (Vite + React)

The original portfolio, preserved for reference in the `rajesh-ranjan-portfolio-new` repository. Built as a client-side rendered single-page app with:

- Vite + React 18, plain JavaScript/JSX
- Sass + Bootstrap 5 for styling
- `react-router-dom` for routing
- EmailJS for client-side contact form submission
- `react-slick`, `react-awesome-reveal`, `yet-another-react-lightbox`, `typewriter-effect`, `hamburger-react` for UI/animation
- Netlify-based static deployment
