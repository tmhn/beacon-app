"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How it works" },
  { id: "lantern-features", label: "Features" },
  { id: "relationship", label: "Beacon & Lantern" },
] as const;

type SectionId = (typeof sections)[number]["id"];

const SCROLL_OFFSET = 112; // main nav + sub-nav height

export default function LanternSubNav() {
  const [active, setActive] = useState<SectionId>("overview");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<Partial<Record<SectionId, HTMLAnchorElement>>>({});

  useLayoutEffect(() => {
    const el = linkRefs.current[active];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-110px 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    setActive(id);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-[67px] z-40 border-b border-amber-100 bg-[#fffdf8]/95 backdrop-blur-sm"
      style={{ animation: "fade-in-up 0.4s ease-out 100ms backwards" }}
    >
      <div className="mx-auto flex max-w-6xl items-center px-6">
        {/* Identity mark */}
        <div className="mr-4 flex shrink-0 items-center gap-1.5 border-r border-amber-200/60 pr-4">
          <Image src="/lantern-icon.png" alt="" width={13} height={13} />
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-700">
            Lantern
          </span>
        </div>

        {/* Links with sliding underline */}
        <div className="relative flex overflow-x-auto">
          <span
            className="absolute bottom-0 h-0.5 bg-amber-400 transition-[left,width] duration-200 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden="true"
          />
          {sections.map(({ id, label }) => (
            <a
              key={id}
              ref={(el) => { linkRefs.current[id] = el ?? undefined; }}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`whitespace-nowrap px-4 py-3.5 text-xs font-semibold transition-colors duration-150 ${
                active === id
                  ? "text-amber-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
