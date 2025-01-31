import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://santrodriguez-dev.github.io',
  base: "/minimalist-portfolio-json",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  redirects: {
    "/es": "/",
  }
})
