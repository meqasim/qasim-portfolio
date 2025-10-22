import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ThemeToggle } from "@/components/site/theme-toggle";

export async function Navbar({ locale }: { locale: "en" | "ur" | "ar" }) {
  const t = await getTranslations({ locale });

  const items = [
    { href: `/${locale}`, label: t("nav.home") },
    { href: `/${locale}/projects`, label: t("nav.projects") },
    { href: `/${locale}/services`, label: t("nav.services") },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
    { href: `/${locale}/resume`, label: t("nav.resume") },
  ];

  const langs = [
    { code: "en", label: "EN" },
    { code: "ur", label: "اردو" },
    { code: "ar", label: "العربية" }
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container-page grid grid-cols-3 items-center h-14">
        {/* Left: two-line brand as requested */}
        <Link href={`/${locale}`} className="leading-tight font-semibold select-none">
          <div className="text-base">HaFiZ</div>
          <div className="text-base">MuHaMMaD QaSiM</div>
        </Link>

        {/* Center: route links */}
        <nav className="justify-self-center hidden md:flex gap-5">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="opacity-80 hover:opacity-100 text-sm">
              {it.label}
            </Link>
          ))}
        </nav>

        {/* Right: language buttons + theme toggle */}
        <div className="justify-self-end flex items-center gap-2">
          <div className="hidden sm:flex gap-2 text-xs">
            {langs.map(l => (
              <Link
                key={l.code}
                href={`/${l.code}`}
                className={`px-2 py-1 rounded-md border border-white/15 hover:border-white/30 transition ${
                  l.code===locale ? "underline" : "opacity-80 hover:opacity-100"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}