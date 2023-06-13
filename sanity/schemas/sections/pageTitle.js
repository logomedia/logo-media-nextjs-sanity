import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "pageTitle",
	title: "Page Title Section",
	icon: BookIcon,
	type: "object",

	fields: [
		defineField({
			name: "heading",
			type: "string",
			title: "Heading",
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "description",
			type: "array",
			title: "Description",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "image",
			type: "image",
			title: "Background  Image",
			validation: (rule) => rule.required(),
		}),
	],

	preview: {
		select: {
			title: "heading",
			media: "image",
		},
		prepare({ title, media }) {
			return {
				title,
				media,
			}
		},
	},
})
