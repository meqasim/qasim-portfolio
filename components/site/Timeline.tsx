"use client";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export type TimelineItem = {
  title: string;
  period?: string;
  subtitle?: string;
  description?: string;
  href?: string;
  tags?: string[];
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 size-px -translate-x-1/2 bg-[var(--border)]"
        style={{ height: "100%" }}
      />
      <ol className="space-y-8">
        {items.map((it, i) => {
          const onLeft = i % 2 === 0;
          return (
            <li key={i} className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <div className={onLeft ? "md:col-start-1" : "md:col-start-2 md:row-start-1"}>
                <Card className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
                  <div className="absolute left-1/2 top-5 size-3 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--background)]"></div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  {(it.period || it.subtitle) && (
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                      {it.period}{it.period && it.subtitle ? " · " : ""}{it.subtitle}
                    </p>
                  )}
                  {it.description && (
                    <p className="mt-3 text-sm leading-6 text-white/80">{it.description}</p>
                  )}
                  {it.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {it.tags.map((t) => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  ) : null}
                  {it.href && (
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm underline hover:opacity-80"
                    >
                      Visit →
                    </a>
                  )}
                </Card>
              </div>
              <div className={onLeft ? "hidden md:block md:col-start-2" : "hidden md:block md:col-start-1"} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
