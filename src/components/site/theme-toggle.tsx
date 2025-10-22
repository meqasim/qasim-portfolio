"use client";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      onClick={() => setTheme(next)}
      className="px-2 py-1 text-xs border border-white/20 rounded opacity-80 hover:opacity-100"
      title="Toggle theme"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}