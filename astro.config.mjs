import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.erickvasm.com",
  integrations: [tailwind(), sitemap(), icon()],
  prefetch: true,
  build: {
    minify: true,
  },
});
