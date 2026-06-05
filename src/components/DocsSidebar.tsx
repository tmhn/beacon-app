// src/components/DocsSidebar.tsx
"use client";

import Link from "next/link";
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
    <aside className="hidden w-[220px] shrink-0 self-start sticky top-[69px] h-[calc(100vh-69px)] overflow-y-auto border-r border-gray-100 py-7 md:block">
      {sections.map(({ label, links }) => (
        <div key={label} className="mb-6">
          <p className="mb-1.5 px-5 text-[10px] font-bold uppercase tracking-widest text-gray-300">
            {label}
          </p>
          {links.map(({ label: linkLabel, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block px-5 py-1.5 text-[13px] transition-colors ${
                  isActive
                    ? "border-r-2 border-orange-500 bg-orange-50 font-semibold text-orange-500"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {linkLabel}
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
