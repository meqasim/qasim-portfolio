"use client";
import { useTranslations } from "next-intl";
import { TESTIMONIALS } from "@/content/testimonials";

export function Testimonials() {
  const t = useTranslations("sections");
  return (
    <section className="container-page py-10 space-y-6">
      <h2 className="text-xl font-semibold">{t("testimonials")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((x, i) => (
          <div key={i} className="glass p-5">
            <div className="text-sm opacity-70">{x.role}</div>
            <div className="font-medium">{x.name}</div>
            <p className="opacity-80 pt-2">“{x.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}