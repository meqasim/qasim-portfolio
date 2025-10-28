export const site = {
  name: "HaFiZ MuHaMMaD QaSiM",
  title: "Full-Stack Web Developer & Stripe/Prisma Specialist",
  email: "qasimofficials@gmail.com",
  whatsapp: "https://wa.me/923410592668",
  response: { email: "1–2 hours", whatsapp: "≈30 minutes" },
  locales: ["en","ur","ar"] as const,
};
export type Locale = (typeof site.locales)[number];
