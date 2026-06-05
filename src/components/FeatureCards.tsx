"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="3" fill="currentColor" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Illuminate structure",
    body: "Automatically discovers how a project is organised — modules, dependencies, entry points, and conventions.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h5v5H4zM11 4h5v5h-5zM4 11h5v5H4zM11 11h5v5h-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Retain intelligence",
    body: "Builds a living knowledge base across sessions so you never start from zero on the same codebase twice.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L3 7v6l7 5 7-5V7l-7-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 12V8m0 0l-2 2m2-2l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Accelerate agents",
    body: "Provides AI agents with reliable context so they spend less time guessing and more time building.",
  },
];

export default function FeatureCards() {
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
    <section ref={sectionRef} id="features" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="mb-14 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
            Features
          </p>
          <h2 className="text-3xl font-extrabold tracking-tighter text-gray-900 sm:text-4xl">
            Everything your team needs to get up to speed
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon, title, body }, i) => (
            <div
              key={title}
              className="group rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-100 hover:shadow-lg hover:shadow-orange-50"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease-out ${(i + 1) * 90}ms, transform 0.6s ease-out ${(i + 1) * 90}ms`,
              }}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                {icon}
              </div>
              <h3 className="mb-2.5 text-base font-bold text-gray-900">
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
