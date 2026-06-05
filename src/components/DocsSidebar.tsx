// src/components/DocsSidebar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sections = [
  {
    label: "Overview",
    links: [
      { label: "Getting started", href: "/docs" },
      { label: "What is Beacon?", href: "/docs/what-is-beacon" },
    ],
  },
  {
    label: "Setup",
    links: [
      { label: "Installation", href: "/docs/installation" },
      { label: "Requirements", href: "/docs/requirements" },
    ],
  },
  {
    label: "Usage",
    links: [
      { label: "Commands", href: "/docs/commands" },
      { label: "Configuration", href: "/docs/configuration" },
      { label: "Output & reports", href: "/docs/output-reports" },
    ],
  },
  {
    label: "Reference",
    links: [
      { label: "Examples", href: "/docs/examples" },
      { label: "Changelog", href: "/docs/changelog" },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[220px] shrink-0 self-start sticky top-[69px] h-[calc(100vh-69px)] overflow-y-auto border-r border-gray-100 bg-[#fdfcfb] md:flex md:flex-col">

      {/* Breadcrumb header */}
      <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-gray-400 transition-colors hover:text-gray-700"
        >
          <Image src="/icon.png" alt="" width={13} height={13} />
          <span className="text-[11px] font-semibold tracking-tight">Beacon</span>
        </Link>
        <span className="text-[11px] text-gray-200">/</span>
        <span className="text-[11px] font-medium text-gray-400">docs</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {sections.map(({ label, links }) => (
          <div key={label} className="mb-5">
            <p className="mb-1 px-2 text-[9.5px] font-bold uppercase tracking-[0.14em] text-gray-300">
              {label}
            </p>
            <ul>
              {links.map(({ label: linkLabel, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center rounded-md px-2 py-[7px] text-[12.5px] leading-none transition-colors duration-100 ${
                        isActive
                          ? "bg-orange-50 font-semibold text-[#fb4f39]"
                          : "text-gray-500 hover:bg-gray-100/70 hover:text-gray-800"
                      }`}
                    >
                      {/* Left indicator — always present to prevent text jump */}
                      <span
                        className={`mr-2 h-[14px] w-[3px] flex-none rounded-full transition-colors duration-100 ${
                          isActive ? "bg-[#fb4f39]" : "bg-transparent"
                        }`}
                      />
                      {linkLabel}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
