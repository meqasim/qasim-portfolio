"use client";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function ServicesTeaser() {
  const t = useTranslations();
  const loc = useLocale() as "en"|"ur"|"ar";
  return (
    <section className="container-page py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{t("sections.services")}</h2>
        <Link href={`/${loc}/services`} className="text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
          See all
        </Link>
      </div>
      <p className="opacity-70 text-sm mt-2">Services cards coming on the Services page.</p>
    </section>
  );
}