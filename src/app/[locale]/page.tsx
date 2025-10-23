import Hero from "@/components/sections/hero";
import SocialRow from "@/components/sections/social-row";
import SkillsGrid from "@/components/sections/skills-grid";
import ProjectsSection from "@/components/sections/projects-section";
import ServicesTeaser from "@/components/sections/services-teaser";
import Testimonials from "@/components/sections/testimonials";

export const runtime = "edge";

export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 space-y-16">
        <SocialRow />
        <SkillsGrid />
        <ProjectsSection />
        <ServicesTeaser />
        <Testimonials />
      </div>
    </>
  );
}