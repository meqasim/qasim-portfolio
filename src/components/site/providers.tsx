"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"      // uses OS preference on first load
      enableSystem
      disableTransitionOnChange  // prevents flicker on theme switch
    >
      {children}
    </ThemeProvider>
  );
}