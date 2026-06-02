# Beacon Homepage Design Spec

**Date:** 2026-06-02
**Project:** beacon-site
**Status:** Approved

---

## Overview

A single-page marketing homepage for **Beacon** — an agent-driven project intelligence workflow for unclear, unfamiliar, or poorly documented software projects. The site acts as a portfolio page for the Claude AI skill.

**Visual direction:** Orange & white SaaS aesthetic, closely following `public/design-reference.png`. Implement using the `frontend-design` skill to ensure production-grade, distinctive UI — avoid generic AI aesthetics.

**Primary CTA:** Get started with the skill.

**Target audiences:** Developers, engineering team leads, CTOs, and AI coding agents.

---

## Tech Stack

- Next.js App Router (`src/app/page.tsx` as the homepage)
- Tailwind CSS (already configured)
- TypeScript
- No external UI component libraries — hand-crafted components per the frontend-design skill

---

## Page Sections

### 1. Nav

- Logo: small orange circle + "Beacon" wordmark (bold)
- Links: Features · How it works · Docs
- Right: "Sign in" (ghost) + "Get started free" (orange filled button)
- Sticky on scroll, white background with subtle bottom border

### 2. Hero

- **Eyebrow:** `Claude AI Skill` (small, orange, uppercase, tracked)
- **Headline:** `No docs? No problem.` (line 1) + `Beacon finds the signal.` (line 2, "signal" in orange)
- **Subtext:** *Drop into any unclear, unfamiliar, or undocumented codebase. Beacon's agent-driven workflow surfaces what matters so you — and your AI tools — can move fast.*
- **CTAs:** "Get started free" (orange filled, rounded) + "See how it works →" (outline / ghost)
- **Right side:** Illustrative app UI mockup — a mock dashboard card showing a project being analysed (built in HTML/CSS, no real screenshot required)
- Layout: two-column on desktop, stacked on mobile

### 3. Trust bar

- Thin full-width band, light grey background
- One-liner: *"Everything in context. Always up to date."*
- Three capability chips: `Illuminate` · `Retain` · `Accelerate` (outlined pill badges with orange accents)

### 4. Feature cards (3-column grid)

| Icon | Title | Body |
|------|-------|------|
| 🔦 | Illuminate structure | Automatically discovers how a project is organised — modules, dependencies, entry points, and conventions. |
| 🧠 | Retain intelligence | Builds a living knowledge base across sessions so you never start from zero on the same codebase twice. |
| ⚡ | Accelerate agents | Provides AI agents with reliable context so they spend less time guessing and more time building. |

Cards: white background, 1px border, rounded corners, icon top, title, body. Subtle hover lift.

### 5. Deep feature highlight

- Full-width section, light background
- Left: heading + body copy + CTA link
  - Heading: *"See the full picture. Make better decisions."*
  - Body: *Beacon doesn't just scan files — it builds a mental model of your project. Understand ownership, spot complexity hotspots, and know where to start before writing a single line.*
  - Link: "Learn how it works →" (orange)
- Right: larger illustrative mockup — a mock "project report" card with fake metrics (files explored, patterns found, entry points mapped)

### 6. Audience split

Full-width section, white background.

**Heading:** `Built for humans & AI agents` (& in orange)

Two columns:

**For engineering teams**
- Cut onboarding time on new or inherited projects
- Reduce dependency on the one person who knows the codebase
- Create a shared understanding across your team
- Works on any stack — no setup or config required

**For AI coding agents**
- Ground agents in real project structure before they write a line
- Eliminate wasted tokens re-exploring the same files
- Consistent, repeatable context across every session
- Native Claude Code skill — zero integration overhead

### 7. Final CTA banner

- Orange/warm gradient background
- Heading: *"Ready to illuminate your codebase?"*
- Sub: *"Get started in seconds. No config. No setup. Just Beacon."*
- Button: "Get started free" (white text, white border)

### 8. Footer

- Logo (white or dark version) + short tagline
- Three nav columns: Product · Docs · More
- Bottom row: copyright + minimal social links

---

## Visual Language

| Token | Value |
|-------|-------|
| Primary orange | `#f97316` (Tailwind `orange-500`) |
| Background | `#ffffff` |
| Text primary | `#111827` (`gray-900`) |
| Text secondary | `#6b7280` (`gray-500`) |
| Border | `#e5e7eb` (`gray-200`) |
| Rounded corners | `rounded-xl` (12px) |
| Font | System UI / Inter (Next.js font optimisation) |

---

## Responsiveness

- Desktop-first layout, fully responsive down to 375px
- Nav collapses to hamburger on mobile
- Two-column sections stack to single column below `md` breakpoint
- Feature card grid: 3-col → 1-col

---

## Implementation Notes

- Use the `frontend-design` skill for all component implementation to ensure high design quality
- Follow `public/design-reference.png` closely for spacing, hierarchy, and overall aesthetic
- Mock UI elements (hero mockup, deep feature mockup) should be built in HTML/CSS — no real screenshots or external images needed
- No authentication, routing, or data fetching required — purely static content
- All "Get started free" CTA buttons link to `#` as a placeholder — update to the real skill install URL before launch
- All content lives in `src/app/page.tsx` (and extracted components under `src/components/` as needed)
