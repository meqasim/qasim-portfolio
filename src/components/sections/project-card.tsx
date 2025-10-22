import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ p }: { p: Project }){
  return (
    <div className="relative glass rounded-2xl p-5 hover:shadow-soft transition group">
      <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-primary/70 rounded-full" />
      <div className="pl-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          {p.period ? <span className="text-xs px-2 py-0.5 rounded bg-white/10 border border-white/10">{p.period}</span> : null}
        </div>
        {p.subtitle ? <p className="opacity-80 text-sm mt-1">{p.subtitle}</p> : null}
        {p.stack?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map(s => <span key={s} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">{s}</span>)}
          </div>
        ) : null}
        {p.highlights?.length ? (
          <ul className="mt-4 space-y-1.5 text-sm opacity-85 list-disc list-inside">
            {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        ) : null}
        {p.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {p.links.map(l => (
              <Link key={l.href} href={l.href} target="_blank" className="underline underline-offset-4 opacity-90 hover:opacity-100">
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}