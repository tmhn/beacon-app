"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="whitespace-nowrap rounded-md border border-white/10 bg-white/8 px-2.5 py-1 text-[11px] font-semibold text-gray-400 transition-colors hover:text-gray-200"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
