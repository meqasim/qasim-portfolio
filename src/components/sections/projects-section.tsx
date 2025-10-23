import type {ComponentProps} from "react";
import {PROJECTS} from "@/content/projects";

type LinkInfo = { live?: string; repo?: string };
type Project = {
  slug?: string;
  title: string;
  year?: string | number;
  subtitle?: string;
  bullets?: string[];
  links?: LinkInfo;
};

export default function ProjectsSection(props: ComponentProps<"section">) {
  const items = (PROJECTS as unknown as Project[]) ?? [];

  return (
    <section id="projects" className="py-16" {...props}>
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-8">Selected Projects</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10" />
          <ol className="space-y-12">
            {items.map((p, i) => (
              <li key={p.slug ?? i} className="relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                <div className={"grid md:grid-cols-2 gap-8 " + (i % 2 ? "md:[&>*:first-child]:order-2" : "")}>
                  <div className="md:text-right">
                    {p.year && <div className="text-emerald-400 text-sm">{p.year}</div>}
                    <h3 className="font-semibold">{p.title}</h3>
                    {p.subtitle && <p className="opacity-75 text-sm">{p.subtitle}</p>}
                  </div>
                  <div>
                    {p.bullets && p.bullets.length > 0 && (
                      <ul className="list-disc ms-5 space-y-1 text-sm opacity-90">
                        {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                      </ul>
                    )}
                    {p.links?.live && (
                      <a href={p.links.live} className="text-emerald-400 text-sm underline mt-2 inline-block">Live</a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}