// Option B: Dependency graph — realistic module map

const NODES = [
  { id: "idx",  x: 200, y: 112, label: "src/index.ts",    entry: true  },
  { id: "api",  x: 328, y:  50, label: "api/server.ts",   entry: true  },
  { id: "db",   x:  72, y:  50, label: "packages/db",     entry: false },
  { id: "auth", x: 330, y: 178, label: "middleware/auth", entry: false },
  { id: "core", x:  70, y: 178, label: "packages/core",   entry: false },
  { id: "jobs", x: 200, y: 208, label: "workers/jobs",    entry: false },
];

const EDGES: [string, string, "primary" | "secondary"][] = [
  ["idx", "api",  "primary"],
  ["idx", "db",   "primary"],
  ["idx", "auth", "primary"],
  ["idx", "core", "primary"],
  ["idx", "jobs", "primary"],
  ["api", "auth", "secondary"],
  ["db",  "core", "secondary"],
];

const NW = 100;
const NH = 24;

export default function HeroMockupB() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-orange-100/40">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          <span className="text-xs font-bold text-gray-700">acme-platform — module graph</span>
        </div>
        <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-500">
          47 nodes
        </span>
      </div>

      {/* Graph canvas */}
      <div
        className="relative overflow-hidden"
        style={{
          height: 248,
          backgroundColor: "#f9fafb",
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 248"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Edges — rendered first so nodes sit on top */}
          {EDGES.map(([fromId, toId, kind]) => {
            const from = NODES.find((n) => n.id === fromId)!;
            const to   = NODES.find((n) => n.id === toId)!;
            return (
              <line
                key={`${fromId}-${toId}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={kind === "primary" ? "#fdba74" : "#d1d5db"}
                strokeWidth={kind === "primary" ? 1.5 : 1}
                strokeDasharray={kind === "secondary" ? "3 3" : undefined}
              />
            );
          })}

          {/* Nodes */}
          {NODES.map(({ id, x, y, label, entry }) => (
            <g key={id} transform={`translate(${x - NW / 2}, ${y - NH / 2})`}>
              {/* Glow halo for entry nodes */}
              {entry && (
                <rect
                  x={-4} y={-4}
                  width={NW + 8} height={NH + 8}
                  rx={NH / 2 + 4}
                  fill="#fb4f39"
                  opacity={0.15}
                />
              )}
              {/* Pill background */}
              <rect
                width={NW}
                height={NH}
                rx={NH / 2}
                fill={entry ? "#fb4f39" : "white"}
                stroke={entry ? "none" : "#e5e7eb"}
                strokeWidth={1}
              />
              {/* Label */}
              <text
                x={NW / 2}
                y={NH / 2 + 3.5}
                textAnchor="middle"
                fontSize={9}
                fontFamily="ui-monospace, 'Cascadia Code', Menlo, monospace"
                fontWeight={entry ? 600 : 400}
                fill={entry ? "white" : "#374151"}
              >
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Footer stats */}
      <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100">
        {[["Entry points", "2"], ["Modules", "47"], ["Patterns", "4"]].map(([label, val]) => (
          <div key={label} className="px-4 py-3 text-center">
            <p className="text-lg font-extrabold text-gray-900">{val}</p>
            <p className="text-[10px] text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
