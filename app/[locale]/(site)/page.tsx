import {site} from "@/lib/site";
import {services} from "@/content/services";
import {projects} from "@/content/projects";
import {Timeline} from "@/components/site/Timeline";
import Link from "next/link";
import Image from "next/image";
import {getLocale, getTranslations} from "next-intl/server";

export default async function Page() {
  const locale = await getLocale();
  const tHero = await getTranslations("hero");
  const tSec  = await getTranslations("sections");
  const href = (p:string) => `/${locale}${p}`;

  return (
    <main className="mx-auto max-w-6xl px-4 space-y-16">
      {/* HERO */}
      <section className="relative pt-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_300px_at_20%_10%,rgba(34,197,94,0.18),transparent_60%)]"></div>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{site.name}</h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">{tHero("title")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-black hover:opacity-90 active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]" href={site.whatsapp} target="_blank" rel="noreferrer">{tHero("ctaHire")}</a>
              <a className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm transition-colors hover:border-[var(--primary)] active:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]" href={`mailto:${site.email}`}>{tHero("ctaEmail")}</a>
              <Link className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm transition-colors hover:border-[var(--primary)] active:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]" href={href("/resume")}>Resume</Link>
              <Link className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm transition-colors hover:border-[var(--primary)] active:border-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]" href={href("/about")}>About</Link>
            </div>
          </div>
          <div className="relative mx-auto max-w-[380px] group">
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(300px_200px_at_50%_0%,rgba(34,197,94,0.35),transparent_60%)] blur-2xl"></div>
            <Image
              src="/images/full-body.png"
              alt="Full-body photo of Qasim"
              width={1024}
              height={1536}
              priority
              className="rounded-[28px] border border-[var(--border)] shadow-2xl transition-colors group-hover:border-[var(--primary)] active:border-[var(--primary)]"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <h2 className="text-xl font-semibold">{tSec("services")}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <li key={s.title} className="rounded-2xl border border-[var(--border)] p-5 shadow-sm transition-colors hover:border-[var(--primary)] active:border-[var(--primary)] focus-within:border-[var(--primary)]">
              <div className="text-base font-medium">{s.title}</div>
              <div className="mt-2 text-sm text-[var(--muted-foreground)]">{s.desc}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS */}
      <section>
        <h2 className="text-xl font-semibold">{tSec("projects")}</h2>
        <div className="mt-6">
          <Timeline items={projects as any} />
        </div>
      </section>
    </main>
  );
}