import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://santrodriguez-dev.github.io/minimalist-portfolio-json.github.io/',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  }
})
