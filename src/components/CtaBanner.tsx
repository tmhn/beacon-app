"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CtaBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-orange-500 py-16 md:py-24">
      <div
        className="mx-auto max-w-3xl px-6 text-center transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <h2 className="mb-4 text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">
          Ready to illuminate<br />your codebase?
        </h2>
        <p className="mb-10 text-lg text-orange-100">
          Install in seconds. No config. No setup. Just Beacon.
        </p>
        <Link
          href="/install"
          className="inline-block rounded-full bg-white px-9 py-3.5 text-sm font-bold text-orange-500 shadow-lg shadow-orange-700/30 hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-xl hover:shadow-orange-700/40"
          style={{ transition: "translate 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease-out, background-color 200ms ease-out" }}
        >
          Install the skill
        </Link>
      </div>
    </section>
  );
}
