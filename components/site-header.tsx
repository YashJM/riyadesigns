import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Riya Patel <span className="text-brand">🌷</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium md:gap-8 md:text-base">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
