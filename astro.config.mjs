import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://santrodriguez-dev.github.io',
  base: "minimalist-portfolio-json.github.io",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
  // Resolves to the "./foo" directory in your current working directory
  root: 'foo',
  // Resolves to the "./foo/public" directory in your current working directory
  publicDir: 'public',
})
