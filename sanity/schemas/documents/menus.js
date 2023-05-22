import { MenuIcon } from "@sanity/icons"
import { defineField, defineType } from "sanity"

export default defineType({
	name: "menus",
	title: "Menus",
	icon: MenuIcon,
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "menuImage",
			title: "Menu Image",
			type: "image",
		}),
		defineField({
			name: "links",
			title: "Links",
			type: "array",
			of: [
				{
					title: "Nav Links",
					type: "navItem",
				},
			],
		}),
	],
})
