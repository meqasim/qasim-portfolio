import { PROFILE } from "@/content/site";
import { EXPERIENCE } from "@/content/experience";
import { EDUCATION } from "@/content/education";

export default function AboutPage(){
  return (
    <main className="container-page py-12 space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold">About</h1>
        <p className="opacity-80 max-w-prose">
          I am {PROFILE.name}, a {PROFILE.role}. I build fast, clean, business-ready web apps and have been crafting on the web since {PROFILE.since}.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="space-y-4">
          {EXPERIENCE.map((x) => (
            <div key={x.company+x.start} className="glass rounded-2xl p-5">
              <div className="font-medium">{x.role}</div>
              <div className="opacity-80 text-sm">{x.company}{x.location ? " · " + x.location : ""}</div>
              <div className="opacity-60 text-xs">{x.start} — {x.end}</div>
              <ul className="mt-3 text-sm opacity-90 space-y-1 list-disc list-inside">
                {x.bullets.map((b,i)=><li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Education & Certificates</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {EDUCATION.map((e) => (
            <div key={e.title} className="glass rounded-2xl p-5">
              <div className="font-medium">{e.title}</div>
              {e.org ? <div className="opacity-80 text-sm">{e.org}</div> : null}
              {e.years ? <div className="opacity-60 text-xs">{e.years}</div> : null}
              {e.notes?.length ? (
                <ul className="mt-3 text-sm opacity-90 space-y-1 list-disc list-inside">
                  {e.notes.map((n,i)=><li key={i}>{n}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}