"use client";

import { useEffect, useRef, useState } from "react";
import HeroMockupA from "./HeroMockupA";
import HeroMockupB from "./HeroMockupB";
import HeroMockupC from "./HeroMockupC";

const DURATION = 4000;
const SLIDE_H = 500;

const slides = [
  { Component: HeroMockupA, label: "Discover" },
  { Component: HeroMockupB, label: "Map" },
  { Component: HeroMockupC, label: "Report" },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(Date.now());
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSlide = (index: number) => {
    if (tickRef.current) clearInterval(tickRef.current);
    setActive(index);
    setProgress(0);
    startRef.current = Date.now();

    tickRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        startSlide((index + 1) % slides.length);
      }
    }, 50);
  };

  useEffect(() => {
    startSlide(0);
    return () => { if (tickRef.current) clearInterval(tickRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      {/* Viewport */}
      <div className="w-full overflow-hidden bg-[#fffbf8]" style={{ height: SLIDE_H }}>
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${active * SLIDE_H}px)` }}
        >
          {slides.map(({ Component }, i) => (
            <div
              key={i}
              className="flex items-center justify-center overflow-hidden bg-[#fffbf8] py-4"
              style={{ height: SLIDE_H }}
            >
              <Component />
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex gap-3">
        {slides.map(({ label }, i) => (
          <button
            key={i}
            onClick={() => startSlide(i)}
            className="flex flex-1 flex-col gap-1.5 text-left"
          >
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-orange-500 transition-none"
                style={{ width: i === active ? `${progress}%` : i < active ? "100%" : "0%" }}
              />
            </div>
            <span className={`text-xs font-semibold transition-colors ${i === active ? "text-gray-800" : "text-gray-400"}`}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
