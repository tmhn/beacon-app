// src/app/docs/page.tsx
import Link from "next/link";

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl bg-[#0c0c0c] px-5 py-4 font-mono text-[12px] leading-7">
      {children}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-orange-100 bg-orange-50 px-5 py-4 text-sm text-orange-900">
      {children}
    </div>
  );
}

export default function GettingStartedPage() {
  return (
    <article className="mx-auto max-w-2xl px-8 py-12">
      <p className="mb-6 text-xs text-gray-400">
        Docs <span className="text-gray-300">/</span> Getting started
      </p>

      <h1 className="mb-3 text-[32px] font-extrabold leading-tight tracking-tight text-gray-900">
        Getting started
      </h1>
      <p className="mb-10 border-b border-gray-100 pb-8 text-base leading-relaxed text-gray-500">
        Beacon is a Claude Code skill that analyses any codebase and produces
        a structured report — entry points, module graph, patterns, and
        conventions — so you and your AI tools can orient fast.
      </p>

      <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">
        Prerequisites
      </h2>
      <ul className="mb-4 list-disc pl-5 text-sm leading-7 text-gray-500">
        <li>
          Claude Code{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">
            v1.0
          </code>{" "}
          or later
        </li>
        <li>Any project directory — any language, any stack</li>
      </ul>

      <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">Install</h2>
      <p className="mb-0 text-sm leading-relaxed text-gray-500">
        Open Claude Code in any directory and run:
      </p>
      <CodeBlock>
        <span className="text-orange-400">/ </span>
        <span className="text-slate-200">install beacon</span>
      </CodeBlock>
      <p className="text-sm leading-relaxed text-gray-500">
        No config file, no build step, no dependencies.
      </p>

      <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">
        Run your first analysis
      </h2>
      <p className="mb-0 text-sm leading-relaxed text-gray-500">
        Point Beacon at your project:
      </p>
      <CodeBlock>
        <div>
          <span className="text-orange-400">/ </span>
          <span className="text-slate-200">beacon</span>
        </div>
        <div className="mt-2 text-white/35">↳ scanning 247 files ██░</div>
        <div className="mt-1">
          <span className="text-emerald-400">✓</span>
          <span className="ml-3 text-white/40">entry points  </span>
          <span className="text-white/85">2</span>
        </div>
        <div>
          <span className="text-emerald-400">✓</span>
          <span className="ml-3 text-white/40">modules       </span>
          <span className="text-white/85">47</span>
        </div>
        <div>
          <span className="text-emerald-400">✓</span>
          <span className="ml-3 text-white/40">patterns      </span>
          <span className="text-white/85">4</span>
        </div>
      </CodeBlock>

      <h2 className="mb-3 mt-8 text-lg font-bold text-gray-900">
        Read your report
      </h2>
      <p className="mb-0 text-sm leading-relaxed text-gray-500">
        Beacon writes its output to{" "}
        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">
          .beacon/report.md
        </code>{" "}
        in your project root. Open it directly, or reference it in your Claude
        Code sessions — your AI tools pick it up automatically.
      </p>
      <Callout>
        <strong>Tip:</strong> Add{" "}
        <code className="rounded bg-orange-100 px-1 py-0.5 font-mono text-xs">
          .beacon/
        </code>{" "}
        to your{" "}
        <code className="rounded bg-orange-100 px-1 py-0.5 font-mono text-xs">
          .gitignore
        </code>{" "}
        to keep reports local, or commit them to share context across your
        team.
      </Callout>

      {/* Next page nav */}
      <div className="mt-14 flex justify-end border-t border-gray-100 pt-6">
        <Link
          href="/docs/what-is-beacon"
          className="flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600"
        >
          What is Beacon? →
        </Link>
      </div>
    </article>
  );
}
