import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: "https://azuredevopshelp.com",
	base: process.env.NODE_ENV === 'production' ? '/AzureDevOpsHelp.com' : '/',
	output: "static",
	integrations: [mdx(), sitemap()],
});
