import { PROJECTS } from "@/content/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection(){
  return (
    <section className="container-page py-12 space-y-6">
      <h2 className="text-2xl font-semibold">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  );
}