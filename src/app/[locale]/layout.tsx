import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: "en" | "ur" | "ar" }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
  const dir = locale === "ur" || locale === "ar" ? "rtl" : "ltr";

  return (
    <div data-locale={locale} dir={dir}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar locale={locale} />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}