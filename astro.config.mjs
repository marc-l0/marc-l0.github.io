// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-axel-marcelo.netlify.app",
  redirects: {
    "/blog/identidad-visual-y-notas-del-camino/": "/blog/tercer-post/",
    "/blog/nuevo-retrato-personal/": "/blog/tercer-post/",
    "/blog/mi-dojo-gestion-karate/": "/blog/tercer-post/",
    "/blog/mi-dojo-pantallas-moviles/": "/blog/tercer-post/",
    "/blog/estructura-ordenada-del-portfolio/": "/blog/tercer-post/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
