import { getTranslations } from "next-intl/server";
import { ProjectsSection } from "@/components/sections/projects-section";

export default async function Page() {
  const t = await getTranslations();
  return (
    <main className="container-page py-10 space-y-6">
      <h1 className="text-2xl font-semibold">{t("sections.projects")}</h1>
      <ProjectsSection />
    </main>
  );
}