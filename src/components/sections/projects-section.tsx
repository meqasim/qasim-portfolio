"use client";
import { useTranslations } from "next-intl";
import { PROJECTS } from "@/content/projects";
import Link from "next/link";

export function ProjectsSection() {
  const t = useTranslations("sections");
  return (
    <section id="projects" className="container-page py-10 space-y-6">
      <h2 className="text-xl font-semibold">{t("projects")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <div key={i} className="glass p-5 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{p.title}</h3>
              {p.period ? <span className="chip">{p.period}</span> : null}
            </div>
            {p.subtitle ? <p className="opacity-70 text-sm">{p.subtitle}</p> : null}
            {p.stack?.length ? <div className="flex flex-wrap gap-2 pt-1">{p.stack.map(s => <span key={s} className="chip">{s}</span>)}</div> : null}
            {p.highlights?.length ? <ul className="list-disc pl-5 opacity-80">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul> : null}
            {p.links?.length ? <div className="pt-1">{p.links.map(l => <Link key={l.href} className="underline opacity-90 hover:opacity-100" href={l.href} target="_blank">{l.label}</Link>)}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}