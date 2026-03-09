import { type ContentEntryMap, getCollection } from "astro:content";
import { type Locale, defaultLocale, locales } from "site.config";

export async function getCollectionStaticPaths<CollectionName extends keyof ContentEntryMap>(
	collectionName: CollectionName,
	locale?: Locale,
): Promise<PathParams<CollectionName>[]> {
	const collection = await getCollection(collectionName);

	const visibleItems = collection.filter((item) => {
		return !item.data.hidden;
	});

	const paths = visibleItems.map((item) => {
		const parts = item.slug.split("/");
		let lang: string;
		let localizedSlug: string[];

		// Check if slug starts with a known locale (e.g., pages/en/about)
		if (locales.includes(parts[0] as Locale)) {
			lang = parts[0];
			localizedSlug = parts.slice(1);
		} else {
			// Collections without locale subfolders (e.g., articles, work)
			lang = defaultLocale;
			localizedSlug = parts;
		}

		if (collectionName === "pages") {
			// For pages handle the root page slug
			localizedSlug = localizedSlug[0] === "home" || localizedSlug[0] === "index" ? [] : localizedSlug;
		}

		if (lang !== defaultLocale && !locale) {
			localizedSlug = [lang, ...localizedSlug];
		}

		return {
			params: {
				lang,
				slug: localizedSlug.join("/") || undefined,
			},
			props: {
				data: item,
			},
		};
	});

	let pathsRes = paths;
	if (locale) {
		pathsRes = paths.filter((path) => path.params.lang === locale);
	}

	return pathsRes;
}
