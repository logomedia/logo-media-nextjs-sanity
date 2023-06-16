import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "coreValues",
	title: "Icons with Text",
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
			name: "cards",
			type: "array",
			title: "Values List Cards",
			validation: (rule) => rule.required(),
			of: [
				{
					title: "Value Card",
					type: "cardImgTxtDesc",
				},
			],
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
