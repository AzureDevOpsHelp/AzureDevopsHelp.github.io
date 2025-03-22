import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	base: "/AzureDevOpsHelp.github.io/",
	output: "static",
	integrations: [mdx(), sitemap()],
});
