import { getHomepage } from "../lib/sanity.client"
import RenderSections from "../app/components/RenderSections/RenderSections"

export async function generateMetadata() {
	const home = await getHomepage()
	return {
		title: home.title,
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
			title: home.title,
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
	const content = home?.content
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: "Logo Media",
		description: home.description,
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
		keywords: ["Web Designer", "Ecommerce Agency", "Web Developer", "Shopify Agency"],
	}
	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			{content && <RenderSections sections={content} />}
		</>
	)
}
