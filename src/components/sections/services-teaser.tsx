"use client";
import { useTranslations } from "next-intl";
import { SERVICES } from "@/content/services";

export function ServicesTeaser() {
  const t = useTranslations("sections");
  return (
    <section id="services" className="container-page py-10 space-y-6">
      <h2 className="text-xl font-semibold">{t("services")}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <div key={i} className="glass p-5 space-y-2">
            <h3 className="font-medium">{s.title}</h3>
            <ul className="list-disc pl-5 opacity-80">
              {s.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <a href="/en#services" className="underline opacity-80 hover:opacity-100">View all services →</a>
    </section>
  );
}