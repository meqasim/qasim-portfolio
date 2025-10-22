"use client";
import Link from "next/link";
export function LangSwitcher({ locale }: { locale: "en"|"ur"|"ar" }){
  const locales: Array<["en"|"ur"|"ar", string]> = [["en","EN"],["ur","اردو"],["ar","العربية"]];
  return (
    <nav className="flex items-center gap-3">
      {locales.map(([code, label]) => (
        <Link key={code} href={`/${code}`} className={`lang-link ${locale===code ? "opacity-100" : ""}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}