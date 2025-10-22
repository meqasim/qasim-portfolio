"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { PROFILE } from "@/content/site";

export function Hero({ locale }: { locale: "en"|"ur"|"ar" }) {
  const t = useTranslations();
  return (
    <section className="container-page py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
      {/* Left copy */}
      <div className="space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t("hero.title")}</h1>
        <p className="text-xl opacity-90">{t("hero.subtitle")}</p>
        <p className="opacity-75 max-w-prose">{t("hero.blurb")}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={`mailto:${PROFILE.email}`} className="glass rounded-xl px-4 py-2"> {t("cta.hire")} </a>
          <Link href={`/${locale}/resume`} className="rounded-xl px-4 py-2 border border-white/20 hover:border-white/40 transition"> {t("cta.cv")} </Link>
          <a href={PROFILE.whatsapp} target="_blank" className="rounded-xl px-4 py-2 bg-primary hover:opacity-90 transition"> {t("cta.whatsapp")} </a>
        </div>
      </div>

      {/* Right photo */}
      <div className="glass rounded-2xl overflow-hidden h-[520px] md:h-[640px]">
        <div className="relative w-full h-full">
          <Image
            src="/images/qasim-full.svg" /* replace with /images/qasim-full.jpg when ready */
            alt={t("alt.fullBody")}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{objectFit:"cover"}}
          />
        </div>
      </div>
    </section>
  );
}