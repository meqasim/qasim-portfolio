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
  params: Promise<{ locale: "en" | "ur" | "ar" }>;
}) {
  const { locale: raw } = await params;
  const locale: "en" | "ur" | "ar" = raw === "ur" || raw === "ar" ? raw : "en";

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <Providers>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar locale={locale} />
        {children}
        <Footer locale={locale} />
      </NextIntlClientProvider>
    </Providers>
  );
}