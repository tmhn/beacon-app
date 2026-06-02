import ProjectReportMockup from "@/components/ProjectReportMockup";

export default function DeepFeature() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            See the full picture.
            <br />
            Make better decisions.
          </h2>
          <p className="text-base leading-relaxed text-gray-500">
            Beacon doesn&apos;t just scan files — it builds a mental model of
            your project. Understand ownership, spot complexity hotspots, and
            know where to start before writing a single line.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
          >
            Learn how it works →
          </a>
        </div>

        {/* Right: mockup */}
        <div className="flex justify-center md:justify-end">
          <ProjectReportMockup />
        </div>
      </div>
    </section>
  );
}
