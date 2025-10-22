export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string; // ISO or "Jan 2024"
  end: string;   // "Present" or date
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Emergent Software Solutions",
    role: "Full Stack Web Developer",
    location: "Rawalpindi",
    start: "Jan 1, 2024",
    end: "Aug 31, 2024",
    bullets: [
      "Built complete web apps (frontend + backend).",
      "Integrated APIs, debugging, code reviews and upgrades."
    ]
  },
  {
    company: "Cheezious (Pvt.) Ltd. — Golra Morr Branch",
    role: "Delivery Rider",
    location: "Rawalpindi",
    start: "Jan 6, 2021",
    end: "Dec 31, 2023",
    bullets: [
      "Route planning & safe delivery.",
      "Customer communication & payment handling."
    ]
  },
  {
    company: "Jaspal Construction Co.",
    role: "Computer Operator / Store Man",
    location: "Islamabad",
    start: "Jan 1, 2017",
    end: "Mar 31, 2020",
    bullets: [
      "System monitoring, backups and troubleshooting.",
      "SOPs and data integrity."
    ]
  }
];