import { draftMode } from "next/headers"
import { getAllProjectSlugs, getProjectBySlug } from "../../../lib/sanity.client"
import ProjectsPage from "../../sections/ProjectsPage"
import PreviewProjectsPage from "../../sections/ProjectsPage/PreviewProjectsPage"
import PreviewSuspense from "../../components/PreviewSuspense"
import LoadingPreview from "../../components/LoadingPreview"
import ExitPreviewButton from "../../components/ExitPreviewButton"

export async function generateMetadata({ params }) {
	const { page } = params

	const project = await getProjectBySlug(page)

	const ogImage = project.coverImage.asset.url
	return {
		title: `${project.title} | Projects| Logo Media`,
		description: project.brief,
		alternates: {
			canonical: `https://logo.media/projects/${project.slug}`,
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
			title: `${project.title} | Projects| Logo Media`,
			description: project.brief,
			siteId: "1485472568299737088",
			creator: "@Logo__Media ",
			creatorId: "1485472568299737088",
			images: [ogImage],
		},
	}
}

export async function generateStaticParams() {
	const pageSlugs = await getAllProjectSlugs()

	return pageSlugs.map((page) => ({
		slug: page.slug,
	}))
}

export default async function Page({ params }) {
	const { page } = params
	const project = await getProjectBySlug(page)
	const ogImage = project.coverImage.asset.url

	const { isEnabled } = draftMode()

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Project",
		name: `${project.title} | Projects| Logo Media`,
		description: project.brief,
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
		keywords: project.tags,
		images: [ogImage],
		priceRange: "$1000+",
	}

	if (project === undefined) {
		return <NotFound />
	} else if (isEnabled) {
		return (
			<>
				<PreviewSuspense fallback={<LoadingPreview />}>
					<PreviewProjectsPage slug={page} />
				</PreviewSuspense>

				{isEnabled && <ExitPreviewButton />}
			</>
		)
	} else {
		return (
			<>
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<ProjectsPage project={project} />
			</>
		)
	}
}
