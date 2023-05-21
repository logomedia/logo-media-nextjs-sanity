import PropTypes from "prop-types"
import { forwardRef } from "react"

// next
import NextLink from "next/link"
// @mui
import { Link } from "@mui/material"
// components
import Iconify from "../../iconify"
//
import { StyledNavItem } from "./styles"
import { usePathname } from "next/navigation"

// ----------------------------------------------------------------------

export const NavItem = forwardRef(({ item, open, subItem, isExternalLink, ...other }, ref) => {
	const { title, path, children } = item

	const navLinks = []
	if (children) {
		children.forEach((item) => {
			item.items.forEach((item) => {
				navLinks.push(item.path)
			})
		})
	}
	const pathname = usePathname()
	const pathWithoutSlash = pathname.slice(1)

	const active = navLinks.includes(pathWithoutSlash)
	console.log(item, active)

	const renderContent = (
		<StyledNavItem ref={ref} disableRipple subItem={subItem} active={item.path === pathWithoutSlash} open={open} {...other}>
			{title}

			{!!children && <Iconify width={16} icon='carbon:chevron-down' sx={{ ml: 1 }} />}
		</StyledNavItem>
	)
	console.log(item, active)
	// ExternalLink
	if (isExternalLink) {
		return (
			<Link href={path} target='_blank' rel='noopener' color='inherit' underline='none'>
				{renderContent}
			</Link>
		)
	}

	// Has child
	if (children) {
		return renderContent
	}

	// Default
	return (
		<Link component={NextLink} href={path} color='inherit' underline='none'>
			{renderContent}
		</Link>
	)
})

NavItem.propTypes = {
	active: PropTypes.bool,
	isExternalLink: PropTypes.bool,
	item: PropTypes.object,
	open: PropTypes.bool,
	subItem: PropTypes.bool,
}
