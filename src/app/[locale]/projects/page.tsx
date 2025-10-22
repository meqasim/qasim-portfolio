import { PROJECTS } from "@/content/projects";
import { ProjectCard } from "@/components/sections/project-card";

export default function ProjectsPage(){
  return (
    <main className="container-page py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </main>
  );
}