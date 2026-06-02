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
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-orange-100/60">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs font-medium text-gray-400">beacon — project analysis</span>
      </div>

      <div className="space-y-5 p-5">
        {/* Project header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-900">acme-platform</p>
            <p className="text-xs text-gray-400">Last analysed: just now</p>
          </div>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600 ring-1 ring-orange-100">
            Analysing…
          </span>
        </div>

        {/* Progress bars */}
        <div className="space-y-3">
          {bars.map(({ label, width, done }) => (
            <div key={label}>
              <div className="mb-1.5 flex justify-between">
                <span className="text-xs font-medium text-gray-600">{label}</span>
                {done && (
                  <span className="text-xs font-semibold text-green-600">Done ✓</span>
                )}
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-1.5 rounded-full transition-all ${done ? "bg-green-400" : "bg-orange-400"} ${width}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Findings */}
        <div className="space-y-2 rounded-xl border border-orange-50 bg-orange-50/60 p-3.5">
          <p className="text-xs font-bold text-gray-700">Findings so far</p>
          {findings.map((finding) => (
            <div key={finding} className="flex items-center gap-2">
              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-orange-400" />
              <span className="text-xs text-gray-600">{finding}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
