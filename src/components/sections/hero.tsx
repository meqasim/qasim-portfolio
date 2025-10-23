import Link from "next/link";

export function Hero() {
  return (
    <section className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center py-16">
      <div>
        <p className="text-emerald-400 text-xs uppercase tracking-widest">Hi, I&apos;m</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">HaFiZ MuHaMMaD QaSiM</h1>
        <p className="mt-2 opacity-80">
          Full-stack developer specializing in Next.js, TypeScript and modern UI.
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/en/contact" className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-500">
            Hire Me
          </Link>
          <Link href="/en/projects" className="px-4 py-2 rounded-md ring-1 ring-white/15 hover:bg-white/5">
            Projects
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="/hero.png"
          width="320"
          height="320"
          alt="Hafiz Muhammad Qasim"
          className="w-80 h-80 rounded-2xl object-cover ring-1 ring-white/10 bg-white/5"
        />
      </div>
    </section>
  );
}

export default Hero;