import { site } from "@/lib/site";
import {getTranslations} from "next-intl/server";

export default async function ContactPage(){
  const tc = await getTranslations("contact");
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p>Email: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> ({tc("emailReply")})</p>
      <p>WhatsApp: <a className="underline" href={site.whatsapp} target="_blank">Chat now</a> ({tc("waReply")})</p>
    </main>
  );
}