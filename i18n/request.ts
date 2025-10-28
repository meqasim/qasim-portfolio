import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  const l = locale ?? "en"; // fallback to default
  const messages = (await import(`../messages/${l}.json`)).default;
  return {
    locale: l,
    messages
  };
});