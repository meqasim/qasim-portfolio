"use client";
import Link from "next/link";
import { useLocale } from "next-intl";

type L = "en"|"ur"|"ar";
const LOCALES: L[] = ["en","ur","ar"];

export function LangSwitcher() {
  const current = (useLocale() as L) ?? "en";
  return (
    <div className="flex items-center gap-1">
      {LOCALES.map(code => (
        <Link
          key={code}
          href={`/${code}`}
          className={"px-2 py-1 rounded text-xs border " + (code===current ? "border-white/80 opacity-100" : "border-white/20 opacity-70 hover:opacity-100")}
        >
          {code.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}