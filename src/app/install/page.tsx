// src/app/install/page.tsx
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";

function CodeBlock({ command }: { command: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-[#0c0c0c] px-4 py-3.5">
      <code className="font-mono text-[12px] text-slate-200">
        <span className="text-orange-400">/</span> {command}
      </code>
      <CopyButton text={`/${command}`} />
    </div>
  );
}

function Step({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-sm font-black text-orange-500">
        {num}
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-[15px] font-bold text-gray-900">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default function InstallPage() {
  return (
    <>
      <Nav />
      <div className="bg-[#fffbf8]">
        {/* Hero */}
        <div className="mx-auto max-w-2xl px-6 pb-14 pt-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <Image src="/icon.png" alt="Beacon" width={16} height={16} />
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Installation
            </p>
          </div>
          <h1 className="mb-5 text-5xl font-extrabold leading-[1.06] tracking-tighter text-gray-900">
            Up and running in{" "}
            <span className="text-orange-500">60 seconds.</span>
          </h1>
          <p className="text-lg leading-relaxed text-gray-500">
            Beacon is a Claude Code skill — no build step, no config file, no
            dependencies.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto flex max-w-2xl flex-col gap-4 px-6 pb-14">
          <Step num="1" title="Open Claude Code in your project">
            <p className="mb-3 text-sm leading-relaxed text-gray-500">
              Navigate to any project directory and open Claude Code. You'll
              need Claude Code v1.0 or later.
            </p>
            <div className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm text-orange-900">
              <strong>Don&apos;t have Claude Code?</strong> Download it at{" "}
              <a
                href="https://claude.ai/code"
                className="underline hover:text-orange-700"
              >
                claude.ai/code
              </a>{" "}
              — it takes about a minute.
            </div>
          </Step>

          <Step num="2" title="Install the Beacon skill">
            <p className="mb-3 text-sm leading-relaxed text-gray-500">
              Run this command inside Claude Code to add Beacon to your skill
              set:
            </p>
            <CodeBlock command="install beacon" />
          </Step>

          <Step num="3" title="Run Beacon on your codebase">
            <p className="mb-3 text-sm leading-relaxed text-gray-500">
              Point Beacon at your project root. It scans your files and
              builds a report — no config needed:
            </p>
            <CodeBlock command="beacon" />
          </Step>

          <Step num="4" title="You're done — check your report">
            <p className="text-sm leading-relaxed text-gray-500">
              Beacon writes a structured report to{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs text-gray-700">
                .beacon/report.md
              </code>{" "}
              in your project root. It&apos;s ready for you and your AI tools
              to use immediately.
            </p>
          </Step>
        </div>

        {/* Docs bridge CTA */}
        <div className="border-t border-gray-100 py-16 text-center">
          <p className="mb-4 text-sm text-gray-400">Want to go deeper?</p>
          <Link
            href="/docs"
            className="inline-block rounded-full bg-orange-500 px-8 py-3 text-sm font-bold text-white shadow-md shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-orange-300"
          >
            View the Docs →
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
