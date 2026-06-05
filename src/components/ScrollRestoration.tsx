"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const prev = useRef(pathname);

  useEffect(() => {
    if (prev.current !== pathname) {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
      prev.current = pathname;
    }
  }, [pathname]);

  return null;
}
