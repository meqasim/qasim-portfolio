"use client";

type Props = { locale: "en" | "ur" | "ar" };

export function Hero({ locale }: Props) {
  const isRTL = locale === "ur" || locale === "ar";
  return (
    <section className="container-page py-16 grid lg:grid-cols-[1fr,480px] gap-10 items-center">
      <div className="space-y-5">
        <h1 className="text-4xl font-semibold">Muhammad Qasim</h1>
        <p className="opacity-80">Full-Stack Web Developer & Blogger</p>
        <p className="opacity-70 max-w-prose">
          I build fast, clean, business-ready web apps with Next.js, TypeScript, and Tailwind.
        </p>
        <div className="flex gap-3 pt-2">
          <a className="rounded-full px-4 py-2 bg-[--color-primary] text-black">Hire Me</a>
          <a className="rounded-full px-4 py-2 glass">Download CV</a>
          <a href="https://wa.me/923410592668" className="rounded-full px-4 py-2 glass">WhatsApp</a>
        </div>
      </div>

      <div className="relative h-[520px] rounded-2xl glass overflow-hidden">
        {/* Use plain <img> so we can do easy runtime fallback from .jpg → .png */}
        <img
          src="/images/qasim-full.jpg"
          alt={isRTL ? "محمد قاسم کی پورے قد کی تصویر" : "Full-body portrait of Muhammad Qasim"}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            if (!el.dataset.fallback) {
              el.dataset.fallback = "1";
              el.src = "/images/qasim-full.png"; // try PNG if JPG missing
            }
          }}
          style={{
            maskImage:
              "radial-gradient(120% 120% at 80% 20%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(120% 120% at 80% 20%, black 70%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white/65 text-sm">
          Replace with /public/images/qasim-full.jpg (or .png)
        </div>
      </div>
    </section>
  );
}