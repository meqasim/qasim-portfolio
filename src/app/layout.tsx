﻿import "./globals.css";
import type { ReactNode } from "react";
import { Providers } from "@/components/site/providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}