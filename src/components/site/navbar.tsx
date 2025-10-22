"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/20">
      <nav className="container-page flex h-12 items-center gap-3">
        <Link href="/en" className="font-semibold">MQ</Link>

        <div className="ml-auto hidden md:flex items-center gap-4">
          <Link className="navlink" href="/en">{t("home")}</Link>
          <Link className="navlink" href="/en#projects">{t("projects")}</Link>
          <Link className="navlink" href="/en#services">{t("services")}</Link>
          <Link className="navlink" href="/en#about">{t("about")}</Link>
          <Link className="navlink" href="/en#contact">{t("contact")}</Link>
          <Link className="navlink" href="/en#resume">{t("resume")}</Link>

          {/* Language switch (simple links) */}
          <div className="ml-2 flex items-center gap-2">
            <Link className="langlink" href="/en">EN</Link>
            <span className="opacity-30">|</span>
            <Link className="langlink" href="/ur">اردو</Link>
            <span className="opacity-30">|</span>
            <Link className="langlink" href="/ar">العربية</Link>
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}