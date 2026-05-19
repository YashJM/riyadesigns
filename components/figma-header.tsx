"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavRouteActive } from "@/lib/nav-active";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="text-black">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="text-black">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FigmaHeader() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [menuTopPx, setMenuTopPx] = useState(0);

  const syncMenuTop = useCallback(() => {
    const el = barRef.current;
    if (!el) return;
    setMenuTopPx(el.getBoundingClientRect().bottom);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useLayoutEffect(() => {
    if (!open) return;
    syncMenuTop();
    window.addEventListener("resize", syncMenuTop);
    window.addEventListener("scroll", syncMenuTop, true);
    return () => {
      window.removeEventListener("resize", syncMenuTop);
      window.removeEventListener("scroll", syncMenuTop, true);
    };
  }, [open, syncMenuTop]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full pt-[env(safe-area-inset-top)]">
        <div className="w-full bg-[rgba(243,135,171,0.2)] backdrop-blur-xl">
          <div
            ref={barRef}
            className="figma-shell flex min-h-[60px] items-center justify-between gap-3 py-3 md:h-[109px] md:py-0"
          >
            <Link
              href="/"
              className={`flex min-w-0 items-center gap-1.5 text-[clamp(18px,4.2vw,26px)] leading-none font-bold transition-[color,opacity,transform] duration-200 md:gap-2.5 ${
                pathname === "/"
                  ? "text-brand"
                  : "text-black hover:text-brand/90 active:scale-[0.99]"
              }`}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              <span className="truncate">Riya Patel</span>
              <Image
                src="/figma/nav-tulip.svg"
                alt=""
                width={28}
                height={33}
                aria-hidden
                className="size-[26px] shrink-0 md:h-[33px] md:w-[28px]"
              />
            </Link>

            <button
              type="button"
              className="flex h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-black/15 bg-white/90 shadow-sm md:hidden"
              aria-expanded={open}
              aria-controls="site-mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>

            <nav
              className="hidden items-center gap-0.5 text-[clamp(16px,1.4vw,24px)] font-bold leading-none md:flex md:gap-1"
              aria-label="Primary"
            >
              {navLinks.map(({ href, label }) => {
                const active = isNavRouteActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-2 py-[9px] transition-[color,background-color,transform] duration-200 md:px-3 lg:px-[18px] lg:py-[9px] ${
                      active
                        ? "bg-white/75 text-brand shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/10"
                        : "text-black hover:bg-white/45 hover:text-brand active:scale-[0.98]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-45 cursor-default bg-black/25 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="site-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="fixed left-0 right-0 z-50 overflow-y-auto overscroll-contain border-t border-[#e8b8c8] bg-[rgba(255,253,251,0.99)] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.18)] md:hidden"
            style={{
              top:
                menuTopPx > 0
                  ? `${menuTopPx}px`
                  : `calc(env(safe-area-inset-top, 0px) + 4.25rem)`,
              maxHeight:
                menuTopPx > 0
                  ? `calc(100dvh - ${menuTopPx}px)`
                  : `calc(100dvh - env(safe-area-inset-top, 0px) - 4.25rem)`,
              paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
            }}
          >
            <nav className="figma-shell flex flex-col py-3" aria-label="Mobile primary">
              {navLinks.map(({ href, label }) => {
                const active = isNavRouteActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-xl px-3 py-3.5 text-[1.05rem] font-bold transition-[background-color,color,transform] duration-200 active:scale-[0.99] ${
                      active
                        ? "bg-white/85 text-brand shadow-sm ring-1 ring-black/10"
                        : "text-black hover:bg-white/60 hover:text-brand active:bg-black/4"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
