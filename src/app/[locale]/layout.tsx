import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "@/components/site/providers";
import { Navbar } from "@/components/site/navbar";

/**
 * NOTE: In Next 15 dev, `params` is a Promise; on CF it’s typed as an object.
 * Accept `any`, then normalize via Promise.resolve() so both paths work.
 * Keep <html>/<body> ONLY in root layout – no nesting here.
 */
export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const { locale } = await Promise.resolve(params);
  let messages: Record<string, unknown>;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <Providers>
      <NextIntlClientProvider locale={locale as "en" | "ur" | "ar"} messages={messages}>
        <Navbar locale={locale as "en" | "ur" | "ar"} />
        {children}
      </NextIntlClientProvider>
    </Providers>
  );
}