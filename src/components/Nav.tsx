"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Lantern", href: "/lantern" },
  { label: "Docs", href: "/docs" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icon.png" alt="Beacon" width={26} height={26} className="bg-transparent" />
          <span className="text-sm font-bold tracking-tight text-gray-900">
            Beacon
          </span>
        </Link>

        {/* Centre links — desktop only */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/install"
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            Install the skill
          </Link>
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
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
