import { draftMode } from "next/headers"
import { getRecentPosts, getRecentProjects, getAllServiceSlugs, getServiceBySlug, getPartners, getReviews } from "../../../lib/sanity.client"
import RenderSections from "../../components/RenderSections/RenderSections"

import NotFound from "../../not-found"

import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewRenderSections from "../../components/RenderSections/PreviewRenderSections"
import LoadingPreview from "../../components/LoadingPreview"
import ExitPreviewButton from "../../components/ExitPreviewButton"
import urlFor from "../../../utils/imageUrl"
import { Suspense } from "react"

export async function generateMetadata({ params }) {
	const { page } = params

	const pageData = await getServiceBySlug(page)

	const ogImage = pageData.ogImage ? urlFor(pageData.ogImage.asset).width(800).url() : ""

	return {
		title: pageData.metaTitle,
		description: pageData.description,
		alternates: {
			canonical: `https://logo.media/services/${pageData.slug}`,
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
	const pageSlugs = await getAllServiceSlugs()

	return pageSlugs.map((page) => ({
		slug: page.slug,
	}))
}

export default async function Page({ params }) {
	const { page } = params

	const pageRequest = getServiceBySlug(page)
	const reviewsData = getReviews()
	const projectsData = getRecentProjects()
	const postsData = getRecentPosts()

	const partnersData = getPartners()
	const [pageData, reviews, projects, partners, posts] = await Promise.all([pageRequest, reviewsData, projectsData, partnersData, postsData])
	const content = pageData?.content

	const { isEnabled } = draftMode()

	if (content === undefined) {
		return <NotFound />
	} else {
		const ogImage = pageData.ogImage ? urlFor(pageData.ogImage.asset).width(800).url() : ""

		let reviewSum = 0
		reviews.forEach((review) => {
			reviewSum += review.rating
		})
		const reviewRating = reviewSum / reviews.length
		const jsonLd = {
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
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
					<Suspense>
						<RenderSections sections={content} projects={projects} preview={isEnabled} reviews={reviews} partners={partners} posts={posts} />
					</Suspense>
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
