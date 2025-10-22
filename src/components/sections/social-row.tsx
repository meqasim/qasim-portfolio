import Link from "next/link";
import { SOCIALS } from "@/content/site";

export function SocialRow(){
  return (
    <div className="container-page py-4 flex flex-wrap gap-4 opacity-90">
      {SOCIALS.map((s) => (
        <Link key={s.href} href={s.href} className="nav-link underline-offset-4 hover:underline" target="_blank">
          {s.label}
        </Link>
      ))}
    </div>
  );
}