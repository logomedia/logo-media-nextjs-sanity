import { defineField, defineType } from "sanity"

export default defineType({
	name: "iconWithLink",
	title: "Icon With Link",
	type: "object",

	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "subtitle",
			type: "string",
			title: "Subtitle",
		}),

		defineField({
			name: "url",
			type: "string",
			title: "URL",
		}),

		defineField({
			name: "icon",
			type: "image",
			title: "Icon",
			validation: (rule) => rule.required(),
		}),
	],

	preview: {
		select: {
			title: "title",
			media: "icon",
		},
		prepare({ title, media }) {
			return {
				title,
				media,
			}
		},
	},
})
