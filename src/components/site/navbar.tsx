"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangSwitcher } from "@/components/site/lang-switcher";
import { ThemeToggle } from "@/components/site/theme-toggle";

type L = "en"|"ur"|"ar";

const routes = [
  { slug: "projects", label: "Projects" },
  { slug: "services", label: "Services" },
  { slug: "about",    label: "About"    },
  { slug: "contact",  label: "Contact"  },
  { slug: "resume",   label: "Resume"   }
];

export function Navbar({ locale }: { locale: L }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[rgba(0,0,0,.35)] backdrop-blur-md border-b border-white/10">
      <nav className="container-page flex items-center justify-between py-3">
        {/* Left: Brand (two lines) */}
        <div className="leading-none font-semibold tracking-tight">
          <Link href={`/${locale}`} className="block">
            <span className="text-sm block">HaFiZ</span>
            <span className="text-lg block">MuHaMMaD QaSiM</span>
          </Link>
        </div>

        {/* Center: Routes */}
        <ul className="hidden md:flex gap-6">
          {routes.map((r) => {
            const href = `/${locale}/${r.slug}`;
            const active = pathname === href;
            return (
              <li key={r.slug}>
                <Link
                  href={href}
                  className={"text-sm transition-opacity " + (active ? "opacity-100 underline underline-offset-4" : "opacity-80 hover:opacity-100")}
                >
                  {r.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Lang + Theme */}
        <div className="flex items-center gap-3">
          <LangSwitcher current={locale} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}