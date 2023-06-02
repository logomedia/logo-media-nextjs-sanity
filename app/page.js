import { getHomepage } from "../lib/sanity.client"
import RenderSections from "../app/components/RenderSections/RenderSections"

export async function generateMetadata() {
	const home = await getHomepage()
	return {
		title: home.metaTitle,
		description: home.description,
		alternates: {
			canonical: "/",
		},
		openGraph: {
			images: home.ogImage.asset.url,
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
			images: [home.ogImage.asset.url],
		},
	}
}

export default async function Page() {
	const home = await getHomepage()
	console.log(home)
	const content = home?.content
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
		images: [home.ogImage.asset.url],
		priceRange: "$1000+",
		openingHours: [
			{
				opens: "08:00",
				closes: "20:00:00",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			},
		],
		rating: {
			ratingValue: "5.0",
			ratingCount: "152",
		},
	}
	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			{content && <RenderSections sections={content} />}
		</>
	)
}
