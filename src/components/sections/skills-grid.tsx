import { SKILLS } from "@/content/site";

export function SkillsGrid(){
  return (
    <section className="container-page py-10">
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <span key={s} className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}