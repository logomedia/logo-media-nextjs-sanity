import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "roadMap",
	title: "How It Works / Our Story Section",
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
			name: "steps",
			type: "array",
			title: "Steps",
			validation: (rule) => rule.required(),
			of: [
				{
					type: "roadMapItem",
				},
			],
		}),
		defineField({
			name: "cta",
			type: "cta",
			title: "Call to Action",
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
