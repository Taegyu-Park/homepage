import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://taegyu-park.github.io',
  base: '/homepage',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
