// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  redirects: {
    "/workinggroup": "/projects",
    "/list": "http://eepurl.com/i1scNU",
  },
});
