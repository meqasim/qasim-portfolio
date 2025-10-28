import { site } from "@/lib/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { Timeline } from "@/components/site/Timeline";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 space-y-16">
      <section className="pt-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{site.name}</h1>
        <p className="mt-3 text-lg text-[var(--muted-foreground)]">{site.title}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="underline" href={site.whatsapp} target="_blank" rel="noreferrer">Hire me on WhatsApp</a>
          <a className="underline" href={`mailto:${site.email}`}>Email me</a>
          <Link className="underline" href="/resume">Resume</Link>
          <Link className="underline" href="/about">About</Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Services</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <li key={s.title} className="rounded-2xl border border-[var(--border)] p-5 shadow-sm">
              <div className="text-base font-medium">{s.title}</div>
              <div className="mt-2 text-sm text-[var(--muted-foreground)]">{s.desc}</div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-6">
          <Timeline items={projects as any} />
        </div>
      </section>
    </main>
  );
}