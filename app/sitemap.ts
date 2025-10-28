import type {MetadataRoute} from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url: "https://meqasim.pages.dev/en", lastModified: new Date()},
    {url: "https://meqasim.pages.dev/en/about", lastModified: new Date()},
    {url: "https://meqasim.pages.dev/en/contact", lastModified: new Date()},
    {url: "https://meqasim.pages.dev/en/resume", lastModified: new Date()}
  ];
}