import type {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export const runtime = "edge";

const SUPPORTED = ["en","ur","ar"] as const;
type Locale = (typeof SUPPORTED)[number];
const normalizeLocale = (x: string): Locale =>
  (SUPPORTED as readonly string[]).includes(x) ? (x as Locale) : "en";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = normalizeLocale(raw);
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <NextIntlClientProvider locale={locale} messages={messages as any} timeZone="Asia/Karachi">
        <Navbar />
        <main className="pb-16">
          <div className="container mx-auto px-4">{children}</div>
        </main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}