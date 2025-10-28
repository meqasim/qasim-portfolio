import { site } from "@/lib/site";
export default function ContactPage(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p>Email: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> (reply {site.response.email})</p>
      <p>WhatsApp: <a className="underline" href={site.whatsapp} target="_blank">Chat now</a> (reply {site.response.whatsapp})</p>
    </main>
  );
}