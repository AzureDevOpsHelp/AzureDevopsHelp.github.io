import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	base: "/AzureDevOpsHelp.github.io/",
	site: "https://azuredevopshelp.github.io",
	output: "static",
	integrations: [mdx(), sitemap()],
});
