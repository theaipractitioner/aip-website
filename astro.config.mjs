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
      // /blog joined the sitemap on 2026-08-29 when the week 34 posts went
      // live. /book stays out until a booking system is wired in — it is
      // still noindex, and advertising it to crawlers would contradict that.
      filter: (page) => !page.includes('/book'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});