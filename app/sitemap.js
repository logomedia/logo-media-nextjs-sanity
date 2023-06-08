import { getAllPageSlugs, getAllProjectSlugs, getAllPostSlugs } from "../lib/sanity.client"
export default async function sitemap() {
	const sitemap = []
	const pages = await getAllPageSlugs()
	const projects = await getAllProjectSlugs()
	const posts = await getAllPostSlugs()

	pages.forEach((page) => {
		let object = {}
		object.lastModified = new Date()
		if (page.slug === "/") {
			object.url = `https://logo.media/`
		} else {
			object.url = `https://logo.media/${page.slug}`
		}

		sitemap.push(object)
	})
	projects.forEach((page) => {
		let object = {}
		object.lastModified = new Date()

		object.url = `https://logo.media/projects/${page.slug}`

		sitemap.push(object)
	})
	posts.forEach((page) => {
		let object = {}
		object.lastModified = new Date()

		object.url = `https://logo.media/news-and-trends/${page.slug}`

		sitemap.push(object)
	})
	return sitemap
}
