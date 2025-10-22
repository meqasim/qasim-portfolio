import Link from "next/link";
import { PROFILE, SOCIALS } from "@/content/site";

export function Footer({ locale }: { locale: "en"|"ur"|"ar" }){
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-page py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="text-lg font-semibold">{PROFILE.name}</div>
            <p className="opacity-80 text-sm">{PROFILE.role}</p>
            <p className="opacity-60 text-xs">{PROFILE.location}</p>
          </div>
          <div className="md:justify-self-end flex gap-4 flex-wrap">
            {SOCIALS.map((s) => (
              <Link key={s.href} href={s.href} className="nav-link underline-offset-4 hover:underline" target="_blank">{s.label}</Link>
            ))}
          </div>
        </div>
        <div className="mt-6 opacity-60 text-xs">© {year} · Built with Next.js</div>
      </div>
    </footer>
  );
}