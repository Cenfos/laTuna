import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [mdx()],
});