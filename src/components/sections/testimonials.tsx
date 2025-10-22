import { TESTIMONIALS } from "@/content/testimonials";

export function Testimonials(){
  return (
    <section className="container-page py-12 space-y-6">
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="glass rounded-2xl p-5">
            <div className="font-medium">{t.name}</div>
            <div className="text-xs opacity-70">{t.role}</div>
            <p className="mt-3 opacity-90">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}