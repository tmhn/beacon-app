# Beacon

Portfolio homepage for **Beacon** — an agent-driven project intelligence workflow for unclear, unfamiliar, or poorly documented software projects.

Built as a Claude AI skill portfolio site.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- [Geist](https://vercel.com/font) font

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx          # Homepage assembly
    layout.tsx        # Root layout + metadata
    globals.css       # Tailwind v4 import + theme tokens
  components/
    Nav.tsx           # Sticky nav with mobile hamburger
    Hero.tsx          # Hero section
    HeroMockup.tsx    # Illustrative analysis dashboard card
    TrustBar.tsx      # Tagline + capability chips
    FeatureCards.tsx  # 3-column feature grid
    DeepFeature.tsx   # Full-width feature highlight
    ProjectReportMockup.tsx  # Mock project report card
    AudienceSplit.tsx # Engineering teams / AI agents section
    CtaBanner.tsx     # Orange gradient CTA banner
    Footer.tsx        # Footer with nav columns
```

## Commands

```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # ESLint
npx tsc --noEmit  # TypeScript check
```
