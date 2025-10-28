import resume from "@/content/resume.json";
export default function ResumePage(){
  const r:any = resume;
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <header>
        <h1 className="text-3xl font-bold">{r.name}</h1>
        <p className="text-[var(--muted-foreground)]">{r.title}</p>
        <p className="mt-2">
          <a className="underline" href={`mailto:${r.email}`}>{r.email}</a> ·{" "}
          <a className="underline" href={r.whatsapp} target="_blank">WhatsApp</a>
        </p>
      </header>

      {r.experience?.length ? (
        <section>
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="mt-4 space-y-4">
            {r.experience.map((e:any,i:number)=>(
              <li key={i} className="rounded-2xl border border-[var(--border)] p-4">
                <div className="font-medium">{e.role} — {e.company}</div>
                <div className="text-sm text-[var(--muted-foreground)]">{e.period} · {e.location}</div>
                {e.points?.length ? <ul className="mt-2 list-disc pl-5 text-sm">{e.points.map((p:string)=> <li key={p}>{p}</li>)}</ul> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {r.education?.length ? (
        <section>
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="mt-4 space-y-3">
            {r.education.map((e:any,i:number)=>(
              <li key={i} className="rounded-2xl border border-[var(--border)] p-4">
                <div className="font-medium">{e.title}</div>
                <div className="text-sm text-[var(--muted-foreground)]">{e.period}</div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}