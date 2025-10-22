import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();
  return (
    <main className="container-page py-10 space-y-4">
      <h1 className="text-2xl font-semibold">{t("nav.contact")}</h1>
      <p className="opacity-80">Contact form will be added in the next step (Formspree + Telegram bot).</p>
      <p>Email: qasimofficials@gmail.com</p>
    </main>
  );
}