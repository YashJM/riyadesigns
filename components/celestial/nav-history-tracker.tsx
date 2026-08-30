"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Module-scope counter (persists across client-side route pushes within the
 * same session, since Next.js App Router keeps the JS runtime alive between
 * navigations — only a hard reload resets it). `document.referrer` doesn't
 * update on client-side navigation, so it can't tell us this; this can.
 */
let pagesVisitedThisSession = 0;

export function hasInternalHistory() {
  return pagesVisitedThisSession > 1;
}

/** Mount once per page inside the shared shell to keep the counter current. */
export function NavHistoryTracker() {
  const pathname = usePathname();

  useEffect(() => {
    pagesVisitedThisSession += 1;
  }, [pathname]);

  return null;
}
