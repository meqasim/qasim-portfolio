"use client";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="px-2 py-1 rounded-md border border-white/15 hover:border-white/30 transition text-xs"
      title={isDark ? "Light" : "Dark"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}