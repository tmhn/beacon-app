const nav: Record<string, string[]> = {
  Product: ["Features", "How it works", "Changelog"],
  Docs: ["Getting started", "API reference", "Examples"],
  More: ["About", "GitHub", "Contact"],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              <span className="text-sm font-bold text-gray-900">Beacon</span>
            </a>
            <p className="mt-3 text-xs leading-relaxed text-gray-400">
              Agent-driven project intelligence for any codebase.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {heading}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
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
