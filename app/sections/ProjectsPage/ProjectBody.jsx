import { PortableText } from "@portabletext/react"
import Image from "next/image"

export default function ProjectBody({ content }) {
	const myPortableTextComponents = {
		types: {
			image: ({ value }) => {
				return <Image key={value.key} alt={value.alt} src={value.asset.url} width={value.asset.metadata.dimensions.width} height={value.asset.metadata.dimensions.height} />
			},
		},
	}
	return (
		<div>
			<PortableText value={content} components={myPortableTextComponents} />
		</div>
	)
}
