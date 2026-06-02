const features = [
  {
    icon: "🔦",
    title: "Illuminate structure",
    body: "Automatically discovers how a project is organised — modules, dependencies, entry points, and conventions.",
  },
  {
    icon: "🧠",
    title: "Retain intelligence",
    body: "Builds a living knowledge base across sessions so you never start from zero on the same codebase twice.",
  },
  {
    icon: "⚡",
    title: "Accelerate agents",
    body: "Provides AI agents with reliable context so they spend less time guessing and more time building.",
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 text-2xl">{icon}</div>
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
