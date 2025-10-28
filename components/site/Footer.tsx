import {site} from "@/lib/site";

export function Footer(){
  const year = new Date().getFullYear();
  const link = "underline hover:text-[var(--primary)] hover:decoration-[var(--primary)]";
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[linear-gradient(180deg,transparent,rgba(34,197,94,0.06))]">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">{site.name}</div>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">{site.title}</p>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-2">Contact</div>
          <div><a className={link} href={`mailto:${site.email}`}>{site.email}</a></div>
          <div><a className={link} href={site.whatsapp} target="_blank">WhatsApp</a></div>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-2">Links</div>
          <ul className="space-y-1">
            <li><a className={link} href="/en">Home</a></li>
            <li><a className={link} href="/en/about">About</a></li>
            <li><a className={link} href="/en/resume">Resume</a></li>
            <li><a className={link} href="/en/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted-foreground)]">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}