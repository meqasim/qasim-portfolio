"use client";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <button className="px-2 py-1">🌙</button>;

  const isDark = (resolvedTheme ?? "dark") === "dark";
  return (
    <button
      aria-label="Toggle theme"
      className="px-2 py-1 rounded hover:opacity-80"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light" : "Switch to dark"}
    >
      {isDark ? "☀" : "🌙"}
    </button>
  );
}