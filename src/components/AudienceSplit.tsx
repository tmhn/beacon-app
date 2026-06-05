"use client";

import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="mb-14 text-center transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="text-3xl font-extrabold tracking-tighter text-gray-900 sm:text-4xl">
            Built for humans{" "}
            <span className="text-orange-500">&amp;</span> AI agents
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Whether you&apos;re a developer onboarding to a new codebase or an AI agent starting a session, Beacon has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {audiences.map(({ icon, heading, bullets }, i) => (
            <div
              key={heading}
              className="rounded-xl border border-gray-100 bg-gray-50 p-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease-out ${(i + 1) * 110}ms, transform 0.6s ease-out ${(i + 1) * 110}ms`,
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  {icon}
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  {heading}
                </h3>
              </div>
              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
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
