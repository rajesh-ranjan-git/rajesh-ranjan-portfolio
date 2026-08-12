# Rajesh Ranjan | Portfolio

Personal portfolio of **Rajesh Ranjan**, a Full Stack Developer with 7+ years of experience, currently at Business Today Technology (India Today Group). Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

**Live site:** [rajeshranjan.dev](https://rajeshranjan.dev/)

![License](https://img.shields.io/github/license/rajesh-ranjan-git/rajesh-ranjan-portfolio)
![GitHub release](https://img.shields.io/github/v/release/rajesh-ranjan-git/rajesh-ranjan-portfolio)
![Build](https://github.com/rajesh-ranjan-git/rajesh-ranjan-portfolio/actions/workflows/deploy.yml/badge.svg)
![Stars](https://img.shields.io/github/stars/rajesh-ranjan-git/rajesh-ranjan-portfolio?style=social)
![Last Commit](https://img.shields.io/github/last-commit/rajesh-ranjan-git/rajesh-ranjan-portfolio)
![Visitors](https://komarev.com/ghpvc/?username=rajesh-ranjan-git&repo=rajesh-ranjan-portfolio)

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## About

This repository showcases Rajesh Ranjan's work, skills, and professional experience. It includes sections for greetings/intro, about, skills & tools, work experience timeline, education, certificates, a filterable project portfolio with detail pages, and a contact form backed by AWS SES.

This is the second major iteration of the portfolio (`v2.0.1`) — a full rewrite from a Vite + React SPA to a Next.js App Router application. See [CHANGELOG.md](./CHANGELOG.md) for details on what changed from the previous version.

## Tech Stack

**Framework & Language**

- [Next.js 16](https://nextjs.org) (App Router, React Compiler enabled)
- [React 19](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org)

**Styling & UI**

- [Tailwind CSS 4](https://tailwindcss.com)
- CSS Modules for component-scoped styles
- [tsParticles](https://particles.js.org) for animated backgrounds
- [react-icons](https://react-icons.github.io/react-icons)

**State & Data**

- [Zustand](https://zustand-demo.pmnd.rs) for client state
- Next.js Server Actions for form submissions

**Email**

- [AWS SES](https://aws.amazon.com/ses) (`@aws-sdk/client-ses`)
- [`@react-email/render`](https://react.email) for email templates

**Tooling**

- ESLint 9 (flat config, `eslint-config-next`)
- `dotenv`, `cross-env`, `figlet`, `gradient-string`, `boxen` for local dev/CLI banners

## Features

- **App Router architecture** — file-based routing under `src/app`, with a dynamic `project/[id]` route for individual project detail pages
- **Dark/light theme** with a dedicated theme manager and toggle
- **Splash screen & loaders** on initial load
- **Particle background & animated orb** rendered via tsParticles
- **Sidebar navigation** with section-based scroll navigation, replacing the old top navbar
- **Filterable project portfolio** with category filters and detailed per-project case study pages
- **Experience timeline** with animated progress and per-role tech stacks
- **Contact form** with client-side validation and server-side email delivery via AWS SES
- **PWA-ready** — web manifest and a registered service worker
- **Custom error handling** — global error boundary and a styled 404/not-found page
- **SEO-friendly metadata** via the Next.js Metadata API, with dynamic title templating

## Project Structure

```
src/
├── app/                # Next.js App Router routes, layouts, API routes
├── components/         # UI components, grouped by feature/domain
├── sections/           # Page-level sections (greetings, about, skills, etc.)
├── config/             # Static config (owner info, socials, technologies, etc.)
├── constants/          # App-wide constants
├── helpers/            # Small helper functions
├── hooks/              # Custom React hooks
├── lib/                # Server actions and API handler utilities
├── services/           # Email, logging, error, and response services
├── store/              # Zustand store(s)
├── styles/             # CSS Modules
├── types/              # Shared TypeScript types and prop types
├── utils/              # General utilities
└── validators/         # Form/input validation logic
```

## Getting Started

**Prerequisites:** Node.js 24+, npm

```bash
git clone https://github.com/rajesh-ranjan-git/rajesh-ranjan-portfolio.git
cd rajesh-ranjan-portfolio
npm install
cp env/env.example.txt env/.env.development
npm run dev
```

The app runs on [http://localhost:1995](http://localhost:1995) by default (see [Environment Variables](#environment-variables)).

## Environment Variables

Environment files live in `env/` (`.env.development`, `.env.production`) and are loaded manually via `next.config.ts`. Copy `env/env.example.txt` as a starting point:

| Variable                                                                  | Description                                              |
| ------------------------------------------------------------------------- | -------------------------------------------------------- |
| `DOTENV_CONFIG_QUIET`                                                     | Silences dotenv's console logging                        |
| `NEXT_PUBLIC_NODE_ENV`                                                    | Current environment (`development` / `production`)       |
| `NEXT_PUBLIC_BASE_PORT`                                                   | Local dev server port                                    |
| `NEXT_PUBLIC_BASE_URL`                                                    | Base URL used by the app                                 |
| `NEXT_AWS_EMAIL_FROM` / `NEXT_AWS_EMAIL_TO`                               | Sender/recipient for contact form emails                 |
| `NEXT_AWS_DEV_EMAIL_OVERRIDE`                                             | Overrides the recipient in non-production environments   |
| `NEXT_AWS_SMTP_*`, `NEXT_AWS_SES_*`, `NEXT_AWS_HOST`, `NEXT_AWS_USERNAME` | AWS SES/SMTP credentials for sending contact form emails |

Never commit real credentials — `env/.env.*` files are git-ignored.

## Available Scripts

| Script          | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Starts the dev server on port 1995 |
| `npm run build` | Builds the app for production      |
| `npm run start` | Starts the production server       |
| `npm run lint`  | Runs ESLint                        |

## Deployment

The site is deployed to a self-managed EC2 instance behind [PM2](https://pm2.keymetrics.io) (`ecosystem.config.cjs`, cluster mode, 2 instances), fronted by an automated pipeline:

- **CI/CD:** [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) — on every push to `main`, detects which files changed, SSHes into the production host, pulls the latest code, installs dependencies only if they changed, rebuilds, and reloads the PM2 process (with a clean-restart fallback if the reload fails). Deployment success/failure is reported by email.
- **Process management:** PM2 runs the app in cluster mode with auto-restart, memory-based restarts, and file-based logging.

## License

Licensed under the ISC License — see [LICENSE](./LICENSE).
Personal assets (including the resume, certificates, images, logos, and portfolio content) are excluded from the license and remain © Rajesh Ranjan. See the `LICENSE` file for details.

## Contact

- **Email:** [rajeshranjan8271@gmail.com](mailto:rajeshranjan8271@gmail.com)
- **LinkedIn:** [rajesh-ranjan-full-stack-developer](https://www.linkedin.com/in/rajesh-ranjan-full-stack-developer/)
- **GitHub:** [@rajesh-ranjan-git](https://github.com/rajesh-ranjan-git/)
- **Twitter/X:** [@\_rajesh\_\_\_\_](https://x.com/_rajesh____/)
- **Instagram:** [@\_rajesh\_\_\_\_](https://www.instagram.com/_rajesh____/)
