import Link from "next/link";

const cards = [
  {title: "Custom Web Development", bullets: ["Next.js, TypeScript, Tailwind", "Responsive, accessible, fast"]},
  {title: "E-commerce & Payments", bullets: ["Stripe flows, webhooks", "Receipts & emails"]},
  {title: "Landing Pages", bullets: ["High-converting, SEO-ready"]},
  {title: "Performance & SEO", bullets: ["Core Web Vitals", "JSON-LD & meta"]},
  {title: "Maintenance & Support", bullets: ["Audits, fixes, ongoing care"]},
  {title: "More Services", bullets: ["View all services →"], link: "./services"}
];

export function ServicesTeaser() {
  return (
    <section className="container-page mt-12">
      <h2 className="text-xl font-semibold mb-4">Services</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-medium mb-2">{c.title}</h3>
            <ul className="list-disc pl-5 space-y-1 opacity-80">
              {c.bullets.map((b, i) =>
                c.link && i === c.bullets.length - 1 ? (
                  <li key={b}><Link className="underline underline-offset-4" href={c.link}>{b}</Link></li>
                ) : (
                  <li key={b}>{b}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}