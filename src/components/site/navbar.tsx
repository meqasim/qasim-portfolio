"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import LangSwitcher from "@/components/site/lang-switcher";
import ThemeToggle from "@/components/site/theme-toggle";

const LINKS = [
  {href: "/", label: "Home"},
  {href: "/projects", label: "Projects"},
  {href: "/services", label: "Services"},
  {href: "/about", label: "About"},
  {href: "/contact", label: "Contact"},
  {href: "/resume", label: "Resume"},
] as const;

export default function Navbar() {
  const pathname = usePathname() || "/en";
  const localeMatch = pathname.match(/^\/(en|ur|ar)(?:\/|$)/);
  const locale = (localeMatch?.[1] || "en") as "en" | "ur" | "ar";
  const withLocale = (p: string) => `/${locale}${p === "/" ? "" : p}`;

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Link href={withLocale("/")} className="font-semibold">
          HaFiZ <span className="text-emerald-500">MuHaMMaD QaSiM</span>
        </Link>

        <nav className="hidden md:flex gap-1">
          {LINKS.map((l) => {
            const href = withLocale(l.href);
            const active = pathname === href;
            return (
              <Link
                key={l.href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  "px-3 py-1.5 rounded-md text-sm " +
                  (active
                    ? "bg-emerald-600/15 text-emerald-400 ring-1 ring-emerald-500/30"
                    : "hover:bg-white/5")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}