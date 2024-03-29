import PropTypes from "prop-types"
import { useState, useEffect } from "react"
// next
import NextLink from "next/link"
// @mui
import { Fade, Portal, Stack, Box, Link, Unstable_Grid2 as Grid } from "@mui/material"
// hooks
import useActiveLink from "../../../../hooks/useActiveLink"
// components
import Image from "../../image"
import Label from "../../label"
//
import { StyledMenu, StyledSubheader } from "./styles"
import { NavItem } from "./NavItem"
import { usePathname } from "next/navigation"

// ----------------------------------------------------------------------

export default function NavList({ item }) {
	const pathname = usePathname()

	const [openMenu, setOpenMenu] = useState(false)

	const { path, children } = item

	const { active, isExternalLink } = useActiveLink(item)

	const mainList = children ? children.filter((list) => list.subheader !== "Common") : []

	useEffect(() => {
		if (openMenu) {
			handleCloseMenu()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	const handleOpenMenu = () => {
		if (children) {
			setOpenMenu(true)
		}
	}

	const handleCloseMenu = () => {
		setOpenMenu(false)
	}

	return (
		<>
			<NavItem item={item} active={active} open={openMenu} isExternalLink={isExternalLink} onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu} />

			{!!children && openMenu && (
				<Portal>
					<Fade in={openMenu}>
						<StyledMenu onMouseEnter={handleOpenMenu} onMouseLeave={handleCloseMenu}>
							<Grid container columns={16}>
								<Grid xs={16}>
									<Box
										gap={5}
										display='flex'
										justifyContent='center'
										sx={{
											p: 5,
											height: 1,
											position: "relative",
											bgcolor: "background.neutral",
										}}
									>
										{mainList.map((list) => (
											<NavSubList key={list.subheader} subheader={list.subheader} cover={list.cover} items={list.items} sx={{ maxWidth: "200px" }} />
										))}
									</Box>
								</Grid>
							</Grid>
						</StyledMenu>
					</Fade>
				</Portal>
			)}
		</>
	)
}

NavList.propTypes = {
	item: PropTypes.object,
}

// ----------------------------------------------------------------------

function NavSubList({ subheader, isNew, cover, items }) {
	const pathname = usePathname()

	const coverPath = items.length ? items[0].path : ""

	return (
		<Stack spacing={2} sx={{ maxWidth: "300px", width: "100%" }}>
			<StyledSubheader>
				{subheader}
				{isNew && (
					<Label color='info' sx={{ ml: 1 }}>
						NEW
					</Label>
				)}
			</StyledSubheader>

			<Link component={NextLink} href={coverPath}>
				<Image
					disabledEffect
					alt={cover}
					src={cover || "/assets/placeholder.svg"}
					ratio='16/9'
					sx={{
						borderRadius: 1,
						cursor: "pointer",
						boxShadow: (theme) => theme.customShadows.z8,
						transition: (theme) => theme.transitions.create("all"),
						"&:hover": {
							opacity: 0.8,
							boxShadow: (theme) => theme.customShadows.z24,
						},
					}}
				/>
			</Link>

			<Stack spacing={1.5} alignItems='flex-start'>
				{items.map((item) => (
					<NavItem key={item.title} item={item} subItem />
				))}
			</Stack>
		</Stack>
	)
}

NavSubList.propTypes = {
	cover: PropTypes.string,
	isNew: PropTypes.bool,
	items: PropTypes.array,
	subheader: PropTypes.string,
}
