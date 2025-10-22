import { PROJECTS } from "@/content/projects";

type Project = (typeof PROJECTS)[number];

export function ProjectsSection() {
  const items: readonly Project[] = PROJECTS;

  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="relative">
        {/* vertical timeline line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-foreground/20 pointer-events-none" />
        <ol className="space-y-10">
          {items.map((p, idx) => (
            <li key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* left/right alternate around the center line */}
              <div className={(idx % 2 === 0 ? "order-1" : "order-2") + " md:text-right"}>
                <h3 className="text-xl font-semibold">{(p as any).title ?? (p as any).name}</h3>
                {"subtitle" in p && (p as any).subtitle ? (
                  <p className="opacity-80">{(p as any).subtitle}</p>
                ) : null}
              </div>
              <div className={(idx % 2 === 0 ? "order-2" : "order-1") + " relative"}>
                <div className="absolute md:left-[-0.55rem] left-1/2 md:translate-x-0 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-foreground" />
                {"description" in p && (p as any).description ? (
                  <p className="text-sm opacity-80">{(p as any).description}</p>
                ) : null}
                {"link" in p && (p as any).link ? (
                  <a
                    href={(p as any).link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block underline underline-offset-4"
                  >
                    Visit
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProjectsSection;