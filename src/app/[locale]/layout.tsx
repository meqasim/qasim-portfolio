import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "@/components/site/providers";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  // Cloudflare/Next build provides Promise<{ locale: string }>
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = raw === "ur" || raw === "ar" ? (raw as "ur" | "ar") : "en";

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  const dir = locale === "ar" || locale === "ur" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale} />
            {children}
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}