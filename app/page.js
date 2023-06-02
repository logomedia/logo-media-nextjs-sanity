import { getHomepage } from "../lib/sanity.client"
import RenderSections from "../app/components/RenderSections/RenderSections"

export async function generateMetadata() {
	const home = await getHomepage()
	console.log(home)
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
	}
}

export default async function Page() {
	const home = await getHomepage()
	const content = home?.content
	return <>{content && <RenderSections sections={content} />}</>
}
