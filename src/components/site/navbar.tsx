"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LangSwitcher } from "./lang-switcher";

const links = (locale: "en"|"ur"|"ar") => ([
  { href: `/${locale}`, label: "Home" },
  { href: `/${locale}/projects`, label: "Projects" },
  { href: `/${locale}/services`, label: "Services" },
  { href: `/${locale}/about`, label: "About" },
  { href: `/${locale}/contact`, label: "Contact" },
  { href: `/${locale}/resume`, label: "Resume" }
]);

export function Navbar({ locale }: { locale: "en"|"ur"|"ar" }){
  const nav = links(locale);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="container-page h-14 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold tracking-wide">MQ</Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <Link key={item.href} className="nav-link" href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}