import Link from "next/link";
import { getTranslations } from "next-intl/server";

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
      <div className="container-page flex items-center h-12 gap-4">
        <Link href={`/${locale}`} className="font-semibold">MQ</Link>

        <nav className="ms-4 hidden md:flex gap-4">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="opacity-80 hover:opacity-100 text-sm">
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-3 text-xs">
          {langs.map(l => (
            <Link key={l.code}
              href={`/${l.code}`}
              className={`opacity-80 hover:opacity-100 ${l.code===locale ? "underline" : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}