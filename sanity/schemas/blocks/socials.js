import { defineField, defineType } from "sanity"

const socialTypes = [
	{ title: "Facebook", value: "facebook" },
	{ title: "Twitter", value: "twitter" },
	{ title: "Instagram", value: "instagram" },
	{ title: "LinkedIn", value: "linkedin" },
]

export default defineType({
	title: "Social Media",
	name: "social",
	type: "object",
	fieldsets: [
		{
			title: "Link",
			name: "link",
		},
	],

	fields: [
		defineField({
			title: "Link",
			name: "link",
			type: "string",
		}),
		defineField({
			title: "Socials Type",
			name: "socials_types",
			type: "string",
			validation: (Rule) => Rule.required(),
			options: {
				list: socialTypes,
				layout: "dropdown",
			},
		}),
	],
	preview: {
		select: {
			socials_types: "socials_types",
		},
		prepare: ({ socials_types }) => {
			const socialName = socials_types && socialTypes.flatMap((option) => (option.value === socials_types ? [option.title] : []))
			return {
				title: socials_types ? ` ${socialName}` : "No social selected",
			}
		},
	},
})
