import type {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {Navbar} from '@/components/site/navbar';
import {Footer} from '@/components/site/footer';

export const runtime = 'edge';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{locale: 'en' | 'ur' | 'ar' | string}>;
}) {
  const {locale} = await params;
  const active = (['en', 'ur', 'ar'] as const).includes(locale as any) ? locale : 'en';
  const messages = (await import(`../../../messages/${active}.json`)).default;

  return (
    <NextIntlClientProvider locale={active} messages={messages}>
      <Navbar />
      <main className="mx-auto max-w-6xl px-3 py-8 sm:px-4">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
