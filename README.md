# Rajesh Ranjan | Portfolio

Personal portfolio of **Rajesh Ranjan**, Full Stack Developer. Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4. Includes project case studies, an experience timeline, certificates and a contact form powered by AWS SES. Self-hosted as a standalone build with automated deploys and rollback.

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

This is the third major release of the portfolio (`v3.0.0`). `v2` rewrote the site from a Vite + React SPA into a Next.js App Router application; `v3` ships it as a standalone Next.js build with release-based deploys and automatic rollback, a new structured logger, the API route replaced by a server action, and much smaller images and fonts.

## Tech Stack

**Framework & Language**

- [Next.js 16](https://nextjs.org) (App Router, React Compiler enabled)
- [React 19](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org)

**Styling & UI**

- [Tailwind CSS 4](https://tailwindcss.com)
- CSS Modules for component-scoped styles
- [react-icons](https://react-icons.github.io/react-icons)

**State & Data**

- [Zustand](https://zustand-demo.pmnd.rs) for client state
- Next.js Server Actions for form submissions

**Email**

- [AWS SES](https://aws.amazon.com/ses) (`@aws-sdk/client-ses`)
- [`@react-email/render`](https://react.email) for email templates

**Tooling**

- ESLint 9 (flat config, `eslint-config-next`)
- `dotenv`, `cross-env` for env loading and scripts

## Features

- **App Router architecture** — file-based routing under `src/app`, with a dynamic `project/[id]` route for individual project detail pages
- **Dark/light theme** with a dedicated theme manager and toggle
- **Splash screen & loaders** on initial load
- **Particle background & animated orb** rendered via custom particles component
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
├── app/                # Next.js App Router routes and layouts
├── components/         # UI components, grouped by feature/domain
├── sections/           # Page-level sections (greetings, about, skills, etc.)
├── config/             # Static config (owner info, socials, technologies, etc.)
├── constants/          # App-wide constants
├── helpers/            # Small helper functions
├── hooks/              # Custom React hooks
├── lib/                # Server actions (contact form email)
├── services/           # Email, logging, and error services
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

| Variable                                                                  | Description                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `DOTENV_CONFIG_QUIET`                                                     | Silences dotenv's console logging                             |
| `NEXT_PUBLIC_NODE_ENV`                                                    | Current environment (`development` / `production`)            |
| `NEXT_PUBLIC_BASE_PORT`                                                   | Local dev server port                                         |
| `NEXT_PUBLIC_LOG_LEVEL`                                                   | Minimum log level: `error`, `warn`, `info` (default), `debug` |
| `NEXT_AWS_EMAIL_FROM` / `NEXT_AWS_EMAIL_TO`                               | Sender/recipient for contact form emails                      |
| `NEXT_AWS_DEV_EMAIL_OVERRIDE`                                             | Overrides the recipient in non-production environments        |
| `NEXT_AWS_SMTP_*`, `NEXT_AWS_SES_*`, `NEXT_AWS_HOST`, `NEXT_AWS_USERNAME` | AWS SES/SMTP credentials for sending contact form emails      |

Never commit real credentials — `env/.env.*` files are git-ignored.

`NEXT_PUBLIC_*` values are baked into the code at build time; everything else is read when the server starts. In production, the whole `.env.production` file lives in the `PORTFOLIO_ENV_PRODUCTION` GitHub secret (see [Deployment](#deployment)).

In production the email service passes no keys to the SES client, so the AWS SDK finds credentials itself. Give the server an IAM role that allows `ses:SendEmail`.

## Available Scripts

| Script                    | Description                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------- |
| `npm run dev`             | Starts the dev server on port 1995                                                    |
| `npm run build`           | Builds the standalone production package in `.next/standalone`                        |
| `npm run start`           | Runs that package on port 1995 with `env/.env.production`, exactly as the server does |
| `npm run lint`            | Runs ESLint                                                                           |
| `npm run images:compress` | Compresses images in `public/assets` (pass a path to compress one file or folder)     |

## Deployment

The site runs on a small Linux server under [PM2](https://pm2.keymetrics.io) (`ecosystem.config.cjs`, fork mode, 1 instance). The server holds only the built package, never the source code, git history or full `node_modules`.

[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) runs on every push to `main`, or manually from the Actions tab. Pushes that only touch docs are skipped. A deploy:

1. Installs, lints and builds on GitHub's runner, with `.env.production` written from the `PORTFOLIO_ENV_PRODUCTION` secret.
2. Packages `.next/standalone` (server, the `node_modules` it needs, `public/`, static assets, pm2 config and env file) into one archive, about 42 MB unpacked.
3. Uploads it over SSH and unpacks it into `~/portfolio/releases/<timestamp>-<commit>`.
4. Points `~/portfolio/current` at the new release, restarts pm2, and waits for the home page to answer.
5. If the new release doesn't come online, switches back to the previous release and fails the run. Only the two newest releases are kept.

Deployment success or failure is reported by email.

```text
~/portfolio/
├── current -> releases/<live release>
├── releases/       # the live release and the previous one
└── logs/           # pm2 log files
```

### Branching

`main` is the production branch and is protected by a GitHub ruleset: direct pushes, force pushes and deletion are blocked, so every change reaches `main` through a pull request.

- Work happens on `alpha`, either by committing to it directly or by merging short-lived feature branches into it.
- When `alpha` is ready to ship, open a pull request from `alpha` into `main` and merge it. The merge triggers the deploy above.
- Every pull request into `main` runs [`.github/workflows/pr-check.yml`](./.github/workflows/pr-check.yml), which lints and builds the code without any secrets and fails if the pull request doesn't come from `alpha`. The ruleset requires both of its checks, `Lint and build` and `Source branch is alpha`, to pass before the pull request can be merged.
- `alpha` has its own ruleset that blocks deleting it.

```text
feature/* ──▶ alpha ──PR──▶ main ──▶ deploy
```

### One-time server setup

The build includes native binaries for x64 Linux. For an ARM (Graviton) server, change `runs-on` in the workflow to `ubuntu-24.04-arm`.

On a fresh Ubuntu server, as the deploy user:

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2

pm2 startup
```

Then add the log rotation commands from [Logging](#logging). Attach an IAM role that allows `ses:SendEmail` so contact form emails can be sent.

GitHub repository secrets used by the workflow:

| Secret                      | Value                                                        |
| --------------------------- | ------------------------------------------------------------ |
| `PORTFOLIO_ENV_PRODUCTION`  | Full contents of `env/.env.production`                       |
| `HOST` / `USERNAME`         | Server address and SSH user                                  |
| `PORTFOLIO_EC2_SSH_KEY`     | Private SSH key for that user                                |
| `AWS_SMTP_*`, `AWS_EMAIL_*` | SMTP settings and addresses for the deployment report emails |

To change an env value, update the secret and re-run the workflow from the Actions tab.

Rolling back by hand, if needed:

```bash
ls ~/portfolio/releases
ln -sfn ~/portfolio/releases/<previous> ~/portfolio/current
pm2 delete portfolio && pm2 start ~/portfolio/current/ecosystem.config.cjs && pm2 save
```

### Logging

All logging goes through `src/services/logger/logger.ts`:

- **Development:** colored, human-readable lines in the terminal and the browser console.
- **Production server:** one JSON object per line, with its own ISO timestamp, so PM2 log files stay greppable and parseable.
- **Production browser:** only warnings and errors reach visitors' consoles.
- `NEXT_PUBLIC_LOG_LEVEL` sets the minimum level (`info` by default).
- Unhandled server errors are logged once, with route context, by `src/instrumentation.ts`.

One-time setup on the server, so log files never fill the disk:

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
pm2 set pm2-logrotate:compress true
```

Reading the logs:

```bash
grep -h '"level":"error"' ~/portfolio/logs/portfolio-*.log | jq .

pm2 logs portfolio --raw | jq -R 'fromjson? // .'
```

## License

Licensed under the ISC License — see [LICENSE](./LICENSE).
Personal assets (including the resume, certificates, images, logos, and portfolio content) are excluded from the license and remain © Rajesh Ranjan. See the `LICENSE` file for details.

## Contact

- **Email:** [rajeshranjan8271@gmail.com](mailto:rajeshranjan8271@gmail.com)
- **LinkedIn:** [rajesh-ranjan-full-stack-developer](https://www.linkedin.com/in/rajesh-ranjan-full-stack-developer/)
- **GitHub:** [@rajesh-ranjan-git](https://github.com/rajesh-ranjan-git/)
- **Twitter/X:** [@\_rajesh\_\_\_\_](https://x.com/_rajesh____/)
- **Instagram:** [@\_rajesh\_\_\_\_](https://www.instagram.com/_rajesh____/)
