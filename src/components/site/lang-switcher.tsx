"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Globe} from "lucide-react";

export default function LangSwitcher() {
  const pathname = usePathname() || "/en";
  const segs = pathname.split("/").filter(Boolean);
  const current = (segs[0] || "en") as "en" | "ur" | "ar";
  const rest = segs.slice(1).join("/");
  const to = (loc: "en" | "ur" | "ar") => `/${loc}${rest ? "/" + rest : ""}`;

  return (
    <div className="inline-flex items-center gap-1">
      <Globe size={16} className="opacity-70" />
      {(["en","ur","ar"] as const).map((loc) => (
        <Link
          key={loc}
          href={to(loc)}
          className={
            "px-2 py-1 rounded text-xs ring-1 ring-white/10 " +
            (loc === current ? "bg-emerald-600/15 text-emerald-400" : "hover:bg-white/5")
          }
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}