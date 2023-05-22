import { getHomepage } from "../lib/sanity.client"
import RenderSections from "../app/components/RenderSections/RenderSections"

export default async function Page() {
	const home = await getHomepage()
	const content = home?.content
	return <>{content && <RenderSections sections={content} />}</>
}
