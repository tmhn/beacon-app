# CTAs, /install Page, and /docs Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Wire all dead CTA links to real destinations, build a focused `/install` page, and build a full `/docs` reference site with sidebar navigation.

**Architecture:** The `/install` page is a standalone marketing-flavoured page (server component) that shares the homepage visual register. The `/docs` section uses a Next.js route layout (`src/app/docs/layout.tsx`) to wrap all doc pages in a persistent sidebar, with a client `DocsSidebar` component that reads `usePathname()` for active state. There is no test framework in this project — verification is via TypeScript check and `next build`.

**Tech Stack:** Next.js 16 App Router, Tailwind CSS v4, TypeScript. Read `node_modules/next/dist/docs/` before touching routing or layout APIs — this is Next.js 16 and its conventions may differ from earlier versions.

---

## Task 1: Wire all CTA links

**Files:**
- Modify: `src/components/Nav.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/CtaBanner.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update Nav.tsx**

  In `src/components/Nav.tsx`, change two things:
  
  1. The `links` array — update the Docs href:
  ```tsx
  const links = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Docs", href: "/docs" },
  ];
  ```
  
  2. The "Install the skill" anchor in the right actions (line ~43) — change `href="#"` to `href="/install"`. Also change `<a>` to a Next.js `<Link>` since it's an internal route:
  ```tsx
  <Link
    href="/install"
    className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
  >
    Install the skill
  </Link>
  ```
  
  `Link` is already imported at the top of the file.

- [ ] **Step 2: Update Hero.tsx**

  In `src/components/Hero.tsx`, change the "Install the skill" anchor from `href="#"` to use `Link href="/install"`:
  ```tsx
  import Link from "next/link";
  // ...
  <Link
    href="/install"
    className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-orange-300"
  >
    Install the skill
  </Link>
  ```
  
  The "See how it works →" anchor stays as-is (`href="#how-it-works"`).

- [ ] **Step 3: Update CtaBanner.tsx**

  In `src/components/CtaBanner.tsx`, change the anchor from `href="#"` to `Link href="/install"`:
  ```tsx
  import Link from "next/link";
  // ...
  <Link
    href="/install"
    className="inline-block rounded-full bg-white px-9 py-3.5 text-sm font-bold text-orange-500 shadow-lg shadow-orange-700/30 transition-all hover:bg-orange-50 hover:shadow-xl"
  >
    Install the skill
  </Link>
  ```

- [ ] **Step 4: Update Footer.tsx**

  In `src/components/Footer.tsx`, replace the static `nav` object with typed entries so individual links can have different `href` values. Replace the whole `nav` declaration and map with this:
  ```tsx
  const nav = [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Changelog", href: "/docs/changelog" },
      ],
    },
    {
      heading: "Docs",
      links: [
        { label: "Getting started", href: "/docs" },
        { label: "Installation", href: "/install" },
        { label: "Examples", href: "/docs/examples" },
      ],
    },
    {
      heading: "More",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];
  ```
  
  Update the map to use `nav` (now an array, not `Object.entries`):
  ```tsx
  {nav.map(({ heading, links }) => (
    <div key={heading}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        {heading}
      </p>
      <ul className="space-y-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ))}
  ```
  
  Add `import Link from "next/link";` — it's already imported, check and keep it.
  
  Leave GitHub and Twitter/X anchors as `href="#"` (URLs TBD).

- [ ] **Step 5: TypeScript check**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 6: Commit**

  ```bash
  git add src/components/Nav.tsx src/components/Hero.tsx src/components/CtaBanner.tsx src/components/Footer.tsx
  git commit -m "feat: wire all CTA links to /install and /docs"
  ```

---

## Task 2: CopyButton component

**Files:**
- Create: `src/components/CopyButton.tsx`

- [ ] **Step 1: Create CopyButton**

  ```tsx
  // src/components/CopyButton.tsx
  "use client";

  import { useState } from "react";

  export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <button
        onClick={handleCopy}
        className="whitespace-nowrap rounded-md border border-white/10 bg-white/8 px-2.5 py-1 text-[11px] font-semibold text-gray-400 transition-colors hover:text-gray-200"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    );
  }
  ```

- [ ] **Step 2: TypeScript check**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/CopyButton.tsx
  git commit -m "feat: add CopyButton client component"
  ```

---

## Task 3: /install page

**Files:**
- Create: `src/app/install/page.tsx`

- [ ] **Step 1: Create the install page**

  ```tsx
  // src/app/install/page.tsx
  import Image from "next/image";
  import Link from "next/link";
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
  import CopyButton from "@/components/CopyButton";

  function CodeBlock({ command }: { command: string }) {
    return (
      <div className="flex items-center justify-between gap-3 rounded-xl bg-[#0c0c0c] px-4 py-3.5">
        <code className="font-mono text-[12px] text-slate-200">
          <span className="text-orange-400">/</span> {command}
        </code>
        <CopyButton text={`/${command}`} />
      </div>
    );
  }

  function Step({
    num,
    title,
    children,
  }: {
    num: string;
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-sm font-black text-orange-500">
          {num}
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-[15px] font-bold text-gray-900">{title}</h3>
          {children}
        </div>
      </div>
    );
  }

  export default function InstallPage() {
    return (
      <>
        <Nav />
        <div className="bg-[#fffbf8]">
          {/* Hero */}
          <div className="mx-auto max-w-2xl px-6 pb-14 pt-16 text-center">
            <div className="mb-5 flex items-center justify-center gap-2">
              <Image src="/icon.png" alt="Beacon" width={16} height={16} />
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                Installation
              </p>
            </div>
            <h1 className="mb-5 text-5xl font-extrabold leading-[1.06] tracking-tighter text-gray-900">
              Up and running in{" "}
              <span className="text-orange-500">60 seconds.</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-500">
              Beacon is a Claude Code skill — no build step, no config file, no
              dependencies.
            </p>
          </div>

          {/* Steps */}
          <div className="mx-auto flex max-w-2xl flex-col gap-4 px-6 pb-14">
            <Step num="1" title="Open Claude Code in your project">
              <p className="mb-3 text-sm leading-relaxed text-gray-500">
                Navigate to any project directory and open Claude Code. You'll
                need Claude Code v1.0 or later.
              </p>
              <div className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-orange-900">
                <strong>Don&apos;t have Claude Code?</strong> Download it at{" "}
                <a
                  href="https://claude.ai/code"
                  className="underline hover:text-orange-700"
                >
                  claude.ai/code
                </a>{" "}
                — it takes about a minute.
              </div>
            </Step>

            <Step num="2" title="Install the Beacon skill">
              <p className="mb-3 text-sm leading-relaxed text-gray-500">
                Run this command inside Claude Code to add Beacon to your skill
                set:
              </p>
              <CodeBlock command="install beacon" />
            </Step>

            <Step num="3" title="Run Beacon on your codebase">
              <p className="mb-3 text-sm leading-relaxed text-gray-500">
                Point Beacon at your project root. It scans your files and
                builds a report — no config needed:
              </p>
              <CodeBlock command="beacon" />
            </Step>

            <Step num="4" title="You're done — check your report">
              <p className="text-sm leading-relaxed text-gray-500">
                Beacon writes a structured report to{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">
                  .beacon/report.md
                </code>{" "}
                in your project root. It&apos;s ready for you and your AI tools
                to use immediately.
              </p>
            </Step>
          </div>

          {/* Docs bridge CTA */}
          <div className="border-t border-gray-100 py-16 text-center">
            <p className="mb-4 text-sm text-gray-400">Want to go deeper?</p>
            <Link
              href="/docs"
              className="inline-block rounded-full bg-orange-500 px-8 py-3 text-sm font-bold text-white shadow-md shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-orange-300"
            >
              View the Docs →
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  ```

- [ ] **Step 2: TypeScript check**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 3: Smoke test in browser**

  ```bash
  npm run dev
  ```
  Open `http://localhost:3000/install`. Verify:
  - Page renders with warm off-white background
  - All 4 steps visible
  - Copy buttons present on steps 2 and 3
  - "View the Docs →" button visible at the bottom
  - Clicking a Copy button copies the text and shows "Copied!" for ~2 seconds

- [ ] **Step 4: Commit**

  ```bash
  git add src/app/install/page.tsx
  git commit -m "feat: add /install page with step-by-step guide"
  ```

---

## Task 4: DocsSidebar component

**Files:**
- Create: `src/components/DocsSidebar.tsx`

- [ ] **Step 1: Create DocsSidebar**

  ```tsx
  // src/components/DocsSidebar.tsx
  "use client";

  import Link from "next/link";
  import { usePathname } from "next/navigation";

  const sections = [
    {
      label: "Overview",
      links: [
        { label: "Getting started", href: "/docs" },
        { label: "What is Beacon?", href: "/docs/what-is-beacon" },
      ],
    },
    {
      label: "Setup",
      links: [
        { label: "Installation", href: "/docs/installation" },
        { label: "Requirements", href: "/docs/requirements" },
      ],
    },
    {
      label: "Usage",
      links: [
        { label: "Commands", href: "/docs/commands" },
        { label: "Configuration", href: "/docs/configuration" },
        { label: "Output & reports", href: "/docs/output-reports" },
      ],
    },
    {
      label: "Reference",
      links: [
        { label: "Examples", href: "/docs/examples" },
        { label: "Changelog", href: "/docs/changelog" },
      ],
    },
  ];

  export default function DocsSidebar() {
    const pathname = usePathname();

    return (
      <aside className="hidden w-[220px] shrink-0 overflow-y-auto border-r border-gray-100 py-7 md:block">
        {sections.map(({ label, links }) => (
          <div key={label} className="mb-6">
            <p className="mb-1.5 px-5 text-[10px] font-bold uppercase tracking-widest text-gray-300">
              {label}
            </p>
            {links.map(({ label: linkLabel, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block px-5 py-1.5 text-[13px] transition-colors ${
                    isActive
                      ? "border-r-2 border-orange-500 bg-orange-50 font-semibold text-orange-500"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {linkLabel}
                </Link>
              );
            })}
          </div>
        ))}
      </aside>
    );
  }
  ```

- [ ] **Step 2: TypeScript check**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add src/components/DocsSidebar.tsx
  git commit -m "feat: add DocsSidebar component with active pathname state"
  ```

---

## Task 5: Docs layout

**Files:**
- Create: `src/app/docs/layout.tsx`

- [ ] **Step 1: Create the docs layout**

  ```tsx
  // src/app/docs/layout.tsx
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
  import DocsSidebar from "@/components/DocsSidebar";

  export default function DocsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <Nav />
        <div className="flex min-h-screen">
          <DocsSidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
        <Footer />
      </>
    );
  }
  ```

- [ ] **Step 2: TypeScript check**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add src/app/docs/layout.tsx
  git commit -m "feat: add /docs route layout with sidebar shell"
  ```

---

## Task 6: Getting started page (/docs)

**Files:**
- Create: `src/app/docs/page.tsx`

- [ ] **Step 1: Create the Getting started page**

  ```tsx
  // src/app/docs/page.tsx
  import Link from "next/link";

  function CodeBlock({ children }: { children: React.ReactNode }) {
    return (
      <div className="my-4 overflow-x-auto rounded-xl bg-[#0c0c0c] px-5 py-4 font-mono text-[12px] leading-7">
        {children}
      </div>
    );
  }

  function Callout({ children }: { children: React.ReactNode }) {
    return (
      <div className="my-5 rounded-xl border border-orange-100 bg-orange-50 px-5 py-4 text-sm text-orange-900">
        {children}
      </div>
    );
  }

  export default function GettingStartedPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Getting started
        </p>

        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Getting started
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          Beacon is a Claude Code skill that analyses any codebase and produces
          a structured report — entry points, module graph, patterns, and
          conventions — so you and your AI tools can orient fast.
        </p>

        <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">
          Prerequisites
        </h2>
        <ul className="mb-4 list-disc pl-5 text-sm leading-7 text-gray-500">
          <li>
            Claude Code{" "}
            <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">
              v1.0
            </code>{" "}
            or later
          </li>
          <li>Any project directory — any language, any stack</li>
        </ul>

        <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">Install</h2>
        <p className="mb-0 text-sm leading-relaxed text-gray-500">
          Open Claude Code in any directory and run:
        </p>
        <CodeBlock>
          <span className="text-orange-400">/ </span>
          <span className="text-slate-200">install beacon</span>
        </CodeBlock>
        <p className="text-sm leading-relaxed text-gray-500">
          No config file, no build step, no dependencies.
        </p>

        <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">
          Run your first analysis
        </h2>
        <p className="mb-0 text-sm leading-relaxed text-gray-500">
          Point Beacon at your project:
        </p>
        <CodeBlock>
          <div>
            <span className="text-orange-400">/ </span>
            <span className="text-slate-200">beacon</span>
          </div>
          <div className="mt-2 text-white/35">↳ scanning 247 files ██░</div>
          <div className="mt-1">
            <span className="text-emerald-400">✓</span>
            <span className="ml-3 text-white/40">entry points  </span>
            <span className="text-white/85">2</span>
          </div>
          <div>
            <span className="text-emerald-400">✓</span>
            <span className="ml-3 text-white/40">modules       </span>
            <span className="text-white/85">47</span>
          </div>
          <div>
            <span className="text-emerald-400">✓</span>
            <span className="ml-3 text-white/40">patterns      </span>
            <span className="text-white/85">4</span>
          </div>
        </CodeBlock>

        <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">
          Read your report
        </h2>
        <p className="mb-0 text-sm leading-relaxed text-gray-500">
          Beacon writes its output to{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">
            .beacon/report.md
          </code>{" "}
          in your project root. Open it directly, or reference it in your Claude
          Code sessions — your AI tools pick it up automatically.
        </p>
        <Callout>
          <strong>Tip:</strong> Add{" "}
          <code className="rounded bg-orange-100 px-1 py-0.5 font-mono text-xs">
            .beacon/
          </code>{" "}
          to your{" "}
          <code className="rounded bg-orange-100 px-1 py-0.5 font-mono text-xs">
            .gitignore
          </code>{" "}
          to keep reports local, or commit them to share context across your
          team.
        </Callout>

        {/* Next page nav */}
        <div className="mt-14 flex justify-end border-t border-gray-100 pt-6">
          <Link
            href="/docs/what-is-beacon"
            className="flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            What is Beacon? →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 2: TypeScript check**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 3: Smoke test in browser**

  Navigate to `http://localhost:3000/docs`. Verify:
  - Sidebar visible with all four sections
  - "Getting started" link is active (orange, bold, left-border accent)
  - All content renders — prerequisites, install command, analysis output, callout tip
  - "What is Beacon? →" link at the bottom

- [ ] **Step 4: Commit**

  ```bash
  git add src/app/docs/page.tsx
  git commit -m "feat: add /docs Getting started page"
  ```

---

## Task 7: Remaining docs stub pages

**Files:**
- Create: `src/app/docs/what-is-beacon/page.tsx`
- Create: `src/app/docs/installation/page.tsx`
- Create: `src/app/docs/requirements/page.tsx`
- Create: `src/app/docs/commands/page.tsx`
- Create: `src/app/docs/configuration/page.tsx`
- Create: `src/app/docs/output-reports/page.tsx`
- Create: `src/app/docs/examples/page.tsx`
- Create: `src/app/docs/changelog/page.tsx`

Each stub uses the same structure: breadcrumb, h1, lead paragraph, and a "coming soon" notice. Copy the pattern exactly for each file — vary only the title, breadcrumb segment, and lead text.

- [ ] **Step 1: Create what-is-beacon stub**

  ```tsx
  // src/app/docs/what-is-beacon/page.tsx
  import Link from "next/link";

  export default function WhatIsBeaconPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> What is Beacon?
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          What is Beacon?
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          An overview of Beacon&apos;s purpose, how it fits into the Claude Code
          ecosystem, and when you&apos;d reach for it.
        </p>
        <p className="text-sm text-gray-400">Full content coming soon.</p>
        <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
          <Link href="/docs" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← Getting started
          </Link>
          <Link href="/docs/installation" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            Installation →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 2: Create installation stub**

  ```tsx
  // src/app/docs/installation/page.tsx
  import Link from "next/link";

  export default function InstallationPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Installation
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Installation
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          Full installation instructions, system requirements, and troubleshooting steps.
        </p>
        <p className="mb-6 text-sm text-gray-400">Full content coming soon.</p>
        <p className="text-sm text-gray-500">
          Looking to get started now?{" "}
          <Link href="/install" className="font-semibold text-orange-500 hover:text-orange-600">
            See the install guide →
          </Link>
        </p>
        <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
          <Link href="/docs/what-is-beacon" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← What is Beacon?
          </Link>
          <Link href="/docs/requirements" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            Requirements →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 3: Create requirements stub**

  ```tsx
  // src/app/docs/requirements/page.tsx
  import Link from "next/link";

  export default function RequirementsPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Requirements
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Requirements
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          Minimum Claude Code version, supported languages, and platform requirements.
        </p>
        <p className="text-sm text-gray-400">Full content coming soon.</p>
        <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
          <Link href="/docs/installation" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← Installation
          </Link>
          <Link href="/docs/commands" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            Commands →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 4: Create commands stub**

  ```tsx
  // src/app/docs/commands/page.tsx
  import Link from "next/link";

  export default function CommandsPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Commands
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Commands
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          Full reference for all Beacon commands, flags, and options.
        </p>
        <p className="text-sm text-gray-400">Full content coming soon.</p>
        <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
          <Link href="/docs/requirements" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← Requirements
          </Link>
          <Link href="/docs/configuration" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            Configuration →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 5: Create configuration stub**

  ```tsx
  // src/app/docs/configuration/page.tsx
  import Link from "next/link";

  export default function ConfigurationPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Configuration
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Configuration
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          Optional configuration — output directory, exclusion patterns, and report format.
        </p>
        <p className="text-sm text-gray-400">Full content coming soon.</p>
        <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
          <Link href="/docs/commands" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← Commands
          </Link>
          <Link href="/docs/output-reports" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            Output & reports →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 6: Create output-reports stub**

  ```tsx
  // src/app/docs/output-reports/page.tsx
  import Link from "next/link";

  export default function OutputReportsPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Output &amp; reports
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Output &amp; reports
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          The structure of <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">.beacon/report.md</code> and how to use it with AI tools.
        </p>
        <p className="text-sm text-gray-400">Full content coming soon.</p>
        <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
          <Link href="/docs/configuration" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← Configuration
          </Link>
          <Link href="/docs/examples" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            Examples →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 7: Create examples stub**

  ```tsx
  // src/app/docs/examples/page.tsx
  import Link from "next/link";

  export default function ExamplesPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Examples
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Examples
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          Worked examples across different project types — monorepos, APIs, legacy codebases.
        </p>
        <p className="text-sm text-gray-400">Full content coming soon.</p>
        <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
          <Link href="/docs/output-reports" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← Output &amp; reports
          </Link>
          <Link href="/docs/changelog" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            Changelog →
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 8: Create changelog stub**

  ```tsx
  // src/app/docs/changelog/page.tsx
  import Link from "next/link";

  export default function ChangelogPage() {
    return (
      <article className="mx-auto max-w-2xl px-8 py-12">
        <p className="mb-6 text-xs text-gray-400">
          Docs <span className="text-gray-300">/</span> Changelog
        </p>
        <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
          Changelog
        </h1>
        <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
          Version history, notable changes, and migration notes.
        </p>
        <p className="text-sm text-gray-400">Full content coming soon.</p>
        <div className="mt-14 flex justify-start border-t border-gray-100 pt-6">
          <Link href="/docs/examples" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
            ← Examples
          </Link>
        </div>
      </article>
    );
  }
  ```

- [ ] **Step 9: TypeScript check**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 10: Smoke test in browser**

  With `npm run dev` running, click through every sidebar link and confirm:
  - Each page renders without errors
  - The active sidebar link updates as you navigate between pages
  - Prev/Next navigation links at the bottom are correct

- [ ] **Step 11: Commit**

  ```bash
  git add src/app/docs/
  git commit -m "feat: add /docs stub pages for all sidebar sections"
  ```

---

## Task 8: Production build verification

- [ ] **Step 1: Run full build**

  ```bash
  npm run build
  ```
  Expected: build completes with no errors. All `/docs/*` and `/install` routes appear in the route list output.

- [ ] **Step 2: Fix any build errors**

  If the build fails, read the error message carefully. Common causes:
  - A server component accidentally importing a client-only API (fix: add `"use client"` or move the API call)
  - A missing import
  - A type error not caught by `tsc --noEmit` (rare with App Router)
  
  Fix the issue, then re-run `npm run build` to confirm clean.

- [ ] **Step 3: Commit fixes if any**

  Only if Step 2 required changes:
  ```bash
  git add -p
  git commit -m "fix: resolve build errors from /install and /docs pages"
  ```
