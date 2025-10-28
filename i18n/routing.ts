export const locales = ["en", "ur", "ar"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "en";

// Helper to get direction per locale
export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ur" || locale === "ar" ? "rtl" : "ltr";
}