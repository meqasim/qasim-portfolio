import createMiddleware from "next-intl/middleware";
import {locales, defaultLocale} from "./i18n/routing";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always" // ensure /en/... is used
});

export const config = {
  // Skip next internals and static files
  matcher: ["/((?!_next|.*\\..*).*)"]
};