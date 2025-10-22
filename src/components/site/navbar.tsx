'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useLocale} from 'next-intl';
import {LangSwitcher} from './lang-switcher';
import {ThemeToggle} from './theme-toggle';

const NAV = [
  {slug: '', label: 'Home'},
  {slug: 'projects', label: 'Projects'},
  {slug: 'services', label: 'Services'},
  {slug: 'about', label: 'About'},
  {slug: 'contact', label: 'Contact'},
  {slug: 'resume', label: 'Resume'},
];

function isActive(pathname: string, locale: string, slug: string) {
  const seg = pathname.replace(/^\/(en|ur|ar)/, '').replace(/^\//, '');
  if (slug === '') return seg === '' || seg === '#';
  return seg.startsWith(slug);
}

export function Navbar() {
  const locale = useLocale();
  const pathname = usePathname() ?? `/${locale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-4">
        {/* Brand (two lines) */}
        <Link href={`/${locale}`} className="leading-tight">
          <span className="block text-[10px] tracking-[0.35em] uppercase text-emerald-300/90">HaFiZ</span>
          <span className="block text-sm font-semibold">MuHaMMaD QaSiM</span>
        </Link>

        {/* Centered routes */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-2 rounded-xl bg-white/5 px-2 py-1 ring-1 ring-white/10">
            {NAV.map(({slug, label}) => {
              const href = `/${locale}/${slug}`.replace(/\/+$/, '').replace(/\/$/, '') || `/${locale}`;
              const active = isActive(pathname, locale, slug);
              return (
                <li key={slug}>
                  <Link
                    href={href || `/${locale}`}
                    className={[
                      'px-3 py-1.5 text-sm rounded-md transition-colors',
                      active
                        ? 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30'
                        : 'text-neutral-300 hover:text-emerald-300',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
