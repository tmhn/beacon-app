"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable or permission denied — fail silently
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="whitespace-nowrap rounded-md border border-white/10 bg-white/8 px-2.5 py-1 text-[11px] font-semibold text-gray-400 transition-colors hover:text-gray-200"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
