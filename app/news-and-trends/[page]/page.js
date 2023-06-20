import { draftMode } from "next/headers"
import { getAllPostSlugs, getPostBySlug, getAllPosts, getRecentPosts } from "../../../lib/sanity.client"
import PostsPage from "../../sections/PostsPage"
import PreviewPostsPage from "../../sections/PostsPage/PreviewPostsPage"
import PreviewSuspense from "../../components/PreviewSuspense"
import LoadingPreview from "../../components/LoadingPreview"
import ExitPreviewButton from "../../components/ExitPreviewButton"
import { Suspense } from "react"

export async function generateMetadata({ params }) {
	const { page } = params

	const post = await getPostBySlug(page)

	const ogImage = post.coverImage.asset.url
	return {
		title: post.title,
		description: post.description,
		alternates: {
			canonical: `https://logo.media/news-and-trends/${post.slug}`,
		},
		openGraph: {
			images: ogImage,
		},
		robots: {
			index: true,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			siteId: "1485472568299737088",
			creator: "@Logo__Media ",
			creatorId: "1485472568299737088",
			images: [ogImage],
		},
	}
}

export async function generateStaticParams() {
	const pageSlugs = await getAllPostSlugs()

	return pageSlugs.map((page) => ({
		slug: page.slug,
	}))
}

export default async function Page({ params }) {
	const { page } = params
	const post = await getPostBySlug(page)
	const posts = await getRecentPosts()

	const { isEnabled } = draftMode()

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		logo: "https://cdn.sanity.io/images/kgp6clwy/production/c288a1bcd93f7314e462b12f5ac1dfc1dfb10b91-78x19.svg",
		name: post.title,
		description: post.excerpt,
		articleBody: post.content,
		articleSection: post.tags,
		creator: post.author,
		dateCreated: post.date,
		datePublished: post.date,
		keywords: post.tags,
		publisher: "Logo Media",
		image: post.coverImage,
		url: `https://logo.media/news-and-trends/${post.slug}`,
	}

	if (post === undefined) {
		return <NotFound />
	} else if (isEnabled) {
		return (
			<>
				<PreviewSuspense fallback={<LoadingPreview />}>
					<PreviewPostsPage slug={page} morePosts={posts} />
				</PreviewSuspense>

				{isEnabled && <ExitPreviewButton />}
			</>
		)
	} else {
		return (
			<>
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<Suspense fallback={<LoadingPreview />}>
					<PostsPage post={post} morePosts={posts} />
				</Suspense>
			</>
		)
	}
}
