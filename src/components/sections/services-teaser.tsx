"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { SERVICES } from "@/content/services";

export function ServicesTeaser() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="container-page py-12 space-y-6" id="services">
      <h2 className="text-xl font-semibold">{t("sections.services")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div key={i} className="glass p-5">
            <div className="font-medium">{s.title}</div>
            <ul className="mt-2 list-disc ms-5 opacity-80 text-sm">
              {s.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Link href={`/${locale}/services`} className="text-sm underline opacity-80 hover:opacity-100">
          View all services →
        </Link>
      </div>
    </section>
  );
}