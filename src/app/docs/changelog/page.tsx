import Link from "next/link";

export default function ChangelogPage() {
  return (
    <article className="mx-auto max-w-2xl px-8 py-12">
      <p className="mb-6 text-xs text-gray-400">
        Docs <span className="text-gray-300">/</span> Changelog
      </p>
      <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
        Changelog
      </h1>
      <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
        Version history, notable changes, and migration notes.
      </p>
      <p className="text-sm text-gray-400">Full content coming soon.</p>
      <div className="mt-14 flex justify-start border-t border-gray-100 pt-6">
        <Link href="/docs/examples" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          ← Examples
        </Link>
      </div>
    </article>
  );
}
