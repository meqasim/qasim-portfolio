import { education } from "@/content/education";
import { Timeline } from "@/components/site/Timeline";
import {getTranslations} from "next-intl/server";

export default async function AboutPage() {
  const ts = await getTranslations("sections");
  return (
    <main className="mx-auto max-w-6xl px-4 space-y-12 py-12">
      <section>
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="mt-3 text-[var(--muted-foreground)]">
          I build multilingual, Stripe-powered web apps with Next.js, Prisma, and Tailwind.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">{ts("education")}</h2>
        <div className="mt-6">
          <Timeline items={education as any} />
        </div>
      </section>
    </main>
  );
}