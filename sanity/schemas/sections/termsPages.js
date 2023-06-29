import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "termsPages",
	title: "Terms Pages Section",
	icon: BookIcon,
	type: "object",

	fields: [
		defineField({
			name: "heading",
			type: "string",
			title: "Heading",
		}),
		defineField({
			name: "description",
			type: "array",
			title: "Description",
			of: [{ type: "block" }],
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
