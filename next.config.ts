import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  // Typed routes can conflict with async `params` in layouts on some adapters
  typedRoutes: false
};

export default withNextIntl(nextConfig);