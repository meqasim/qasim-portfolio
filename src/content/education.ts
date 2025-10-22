export type Education = {
  title: string;
  org?: string;
  years?: string;
  notes?: string[];
};

export const EDUCATION: Education[] = [
  { title: "Certified Cloud Applied Generative AI Engineer (WMD)", org: "PIAIC", years: "2023–present" },
  { title: "Certified Blockchain Developer", org: "PIAIC", years: "2019–2022" },
  { title: "F.Sc (Pre-Engineering)", org: "IMCB H-9, Islamabad", years: "2014–2016" },
  { title: "Matriculation (Science)", org: "FG Boys Secondary School, Rawalpindi", years: "2009–2012" },
  { title: "Hifz-ul-Quran", org: "Madrasa Muarif-ul-Quran", years: "2011–2014" },
  { title: "Professional Certificates (LinkedIn Learning)", notes: [
    "Software Developer — 29h40m",
    "Digital Marketing Specialist — 20h55m",
    "Graphic Designer — (completed)"
  ]}
];