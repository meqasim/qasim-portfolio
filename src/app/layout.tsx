import type {ReactNode} from "react";
import {cookies} from "next/headers";

export const runtime = "edge";

export default async function RootLayout({children}:{children:ReactNode}) {
  const store = await cookies();
  const theme = store.get("theme")?.value; // "dark" | "light" | undefined
  const htmlClass = theme === "dark" ? "dark" : "";
  return (
    <html className={htmlClass} suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-200 antialiased">
        {children}
      </body>
    </html>
  );
}