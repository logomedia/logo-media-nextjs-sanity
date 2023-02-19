import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  type Page,
  pageBySlugQuery,
  pageQuery,
  pageSlugsQuery,
  type Post,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  type Project,
  projectAndMoreProjectsQuery,
  projectBySlugQuery,
  projectQuery,
  projectSlugsQuery,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}


export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}
export async function getAllPages(): Promise<Page[]> {
  if (client) {
    return (await client.fetch(pageQuery)) || []
  }
  return []
}
export async function getAllProjects(): Promise<Project[]> {
  if (client) {
    return (await client.fetch(projectQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}
export async function getAllPageSlugs(): Promise<Pick<Page, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(pageSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}
export async function getAllProjectSlugs(): Promise<Pick<Project, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(projectSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}
export async function getPageBySlug(slug: string): Promise<Page> {
  if (client) {
    return (await client.fetch(pageBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}
export async function getProjectBySlug(slug: string): Promise<Project> {
  if (client) {
    return (await client.fetch(projectBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}

export async function getProjectAndMoreProjects(
  slug: string,
  token?: string | null
): Promise<{ project: Project; moreProjects: Project[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(projectAndMoreProjectsQuery, { slug })
  }
  return { project: null, moreProjects: [] }
}
