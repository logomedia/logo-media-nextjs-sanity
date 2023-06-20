import { draftMode } from "next/headers"
import { getRecentPosts, getRecentProjects, getAllPageSlugs, getPageBySlug, getReviews, getPartners } from "../../lib/sanity.client"
import RenderSections from "../components/RenderSections/RenderSections"

import NotFound from "../not-found"

import PreviewSuspense from "../components/PreviewSuspense"
import PreviewRenderSections from "../components/RenderSections/PreviewRenderSections"
import LoadingPreview from "../components/LoadingPreview"
import ExitPreviewButton from "../components/ExitPreviewButton"
import urlFor from "../../utils/imageUrl"

export async function generateMetadata({ params }) {
	const { page } = params

	const pageData = await getPageBySlug(page)

	const ogImage = pageData.ogImage ? urlFor(pageData.ogImage.asset).width(800).url() : ""

	return {
		title: pageData.metaTitle,
		description: pageData.description,
		alternates: {
			canonical: `https://logo.media/${pageData.slug}`,
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
			title: pageData.metaTitle,
			description: pageData.description,
			siteId: "1485472568299737088",
			creator: "@Logo__Media ",
			creatorId: "1485472568299737088",
			images: [ogImage],
		},
	}
}

export async function generateStaticParams() {
	const pageSlugs = await getAllPageSlugs()

	return pageSlugs.map((page) => ({
		slug: page.slug,
	}))
}

export default async function Page({ params }) {
	const { page } = params

	const pageData = await getPageBySlug(page)
	const content = pageData?.content

	const { isEnabled } = draftMode()

	if (content === undefined) {
		return <NotFound />
	} else {
		const ogImage = pageData.ogImage ? urlFor(pageData.ogImage.asset).width(800).url() : ""
		const reviews = await getReviews()
		const projects = await getRecentProjects()
		const posts = await getRecentPosts()
		const partners = await getPartners()
		let reviewSum = 0
		reviews.forEach((review) => {
			reviewSum += review.rating
		})
		const reviewRating = reviewSum / reviews.length
		const jsonLd = {
			"@context": "https://schema.org",
			"@type": "Organization",
			name: "Logo Media",
			logo: "https://cdn.sanity.io/images/kgp6clwy/production/c288a1bcd93f7314e462b12f5ac1dfc1dfb10b91-78x19.svg",
			url: "https://logo.media",
			telephone: "+13053172807",
			email: "info@logo.media",
			address: {
				streetAddress: "801 Brickell Ave. 8th floor",
				addressLocality: "Miami",
				addressRegion: "Fl",
				postalCode: "33131",
				addressCountry: "US",
			},
			keywords: pageData.keywords,
			images: [ogImage],
			priceRange: "$1000+",
			openingHours: [
				{
					opens: "08:00",
					closes: "20:00:00",
					dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				},
			],
			rating: {
				ratingValue: reviewRating,
				ratingCount: reviews.length,
			},
		}

		return (
			<>
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				{content && !isEnabled ? (
					<RenderSections sections={content} projects={projects} posts={posts} preview={isEnabled} reviews={reviews} partners={partners} />
				) : (
					<PreviewSuspense fallback={<LoadingPreview />}>
						<PreviewRenderSections page={page} preview={isEnabled} />
					</PreviewSuspense>
				)}

				{isEnabled && <ExitPreviewButton />}
			</>
		)
	}
}
