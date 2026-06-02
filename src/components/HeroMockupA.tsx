// Option A: Terminal stream — shows Beacon running live
const lines = [
  { type: "cmd", text: "$ beacon analyze ." },
  { type: "dim", text: "" },
  { type: "ok", text: "✓  Entry points found      src/index.ts, api/server.ts" },
  { type: "ok", text: "✓  Module graph mapped      47 nodes, 128 edges" },
  { type: "ok", text: "✓  Patterns identified      REST + event-driven" },
  { type: "ok", text: "✓  Conventions extracted    ESM, path aliases, Zod schemas" },
  { type: "dim", text: "" },
  { type: "head", text: "Architecture" },
  { type: "body", text: "  Node.js monorepo (3 services). Primary entry via" },
  { type: "body", text: "  src/index.ts. Auth handled in middleware/, shared" },
  { type: "body", text: "  types in packages/core. No README — generated." },
  { type: "dim", text: "" },
  { type: "done", text: "● Report saved to .beacon/report.md" },
];

export default function HeroMockupA() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-gray-950 ring-1 ring-white/10">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-gray-900 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs font-medium text-gray-500">zsh — beacon</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-xs leading-6">
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === "cmd" && (
              <span className="text-white">{line.text}</span>
            )}
            {line.type === "dim" && <span className="select-none">&nbsp;</span>}
            {line.type === "ok" && (
              <span className="text-emerald-400">{line.text}</span>
            )}
            {line.type === "head" && (
              <span className="font-bold text-orange-400">{line.text}</span>
            )}
            {line.type === "body" && (
              <span className="text-gray-400">{line.text}</span>
            )}
            {line.type === "done" && (
              <span className="text-orange-500">{line.text}</span>
            )}
          </div>
        ))}
        <div className="mt-1 inline-block h-4 w-2 animate-pulse bg-gray-400" />
      </div>
    </div>
  );
}
