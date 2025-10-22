import { SERVICES } from "@/content/services";

export default function ServicesPage(){
  return (
    <main className="container-page py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Services</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {SERVICES.map(s => (
          <div key={s.title} className="glass rounded-2xl p-5">
            <div className="text-lg font-medium">{s.title}</div>
            <ul className="mt-3 text-sm opacity-90 space-y-1 list-disc list-inside">
              {s.points.map((p,i)=><li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}