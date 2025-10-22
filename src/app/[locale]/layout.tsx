import type {ReactNode} from "react";
import type {AbstractIntlMessages} from "next-intl";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import Script from "next/script";
import Navbar from "@/components/site/navbar";
import {Footer} from "@/components/site/footer";

export const runtime = "edge";

const SUPPORTED = ["en","ur","ar"] as const;
type Locale = (typeof SUPPORTED)[number];
const isRTL = (l: Locale) => l === "ar";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (SUPPORTED.includes(raw as Locale) ? (raw as Locale) : "en") as Locale;

  setRequestLocale(locale);
  const messages = await getMessages<AbstractIntlMessages>();

  return (
    <html lang={locale} dir={isRTL(locale) ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <Script id="mq-theme-init" strategy="beforeInteractive">
          {`(function(){try{
              var s=localStorage.getItem('theme');
              var d=window.matchMedia('(prefers-color-scheme: dark)').matches;
              var t=(s==='light'||s==='dark')?s:(d?'dark':'light');
              var r=document.documentElement;
              if(t==='dark'){ r.classList.add('dark'); } else { r.classList.remove('dark'); }
              r.setAttribute('data-theme',t);
            }catch(e){}})();`}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-gray-950 dark:text-neutral-200">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="pb-16">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}