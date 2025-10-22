export const runtime = 'edge';
import "./globals.css";
import type { ReactNode } from "react";
import { Providers } from "@/components/site/providers";
import { getLocale } from "next-intl/server";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const dir = locale === "ar" || locale === "ur" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}