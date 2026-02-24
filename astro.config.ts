import alpinejs from "@astrojs/alpinejs";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { defaultLocale, locales, siteTitle, siteUrl } from "./site.config";

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	output: "static",
	compressHTML: true,
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	redirects: {},
	vite: {
		define: {
			__DATE__: `'${new Date().toISOString()}'`,
		},
	},
	integrations: [
		alpinejs(),
		tailwind({
			// Base style is applied on the file global.css
			applyBaseStyles: false,
		}),
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: {
					en: "en",
				},
			},
		}),
		icon(),
		react(),
		markdoc(),
		robotsTxt({
			policy: [{ userAgent: "*", allow: "/" }],
		}),
	],
});
