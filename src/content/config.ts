import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.optional(z.string()),
			type: z.string(),
			lastUpdateDate: z.date(),
			hideTitle: z.optional(z.boolean()),
			hidden: z.optional(z.boolean()),
			cover: z.optional(image()),
			headerImage: z.optional(image()),
			seo: z.object({
				title: z.string(),
				description: z.string(),
				author: z.string(),
			}),
		}),
});

const postsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			lastUpdateDate: z.date(),
			description: z.string(),
			category: z.string(),
			author: z.string(),
			cover: image(),
			tags: z.array(z.string()),
			hidden: z.optional(z.boolean()),
			featured: z.optional(z.boolean()),
			disclaimers: z.optional(z.array(z.enum(["celebrity", "politics", "fairuse"]))),		}),
});

const worksCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			lastUpdateDate: z.date(),
			cover: z.optional(image()),
			heroImage: z.optional(image()),
			video: z.optional(z.string()),
			description: z.string(),
			intro: z.optional(z.string()),
			link: z.optional(z.string()),
			tags: z.array(z.string()),
			workType: z.optional(z.string()),
			tech: z.optional(z.string()),
			tldr: z.optional(z.array(z.object({ label: z.string(), value: z.string() }))),
			impact: z.optional(z.array(z.object({ value: z.string(), description: z.string() }))),
			impactTitle: z.optional(z.string()),
			hideImpactButton: z.optional(z.boolean()),
			backgroundColor: z.optional(z.string()),
			hidden: z.optional(z.boolean()),
		}),
});

const servicesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			lastUpdateDate: z.date(),
			cover: z.optional(image()),
			description: z.string(),
			hidden: z.optional(z.boolean()),
		}),
});

export const collections = {
	articles: postsCollection,
	pages: pagesCollection,
	services: servicesCollection,
	work: worksCollection,
};
