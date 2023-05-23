import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from "../sanity/env"
import { projectQuery, projectBySlugQuery, projectSlugsQuery, homepageQuery, pageSlugsQuery, pageBySlugQuery, settingsQuery, postSlugsQuery, postBySlugQuery, postsQuery } from "../lib/sanity.queries"

export const client = projectId ? createClient({ projectId, dataset, apiVersion, useCdn }) : null

export async function getSettings() {
	if (client) {
		return (await client.fetch(settingsQuery)) || {}
	}
	return {}
}
export async function getHomepage() {
	if (client) {
		return (await client.fetch(homepageQuery)) || {}
	}
	return {}
}
export async function getAllPageSlugs() {
	if (client) {
		const slugs = (await client.fetch(pageSlugsQuery)) || []
		return slugs.map((slug) => ({ slug }))
	}
	return []
}
export async function getPageBySlug(slug) {
	if (client) {
		return (await client.fetch(pageBySlugQuery, { slug })) || {}
	}
	return {}
}
export async function getAllProjectSlugs() {
	if (client) {
		const slugs = (await client.fetch(projectSlugsQuery)) || []
		return slugs.map((slug) => ({ slug }))
	}
	return []
}
export async function getProjectBySlug(slug) {
	if (client) {
		return (await client.fetch(projectBySlugQuery, { slug })) || {}
	}
	return {}
}
export async function getAllProjects() {
	if (client) {
		return (await client.fetch(projectQuery)) || []
	}
	return []
}
export async function getAllPostSlugs() {
	if (client) {
		const slugs = (await client.fetch(postSlugsQuery)) || []
		return slugs.map((slug) => ({ slug }))
	}
	return []
}
export async function getPostBySlug(slug) {
	if (client) {
		return (await client.fetch(postBySlugQuery, { slug })) || {}
	}
	return {}
}
export async function getAllPosts() {
	if (client) {
		return (await client.fetch(postsQuery)) || []
	}
	return []
}
