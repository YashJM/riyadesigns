"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownloadIcon } from "@/components/celestial/download-icon";
import { ResumeNavButton } from "@/components/celestial/resume-nav-button";
import { isNavRouteActive } from "@/lib/nav-active";
import { RESUME } from "@/lib/resume";

const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function Logo({ active }: { active: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-baseline gap-[0.09em]"
      aria-current={active ? "page" : undefined}
    >
      <span className="text-[18px] font-bold tracking-[-0.02em] text-celestial-fg">
        riya
      </span>
      <span className="text-[18px] font-bold tracking-[-0.02em] text-amber-hi transition-colors group-hover:text-celestial-fg">
        patel
      </span>
      <span
        className="celestial-mono ml-0.5 text-[13px] text-amber transition-colors group-hover:text-amber-hi"
        aria-hidden
      >
        /
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

          <div className="hidden items-center gap-3 md:flex">
            <nav
              className="flex items-center text-[15px] font-medium text-celestial-muted"
              aria-label="Primary"
            >
              {navLinks.map((item, index) => {
                const active =
                  !item.external && isNavRouteActive(pathname, item.href);
                const cls =
                  "celestial-nav-link rounded-full px-3 py-2 transition-colors hover:text-celestial-fg";
                return (
                  <span key={item.href} className="flex items-center">
                    {index > 0 ? (
                      <span
                        className="celestial-mono select-none text-[13px] text-amber-hi/45"
                        aria-hidden
                      >
                        /
                      </span>
                    ) : null}
                    {item.external ? (
                      <a href={item.href} className={cls}>
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        data-active={active}
                        aria-current={active ? "page" : undefined}
                        className={`${cls} ${active ? "text-celestial-fg" : ""}`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </span>
                );
              })}
            </nav>

            <ResumeNavButton />
          </div>

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

            <a
              href={RESUME.href}
              download={RESUME.downloadName}
              aria-label={RESUME.ariaLabel}
              className="celestial-cta mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              {RESUME.label}
              <DownloadIcon size={16} />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
