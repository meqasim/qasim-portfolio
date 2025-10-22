import type { ReactNode } from "react";
import { getLocale } from "next-intl/server";
import "./globals.css";

export default async function RootLayout({ children }: { children: ReactNode }) {
  let locale = "en";
  try { locale = await getLocale(); } catch {}
  const dir = locale === "ur" || locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="dark" suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}