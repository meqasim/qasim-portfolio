"use client";
import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/content/site";

export function Hero({ locale }: { locale: "en" | "ur" | "ar" }) {
  return (
    <section className="container-page py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-semibold">Muhammad Qasim</h1>
          <p className="opacity-90">Full-Stack Web Developer & Blogger</p>
          <p className="opacity-75 max-w-prose">
            I build fast, clean, business-ready web apps with Next.js, TypeScript, and Tailwind.
          </p>
          <div className="flex gap-3 pt-2">
            <Link href="#contact" className="rounded-full px-4 py-2 bg-[--color-primary] text-black">Hire Me</Link>
            <Link href="/resume" className="rounded-full px-4 py-2 glass">Download CV</Link>
            <a href={PROFILE.whatsapp} className="rounded-full px-4 py-2 glass">WhatsApp</a>
          </div>
        </div>

        <figure className="relative aspect-[4/5] md:aspect-[5/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Image
            src="/images/qasim-full.jpg"
            alt="Full-body portrait of Muhammad Qasim"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 44rem"
            className="object-cover object-top"
            onError={(e) => {
              // If .jpg missing, try .png without crashing
              const img = e.currentTarget as HTMLImageElement;
              if (!img.src.endsWith(".png")) img.src = "/images/qasim-full.png";
            }}
          />
        </figure>
      </div>
    </section>
  );
}