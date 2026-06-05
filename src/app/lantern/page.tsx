import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LanternSubNav from "@/components/LanternSubNav";
import Image from "next/image";
import Link from "next/link";
import { LanternIcon, LanternMockup } from "@/components/LanternMockup";

// ─── How it works — step artifacts ───────────────────────────────────────────

function TerminalArtifact() {
  return (
    <div className="overflow-hidden rounded-xl border border-amber-900/20" style={{ background: "#1a0e00" }}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-red-500/60" />
        <span className="h-2 w-2 rounded-full bg-amber-500/60" />
        <span className="h-2 w-2 rounded-full bg-green-500/60" />
        <span className="ml-2 text-[10px] text-white/30">zsh</span>
      </div>
      <div className="p-4 font-mono text-[11px] leading-6">
        <p><span className="text-amber-400">$</span><span className="text-white/80"> beacon analyze .</span></p>
        <p className="text-white/35">↳ scanning 312 files ██░</p>
        <div className="mt-2 space-y-0.5">
          <p><span className="text-emerald-400">✓</span><span className="ml-2 text-white/45">entry points  </span><span className="text-white/85">3</span></p>
          <p><span className="text-emerald-400">✓</span><span className="ml-2 text-white/45">modules       </span><span className="text-white/85">61</span></p>
          <p><span className="text-emerald-400">✓</span><span className="ml-2 text-white/45">patterns      </span><span className="text-white/85">5</span></p>
          <p className="mt-1.5"><span className="text-amber-400">→</span><span className="ml-2 text-amber-300/80">creating Lantern…</span></p>
        </div>
      </div>
    </div>
  );
}

function ModeArtifact() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {[
        {
          name: "Candle",
          glyph: "🕯",
          tag: "Quick start",
          time: "~2 min",
          desc: "Key signals, overview and a fast first workspace. Good for initial exploration.",
        },
        {
          name: "Beam",
          glyph: "💡",
          tag: "Deep dive",
          time: "~8 min",
          desc: "Full confidence ratings, unknowns surfaced and a thorough project brief.",
          highlight: true,
        },
      ].map(({ name, glyph, tag, time, desc, highlight }) => (
        <div
          key={name}
          className={`rounded-xl border p-4 ${
            highlight
              ? "border-amber-200 bg-amber-50/70"
              : "border-gray-100 bg-white"
          }`}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-base">{glyph}</span>
            <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
              highlight ? "bg-amber-200/60 text-amber-700" : "bg-gray-100 text-gray-500"
            }`}>{time}</span>
          </div>
          <p className={`mb-1 text-[13px] font-bold ${highlight ? "text-amber-800" : "text-gray-800"}`}>{name}</p>
          <p className="text-[10px] font-semibold text-gray-400">{tag}</p>
          <p className="mt-2 text-[11px] leading-relaxed text-gray-500">{desc}</p>
        </div>
      ))}
    </div>
  );
}

function WorkspaceArtifact() {
  return (
    <div className="overflow-hidden rounded-xl border border-amber-100 bg-white shadow-sm shadow-amber-50">
      <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <LanternIcon size={11} className="text-amber-500" />
          <span className="text-[10px] font-bold text-gray-600">acme-api</span>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">ready</span>
      </div>
      <div className="divide-y divide-gray-50">
        {[
          { label: "Overview", val: "Node.js REST API · 7 endpoints" },
          { label: "Architecture", val: "Express · Postgres · Redis" },
          { label: "Risks", val: "4 unknowns · 2 fragile areas" },
          { label: "Agent brief", val: "Ready for Claude & Cursor" },
        ].map(({ label, val }) => (
          <div key={label} className="flex items-baseline gap-3 px-3 py-2">
            <span className="w-20 shrink-0 text-[9.5px] text-gray-400">{label}</span>
            <span className="text-[10px] text-gray-700">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature card icons ───────────────────────────────────────────────────────

const featureIcons: Record<string, React.ReactElement> = {
  overview: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  arch: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="3.5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16.5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="3.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 5.8L8 8.2M12 8.2L15 5.8M5 14.2L8 11.8M12 11.8L15 14.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  risks: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3L17.5 16H2.5L10 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 9v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13.5" r="0.75" fill="currentColor" />
    </svg>
  ),
  docs: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  agent: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3l1.5 3.5L15 8l-3.5 1.5L10 13l-1.5-3.5L5 8l3.5-1.5L10 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 14l.8 1.8L6.5 16l-1.7.8L4 18.5l-.8-1.7L1.5 16l1.7-.8L4 14Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  tasks: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 6h12M4 10h12M4 14h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15 14l.8.8 1.5-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ─── Page sections ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="overview" className="bg-[#fffdf8]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-14 md:py-28">
        <div className="flex flex-col items-start gap-7">
          <div className="flex items-center gap-2">
            <Image src="/lantern-icon.png" alt="Lantern" width={20} height={20} />
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Lantern · Project Workspace
            </p>
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tighter text-gray-900 sm:text-6xl lg:text-7xl">
            Lantern keeps
            <br />
            the signal{" "}
            <span className="text-amber-500">lit.</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-gray-500">
            Beacon gives you the first clear read on an unfamiliar codebase.
            Lantern turns that discovery into a living project workspace for
            docs, risks, decisions, tasks and AI&#8209;ready context.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-amber-200 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-amber-300"
              style={{ transition: "translate 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease-out, background-color 200ms ease-out" }}
            >
              View example Lantern
            </a>
            <Link
              href="/install"
              className="rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50"
              style={{ transition: "translate 500ms cubic-bezier(0.22,1,0.36,1), border-color 200ms ease-out, background-color 200ms ease-out" }}
            >
              Run Beacon first →
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <LanternMockup />
        </div>
      </div>
    </section>
  );
}

function SignalBridgeSection() {
  return (
    <section className="border-y border-amber-100/80 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row">
        <p className="text-sm font-medium text-gray-400">
          Beacon finds the signal.{" "}
          <span className="font-semibold text-gray-800">Lantern keeps it lit.</span>
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {["Overview", "Architecture", "Risks", "Docs", "Tasks", "Agent Brief"].map(chip => (
            <span key={chip} className="rounded-full border border-amber-100 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-600">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      tag: "Analyse",
      title: "Run Beacon",
      body: "Point Beacon at any codebase — no config, no setup. It scans your files, maps the structure and surfaces the signals that matter.",
      Artifact: TerminalArtifact,
    },
    {
      num: "02",
      tag: "Choose",
      title: "Choose Candle or Beam",
      body: "Candle creates a quick first Lantern in minutes. Beam runs a deeper pass for higher-confidence context, surfaced unknowns and fuller docs.",
      Artifact: ModeArtifact,
    },
    {
      num: "03",
      tag: "Explore",
      title: "Open Lantern",
      body: "Explore the generated workspace — refine docs, track open questions, review risks, and plan your next steps from a position of clarity.",
      Artifact: WorkspaceArtifact,
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#fef9ee] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            How Lantern works
          </p>
          <h2 className="max-w-lg text-4xl font-extrabold leading-tight tracking-tighter text-gray-900 sm:text-5xl">
            From signal
            <br />
            <span className="text-gray-300">to living workspace.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map(({ num, tag, title, body, Artifact }) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-6 shadow-sm shadow-amber-50"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-2 select-none font-black leading-none text-amber-100"
                style={{ fontSize: 88 }}
              >
                {num}
              </span>
              <div className="mb-5 flex items-center gap-2">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-500">
                  {tag}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold leading-snug text-gray-900">{title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-500">{body}</p>
              <Artifact />
            </div>
          ))}
        </div>

        <div className="mt-10 hidden items-center justify-center gap-3 md:flex">
          {steps.map(({ tag }, i) => (
            <div key={tag} className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-amber-300">{tag}</span>
              {i < steps.length - 1 && <span className="text-amber-200">——→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCardsSection() {
  const features = [
    {
      icon: featureIcons.overview,
      title: "Project Overview",
      body: "What the system does, who it serves, the confidence Beacon has in its read, and the key facts you need to orient fast.",
    },
    {
      icon: featureIcons.arch,
      title: "Architecture Notes",
      body: "Components, entry points, dependencies and important patterns — extracted, not written. The shape of the codebase, clearly laid out.",
    },
    {
      icon: featureIcons.risks,
      title: "Risks & Unknowns",
      body: "Fragile areas, missing context and unanswered questions — surfaced so you can address them deliberately, not stumble into them later.",
    },
    {
      icon: featureIcons.docs,
      title: "Generated Docs",
      body: "README, setup guide, deployment notes, testing instructions and architecture references — generated from what Beacon actually found.",
    },
    {
      icon: featureIcons.agent,
      title: "AI Agent Brief",
      body: "A stable, high-confidence context document for Claude, Cursor and other AI coding tools — so every session starts from the same ground.",
    },
    {
      icon: featureIcons.tasks,
      title: "Next Steps",
      body: "Generated tasks for documentation gaps, test coverage, risk reduction and onboarding. A clear to-do list grounded in what's actually missing.",
    },
  ];

  return (
    <section id="lantern-features" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <h2 className="text-3xl font-extrabold tracking-tighter text-gray-900 sm:text-4xl">
            What Lantern illuminates
          </h2>
          <p className="mt-3 max-w-xl text-base text-gray-500">
            Six sections. Every one grounded in what Beacon actually found — not boilerplate, not guesses.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map(({ icon, title, body }) => (
            <div key={title} className="group h-full">
              <div
                className="h-full rounded-xl border border-gray-100 bg-white p-7 shadow-sm group-hover:-translate-y-1 group-hover:border-amber-100 group-hover:bg-amber-50/30 group-hover:shadow-lg group-hover:shadow-amber-100/50"
                style={{ transition: "translate 600ms cubic-bezier(0.22,1,0.36,1), box-shadow 400ms ease-out, border-color 400ms ease-out, background-color 400ms ease-out" }}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500 transition-[background-color,color,scale] duration-300 ease-out group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white">
                  {icon}
                </div>
                <h3 className="mb-2.5 text-base font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelationshipSection() {
  return (
    <section id="relationship" className="bg-[#fffdf8] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tighter text-gray-900 sm:text-4xl">
            Two tools. One workflow.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-gray-500">
            Beacon is the AI skill. Lantern is the workspace it creates.
            Together they turn an unfamiliar codebase into a place you can work confidently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
          {/* Beacon card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="10" r="3" fill="#fb4f39" />
                  <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#fb4f39" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400">Claude AI skill</p>
                <p className="text-base font-extrabold text-gray-900">Beacon</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {[
                "Analyses any codebase, any stack",
                "Extracts structure, patterns and signals",
                "Surfaces risks and unknowns",
                "Creates the foundation for Lantern",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/install"
                className="inline-block rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-100"
              >
                Install Beacon →
              </Link>
            </div>
          </div>

          {/* Arrow connector */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 md:flex-row">
              <span className="hidden text-2xl text-gray-200 md:block">→</span>
              <span className="block h-8 w-px bg-gray-200 md:hidden" />
            </div>
          </div>

          {/* Lantern card */}
          <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm shadow-amber-50/60">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50">
                <Image src="/lantern-icon.png" alt="Lantern" width={18} height={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Project workspace</p>
                <p className="text-base font-extrabold text-gray-900">Lantern</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {[
                "Turns Beacon's findings into living docs",
                "Tracks risks, unknowns and open questions",
                "Generates an AI-ready project brief",
                "Stays useful as the project evolves",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-100"
              >
                View example Lantern →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBannerSection() {
  return (
    <section className="bg-amber-500 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">
          Keep the light on
          <br />
          your codebase.
        </h2>
        <p className="mb-10 text-lg text-amber-100">
          Run Beacon. Get your Lantern. Stay oriented.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="inline-block rounded-full bg-white px-9 py-3.5 text-sm font-bold text-amber-600 shadow-lg shadow-amber-700/30 hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-xl hover:shadow-amber-700/40"
            style={{ transition: "translate 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease-out, background-color 200ms ease-out" }}
          >
            View example Lantern
          </a>
          <Link
            href="/install"
            className="inline-block rounded-full border border-white/30 px-9 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            style={{ transition: "translate 500ms cubic-bezier(0.22,1,0.36,1), border-color 200ms ease-out, background-color 200ms ease-out" }}
          >
            Run Beacon first →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LanternPage() {
  return (
    <>
      <Nav />
      <LanternSubNav />
      <HeroSection />
      <SignalBridgeSection />
      <HowItWorksSection />
      <FeatureCardsSection />
      <RelationshipSection />
      <CtaBannerSection />
      <Footer />
    </>
  );
}
