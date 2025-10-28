"use client";
import {useLocale} from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import {locales} from "@/i18n/routing";

export function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: string) {
    if (!pathname) return;
    const parts = pathname.split("/");
    parts[1] = next; // replace locale segment
    router.push(parts.join("/"));
  }

  return (
    <div className="flex gap-2 text-sm">
      {locales.map(l => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={`underline ${l===locale ? "opacity-100" : "opacity-60"}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}