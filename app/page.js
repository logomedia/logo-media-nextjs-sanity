import { draftMode } from "next/headers"
import { getRecentPosts, getRecentProjects, getHomepage, getSettings, getReviews } from "../lib/sanity.client"
import RenderSections from "../app/components/RenderSections/RenderSections"
import { Header } from "./sections/Header"
import { Footer } from "./sections/Footer"
import ContextWrapper from "./components/ContextWrapper/ContextWrapper"
import PreviewRenderSections from "./components/RenderSections/PreviewRenderSections"
import PreviewSuspense from "./components/PreviewSuspense"
import LoadingPreview from "./components/LoadingPreview"
import ExitPreviewButton from "./components/ExitPreviewButton"
import urlFor from "../utils/imageUrl"
import styles from "../app/globals.css"

// slick-carousel
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export async function generateMetadata() {
	const home = await getHomepage()
	return {
		title: home.metaTitle,
		description: home.description,
		alternates: {
			canonical: "/",
		},
		openGraph: {
			images: urlFor(home.ogImage.asset).width(800).url(),
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
			title: home.metaTitle,
			description: home.description,
			siteId: "1485472568299737088",
			creator: "@Logo__Media ",
			creatorId: "1485472568299737088",
			images: [urlFor(home.ogImage.asset).width(800).url()],
		},
	}
}

export default async function Page() {
	const home = await getHomepage()
	const reviews = await getReviews()
	const projects = await getRecentProjects()
	const posts = await getRecentPosts()
	const content = home?.content
	let reviewSum = 0
	reviews.forEach((review) => {
		reviewSum += review.rating
	})
	const reviewRating = reviewSum / reviews.length
	const { isEnabled } = draftMode()

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "Logo Media",
		description: home.schemaDescription,
		logo: "https://cdn.sanity.io/images/kgp6clwy/production/c288a1bcd93f7314e462b12f5ac1dfc1dfb10b91-78x19.svg",
		category: "Ecommerce Agency",
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
		keywords: home.keywords,
		images: [urlFor(home.ogImage.asset).width(800).url()],
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
				<RenderSections sections={content} projects={projects} posts={posts} preview={isEnabled} reviews={reviews} />
			) : (
				<PreviewSuspense fallback={<LoadingPreview />}>
					<PreviewRenderSections home preview={isEnabled} />
				</PreviewSuspense>
			)}

			{isEnabled && <ExitPreviewButton />}
		</>
	)
}
