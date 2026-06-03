"use client";

import { useEffect, useRef, useState } from "react";

function TerminalArtifact() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 3), 600);
    return () => clearInterval(id);
  }, []);
  const bar = ["█░░", "██░", "███"][tick];

  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-white/15" style={{ background: "rgba(255,255,255,0.05)" }}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-red-500/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
        <span className="h-2 w-2 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[10px] text-white/40">zsh</span>
      </div>
      <div className="p-4 font-mono text-[11px] leading-6">
        <p className="text-white/90">
          <span className="text-orange-400">$</span> beacon analyze .
        </p>
        <p className="text-white/40">
          ↳ scanning 247 files {bar}
        </p>
        <div className="mt-2 space-y-0.5">
          <p><span className="text-emerald-400">✓</span><span className="ml-2 text-white/55">entry points  </span><span className="text-white/90">2</span></p>
          <p><span className="text-emerald-400">✓</span><span className="ml-2 text-white/55">modules       </span><span className="text-white/90">47</span></p>
          <p><span className="text-emerald-400">✓</span><span className="ml-2 text-white/55">patterns      </span><span className="text-white/90">4</span></p>
        </div>
      </div>
    </div>
  );
}

function GraphArtifact() {
  const nodes = [
    { id: "idx", x: 110, y: 80,  label: "index.ts",  entry: true  },
    { id: "api", x: 200, y: 30,  label: "api/",       entry: false },
    { id: "db",  x:  20, y: 30,  label: "db/",        entry: false },
    { id: "mw",  x: 200, y: 130, label: "middleware", entry: false },
    { id: "pkg", x:  20, y: 130, label: "packages/",  entry: false },
  ];
  const edges: [string, string][] = [
    ["idx", "api"], ["idx", "db"], ["idx", "mw"], ["idx", "pkg"],
  ];

  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-white/15" style={{ background: "rgba(255,255,255,0.05)" }}>
      <div className="border-b border-white/10 px-4 py-2.5">
        <span className="text-[10px] font-semibold text-white/50">module graph</span>
      </div>
      <div className="flex items-center justify-center p-4">
        <svg width="220" height="160" viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
          {edges.map(([a, b]) => {
            const from = nodes.find((n) => n.id === a)!;
            const to   = nodes.find((n) => n.id === b)!;
            return (
              <line
                key={`${a}-${b}`}
                x1={from.x} y1={from.y}
                x2={to.x}   y2={to.y}
                stroke="#fb4f39" strokeWidth={1.5} opacity={0.7}
              />
            );
          })}
          {nodes.map(({ id, x, y, label, entry }) => (
            <g key={id}>
              {/* Glow ring */}
              <circle
                cx={x} cy={y} r={entry ? 26 : 22}
                fill={entry ? "#fb4f39" : "none"}
                opacity={entry ? 0.15 : 0}
              />
              {/* Node circle */}
              <circle
                cx={x} cy={y} r={18}
                fill={entry ? "#fb4f39" : "rgba(255,255,255,0.08)"}
                stroke={entry ? "none" : "rgba(255,255,255,0.3)"}
                strokeWidth={1.5}
              />
              <text
                x={x} y={y + 3.5}
                textAnchor="middle"
                fontSize={7}
                fontFamily="ui-monospace, Menlo, monospace"
                fill={entry ? "white" : "rgba(255,255,255,0.9)"}
                fontWeight={entry ? 700 : 500}
              >
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function ReportArtifact() {
  const rows = [
    { key: "Architecture", val: "Node.js monorepo" },
    { key: "Entry points", val: "src/index.ts, api/" },
    { key: "Patterns",     val: "REST, ESM, Zod" },
    { key: "Modules",      val: "47 nodes, 128 edges" },
  ];
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-white/15" style={{ background: "rgba(255,255,255,0.05)" }}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-[10px] text-orange-400">.beacon/report.md</span>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
          ready
        </span>
      </div>
      <div className="divide-y divide-white/8 px-4 py-1">
        {rows.map(({ key, val }) => (
          <div key={key} className="flex items-baseline gap-3 py-2">
            <span className="w-24 shrink-0 text-[10px] text-white/45">{key}</span>
            <span className="font-mono text-[10px] text-white/85">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  {
    num: "01",
    tag: "Run",
    title: "One command, any codebase",
    body: "Point Beacon at any project — no config, no setup. Works on any stack from scripts to sprawling monorepos.",
    Artifact: TerminalArtifact,
  },
  {
    num: "02",
    tag: "Map",
    title: "Beacon maps everything",
    body: "The agent traverses your module graph, extracts patterns, and builds a complete mental model of the project.",
    Artifact: GraphArtifact,
  },
  {
    num: "03",
    tag: "Report",
    title: "Report ready, instantly",
    body: "A structured report — architecture, entry points, conventions — saved to .beacon/ and ready for your AI tools.",
    Artifact: ReportArtifact,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="bg-[#0c0c0c] py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div
          className="mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            How it works
          </p>
          <h2 className="max-w-lg text-4xl font-extrabold leading-tight tracking-tighter text-white sm:text-5xl">
            From unknown<br />
            <span className="text-white/40">to understood.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map(({ num, tag, title, body, Artifact }, i) => (
            <div
              key={num}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-sm transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transitionDelay: visible ? `${i * 130}ms` : "0ms",
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              {/* Faint large numeral */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-3 select-none font-black leading-none text-white"
                style={{ fontSize: 96, opacity: 0.04 }}
              >
                {num}
              </span>

              {/* Step badge */}
              <div className="mb-5 flex items-center gap-2">
                <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-orange-400">
                  {tag}
                </span>
              </div>

              {/* Title + body */}
              <h3 className="mb-2 text-base font-bold leading-snug text-white">
                {title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/60">
                {body}
              </p>

              {/* Artifact */}
              <Artifact />
            </div>
          ))}
        </div>

        {/* Connector hint */}
        <div
          className="mt-10 hidden items-center justify-center gap-3 transition-all delay-500 duration-700 md:flex"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {STEPS.map(({ tag }, i) => (
            <div key={tag} className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-white/25">{tag}</span>
              {i < STEPS.length - 1 && (
                <span className="text-white/15">——→</span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
