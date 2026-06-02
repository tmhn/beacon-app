// Option C: Web app report — browser window showing the Beacon report output

const navItems = [
  { label: "Overview",     active: true  },
  { label: "Architecture", active: false },
  { label: "Key Files",    active: false },
  { label: "Patterns",     active: false },
  { label: "Dependencies", active: false },
];

const patterns = [
  { label: "REST API",      color: "bg-blue-50 text-blue-600"     },
  { label: "Event-driven",  color: "bg-purple-50 text-purple-600" },
  { label: "ESM modules",   color: "bg-green-50 text-green-700"   },
  { label: "Zod schemas",   color: "bg-yellow-50 text-yellow-700" },
  { label: "TypeScript",    color: "bg-sky-50 text-sky-600"       },
];

const entryPoints = ["src/index.ts", "api/server.ts"];

export default function HeroMockupC() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-orange-100/50">

      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex flex-1 items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[10px] text-gray-400 ring-1 ring-gray-200">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 1v5l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span>beacon://acme-platform/report</span>
        </div>
      </div>

      {/* App layout */}
      <div className="flex" style={{ height: 348 }}>

        {/* Sidebar */}
        <div className="flex w-[100px] shrink-0 flex-col bg-gray-900 px-2 py-4">
          <p className="mb-4 px-2 text-[9px] font-bold uppercase tracking-widest text-gray-500">
            Beacon
          </p>
          {navItems.map(({ label, active }) => (
            <div
              key={label}
              className={`mb-0.5 rounded-md px-2 py-1.5 text-[10px] font-medium transition-colors ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-500"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-hidden bg-white">

          {/* Content header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
            <div>
              <p className="text-xs font-bold text-gray-900">acme-platform</p>
              <p className="text-[10px] text-gray-400">Last analysed: just now</p>
            </div>
            <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[10px] font-semibold text-green-600">
              Complete
            </span>
          </div>

          {/* Scrollable content */}
          <div className="flex flex-col gap-4 overflow-auto px-5 py-4">

            {/* Architecture */}
            <div>
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                Architecture
              </p>
              <p className="text-[11px] leading-relaxed text-gray-600">
                Node.js monorepo with 3 services. REST API + event-driven
                messaging. No README — summary generated from source.
              </p>
            </div>

            {/* Entry points */}
            <div>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                Entry Points
              </p>
              <div className="flex flex-wrap gap-1.5">
                {entryPoints.map((ep) => (
                  <span
                    key={ep}
                    className="rounded-md bg-orange-50 px-2 py-1 font-mono text-[10px] font-medium text-orange-600 ring-1 ring-orange-100"
                  >
                    {ep}
                  </span>
                ))}
              </div>
            </div>

            {/* Patterns */}
            <div>
              <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                Patterns Identified
              </p>
              <div className="flex flex-wrap gap-1.5">
                {patterns.map(({ label, color }) => (
                  <span
                    key={label}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${color}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 rounded-xl bg-gray-50 p-3">
              {[["247", "Files"], ["47", "Modules"], ["128", "Edges"]].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-base font-extrabold text-gray-900">{val}</p>
                  <p className="text-[9px] text-gray-400">{label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
