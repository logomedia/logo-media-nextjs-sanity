import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "partners",
	title: "Partners",
	icon: BookIcon,
	type: "object",

	fields: [
		defineField({
			name: "heading",
			type: "string",
			title: "Heading (Does Not Show)",
		}),
	],
	preview: {
		select: {
			title: "heading",
		},
		prepare({ title }) {
			return {
				title,
			}
		},
	},
})
