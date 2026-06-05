import Link from "next/link";

export default function WhatIsBeaconPage() {
  return (
    <article className="mx-auto max-w-2xl px-8 py-12">
      <p className="mb-6 text-xs text-gray-400">
        Docs <span className="text-gray-300">/</span> What is Beacon?
      </p>
      <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
        What is Beacon?
      </h1>
      <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
        An overview of Beacon&apos;s purpose, how it fits into the Claude Code
        ecosystem, and when you&apos;d reach for it.
      </p>
      <p className="text-sm text-gray-400">Full content coming soon.</p>
      <div className="mt-14 flex justify-between border-t border-gray-100 pt-6">
        <Link href="/docs" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          ← Getting started
        </Link>
        <Link href="/docs/installation" className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          Installation →
        </Link>
      </div>
    </article>
  );
}
