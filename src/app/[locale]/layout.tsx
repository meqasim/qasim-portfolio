import type {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import Navbar from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const SUPPORTED = ["en", "ur", "ar"] as const;
type Locale = typeof SUPPORTED[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale: raw} = await params;
  const locale: Locale = (SUPPORTED as readonly string[]).includes(raw) ? (raw as Locale) : "en";
  const messages = (await import(`../../../messages/${locale}.json`)).default as Record<string, string>;
  const dir = locale === "ar" || locale === "ur" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div dir={dir} className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}