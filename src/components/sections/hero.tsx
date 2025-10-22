"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="container-page py-10 lg:py-16 grid gap-10 lg:grid-cols-2 items-center">
      {/* LEFT: copy */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Muhammad Qasim</h1>
        <p className="opacity-80">{t("hero.subtitle")}</p>
        <p className="opacity-70 max-w-prose">{t("hero.blurb")}</p>

        <div className="flex gap-3 pt-4">
          <a className="btn btn-primary" href="/contact">{t("cta.hire")}</a>
          <a className="btn btn-secondary" href="/cv.pdf" download>{t("cta.cv")}</a>
          <a className="btn btn-accent" href="https://wa.me/923410592668" target="_blank" rel="noreferrer">{t("cta.whatsapp")}</a>
        </div>
      </div>

      {/* RIGHT: full-body portrait */}
      <div className="relative w-full max-w-[420px] aspect-[3/4] justify-self-end glass overflow-hidden">
        <Image
          src="/images/qasim-full.png"
          alt={t("alt.fullBody")}
          fill
          sizes="(max-width:1024px) 80vw, 420px"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}