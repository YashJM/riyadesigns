"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavRouteActive } from "@/lib/nav-active";

const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "mailto:designer.riyash@gmail.com", label: "Contact", external: true },
];

function Logo({ active }: { active: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-current={active ? "page" : undefined}
    >
      <span
        className="celestial-cta grid size-9 place-items-center rounded-[11px] text-[15px] font-extrabold tracking-tight"
        aria-hidden
      >
        RP
      </span>
      <span className="text-[17px] font-bold tracking-tight text-celestial-fg">
        Riya Patel
      </span>
    </Link>
  );
}

export function CelestialHeader() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)]">
      <div
        className={`transition-[background-color,border-color,backdrop-filter] duration-500 ease-[var(--ease-premium)] ${
          scrolled
            ? "border-b border-[var(--celestial-line)] bg-[rgba(10,14,28,0.72)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[var(--content-max)] items-center justify-between px-[max(1.25rem,env(safe-area-inset-left))] py-4">
          <Logo active={pathname === "/"} />

          <nav
            className="hidden items-center gap-1 text-[15px] font-medium text-celestial-muted md:flex"
            aria-label="Primary"
          >
            {navLinks.map((item) => {
              const active = !item.external && isNavRouteActive(pathname, item.href);
              const cls =
                "celestial-nav-link rounded-full px-3.5 py-2 transition-colors hover:text-celestial-fg";
              return item.external ? (
                <a key={item.href} href={item.href} className={cls}>
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  aria-current={active ? "page" : undefined}
                  className={`${cls} ${active ? "text-celestial-fg" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="celestial-glass grid size-10 place-items-center rounded-xl text-celestial-fg md:hidden"
            aria-expanded={open}
            aria-controls="celestial-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="celestial-mobile-nav"
          className="mx-4 mt-2 overflow-hidden rounded-2xl border border-[var(--celestial-line)] bg-[rgba(10,14,28,0.92)] backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col p-2" aria-label="Mobile">
            {navLinks.map((item) => {
              const active = !item.external && isNavRouteActive(pathname, item.href);
              const cls =
                "rounded-xl px-4 py-3.5 text-base font-medium transition-colors";
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${cls} text-celestial-muted hover:bg-white/5 hover:text-celestial-fg`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${cls} ${
                    active
                      ? "bg-white/5 text-celestial-fg"
                      : "text-celestial-muted hover:bg-white/5 hover:text-celestial-fg"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
