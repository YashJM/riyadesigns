"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { hasInternalHistory } from "@/components/celestial/nav-history-tracker";

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 12H5M11 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const cls =
  "celestial-glass inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-celestial-muted hover:text-celestial-fg";

/**
 * Prefers real browser history (so it returns to wherever the visitor
 * actually came from — home, /work, /case-studies) and only falls back to
 * the hardcoded listing link when there's no page before this one in the
 * session, e.g. a direct/shared link landing straight on the case study.
 * Uses an in-session page-visit counter rather than `document.referrer`,
 * which never updates across Next.js client-side navigations.
 */
export function BackButton({ fallbackHref, fallbackLabel }: { fallbackHref: string; fallbackLabel: string }) {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(hasInternalHistory());
  }, []);

  if (canGoBack) {
    return (
      <button type="button" onClick={() => router.back()} className={cls}>
        <ArrowLeft />
        Back
      </button>
    );
  }

  return (
    <Link href={fallbackHref} className={cls}>
      <ArrowLeft />
      {fallbackLabel}
    </Link>
  );
}
