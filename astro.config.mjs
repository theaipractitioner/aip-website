// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical URLs and the sitemap both depend on this being set.
  site: 'https://theaipractitioner.ai',

  integrations: [
    sitemap({
      // Hidden at soft launch — see src/config/site.ts. Neither should be
      // advertised to crawlers until they hold real content.
      filter: (page) => !page.includes('/blog') && !page.includes('/book'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});