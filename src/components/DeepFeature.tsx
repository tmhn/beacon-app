import ProjectReportMockup from "@/components/ProjectReportMockup";

export default function DeepFeature() {
  return (
    <section id="how-it-works" className="bg-[#fffbf8] py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-7">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tighter text-gray-900 sm:text-5xl">
            See the full picture.
            <br />
            <span className="text-gray-400">Make better decisions.</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-500">
            Beacon doesn&apos;t just scan files — it builds a mental model of
            your project. Understand ownership, spot complexity hotspots, and
            know where to start before writing a single line.
          </p>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-1.5 rounded-full border border-orange-200 bg-white px-5 py-2.5 text-sm font-semibold text-orange-500 transition-all hover:border-orange-300 hover:bg-orange-50"
          >
            Learn how it works →
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <ProjectReportMockup />
        </div>
      </div>
    </section>
  );
}
