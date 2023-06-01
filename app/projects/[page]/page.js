import { getAllProjectSlugs, getProjectBySlug } from "../../../lib/sanity.client"
import ProjectsPage from "../../sections/ProjectsPage"
export async function generateStaticParams() {
	const pageSlugs = await getAllProjectSlugs()

	return pageSlugs.map((page) => ({
		slug: page.slug,
	}))
}

export default async function Page({ params }) {
	const { page } = params
	const project = await getProjectBySlug(page)

	if (project === undefined) {
		return <NotFound />
	} else {
		return <ProjectsPage project={project} />
	}
}
