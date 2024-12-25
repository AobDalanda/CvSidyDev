import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://AobDalanda.github.io',
  base: 'CvSidyDev',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
