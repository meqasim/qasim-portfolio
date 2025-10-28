import "./globals.css";
import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";

export const metadata = {
  title: "HaFiZ MuHaMMaD QaSiM — Portfolio",
  description: "Full-Stack Web Developer & Stripe/Prisma Specialist",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}