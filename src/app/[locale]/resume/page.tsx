import { PROFILE, SKILLS, SOCIALS } from "@/content/site";
import { EXPERIENCE } from "@/content/experience";
import { EDUCATION } from "@/content/education";

export default function ResumePage(){
  return (
    <main className="container-page py-12 space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{PROFILE.name}</h1>
        <div className="opacity-80">{PROFILE.role}</div>
        <div className="opacity-70 text-sm">{PROFILE.email} · {PROFILE.phone}</div>
        <div className="flex flex-wrap gap-3 opacity-80 text-sm">
          {SOCIALS.map(s => <a className="underline underline-offset-4" href={s.href} target="_blank" key={s.href}>{s.label}</a>)}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(s => <span key={s} className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm">{s}</span>)}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <div className="space-y-3">
          {EXPERIENCE.map(x => (
            <div key={x.company+x.start}>
              <div className="font-medium">{x.role} — {x.company}</div>
              <div className="opacity-70 text-sm">{x.location} · {x.start} — {x.end}</div>
              <ul className="list-disc list-inside opacity-90 text-sm">
                {x.bullets.map((b,i)=><li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Education & Certificates</h2>
        <div className="space-y-2">
          {EDUCATION.map(e => (
            <div key={e.title}>
              <div className="font-medium">{e.title}</div>
              <div className="opacity-70 text-sm">{[e.org, e.years].filter(Boolean).join(" · ")}</div>
              {e.notes?.length ? <ul className="list-disc list-inside opacity-90 text-sm">{e.notes.map((n,i)=><li key={i}>{n}</li>)}</ul> : null}
            </div>
          ))}
        </div>
      </section>

      <div className="pt-4">
        {/* We'll add real PDF generation later */}
        <button className="glass rounded-xl px-4 py-2" disabled>Download PDF (coming soon)</button>
      </div>
    </main>
  );
}