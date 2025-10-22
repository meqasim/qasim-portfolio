"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero({ locale }: { locale: "en"|"ur"|"ar" }) {
  const t = useTranslations();

  return (
    <section className="container-page py-10 lg:py-16 grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Muhammad Qasim</h1>
        <p className="opacity-80">{t("hero.subtitle")}</p>
        <p className="opacity-70 max-w-prose">{t("hero.blurb")}</p>

        <div className="flex gap-3 pt-4">
          <a className="btn btn-primary" href="#contact">{t("cta.hire")}</a>
          <a className="btn btn-secondary" href="/cv.pdf" download>{t("cta.cv")}</a>
          <a className="btn btn-accent" href="https://wa.me/923410592668" target="_blank" rel="noreferrer">{t("cta.whatsapp")}</a>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] rounded-2xl glass overflow-hidden">
        <Image
          src="/images/qasim-full.png"            // <-- PNG path in /public/images
          alt={t("alt.fullBody")}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}