import { defineType, defineField } from "sanity"

export default defineType({
	title: "Client",
	name: "clientLogos",
	type: "object",
	fields: [
		defineField({
			name: "clientName",
			title: "Client Name",
			type: "string",
		}),
		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
		}),
	],
	preview: {
		select: {
			title: "clientName",
		},
		prepare({ title }) {
			return {
				title,
			}
		},
	},
})
