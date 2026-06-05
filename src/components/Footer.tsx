import Image from "next/image";
import Link from "next/link";

const nav = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Lantern", href: "/lantern" },
      { label: "Changelog", href: "/docs/changelog" },
    ],
  },
  {
    heading: "Docs",
    links: [
      { label: "Getting started", href: "/docs" },
      { label: "Installation", href: "/install" },
      { label: "Examples", href: "/docs/examples" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icon.png" alt="Beacon" width={18} height={18} />
              <span className="text-sm font-bold text-gray-900">Beacon</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-gray-400">
              Agent-driven project intelligence for any codebase.
            </p>
          </div>

          {nav.map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {heading}
              </p>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Beacon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-gray-600">
              GitHub
            </a>
            <a href="#" className="text-xs text-gray-400 transition-colors hover:text-gray-600">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
