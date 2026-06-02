const audiences = [
  {
    icon: "👩‍💻",
    heading: "For engineering teams",
    bullets: [
      "Cut onboarding time on new or inherited projects",
      "Reduce dependency on the one person who knows the codebase",
      "Create a shared understanding across your team",
      "Works on any stack — no setup or config required",
    ],
  },
  {
    icon: "🤖",
    heading: "For AI coding agents",
    bullets: [
      "Ground agents in real project structure before they write a line",
      "Eliminate wasted tokens re-exploring the same files",
      "Consistent, repeatable context across every session",
      "Native Claude Code skill — zero integration overhead",
    ],
  },
];

export default function AudienceSplit() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Built for humans{" "}
          <span className="text-orange-500">&amp;</span> AI agents
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {audiences.map(({ icon, heading, bullets }) => (
            <div
              key={heading}
              className="rounded-xl border border-gray-100 bg-gray-50 p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-base font-semibold text-gray-900">
                  {heading}
                </h3>
              </div>
              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                    <span className="text-sm leading-relaxed text-gray-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
