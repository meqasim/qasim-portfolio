'use client';
import {Moon, Sun} from 'lucide-react';
import {useTheme} from 'next-themes';

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const isDark = (resolvedTheme ?? 'dark') === 'dark';

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
