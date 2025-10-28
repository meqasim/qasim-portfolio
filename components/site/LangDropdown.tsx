"use client";
import {useLocale} from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import {locales} from "@/i18n/routing";
import {Languages} from "lucide-react";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

export function LangDropdown() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: string) {
    if (!pathname) return;
    const parts = pathname.split("/");
    parts[1] = next;
    router.push(parts.join("/"));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-2xl border border-[var(--border)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          aria-label="Change language" title="Change language"
        >
          <Languages size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map(l => (
          <DropdownMenuItem key={l} onClick={() => switchTo(l)}>
            {l.toUpperCase()} {l === locale ? "✓" : ""}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}