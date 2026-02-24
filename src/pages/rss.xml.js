import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET() {
	const posts = await getCollection("posts");
	return rss({
		title: "Jayna Bergerson | Articles",
		description: "UX design insights, research methods, and content strategy tips.",
		site: "https://jaynabergerson.com",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/post/${post.slug}/`,
		})),
		customData: "<language>en-us</language>",
	});
}
