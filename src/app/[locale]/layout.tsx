import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { cookies } from "next/headers";

export const runtime = "edge";

const SUPPORTED = ["en","ur","ar"] as const;
type Locale = (typeof SUPPORTED)[number];
const isRTL = (loc: string) => loc === "ar";
const normalizeLocale = (raw: string): Locale =>
  (SUPPORTED as readonly string[]).includes(raw) ? (raw as Locale) : "en";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  // Next 15: dynamic route params in layouts are a Promise
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);

  const messages = await getMessages();

  // Next 15 dynamic API: cookies() must be awaited
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value; // "dark" | "light"
  const htmlClass = theme === "dark" ? "dark" : "";

  return (
    <html lang={locale} dir={isRTL(locale) ? "rtl" : "ltr"} className={htmlClass} suppressHydrationWarning>
      <head />
      {/* Base is light, dark styles via .dark to avoid hydration mismatch */}
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-200 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages as any} timeZone="Asia/Karachi">
          <Navbar />
          {/* Page sections add their own container; keep outer spacing consistent */}
          <main className="pb-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}