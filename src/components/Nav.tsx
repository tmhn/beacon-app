"use client";

import { useState } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Docs", href: "#docs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
          <span className="text-sm font-bold tracking-tight text-gray-900">
            Beacon
          </span>
        </a>

        {/* Centre links — desktop only */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm text-gray-500 transition-colors hover:text-gray-900 md:block"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            Get started free
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="ml-1 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-gray-600 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-gray-600 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-gray-600 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
