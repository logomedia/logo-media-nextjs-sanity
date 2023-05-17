import { getAllProjectSlugs } from "../../../lib/sanity.client"

export async function generateStaticParams() {
	const pageSlugs = await getAllProjectSlugs()

	return pageSlugs.map((page) => ({
		slug: page.slug,
	}))
}

export default function Page({ params }) {
	console.log(params)
	return (
		<>
			<h2> Test</h2>
		</>
	)
}
