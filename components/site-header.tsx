"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isNavRouteActive } from "@/lib/nav-active";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname() ?? "";

  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className={`text-lg font-semibold tracking-tight transition-[color,transform] duration-200 ${
              pathname === "/" ? "text-brand" : "text-foreground hover:text-brand/90 active:scale-[0.99]"
            }`}
            aria-current={pathname === "/" ? "page" : undefined}
          >
          Riya Patel <span className="text-brand">🌷</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm md:gap-8 md:text-base">
          {navItems.map((item) => {
            const active = isNavRouteActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 font-medium transition-[color,background-color,transform] duration-200 ${
                  active
                    ? "bg-white/90 text-brand shadow-sm ring-1 ring-black/10"
                    : "text-foreground hover:bg-white/70 hover:text-brand active:scale-[0.98]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
