import "@/app/globals.css";
import type {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {getDir} from "@/i18n/routing";
import {Navbar} from "@/components/site/Navbar";
import {Footer} from "@/components/site/Footer";
import {ThemeScript} from "@/components/site/ThemeScript";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale ?? "en";
  const messages = (await import(`@/messages/${l}.json`)).default;
  const dir = getDir(l as any);

  return (
    <html lang={l} dir={dir} className="dark">
      <body>
        <ThemeScript />
        <NextIntlClientProvider messages={messages} locale={l}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}