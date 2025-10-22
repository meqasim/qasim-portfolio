"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
export function ThemeToggle(){
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass rounded-xl p-2"
      title="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}