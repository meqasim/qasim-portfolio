export type Project = {
  title: string; subtitle?: string; period?: string;
  stack: string[]; highlights: string[]; links?: {label:string; href:string}[];
};

export const PROJECTS: Project[] = [
  {
    title: "Abu Dhabi Desert Safari Adventures",
    subtitle: "Full-stack booking site",
    period: "2025",
    stack: ["Next.js 15","TypeScript","Tailwind","Stripe","Prisma","PostgreSQL","Docker"],
    highlights: ["Stripe Checkout + webhooks","i18n (EN/AR)","Prisma schema + seeds","Health route + env preflight"],
    links: [{label:"Live", href:"https://abudhabidesertsafariadventures.com"}]
  },
  {
    title: "Blockchain 313 (blog)",
    stack: ["Blogger"],
    highlights: ["Articles on blockchain, solidity, web3"],
    links: [{label:"Open", href:"https://blockchain313.blogspot.com"}]
  },
  {
    title: "Shaheen Institute (blog)",
    stack: ["Blogger"],
    highlights: ["Resources: design, literature, SEO, more"],
    links: [{label:"Open", href:"https://shaheeninstitute.blogspot.com"}]
  }
];