"use client";

import { useEffect, useState } from "react";
import HeroMockupA from "./HeroMockupA";
import HeroMockupB from "./HeroMockupB";
import HeroMockupC from "./HeroMockupC";

const DURATION = 4000;
const SLIDE_H = 440;

const slides = [
  { Component: HeroMockupA, label: "Discover" },
  { Component: HeroMockupB, label: "Map" },
  { Component: HeroMockupC, label: "Report" },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), DURATION);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      {/* Viewport — clips the sliding stack */}
      <div className="w-full overflow-hidden" style={{ height: SLIDE_H }}>
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${active * SLIDE_H}px)` }}
        >
          {slides.map(({ Component }, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
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
            onClick={() => setActive(i)}
            className="flex flex-1 flex-col gap-1.5 text-left"
          >
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-gray-200">
              {i === active && (
                <div
                  key={active}
                  className="h-full rounded-full bg-orange-500"
                  style={{ animation: `carousel-progress ${DURATION}ms linear forwards` }}
                />
              )}
              {i < active && <div className="h-full w-full rounded-full bg-orange-500" />}
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
