"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export function Hero() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="container-page grid md:grid-cols-2 gap-8 py-10 md:py-16">
      {/* left: copy */}
      <div className="self-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">{t("hero.title")}</h1>
        <p className="opacity-80">{t("hero.subtitle")}</p>
        <p className="opacity-70 max-w-prose">{t("hero.blurb")}</p>

        <div className="flex gap-3 pt-2">
          <a href="https://wa.me/923410592668" className="px-4 py-2 rounded border border-white/20 opacity-90 hover:opacity-100">
            {t("cta.whatsapp")}
          </a>
          <a href="/cv.pdf" className="px-4 py-2 rounded border border-white/20 opacity-90 hover:opacity-100">{t("cta.cv")}</a>
        </div>
      </div>

      {/* right: photo (kept fully visible) */}
      <div className="relative h-[420px] md:h-[560px]">
        <Image
          src="/images/qasim-full.png"
          alt={t("alt.fullBody")}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}