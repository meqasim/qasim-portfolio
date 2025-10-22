import Hero from "@/components/sections/hero";
import SocialRow from "@/components/sections/social-row";
import SkillsGrid from "@/components/sections/skills-grid";
import ProjectsSection from "@/components/sections/projects-section";
import ServicesTeaser from "@/components/sections/services-teaser";
import Testimonials from "@/components/sections/testimonials";

export default function Page() {
  return (
    <>
      <section className="container mx-auto px-4">
        <Hero />
        <SocialRow />
        <SkillsGrid />
      </section>

      <section className="container mx-auto px-4">
        <ProjectsSection />
      </section>

      <section className="container mx-auto px-4">
        <ServicesTeaser />
      </section>

      <section className="container mx-auto px-4">
        <Testimonials />
      </section>
    </>
  );
}