import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="container grid md:grid-cols-2 gap-8 items-center py-12">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-widest text-emerald-500">Hi, I&apos;m</p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          HaFiZ
          <br />
          MuHaMMaD QaSiM
        </h1>
        <p className="opacity-80">
          Full-stack developer specializing in Next.js, TypeScript and modern UI.
        </p>
        <div className="flex gap-3">
          <Link href="/en/contact" className="px-4 py-2 rounded-md bg-emerald-600 text-white">Hire Me</Link>
          <Link href="/en/projects" className="px-4 py-2 rounded-md border border-foreground/20">Projects</Link>
        </div>
      </div>

      <div className="relative w-full aspect-[4/5] md:aspect-square">
        {/* Ensure /public/hero.png exists. Adjust path if your photo is named differently. */}
        <Image src="/hero.png" alt="Hafiz Muhammad Qasim" fill className="object-contain object-right" priority />
      </div>
    </section>
  );
}

export default Hero;