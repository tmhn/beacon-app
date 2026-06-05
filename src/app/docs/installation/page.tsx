import Link from "next/link";

export default function InstallationPage() {
  return (
    <article className="mx-auto max-w-2xl px-8 py-12">
      <p className="mb-6 text-xs text-gray-400">
        Docs <span className="text-gray-300">/</span> Installation
      </p>
      <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
        Installation
      </h1>
      <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
        Full installation instructions, system requirements, and troubleshooting steps.
      </p>
      <p className="mb-6 text-sm text-gray-400">Full content coming soon.</p>
      <p className="text-sm text-gray-500">
        Looking to get started now?{" "}
        <Link href="/install" className="font-semibold text-orange-500 hover:text-orange-600">
          See the install guide →
        </Link>
      </p>
      <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
        <Link href="/docs/what-is-beacon" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          ← What is Beacon?
        </Link>
        <Link href="/docs/requirements" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          Requirements →
        </Link>
      </div>
    </article>
  );
}
