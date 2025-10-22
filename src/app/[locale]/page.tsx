"use client";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 space-y-6">
      <h1 className="text-3xl font-semibold">{t("hero.title")}</h1>
      <p className="opacity-80">{t("hero.subtitle")}</p>
      <p className="opacity-70 max-w-prose">{t("hero.blurb")}</p>

      <section className="mt-10 space-y-2">
        <h2 className="text-2xl font-semibold">{t("sections.projects")}</h2>
        <p className="opacity-70 text-sm">Project grid coming in Step 6.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">{t("sections.services")}</h2>
        <p className="opacity-70 text-sm">Services cards coming in Step 7.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">{t("sections.testimonials")}</h2>
        <p className="opacity-70 text-sm">Testimonials block coming in Step 6.</p>
      </section>
    </main>
  );
}