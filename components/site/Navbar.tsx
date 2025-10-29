"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import {site} from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LangDropdown } from "./LangDropdown";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

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
function useActive(href:string){
  const pathname = normalize(usePathname() || "/");
  const hrefN = normalize(href);
  return isLocaleHome(hrefN)
    ? pathname === hrefN
    : pathname === hrefN || pathname.startsWith(hrefN + "/");
}

function NavPill({href,label}:{href:string;label:string}) {
  const active = useActive(href);
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
  const t = useTranslations("nav");
  const locale = useLocale();
  const L = (p:string) => `/${locale}${p}`;

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setMounted(true), []);
  useEffect(() => { setOpen(false); }, [pathname]); // close panel on nav

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top bar */}
        <div className="flex h-14 items-center justify-between gap-3">
          <Link
            href={L("/")}
            className="font-semibold tracking-tight transition-colors hover:text-[var(--primary)]"
          >
            {site.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            <NavPill href={L("/")}       label={t("home")} />
            <NavPill href={L("/about")}  label={t("about")} />
            <NavPill href={L("/blog")}   label={t("blog")} />
            <NavPill href={L("/contact")}label={t("contact")} />
            <NavPill href={L("/resume")} label={t("resume")} />
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {mounted ? (<><LangDropdown /><ThemeToggle /></>) : (<div className="h-9 w-[90px] rounded-2xl border border-[var(--border)]" />)}
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl bg-[var(--primary)] text-black hover:opacity-90">Hire</Button>
            </a>
          </div>

          {/* Mobile: just a Menu button on top bar */}
          <div className="md:hidden">
            <Button
              variant="secondary"
              className="rounded-2xl"
              aria-expanded={open}
              aria-controls="mobile-menu-panel"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              title={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={16}/> : <Menu size={16}/>}
            </Button>
          </div>
        </div>

        {/* Mobile dropdown panel (in-flow -> pushes hero down) */}
        <div
          id="mobile-menu-panel"
          aria-labelledby="mobile-menu-title"
          className={[
            "md:hidden overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_lab,var(--background)_85%,transparent)] backdrop-blur",
            "transition-all duration-300",
            open ? "max-h-[80vh] mt-2 py-3" : "max-h-0 mt-0 py-0"
          ].join(" ")}
        >
          <div className="px-3">
            <div className="mb-3 flex items-center justify-between">
              <h2 id="mobile-menu-title" className="text-sm font-medium">{site.name}</h2>
              <div className="flex items-center gap-2">
                {mounted ? (<><LangDropdown /><ThemeToggle /></>) : (<div className="h-9 w-[90px] rounded-2xl border border-[var(--border)]" />)}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Link href={L("/")}       className="rounded-full px-3 py-2 text-[15px] hover:bg-[color-mix(in_lab,var(--primary)_12%,transparent)] data-[active=true]:bg-[color-mix(in_lab,var(--primary)_18%,transparent)]" data-active={useActive(L("/"))}> {t("home")} </Link>
              <Link href={L("/about")}  className="rounded-full px-3 py-2 text-[15px] hover:bg-[color-mix(in_lab,var(--primary)_12%,transparent)] data-[active=true]:bg-[color-mix(in_lab,var(--primary)_18%,transparent)]" data-active={useActive(L("/about"))}> {t("about")} </Link>
              <Link href={L("/blog")}   className="rounded-full px-3 py-2 text-[15px] hover:bg-[color-mix(in_lab,var(--primary)_12%,transparent)] data-[active=true]:bg-[color-mix(in_lab,var(--primary)_18%,transparent)]" data-active={useActive(L("/blog"))}> {t("blog")} </Link>
              <Link href={L("/contact")}className="rounded-full px-3 py-2 text-[15px] hover:bg-[color-mix(in_lab,var(--primary)_12%,transparent)] data-[active=true]:bg-[color-mix(in_lab,var(--primary)_18%,transparent)]" data-active={useActive(L("/contact"))}> {t("contact")} </Link>
              <Link href={L("/resume")} className="rounded-full px-3 py-2 text-[15px] hover:bg-[color-mix(in_lab,var(--primary)_12%,transparent)] data-[active=true]:bg-[color-mix(in_lab,var(--primary)_18%,transparent)]" data-active={useActive(L("/resume"))}> {t("resume")} </Link>
            </div>

            <Separator className="my-3" />
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="block">
              <Button className="w-full rounded-2xl bg-[var(--primary)] text-black hover:opacity-90">Hire</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}