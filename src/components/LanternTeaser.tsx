import Link from "next/link";

function HandoffVisual() {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {/* Beacon output */}
      <div className="rounded-2xl border border-orange-100 bg-white px-5 py-4 shadow-sm">
        <p className="mb-1.5 font-mono text-[10px] text-orange-400">.beacon/report.md</p>
        <p className="mb-3 text-[11px] font-semibold text-gray-700">Report ready</p>
        <div className="space-y-1.5">
          <div className="h-1.5 w-28 rounded-full bg-orange-100" />
          <div className="h-1.5 w-20 rounded-full bg-orange-100" />
          <div className="h-1.5 w-24 rounded-full bg-orange-100" />
        </div>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center gap-1.5">
        <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
          <path d="M0 7h24M18 1l6 6-6 6" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-500">Lantern</span>
      </div>

      {/* Lantern workspace */}
      <div className="rounded-2xl border border-amber-100 bg-white px-5 py-4 shadow-sm">
        <p className="mb-1.5 font-mono text-[10px] text-amber-500">acme-api</p>
        <p className="mb-3 text-[11px] font-semibold text-gray-700">Always on</p>
        <div className="space-y-1.5">
          {[28, 20, 24].map((w) => (
            <div key={w} className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <div className="h-1.5 rounded-full bg-amber-100" style={{ width: w * 4 / 3 }} />
            </div>
          ))}
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
            Once Beacon surfaces your codebase, Lantern turns that knowledge into a persistent workspace — always on, always ready for you and your agents.
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
          <HandoffVisual />
        </div>
      </div>
    </section>
  );
}
