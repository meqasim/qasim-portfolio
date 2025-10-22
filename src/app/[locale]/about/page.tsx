import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();
  return (
    <main className="container-page py-10 space-y-4">
      <h1 className="text-2xl font-semibold">{t("nav.about")}</h1>
      <p className="opacity-80 max-w-prose">
        Full bio coming soon. I build fast, clean, business-ready web apps with Next.js, TypeScript and Tailwind.
      </p>
    </main>
  );
}