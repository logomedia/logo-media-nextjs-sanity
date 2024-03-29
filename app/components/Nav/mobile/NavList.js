import PropTypes from "prop-types"
import { useState } from "react"
// next
import { useRouter } from "next/navigation"
// @mui
import { Collapse } from "@mui/material"
// hooks
import useActiveLink from "../../../../hooks/useActiveLink"
// components
import { NavSectionVertical } from "../../NavSection"
//
import NavItem from "./NavItem"

// ----------------------------------------------------------------------

export default function NavList({ item }) {
	const { children } = item

	const { active, isExternalLink } = useActiveLink(item)

	const [open, setOpen] = useState(false)

	return (
		<>
			<NavItem item={item} open={open} onClick={() => setOpen(!open)} active={active} isExternalLink={isExternalLink} />

			{!!children && (
				<Collapse in={open} unmountOnExit>
					<NavSectionVertical data={children} />
				</Collapse>
			)}
		</>
	)
}

NavList.propTypes = {
	item: PropTypes.object,
}
