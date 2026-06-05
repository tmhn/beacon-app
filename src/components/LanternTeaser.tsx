import Link from "next/link";
import { LanternMockup } from "@/components/LanternMockup";

export default function LanternTeaser() {
  return (
    <section className="bg-[#fef9ee] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        {/* Copy */}
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-600">
              Meet Lantern
            </span>
          </div>
          <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tighter text-gray-900 sm:text-5xl">
            Beacon finds<br />
            the signal.<br />
            <span className="text-amber-500">Lantern keeps<br />it lit.</span>
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-gray-500">
            Once Beacon surfaces your codebase, Lantern turns that knowledge
            into a persistent workspace — always on, always ready for you and
            your agents.
          </p>
          <Link
            href="/lantern"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-amber-200 transition-all hover:bg-amber-600 hover:shadow-amber-300"
          >
            Explore Lantern →
          </Link>
        </div>

        {/* Visual — same mockup as Lantern hero */}
        <div className="flex justify-center md:justify-end">
          <LanternMockup />
        </div>
      </div>
    </section>
  );
}
