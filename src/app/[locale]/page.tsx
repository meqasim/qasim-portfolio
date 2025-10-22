"use client";
import { useLocale } from "next-intl";
import { Hero } from "@/components/sections/hero";
import { SocialRow } from "@/components/sections/social-row";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesTeaser } from "@/components/sections/services-teaser";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  const locale = (useLocale() as "en" | "ur" | "ar") ?? "en";
  return (
    <main>
      <Hero locale={locale} />
      <SocialRow />
      <SkillsGrid />
      <ProjectsSection />
      <ServicesTeaser locale={locale} />
      <Testimonials />
    </main>
  );
}