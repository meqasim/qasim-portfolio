"use client";
import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light"|"dark">("dark");

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    setTheme(initial as "light"|"dark");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.dataset.theme = "dark";
    } else {
      root.classList.remove("dark");
      root.dataset.theme = "light";
    }
    localStorage.setItem("theme", theme);
  }, [mounted, theme]);

  if (!mounted) {
    return <button aria-label="Toggle theme" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
    >
      {theme === "dark" ? <Moon size={16}/> : <Sun size={16}/>}
    </button>
  );
}