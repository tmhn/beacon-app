# CTAs, /install page, and /docs page — Design Spec

**Date:** 2026-06-05  
**Status:** Approved

---

## Overview

Every "Install the skill" CTA on the site currently points to `href="#"`. This spec covers wiring all CTAs to real destinations, building a dedicated `/install` page, and building a full `/docs` page.

Feedback mechanisms are out of scope for this phase.

---

## 1. CTA Wiring

All link targets change as follows. No new UI is introduced — just `href` updates across existing components.

| Component | Element | Current | Target |
|---|---|---|---|
| `Nav.tsx` | "Install the skill" button | `#` | `/install` |
| `Nav.tsx` | "Docs" nav link | `#docs` | `/docs` |
| `Hero.tsx` | "Install the skill" button | `#` | `/install` |
| `Hero.tsx` | "See how it works →" | `#how-it-works` | no change |
| `CtaBanner.tsx` | "Install the skill" button | `#` | `/install` |
| `Footer.tsx` | "Getting started" | `#` | `/docs` |
| `Footer.tsx` | "Installation" | `#` | `/install` |
| `Footer.tsx` | "Examples" | `#` | `/docs` |
| `Footer.tsx` | GitHub / Twitter | `#` | leave `#` for now (URLs TBD) |

---

## 2. /install Page

**Route:** `src/app/install/page.tsx`

**Purpose:** Conversion-focused step-by-step installation guide. Part of the marketing funnel — shares the warm aesthetic of the landing page.

### Visual style
- Background: `#fffbf8` (matches landing page)
- Orange accents, same nav and footer shell as the homepage
- No sidebar — linear, top-to-bottom reading

### Structure

**Hero section**
- Eyebrow label: "Installation" (with Beacon icon, matching Hero.tsx eyebrow)
- Headline: "Up and running in 60 seconds."
- Subtext: one line explaining Beacon is a Claude Code skill with no config or dependencies

**Steps (4 cards)**

Each step is a white card (`rounded-2xl`, light border, subtle shadow) with a numbered badge, heading, description, and where relevant a dark code block with a copy button.

1. **Open Claude Code in your project** — short description, note linking to claude.ai/code for users who don't have it yet
2. **Install the Beacon skill** — code block: `/install beacon` (placeholder — swap for real command once confirmed)
3. **Run Beacon on your codebase** — code block: `/beacon`, with the animated terminal output matching HowItWorks.tsx for visual continuity
4. **You're done — check your report** — explains `.beacon/report.md` output

**Footer CTA**
- "Want to go deeper? Explore the full reference docs."
- Button: "View the Docs →" → `/docs`

### Notes
- The install command (`/install beacon`) is a placeholder. Update once the real mechanism is confirmed.
- Step 3 terminal animation can reuse the `TerminalArtifact` component from `HowItWorks.tsx` or a simplified static version.

---

## 3. /docs Page

**Route:** `src/app/docs/page.tsx` (and sub-pages under `src/app/docs/[slug]/page.tsx` or a catch-all)

**Purpose:** Full reference documentation. Separate visual register from the landing page — clean, white, utilitarian.

### Visual style
- Background: white
- No warm/orange tones except the active sidebar indicator and inline `<code>` accents
- "Docs" nav link goes visually active when on any `/docs` route

### Layout

Three-column layout:

```
[ Left sidebar 220px ] [ Main content flex-1, max-w-760 ] [ Right TOC 180px ]
```

The sidebar and right TOC are sticky (`position: sticky`, `top: nav-height`). Mobile sidebar behaviour is out of scope for v1 — the sidebar can be hidden on small screens.

### Sidebar sections and pages

| Section label | Pages |
|---|---|
| Overview | Getting started, What is Beacon? |
| Setup | Installation, Requirements |
| Usage | Commands, Configuration, Output & reports |
| Reference | Examples, Changelog |

Active page is indicated by: orange text, `font-weight: 600`, `bg-orange-50`, and a 2px orange right border on the sidebar link.

### Main content area

- Breadcrumb at top: e.g. "Docs / Getting started"
- `h1` page title
- Lead paragraph
- Body content: `h2` sections, `h3` subsections, prose, code blocks, callouts
- Prev / Next navigation at the bottom of each page

### Right table of contents

- "On this page" label
- Links to `h2` anchors on the current page
- Active link tracks scroll position (optional for v1 — can ship without)

### Default page

`/docs` (and `/docs/getting-started`) loads the Getting started page, which covers: prerequisites, install command, running the first analysis, reading the report, and a `.gitignore` tip.

---

## 4. File Structure

```
src/
  app/
    install/
      page.tsx          # /install page
    docs/
      page.tsx          # /docs — renders Getting started content directly (no redirect needed)
      layout.tsx        # Docs shell: nav + sidebar + TOC wrapper
      getting-started/
        page.tsx
      what-is-beacon/
        page.tsx
      installation/
        page.tsx
      requirements/
        page.tsx
      commands/
        page.tsx
      configuration/
        page.tsx
      output-reports/
        page.tsx
      examples/
        page.tsx
      changelog/
        page.tsx
  components/
    DocsLayout.tsx      # Sidebar + TOC shell (used by docs/layout.tsx)
    DocsSidebar.tsx     # Left nav with sections and active state
    DocsToc.tsx         # Right table of contents
```

The `/install` page is a standalone page — no docs layout, no sidebar.

---

## 5. Out of Scope

- Feedback mechanism (deferred)
- GitHub / Twitter links in footer (URLs TBD)
- Mobile sidebar behaviour on `/docs` (can ship collapsed/hidden for v1)
- Right TOC scroll-tracking (can ship as static links for v1)
- Search within docs
