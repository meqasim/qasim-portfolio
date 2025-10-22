"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="container-page grid lg:grid-cols-2 gap-10 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
        <p className="opacity-90">{t("hero.subtitle")}</p>
        <p className="opacity-70 max-w-prose">{t("hero.blurb")}</p>
        <div className="flex gap-3 pt-2">
          <a className="chip" href="#contact">{t("cta.hire")}</a>
          <a className="chip" href="/resume">{t("cta.cv")}</a>
          <a className="chip" href="https://wa.me/923410592668" target="_blank" rel="noreferrer">{t("cta.whatsapp")}</a>
        </div>
      </div>

      <div className="relative">
        <div className="glass p-3">
          <Image
            src="/images/qasim-full.jpg"
            alt={t("alt.fullBody")}
            width={900}
            height={1200}
            priority
            sizes="(max-width: 1024px) 100vw, 600px"
            className="w-full h-[28rem] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}