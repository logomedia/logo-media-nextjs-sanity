// next
import { usePathname } from "next/navigation"
import { useSelectedLayoutSegment } from "next/navigation"

// ----------------------------------------------------------------------

export default function useActiveLink(path, deep = true) {
	const { pathname, asPath } = usePathname()
	const segment = useSelectedLayoutSegment()

	const checkPath = path.startsWith("#")

	const currentPath = path === "/" ? "/" : `${path}/`

	const normalActive = (!checkPath && pathname === currentPath) || (!checkPath && asPath === currentPath)

	const deepActive = (!checkPath && pathname) || (!checkPath && asPath)

	return {
		active: deep ? deepActive : normalActive,
		isExternalLink: path.includes("http"),
	}
}
