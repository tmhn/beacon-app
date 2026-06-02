# Beacon Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-grade marketing homepage for the Beacon Claude AI skill, matching the orange & white SaaS aesthetic of `public/design-reference.png`.

**Architecture:** Purely static Next.js App Router page assembled from hand-crafted React components in `src/components/`. No data fetching, routing, or auth. Each section of the page is one component file. `src/app/page.tsx` assembles them in order.

**Tech Stack:** Next.js 16.2.7 (App Router), React 19, Tailwind CSS v4, TypeScript. Geist Sans font (already wired in `layout.tsx`).

> **IMPORTANT — Next.js 16:** This is Next.js 16.2.7, which may have breaking changes from your training data. Read `node_modules/next/dist/docs/01-app/` before writing any code. Heed deprecation notices.

> **IMPORTANT — frontend-design skill:** Invoke the `frontend-design` skill before implementing any visual component. Follow `public/design-reference.png` closely for spacing, hierarchy, and overall aesthetic.

> **IMPORTANT — Tailwind CSS v4:** This project uses Tailwind v4. There is no `tailwind.config.js`. Configuration uses `@theme` blocks in `globals.css`. The `@import "tailwindcss"` directive is already present. All default colors including `orange-500` (`#f97316`) are available without extra config.

> **IMPORTANT — `@/` alias:** `@/*` maps to `./src/*` in `tsconfig.json`. Use `@/components/Foo` for all cross-component imports.

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/app/layout.tsx` | Modify | Update page title/description metadata |
| `src/app/globals.css` | Modify | Remove dark-mode vars, set white background baseline |
| `src/app/page.tsx` | Modify | Assemble all section components in order |
| `src/components/Nav.tsx` | Create | Sticky nav: logo, links, sign-in, CTA |
| `src/components/Hero.tsx` | Create | Hero: eyebrow, headline, subtext, CTAs, mockup |
| `src/components/HeroMockup.tsx` | Create | Illustrative project-analysis dashboard card |
| `src/components/TrustBar.tsx` | Create | Full-width band: tagline + capability chips |
| `src/components/FeatureCards.tsx` | Create | 3-column feature card grid |
| `src/components/DeepFeature.tsx` | Create | Full-width feature highlight with report mockup |
| `src/components/ProjectReportMockup.tsx` | Create | Mock project-report card with metrics |
| `src/components/AudienceSplit.tsx` | Create | Two-column audience section |
| `src/components/CtaBanner.tsx` | Create | Orange gradient final CTA banner |
| `src/components/Footer.tsx` | Create | Footer with logo, nav columns, copyright |

---

### Task 1: Update layout metadata and global styles

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update `src/app/layout.tsx`**

Replace the entire file with:

```tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Beacon — Project intelligence for any codebase",
  description:
    "Beacon is an agent-driven project intelligence workflow for unclear, unfamiliar, or poorly documented software projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-full bg-white text-gray-900">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Update `src/app/globals.css`**

Replace the entire file with:

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-geist-sans);
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: exits with no output (zero errors)

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css
git commit -m "chore: update metadata and strip dark-mode global styles"
```

---

### Task 2: Nav component

**Files:**
- Create: `src/components/Nav.tsx`

- [ ] **Step 1: Invoke the frontend-design skill**

Invoke `frontend-design` skill before writing the component.

- [ ] **Step 2: Create `src/components/Nav.tsx`**

Nav is a client component so it can toggle the mobile menu.

```tsx
"use client";

import { useState } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Docs", href: "#docs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          <span className="text-sm font-bold tracking-tight text-gray-900">
            Beacon
          </span>
        </a>

        {/* Centre links — desktop only */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm text-gray-500 transition-colors hover:text-gray-900 md:block"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            Get started free
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="ml-1 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-gray-600 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-gray-600 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-gray-600 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.tsx
git commit -m "feat: add Nav component"
```

---

### Task 3: HeroMockup component

**Files:**
- Create: `src/components/HeroMockup.tsx`

HeroMockup is a purely illustrative HTML/CSS card — no real screenshots. It simulates a Beacon project analysis in progress.

- [ ] **Step 1: Create `src/components/HeroMockup.tsx`**

```tsx
const findings = [
  "42 modules discovered",
  "3 entry points identified",
  "No README — generating summary",
];

const bars = [
  { label: "File structure", width: "w-full", done: true },
  { label: "Entry points", width: "w-4/5", done: true },
  { label: "Dependencies", width: "w-2/3", done: false },
  { label: "Conventions", width: "w-1/3", done: false },
];

export default function HeroMockup() {
  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-200">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-400">beacon — project analysis</span>
      </div>

      <div className="space-y-4 p-5">
        {/* Project header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-900">acme-platform</p>
            <p className="text-xs text-gray-400">Last analysed: just now</p>
          </div>
          <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-600">
            Analysing…
          </span>
        </div>

        {/* Progress bars */}
        <div className="space-y-2.5">
          {bars.map(({ label, width, done }) => (
            <div key={label}>
              <div className="mb-1 flex justify-between">
                <span className="text-xs text-gray-500">{label}</span>
                {done && (
                  <span className="text-xs font-medium text-green-600">Done</span>
                )}
              </div>
              <div className="h-1.5 w-full rounded-full bg-gray-100">
                <div
                  className={`h-1.5 rounded-full ${done ? "bg-green-400" : "bg-orange-400"} ${width}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Findings */}
        <div className="space-y-1.5 rounded-xl border border-gray-100 bg-gray-50 p-3">
          <p className="text-xs font-semibold text-gray-700">Findings so far</p>
          {findings.map((finding) => (
            <div key={finding} className="flex items-center gap-2">
              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-orange-400" />
              <span className="text-xs text-gray-500">{finding}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroMockup.tsx
git commit -m "feat: add HeroMockup illustrative component"
```

---

### Task 4: Hero section

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Invoke the frontend-design skill**

Invoke `frontend-design` skill before writing the component.

- [ ] **Step 2: Create `src/components/Hero.tsx`**

```tsx
import HeroMockup from "@/components/HeroMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle radial glow behind hero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Claude AI Skill
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            No docs?
            <br />
            No problem.
            <br />
            <span className="text-orange-500">Beacon finds the signal.</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-gray-500">
            Drop into any unclear, unfamiliar, or undocumented codebase.
            Beacon&apos;s agent-driven workflow surfaces what matters so
            you — and your AI tools — can move fast.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
            >
              Get started free
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              See how it works →
            </a>
          </div>
        </div>

        {/* Right: mockup */}
        <div className="flex justify-center md:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Hero section"
```

---

### Task 5: TrustBar component

**Files:**
- Create: `src/components/TrustBar.tsx`

- [ ] **Step 1: Create `src/components/TrustBar.tsx`**

```tsx
const chips = ["Illuminate", "Retain", "Accelerate"];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm font-medium text-gray-500">
          Everything in context.{" "}
          <span className="text-gray-900">Always up to date.</span>
        </p>
        <div className="flex items-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/TrustBar.tsx
git commit -m "feat: add TrustBar component"
```

---

### Task 6: FeatureCards component

**Files:**
- Create: `src/components/FeatureCards.tsx`

- [ ] **Step 1: Invoke the frontend-design skill**

Invoke `frontend-design` skill before writing the component.

- [ ] **Step 2: Create `src/components/FeatureCards.tsx`**

```tsx
const features = [
  {
    icon: "🔦",
    title: "Illuminate structure",
    body: "Automatically discovers how a project is organised — modules, dependencies, entry points, and conventions.",
  },
  {
    icon: "🧠",
    title: "Retain intelligence",
    body: "Builds a living knowledge base across sessions so you never start from zero on the same codebase twice.",
  },
  {
    icon: "⚡",
    title: "Accelerate agents",
    body: "Provides AI agents with reliable context so they spend less time guessing and more time building.",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 text-2xl">{icon}</div>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/FeatureCards.tsx
git commit -m "feat: add FeatureCards component"
```

---

### Task 7: ProjectReportMockup and DeepFeature components

**Files:**
- Create: `src/components/ProjectReportMockup.tsx`
- Create: `src/components/DeepFeature.tsx`

- [ ] **Step 1: Create `src/components/ProjectReportMockup.tsx`**

```tsx
const metrics = [
  { label: "Files explored", value: "247" },
  { label: "Patterns found", value: "18" },
  { label: "Entry points mapped", value: "6" },
  { label: "Modules identified", value: "42" },
];

const summary = [
  "Node.js monorepo with 3 services",
  "REST API + event-driven messaging",
  "No README — generated from source",
];

export default function ProjectReportMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-100">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            <span className="text-xs font-semibold text-gray-700">
              Project Report
            </span>
          </div>
          <span className="text-xs text-gray-400">acme-platform</span>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-px bg-gray-100">
        {metrics.map(({ label, value }) => (
          <div key={label} className="bg-white px-5 py-4">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-xs text-gray-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold text-gray-700">
          Architecture summary
        </p>
        <div className="space-y-1.5">
          {summary.map((line) => (
            <div key={line} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-orange-400" />
              <span className="text-xs text-gray-500">{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Invoke the frontend-design skill**

Invoke `frontend-design` skill before writing DeepFeature.

- [ ] **Step 3: Create `src/components/DeepFeature.tsx`**

```tsx
import ProjectReportMockup from "@/components/ProjectReportMockup";

export default function DeepFeature() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            See the full picture.
            <br />
            Make better decisions.
          </h2>
          <p className="text-base leading-relaxed text-gray-500">
            Beacon doesn&apos;t just scan files — it builds a mental model of
            your project. Understand ownership, spot complexity hotspots, and
            know where to start before writing a single line.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
          >
            Learn how it works →
          </a>
        </div>

        {/* Right: mockup */}
        <div className="flex justify-center md:justify-end">
          <ProjectReportMockup />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 5: Commit**

```bash
git add src/components/ProjectReportMockup.tsx src/components/DeepFeature.tsx
git commit -m "feat: add DeepFeature section and ProjectReportMockup"
```

---

### Task 8: AudienceSplit component

**Files:**
- Create: `src/components/AudienceSplit.tsx`

- [ ] **Step 1: Invoke the frontend-design skill**

Invoke `frontend-design` skill before writing the component.

- [ ] **Step 2: Create `src/components/AudienceSplit.tsx`**

```tsx
const audiences = [
  {
    icon: "👩‍💻",
    heading: "For engineering teams",
    bullets: [
      "Cut onboarding time on new or inherited projects",
      "Reduce dependency on the one person who knows the codebase",
      "Create a shared understanding across your team",
      "Works on any stack — no setup or config required",
    ],
  },
  {
    icon: "🤖",
    heading: "For AI coding agents",
    bullets: [
      "Ground agents in real project structure before they write a line",
      "Eliminate wasted tokens re-exploring the same files",
      "Consistent, repeatable context across every session",
      "Native Claude Code skill — zero integration overhead",
    ],
  },
];

export default function AudienceSplit() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Built for humans{" "}
          <span className="text-orange-500">&amp;</span> AI agents
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {audiences.map(({ icon, heading, bullets }) => (
            <div
              key={heading}
              className="rounded-xl border border-gray-100 bg-gray-50 p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-base font-semibold text-gray-900">
                  {heading}
                </h3>
              </div>
              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                    <span className="text-sm leading-relaxed text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/AudienceSplit.tsx
git commit -m "feat: add AudienceSplit component"
```

---

### Task 9: CtaBanner component

**Files:**
- Create: `src/components/CtaBanner.tsx`

- [ ] **Step 1: Invoke the frontend-design skill**

Invoke `frontend-design` skill before writing the component.

- [ ] **Step 2: Create `src/components/CtaBanner.tsx`**

```tsx
export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to illuminate your codebase?
        </h2>
        <p className="mb-8 text-base text-orange-100">
          Get started in seconds. No config. No setup. Just Beacon.
        </p>
        <a
          href="#"
          className="inline-block rounded-lg border border-white/40 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          Get started free
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/CtaBanner.tsx
git commit -m "feat: add CtaBanner component"
```

---

### Task 10: Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create `src/components/Footer.tsx`**

```tsx
const nav: Record<string, string[]> = {
  Product: ["Features", "How it works", "Changelog"],
  Docs: ["Getting started", "API reference", "Examples"],
  More: ["About", "GitHub", "Contact"],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              <span className="text-sm font-bold text-gray-900">Beacon</span>
            </a>
            <p className="mt-3 text-xs leading-relaxed text-gray-400">
              Agent-driven project intelligence for any codebase.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {heading}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Beacon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-gray-600">
              GitHub
            </a>
            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-gray-600">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add Footer component"
```

---

### Task 11: Assemble page.tsx and visual verification

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace `src/app/page.tsx` with assembled homepage**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureCards from "@/components/FeatureCards";
import DeepFeature from "@/components/DeepFeature";
import AudienceSplit from "@/components/AudienceSplit";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <FeatureCards />
      <DeepFeature />
      <AudienceSplit />
      <CtaBanner />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Run dev server and visually verify against design reference**

Run: `npm run dev`
Open: `http://localhost:3000`

Check each section against `public/design-reference.png`:
- Nav sticks to top on scroll, logo + links + CTA render correctly
- Hero shows two-column layout on desktop (copy left, HeroMockup right), stacked on mobile
- TrustBar shows tagline and three orange chips
- FeatureCards shows 3-column grid with hover lift, collapses to 1-col on mobile
- DeepFeature shows copy left, ProjectReportMockup right on desktop
- AudienceSplit shows two grey cards with bullet lists
- CtaBanner shows orange gradient with white text and button
- Footer shows logo, three nav columns, and copyright row
- Resize to 375px width and confirm all sections stack cleanly

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble Beacon homepage from components"
```
