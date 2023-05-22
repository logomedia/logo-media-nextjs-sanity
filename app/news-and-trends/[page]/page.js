import { getAllPostSlugs, getPostBySlug, getAllPosts } from "../../../lib/sanity.client"
import PostsPage from "../../sections/PostsPage"

export async function generateStaticParams() {
	const pageSlugs = await getAllPostSlugs()

	return pageSlugs.map((page) => ({
		slug: page.slug,
	}))
}

export default async function Page({ params }) {
	const { page } = params
	const post = await getPostBySlug(page)
	const posts = await getAllPosts()
	if (post === undefined) {
		return <NotFound />
	} else {
		return <PostsPage post={post} morePosts={posts} />
	}
}
