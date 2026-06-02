const metrics = [
  { label: "Files explored", value: "247" },
  { label: "Patterns found", value: "18" },
  { label: "Entry points mapped", value: "6" },
  { label: "Modules identified", value: "42" },
];

const summary = [
  "Node.js monorepo with 3 services",
  "REST API + event-driven messaging",
  "No README — generated from source",
];

export default function ProjectReportMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-orange-100/50">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-xs font-bold text-gray-800">Project Report</span>
          </div>
          <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-600">
            Complete
          </span>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-px bg-gray-100">
        {metrics.map(({ label, value }) => (
          <div key={label} className="bg-white px-5 py-5">
            <p className="text-3xl font-extrabold tracking-tight text-gray-900">{value}</p>
            <p className="mt-0.5 text-xs text-gray-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="p-5">
        <p className="mb-3 text-xs font-bold text-gray-700">
          Architecture summary
        </p>
        <ul className="space-y-2">
          {summary.map((line) => (
            <li key={line} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
              <span className="text-xs text-gray-500">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
