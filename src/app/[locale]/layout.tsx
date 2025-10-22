import type {ReactNode} from "react";
import type {AbstractIntlMessages} from "next-intl";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export const runtime = "edge";

const SUPPORTED = ["en","ur","ar"] as const;
type Locale = typeof SUPPORTED[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as AbstractIntlMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Karachi">
      <div dir={locale === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container py-10">{children}</div>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}