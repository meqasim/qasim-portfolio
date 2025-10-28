"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import {site} from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { LangDropdown } from "./LangDropdown";
import { ThemeToggle } from "./ThemeToggle";

function normalize(p: string) {
  if (!p) return "/";
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}
function isLocaleHome(href: string) {
  const n = normalize(href);
  const segs = n.split("/").filter(Boolean);
  return segs.length === 1; // "/en"
}
function NavPill({href,label}:{href:string;label:string}) {
  const pathname = normalize(usePathname() || "/");
  const hrefN = normalize(href);
  const active = isLocaleHome(hrefN)
    ? pathname === hrefN
    : pathname === hrefN || pathname.startsWith(hrefN + "/");

  return (
    <Link
      href={href}
      className={[
        "rounded-full px-3 py-1 text-sm transition-colors",
        active ? "bg-[var(--primary)] text-black" : "hover:bg-[color-mix(in_lab,var(--primary)_20%,transparent)]"
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  // IMPORTANT: call all hooks on every render (no early return before hooks)
  const t = useTranslations("nav");
  const locale = useLocale();
  const L = (p:string) => `/${locale}${p}`;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between gap-3">
          <Link
            href={L("/")}
            className="font-semibold tracking-tight transition-colors hover:text-[var(--primary)]"
          >
            {site.name}
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavPill href={L("/")}       label={t("home")} />
            <NavPill href={L("/about")}  label={t("about")} />
            <NavPill href={L("/blog")}   label={t("blog")} />
            <NavPill href={L("/contact")}label={t("contact")} />
            <NavPill href={L("/resume")} label={t("resume")} />
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {/* Render Radix-based controls only after mount to avoid hydration ID mismatches */}
            {mounted ? (
              <>
                <LangDropdown />
                <ThemeToggle />
              </>
            ) : (
              /* placeholder keeps layout stable during SSR */
              <div className="h-9 w-[90px] rounded-2xl border border-[var(--border)]" />
            )}
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl bg-[var(--primary)] text-black hover:opacity-90">Hire</Button>
            </a>
          </div>

          <div className="md:hidden">
            {mounted ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" className="rounded-2xl">Menu</Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="mt-6 flex flex-col gap-3">
                    <NavPill href={L("/")}       label={t("home")} />
                    <NavPill href={L("/about")}  label={t("about")} />
                    <NavPill href={L("/blog")}   label={t("blog")} />
                    <NavPill href={L("/contact")}label={t("contact")} />
                    <NavPill href={L("/resume")} label={t("resume")} />
                    <Separator />
                    <div className="flex items-center gap-2">
                      <LangDropdown />
                      <ThemeToggle />
                    </div>
                    <a href={site.whatsapp} target="_blank" rel="noreferrer" className="mt-2">
                      <Button className="w-full rounded-2xl bg-[var(--primary)] text-black hover:opacity-90">Hire</Button>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button variant="secondary" className="rounded-2xl" disabled>Menu</Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}