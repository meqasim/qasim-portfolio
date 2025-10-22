import type {ReactNode} from "react";
import type {AbstractIntlMessages} from "next-intl";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";

export const runtime = "edge";

const SUPPORTED = ["en","ur","ar"] as const;
type Locale = (typeof SUPPORTED)[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params;
  const active = (SUPPORTED as readonly string[]).includes(locale) ? (locale as Locale) : "en";
  setRequestLocale(active);
  const messages = (await getMessages()) as AbstractIntlMessages;

  // Early theme bootstrap to avoid dark-only or flicker
  const themeBootstrap = `(function(){try{var s=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=s|| (d?"dark":"light");var r=document.documentElement;if(t==="dark"){r.classList.add("dark");r.dataset.theme="dark";}else{r.classList.remove("dark");r.dataset.theme="light";}}catch(e){}})();`;

  return (
    <html lang={active} dir={active === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: themeBootstrap}} />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <NextIntlClientProvider locale={active} messages={messages} timeZone="Asia/Karachi">
          <Navbar />
          {/* Page sections render inside their own containers */}
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}