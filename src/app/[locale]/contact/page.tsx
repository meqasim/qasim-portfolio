"use client";
import { useState } from "react";

export default function ContactPage(){
  const [status, setStatus] = useState<"idle"|"ok"|"invalid"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("idle");
    try{
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if(res.ok){ setStatus("ok"); form.reset(); }
      else if(res.status === 400){ setStatus("invalid"); }
      else { setStatus("error"); }
    }catch{ setStatus("error"); }
  }

  return (
    <main className="container-page py-12 space-y-6 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="opacity-80">Fill the form below. You will receive a Telegram/email confirmation once we wire the backend in Step 8.</p>

      <form onSubmit={onSubmit} className="glass rounded-2xl p-5 space-y-4">
        {/* Honeypot */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm opacity-90">Your Name</span>
            <input required name="name" className="rounded-xl px-3 py-2 bg-white/5 border border-white/15 outline-none focus:border-white/40" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm opacity-90">Email</span>
            <input required type="email" name="email" className="rounded-xl px-3 py-2 bg-white/5 border border-white/15 outline-none focus:border-white/40" />
          </label>

          <label className="grid gap-1">
            <span className="text-sm opacity-90">Message</span>
            <textarea required name="message" rows={5} className="rounded-xl px-3 py-2 bg-white/5 border border-white/15 outline-none focus:border-white/40" />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl px-4 py-2 bg-primary hover:opacity-90 transition" type="submit">Send</button>
          {status==="ok" && <span className="text-sm opacity-90">Thanks! Message sent.</span>}
          {status==="invalid" && <span className="text-sm opacity-90">Please check your inputs.</span>}
          {status==="error" && <span className="text-sm opacity-90">Server error — Step 8 will add the backend.</span>}
        </div>
      </form>
    </main>
  );
}