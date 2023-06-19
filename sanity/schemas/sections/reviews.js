import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "reviews",
	title: "Reviews",
	icon: BookIcon,
	type: "object",

	fields: [
		defineField({
			name: "heading",
			type: "string",
			title: "Heading (Doesn't show)",
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
