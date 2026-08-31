// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical URLs and the sitemap both depend on this being set.
  site: 'https://theaipractitioner.ai',

  integrations: [
    // /blog joined the sitemap on 2026-08-29 with the week 34 posts, and
    // /book on 2026-09-01 when it started booking against cal.eu. Every
    // route is now listed, so there is no filter left to apply.
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});