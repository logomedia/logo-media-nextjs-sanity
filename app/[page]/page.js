import { getAllPageSlugs, getPageBySlug } from "../../lib/sanity.client"
import RenderSections from "../components/RenderSections/RenderSections"
import LazyMotion from "../components/LazyMotion"
import NotFound from "../not-found"

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
	if (content === undefined) {
		return <NotFound />
	} else {
		return (
			<>
				<LazyMotion>{content && <RenderSections sections={content} />}</LazyMotion>
			</>
		)
	}
}
