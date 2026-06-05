import Link from "next/link";

function LanternAppMockup() {
  const rows = [
    { label: "Architecture", val: "Node.js monorepo" },
    { label: "Entry points", val: "src/index.ts · api/" },
    { label: "Signals", val: "Auth · Queue · Cache" },
    { label: "Risk", val: "No rate limit on /api/*" },
  ];

  return (
    <div className="relative">
      {/* Ghost window behind — depth effect */}
      <div
        className="absolute -right-3 -top-3 w-[290px] overflow-hidden rounded-2xl border border-amber-100 bg-white opacity-40"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-red-300/60" />
          <span className="h-2 w-2 rounded-full bg-yellow-300/60" />
          <span className="h-2 w-2 rounded-full bg-green-300/60" />
          <span className="mx-auto font-mono text-[10px] text-gray-300">lantern</span>
        </div>
        <div className="h-[172px] bg-gradient-to-br from-amber-400/30 to-amber-300/20" />
      </div>

      {/* Ambient glow beneath */}
      <div className="absolute -bottom-5 left-6 right-6 h-10 rounded-full bg-amber-300/50 blur-xl" />

      {/* Main window */}
      <div className="relative w-[290px] overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-2xl shadow-amber-200/60">

        {/* Window chrome */}
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-white px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
          <span className="mx-auto font-mono text-[10px] text-gray-400">lantern</span>
        </div>

        {/* Project header */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-400 px-4 py-3.5">
          <div className="flex items-start justify-between">
            <div>
              <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-amber-100/70">
                Workspace
              </p>
              <p className="text-[15px] font-extrabold leading-tight tracking-tight text-white">
                acme-api
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              <span className="text-[9px] font-bold text-white">Live</span>
            </div>
          </div>

          {/* Confidence bar */}
          <div className="mt-3">
            <div className="mb-1 flex justify-between">
              <span className="text-[9px] text-amber-100/70">Signal confidence</span>
              <span className="text-[9px] font-bold text-white">94%</span>
            </div>
            <div className="h-[3px] overflow-hidden rounded-full bg-amber-400/50">
              <div className="h-full w-[94%] rounded-full bg-white/90" />
            </div>
          </div>
        </div>

        {/* Data rows */}
        <div className="divide-y divide-gray-50 px-4">
          {rows.map(({ label, val }) => (
            <div key={label} className="flex items-baseline gap-2 py-2.5">
              <span className="w-[72px] shrink-0 text-[10px] text-gray-400">{label}</span>
              <span className="truncate font-mono text-[10px] text-gray-700">{val}</span>
            </div>
          ))}
        </div>

        {/* Agent brief */}
        <div className="border-t border-amber-100 bg-amber-50/70 px-4 py-3">
          <p className="mb-1.5 text-[8.5px] font-bold uppercase tracking-[0.18em] text-amber-600">
            Agent brief
          </p>
          <p className="text-[10px] leading-relaxed text-gray-600">
            Start at{" "}
            <span className="font-mono text-amber-700">src/index.ts</span>.
            Auth lives in{" "}
            <span className="font-mono text-amber-700">middleware/auth.ts</span> — JWT, no sessions.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-50 px-4 py-2">
          <p className="text-[9px] text-gray-400">Scanned with Beacon · just now</p>
        </div>
      </div>
    </div>
  );
}

export default function LanternTeaser() {
  return (
    <section className="bg-[#fef9ee] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        {/* Copy */}
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-600">
              Meet Lantern
            </span>
          </div>
          <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tighter text-gray-900 sm:text-5xl">
            Beacon finds<br />
            the signal.<br />
            <span className="text-amber-500">Lantern keeps<br />it lit.</span>
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-gray-500">
            Once Beacon surfaces your codebase, Lantern turns that knowledge
            into a persistent workspace — always on, always ready for you and
            your agents.
          </p>
          <Link
            href="/lantern"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-amber-200 transition-all hover:bg-amber-600 hover:shadow-amber-300"
          >
            Explore Lantern →
          </Link>
        </div>

        {/* Visual */}
        <div className="flex justify-center md:justify-end">
          <LanternAppMockup />
        </div>
      </div>
    </section>
  );
}
