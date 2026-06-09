"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LanternMockup } from "@/components/LanternMockup";

export default function LanternTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fef9ee] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
        {/* Copy — slides in from the left */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-600">
              Meet Lantern
            </span>
          </div>
          <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tighter text-gray-900 sm:text-5xl">
            Beacon finds<br />
            the path.<br />
            <span className="text-amber-500">Lantern lights<br />the way.</span>
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

        {/* Visual — slides in from the right */}
        <div
          className="flex justify-center md:justify-end"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.7s ease-out 150ms, transform 0.7s ease-out 150ms",
          }}
        >
          <LanternMockup />
        </div>
      </div>
    </section>
  );
}
