import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.com/wistermarquez90-oss',
  base: '/landing-moreka',
  integrations: [tailwind()]
});