export function LanternIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M8 5.5V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="4.5" y="5.5" width="11" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="10" cy="10.5" rx="2.5" ry="3" fill="currentColor" opacity="0.3" />
      <path d="M7 15.5h6M8 15.5v1.5M12 15.5v1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function LanternMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-xl shadow-amber-100/60">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300/80" />
        <span className="mx-auto rounded-md border border-gray-200 bg-white px-8 py-0.5 text-[10px] text-gray-300">
          lantern.local/acme-api
        </span>
      </div>

      {/* App header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2">
        <div className="flex items-center gap-2">
          <LanternIcon size={14} className="text-amber-500" />
          <span className="text-[11px] font-bold text-gray-700">Lantern</span>
          <span className="text-[11px] text-gray-300">/</span>
          <span className="text-[11px] font-medium text-gray-500">acme-api</span>
        </div>
        <div className="flex items-center gap-3">
          {["Overview", "Signals", "Risks", "Docs"].map((tab, i) => (
            <span
              key={tab}
              className={`text-[10px] font-medium ${i === 0 ? "text-amber-600 underline underline-offset-2 decoration-amber-300" : "text-gray-400"}`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Workspace body */}
      <div className="p-4">
        {/* Project identity row */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-[13px] font-bold text-gray-900">acme-api</h3>
            <div className="mt-1 flex items-center gap-1.5">
              {["Node.js", "REST API", "PostgreSQL"].map((tag) => (
                <span key={tag} className="rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1">
            <span className="text-[9px] font-semibold text-amber-600">High confidence</span>
            <div className="ml-1 flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              ))}
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            </div>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-3">
            <p className="mb-1.5 text-[9.5px] font-bold uppercase tracking-widest text-gray-400">Architecture</p>
            <p className="text-[11px] leading-[1.6] text-gray-600">Express/Node · 3 services<br />Redis cache · JWT auth</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-3">
            <p className="mb-1.5 text-[9.5px] font-bold uppercase tracking-widest text-gray-400">Signals</p>
            <p className="text-[11px] leading-[1.6] text-gray-600">61 modules · 7 endpoints<br />3 entry points found</p>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-3">
            <p className="mb-1.5 text-[9.5px] font-bold uppercase tracking-widest text-amber-500">⚠ Risks</p>
            <p className="text-[11px] leading-[1.6] text-gray-600">4 unknowns surfaced<br />2 fragile areas noted</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-3">
            <p className="mb-1.5 text-[9.5px] font-bold uppercase tracking-widest text-gray-400">Next steps</p>
            <p className="text-[11px] leading-[1.6] text-gray-600">→ Write API docs<br />→ Add test coverage</p>
          </div>
        </div>

        {/* Agent brief strip */}
        <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-3 py-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[9px]">✦</span>
          <p className="text-[10px] text-gray-400">
            AI agent brief <span className="font-semibold text-gray-600">ready for Claude &amp; Cursor</span>
          </p>
          <span className="ml-auto rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">ready</span>
        </div>
      </div>
    </div>
  );
}
