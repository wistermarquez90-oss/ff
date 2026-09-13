import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wistermarquez90-oss.github.io',
  base: '/ff',
  integrations: [tailwind()]
});