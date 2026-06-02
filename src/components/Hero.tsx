import HeroMockup from "@/components/HeroMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle radial glow behind hero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            Claude AI Skill
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            No docs?
            <br />
            No problem.
            <br />
            <span className="text-orange-500">Beacon finds the signal.</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-gray-500">
            Drop into any unclear, unfamiliar, or undocumented codebase.
            Beacon&apos;s agent-driven workflow surfaces what matters so
            you — and your AI tools — can move fast.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
            >
              Get started free
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
            >
              See how it works →
            </a>
          </div>
        </div>

        {/* Right: mockup */}
        <div className="flex justify-center md:justify-end">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
