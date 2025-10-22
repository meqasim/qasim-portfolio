import { PROJECTS as projects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-16">
      <h2 className="mb-6 text-xl font-semibold">Selected Projects</h2>

      <div className="relative mx-auto max-w-4xl">
        <div className="pointer-events-none absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-gradient-to-b from-emerald-300/40 via-emerald-300/10 to-transparent" />
        <ol className="space-y-10">
          {projects.map((p: any, i: number) => {
            const left = i % 2 === 0;
            return (
              <li key={p.title} className="relative grid grid-cols-1 md:grid-cols-2">
                <div className={left ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8"}>
                  <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    {p.badge && <div className="mb-1 text-[13px] text-emerald-300/80">{p.badge}</div>}
                    <div className="text-base font-medium">{p.title}</div>
                    {p.summary && <p className="mt-2 text-sm text-neutral-300/80">{p.summary}</p>}
                    {p.link && (
                      <a href={p.link} target="_blank" className="mt-3 inline-block text-sm text-emerald-300 hover:underline">
                        Open
                      </a>
                    )}
                  </div>
                </div>
                <span className="pointer-events-none absolute left-1/2 top-4 z-10 -ml-2 h-4 w-4 rounded-full bg-emerald-400/60 ring-4 ring-gray-950" />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}