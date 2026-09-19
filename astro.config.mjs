// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  server: {
    port: 34098,
  },

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: "prism",
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  },
  devToolbar: {
    enabled: true,
  },
});
