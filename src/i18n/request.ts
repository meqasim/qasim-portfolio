import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const supported = ["en","ur","ar"] as const;
  const active = (supported as readonly string[]).includes(locale as string) ? locale : "en";
  const messages = (await import(`../../messages/${active}.json`)).default;
  return { locale: active, messages };
});