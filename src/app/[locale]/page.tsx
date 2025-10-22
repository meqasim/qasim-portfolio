import * as HeroMod from "@/components/sections/hero";
import * as SocialRowMod from "@/components/sections/social-row";
import * as SkillsGridMod from "@/components/sections/skills-grid";
import * as ProjectsSectionMod from "@/components/sections/projects-section";
import * as ServicesTeaserMod from "@/components/sections/services-teaser";
import * as TestimonialsMod from "@/components/sections/testimonials";

const Hero = (HeroMod as any).Hero ?? (HeroMod as any).default;
const SocialRow = (SocialRowMod as any).SocialRow ?? (SocialRowMod as any).default;
const SkillsGrid = (SkillsGridMod as any).SkillsGrid ?? (SkillsGridMod as any).default;
const ProjectsSection = (ProjectsSectionMod as any).ProjectsSection ?? (ProjectsSectionMod as any).default;
const ServicesTeaser = (ServicesTeaserMod as any).ServicesTeaser ?? (ServicesTeaserMod as any).default;
const Testimonials = (TestimonialsMod as any).Testimonials ?? (TestimonialsMod as any).default;

export default function Page() {
  return (
    <main>
      <Hero />
      <SocialRow />
      <SkillsGrid />
      <ProjectsSection />
      <ServicesTeaser />
      <Testimonials />
    </main>
  );
}