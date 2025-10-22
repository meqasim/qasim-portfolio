import type {ReactNode} from 'react';
import './globals.css';
import {Providers} from '@/components/site/providers';

export const runtime = 'edge';

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          min-h-screen text-neutral-200
          bg-gray-950
          dark:text-neutral-200
          [--mx:rgba(16,94,78,0.35)]
          [--my:rgba(16,94,78,0.18)]
          bg-[radial-gradient(1200px_600px_at_10%_8%,var(--mx),transparent_40%),radial-gradient(1200px_600px_at_90%_96%,var(--my),transparent_45%)]
        "
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
