import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "@/components/site/providers";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import "../globals.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: "en" | "ur" | "ar" };
}) {
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
  const dir = (locale === "ur" || locale === "ar") ? "rtl" : "ltr";

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