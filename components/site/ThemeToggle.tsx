"use client";
import {useEffect, useState} from "react";
import {Sun, Moon} from "lucide-react";
import {Button} from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark"|"light">("dark");

  useEffect(() => {
    const t = (typeof window !== "undefined" && localStorage.getItem("theme")) || "dark";
    setTheme(t as any);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "light") { root.classList.remove("dark"); root.classList.add("light"); }
    else { root.classList.add("dark"); root.classList.remove("light"); }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      type="button"
      variant="secondary"
      className="rounded-2xl border border-[var(--border)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
      onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
      aria-label="Toggle theme" title="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}