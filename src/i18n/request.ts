import {getRequestConfig} from "next-intl/server";

// Minimal config so next-intl knows how to load messages for each locale.
export default getRequestConfig(async ({locale}) => {
  const supported = ["en", "ur", "ar"] as const;
  const active = supported.includes(locale as any) ? locale : "en";
  return {
    // messages folder lives at /messages
    messages: (await import(`../../messages/${active}.json`)).default
  };
});