import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../config";

export async function GET(context: { site: URL }) {
	const articles = await getCollection("writing", ({ data }) => {
		return data.draft === false;
	});

	articles.sort(
		(a, b) =>
			b.data.publishDate.getTime() - a.data.publishDate.getTime(),
	);

	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: articles.map((article) => ({
			title: article.data.title,
			pubDate: article.data.publishDate,
			description: article.data.description,
			link: `/writing/${article.id}`,
			categories: article.data.tags,
		})),
		customData: `<language>${siteConfig.language}</language>`,
		xmlns: {
			atom: "http://www.w3.org/2005/Atom",
		},
	});
}
