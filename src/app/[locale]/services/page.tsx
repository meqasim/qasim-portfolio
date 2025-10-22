import { getTranslations } from "next-intl/server";
import { SERVICES } from "@/content/services";

export default async function Page() {
  const t = await getTranslations();
  return (
    <main className="container-page py-10 space-y-6">
      <h1 className="text-2xl font-semibold">{t("sections.services")}</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div key={i} className="glass p-5">
            <div className="font-medium">{s.title}</div>
            <ul className="mt-2 list-disc ms-5 opacity-80 text-sm">
              {s.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}