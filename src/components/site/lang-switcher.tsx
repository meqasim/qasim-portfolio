'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useLocale} from 'next-intl';

export function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname() ?? '/';
  const rest = pathname.replace(/^\/(en|ur|ar)/, '') || '';

  const LOCALES = ['en', 'ur', 'ar'] as const;

  return (
    <div className="inline-flex overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10">
      {LOCALES.map(l => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          className={[
            'px-2 py-1 text-[11px] uppercase',
            l === locale ? 'bg-emerald-400/20 text-emerald-200' : 'text-neutral-300 hover:text-emerald-200',
          ].join(' ')}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
