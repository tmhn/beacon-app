import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export default function Hero() {
  return (
    <section className="bg-[#fffbf8]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-14 md:py-32">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-7">
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="Beacon" width={20} height={20} />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Beacon · Claude AI Skill
            </p>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tighter text-gray-900 sm:text-6xl lg:text-7xl">
            No docs?
            <br />
            No problem.
            <br />
            <span className="text-orange-500">Beacon finds<br />the signal.</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-gray-500">
            Drop into any unclear, unfamiliar, or undocumented codebase.
            Beacon&apos;s agent-driven workflow surfaces what matters so
            you — and your AI tools — can move fast.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/install"
              className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-orange-300"
            >
              Install the skill
            </Link>
            <a
              href="#how-it-works"
              className="rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              See how it works →
            </a>
          </div>
        </div>

        {/* Right: carousel — desktop only; hidden on mobile to keep hero tight */}
        <div className="hidden justify-center md:flex md:justify-end">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
