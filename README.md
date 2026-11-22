<div align="center">

<img src="public/icon.png" alt="ERU Logo" width="120" style="border-radius: 24px;" />

# ERU Movies — Official Landing Page

**A modern, production-grade landing page for the ERU Movies desktop streaming application.**

[![GitHub Repo](https://img.shields.io/badge/Repository-jhudel26%2Feru--landingpage-14B8A6?logo=github&logoColor=white)](https://github.com/jhudel26/eru-landingpage)
[![Desktop App](https://img.shields.io/badge/Desktop%20App-jhudel26%2FEru__Movies-00E5BC?logo=electron&logoColor=white)](https://github.com/jhudel26/Eru_Movies)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)

---

*Developed by **EruStudio** · Built for [ERU Movies Desktop App](https://github.com/jhudel26/Eru_Movies)*

</div>

---

## ✨ Features

- **Exact ERU Teal Design Parity** — Deep noir backgrounds (`#0B1120`), glowing teal accents (`#14B8A6`, `#2DD4BF`), glassmorphic panels, and smooth micro-interactions.
- **Embedded Live Stream Player** — High-performance interactive video stream with autoplay powered by Vidy integration.
- **Real Desktop App Previews** — Full interface showcase matching the Electron app.
- **Download Section** — Clean platform cards for Windows 10/11 (`.exe`) and Android (`.apk`) with Windows SmartScreen installation guidance.
- **Built-in Keyboard Shortcuts Reference** — Interactive power-user shortcuts cheat sheet (`R`, `F`, `Space`, etc.).
- **Architecture Flow & Stack Showcase** — 6-category architecture overview showing the TMDB API, Electron Main, React Renderer, and Multi-Server streaming layers.
- **Fully Responsive & Accessible** — Mobile-first navigation with animated active-tab indicators and fluid drawer.
- **Zero-Config Static Export** — Configured for instant deployment on Vercel, Cloudflare Pages, or GitHub Pages.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or newer)
- [npm](https://www.npmjs.com/) (v9.0 or newer)

### Installation

```bash
# Clone the repository
git clone https://github.com/jhudel26/eru-landingpage.git

# Navigate into project directory
cd eru-landingpage

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Production Build

```bash
# Build static export
npm run build

# Start preview server
npm run start
```

---

## 📁 Project Structure

```
eru-landing/
├── public/
│   ├── icon.png              # Official ERU brand logo & favicon
│   ├── screen.png            # Desktop application interface capture
│   ├── site.webmanifest      # PWA manifest
│   └── robots.txt            # Search engine crawlers policy
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles, glassmorphism, scrollbars
│   │   ├── layout.tsx        # Root layout, Next fonts & SEO metadata
│   │   └── page.tsx          # Main landing page & navigation
│   └── components/
│       ├── Hero.tsx          # Hero section with headline, CTA & app mockup
│       ├── Features.tsx      # Features grid, streamable banner & shortcuts
│       ├── Screenshots.tsx   # Live stream player (Vidy embed with autoplay)
│       ├── Download.tsx      # Windows & Android cards with direct links
│       ├── TechStack.tsx     # 6-category technical stack & architecture
│       ├── Footer.tsx        # Clean footer (Product, Resources & EruStudio)
│       ├── Logo.tsx          # Brand icon & text components
│       ├── Button.tsx        # Reusable button with variants & icons
│       └── AndroidIcon.tsx   # Authentic Android robot vector SVG
├── tailwind.config.ts        # Custom ERU color tokens & animations
├── next.config.mjs           # Next.js config with R2 download rewrites
├── vercel.json               # Vercel Edge rewrite rules for R2 downloads
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## 📥 Downloads & Vercel Edge Rewrite Architecture

Following the same production architecture as [erumi-landing-page](https://github.com/jhudel26/erumi-landing-page), downloads are delivered through clean same-domain URLs powered by Vercel edge rewrites to Cloudflare R2 storage:

- **Windows Desktop (`ERU.exe`)**: `/download/ERU.exe` → Proxied to Cloudflare R2 (~110 MB)
- **Android APK (`Eru.apk`)**: `/download/Eru.apk` → Proxied to Cloudflare R2 (~16 MB)

### Why this architecture?
1. **Branded Domain** — Users download directly from your site domain (e.g. `https://eru-movies.vercel.app/download/ERU.exe`) instead of an unfamiliar `.r2.dev` cloud bucket URL.
2. **Eliminates False Flags** — Prevents browser anti-phishing extensions from blocking raw cloud object storage subdomains.
3. **Edge Performance** — Vercel edge network proxies requests with automatic HTTPS and low latency.

---

## 🌐 Deploy to Vercel

### Option 1: Git Push (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial landing page release"
   git branch -M main
   git remote add origin https://github.com/jhudel26/eru-landingpage.git
   git push -u origin main
   ```
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Framework preset will automatically detect **Next.js**.
4. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

---

## 🔗 Related Repositories

- **Desktop Application**: [jhudel26/Eru_Movies](https://github.com/jhudel26/Eru_Movies)
- **Landing Page**: [jhudel26/eru-landingpage](https://github.com/jhudel26/eru-landingpage)

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](https://github.com/jhudel26/Eru_Movies/blob/main/LICENSE) for more information.

---

<div align="center">
  <b>Developed with 💚 by EruStudio for the ERU Movies Community</b>
</div>
