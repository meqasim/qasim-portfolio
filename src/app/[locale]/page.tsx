import Hero from "@/components/sections/hero";
import SocialRow from "@/components/sections/social-row";
import SkillsGrid from "@/components/sections/skills-grid";
import ProjectsSection from "@/components/sections/projects-section";

export default function Page() {
  return (
    <section className="space-y-16">
      <Hero />
      <SocialRow />
      <SkillsGrid />
      <ProjectsSection />
    </section>
  );
}