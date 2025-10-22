export function Testimonials() {
  const items = [
    {name: 'Client A', role: 'Founder, Startup', quote: 'Qasim ships fast, clean, and reliable features.'},
    {name: 'Client B', role: 'PM, Agency', quote: 'Great communication and attention to detail.'},
  ];
  return (
    <section id="testimonials" className="mt-16">
      <h2 className="mb-6 text-xl font-semibold">Testimonials</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map(t => (
          <figure key={t.name} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <blockquote className="text-sm text-neutral-300/90">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-xs text-neutral-400">
              <span className="font-medium text-neutral-200">{t.name}</span> — {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
