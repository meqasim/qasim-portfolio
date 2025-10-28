"use client";
import Link from "next/link";
import * as React from "react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl">Hire me on WhatsApp</Button>
            </a>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary" className="rounded-2xl">Menu</Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="mt-6 flex flex-col gap-4">
                  <Link href="/projects">Projects</Link>
                  <Link href="/about">About</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/contact">Contact</Link>
                  <Separator />
                  <a href={site.whatsapp} target="_blank" rel="noreferrer">
                    <Button className="w-full rounded-2xl">Hire me on WhatsApp</Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
