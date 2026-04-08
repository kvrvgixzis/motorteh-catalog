import { defineConfig } from 'astro/config';
import { remarkBaseUrl } from './src/remark-base-url.mjs';

export default defineConfig({
  site: 'https://kvrvgixzis.github.io',
  base: '/motorteh-catalog/',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkBaseUrl],
  },
});
