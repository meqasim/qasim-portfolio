import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "@/components/site/providers";

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
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}