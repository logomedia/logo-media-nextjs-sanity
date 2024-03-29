import createImageUrlBuilder from "@sanity/image-url"
import { dataset, projectId } from "lib/sanity.api"

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export default function urlFor(source) {
	return imageBuilder.image(source)
}
