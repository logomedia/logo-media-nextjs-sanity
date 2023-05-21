// next
"use client"
import { usePathname, useSelectedLayoutSegments } from "next/navigation"

// ----------------------------------------------------------------------

export default function useActiveLink(item) {
	const pathname = usePathname()

	const normalActive = pathname.includes(item.path)
	const deepActive = item.path.startsWith("#")
	const navLinks = []
	if (item.children) {
		item.children.forEach((item) => {
			item.items.forEach((item) => {
				navLinks.push(item.path)
			})
		})
	}

	const pathWithoutSlash = pathname.slice(1)

	let deep = navLinks.includes(pathWithoutSlash)

	if (normalActive) {
		let deep = false
	} else {
		let deep = true
	}
	return {
		active: deep ? deepActive : normalActive,
		//isExternalLink: path.includes("http"),
	}
}
