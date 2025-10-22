import Link from "next/link";
import { SERVICES } from "@/content/services";

export function ServicesTeaser({ locale }: { locale:"en"|"ur"|"ar" }){
  return (
    <section className="container-page py-12 space-y-6">
      <h2 className="text-2xl font-semibold">Services</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {SERVICES.map(s => (
          <div key={s.title} className="glass rounded-2xl p-4">
            <div className="font-medium">{s.title}</div>
            <ul className="mt-2 text-sm opacity-85 space-y-1 list-disc list-inside">
              {s.points.map((p,i)=><li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <Link className="underline underline-offset-4 opacity-90 hover:opacity-100" href={`/${locale}/services`}>View all services →</Link>
      </div>
    </section>
  );
}