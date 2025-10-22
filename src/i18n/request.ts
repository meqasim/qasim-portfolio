import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const supported = ["en","ur","ar"] as const;
  type L = typeof supported[number];
  const active: L = supported.includes((locale ?? "") as L) ? (locale as L) : "en";
  const messages = (await import(`../../messages/${active}.json`)).default;
  return {locale: active, messages};
});