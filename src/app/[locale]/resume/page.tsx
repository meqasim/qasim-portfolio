import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();
  return (
    <main className="container-page py-10 space-y-4">
      <h1 className="text-2xl font-semibold">{t("nav.resume")}</h1>
      <p className="opacity-80">Resume page coming soon. If you already have a PDF, place it at <code>/public/cv.pdf</code> and we will embed or link it here.</p>
    </main>
  );
}