import { BookIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "ourTeachers",
	title: "Team 2 Section",
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
			title: "Teachers",
			validation: (rule) => rule.required(),
			of: [
				{
					title: "Teacher",
					type: "teamMember",
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
