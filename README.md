# Grimm App — Website

> Landing page and blog for [usegrimm.app](https://usegrimm.app), the self-custodial Bitcoin Lightning wallet.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-private-red)

---

## About

Grimm App is a next-generation **self-custodial Bitcoin Superapp**, built for seamless everyday payments via the **Lightning Network**. This repository contains the source code for its public-facing website, which includes:

- **Landing page** — Hero section, wallet features, FAQ preview, testimonial, and download CTAs (Google Play & TestFlight)
- **Blog** — Markdown-powered articles about Bitcoin sovereignty, Lightning Network guides, and more
- **Static pages** — FAQ, Support, Privacy Policy, Terms of Service
- **Internationalization** — Full English & French support via a custom i18n system

## Tech Stack

| Layer          | Technology                                                    |
| -------------- | ------------------------------------------------------------- |
| Framework      | [Next.js 15](https://nextjs.org) (App Router, Standalone)    |
| Language       | TypeScript 5                                                  |
| Styling        | Tailwind CSS 3                                                |
| Animations     | Framer Motion                                                 |
| Blog Engine    | Markdown (gray-matter + remark + remark-html)                 |
| Font           | Satoshi (local)                                               |
| Testing        | Jest + Testing Library                                        |
| Deployment     | Docker + [Kamal](https://kamal-deploy.org)                    |

## Getting Started

### Prerequisites

- Node.js **20+**
- npm (with `package-lock.json`)

### Installation

```bash
git clone https://github.com/grimmtechnologies/usegrimm.app.git
cd usegrimm.app
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout (Satoshi font, metadata, i18n provider)
│   ├── api/health/route.ts         # Health check endpoint
│   ├── blog/                       # Blog listing & article pages
│   ├── faq/                        # FAQ page
│   ├── support/                    # Support page
│   ├── privacy/                    # Privacy policy
│   ├── terms/                      # Terms of service
│   ├── components/                 # Shared & page-specific components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── modal.tsx
│   │   └── home/                   # Landing page sections
│   └── assets/                     # Static images & logos
├── content/blog/                   # Markdown blog posts
├── contexts/LanguageContext.tsx     # i18n context provider
├── hooks/useTranslations.ts        # Translation hook
├── locales/                        # en.json, fr.json
├── lib/blog.ts                     # Blog parsing utilities
└── types/                          # TypeScript type definitions
config/
└── deploy.yml                      # Kamal deployment configuration
```

## Deployment

The app is containerized with a **multi-stage Dockerfile** (Alpine-based, ~120MB) and deployed via [Kamal](https://kamal-deploy.org) to a remote server.

### Environment Variables

| Variable               | Description                         |
| ---------------------- | ----------------------------------- |
| `DOMAIN_NAME`          | Server IP or domain for deployment  |
| `APP_PORT`             | Application port (default: `3000`)  |
| `KAMAL_REGISTRY_PASSWORD` | Docker Hub registry token        |

### Deploy

```bash
kamal setup   # First-time server setup
kamal deploy  # Deploy latest version
```

## Links

- **Website**: [usegrimm.app](https://usegrimm.app)
- **Google Play**: [Grimm App](https://play.google.com/store/apps/details?id=com.grimm.labs.app)
- **TestFlight**: [Join Beta](https://testflight.apple.com/join/kK732x9j)
- **Twitter/X**: [@useGrimmApp](https://x.com/useGrimmApp)
- **LinkedIn**: [Grimm Technologies](https://www.linkedin.com/company/grimm-technologies/)
- **GitHub (Mobile App)**: [grimm-mobile-app](https://github.com/grimm-labs/grimm-mobile-app)

---

© Grimm Technologies SARL. All rights reserved.
