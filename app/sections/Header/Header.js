"use client"
import PropTypes from "prop-types"
// @mui
import { useTheme } from "@mui/material/styles"
import { Box, Stack, AppBar, Toolbar, Container } from "@mui/material"
// hooks
import useOffSetTop from "../../../hooks/useOffsetTop"
import useResponsive from "../../../hooks/useResponsive"
// utils
import { bgBlur } from "../../../utils/cssStyles"

// config
import { HEADER } from "../../../config-global"
// components
import Logo from "../../components/Logo"

import CTA from "../../components/CTA"

//
import { NavMobile, NavDesktop } from "../../components/Nav"

import HeaderShadow from "../Header/components/HeaderShadow"
import ModeOptions from "../../components/Settings/drawer/components/ModeOptions"

// ----------------------------------------------------------------------

export default function Header({ headerOnDark, settings }) {
	let navConfig = []

	const mainMenu = settings.mainMenu

	if (!mainMenu) {
		return
	} else {
		for (let i = 0; i < mainMenu.length; i++) {
			function getPath() {
				let menuPath = mainMenu[i].link.slug
				if (!menuPath) {
					return "#"
				} else {
					return menuPath.current
				}
			}
			function getChildren() {
				let navItems = mainMenu[i].link

				if (navItems.menuImage) {
					let menu = []
					let kids = []
					let items = navItems.links
					let obj = {
						order: "1",
						subheader: navItems.name,
						cover: navItems.menuImage.asset.url,
						items: [],
					}

					for (let i = 0; i < items.length; i++) {
						let object = {
							title: items[i].name,
							path: `/${items[i].link.slug.current}`,
						}
						kids.push(object)
					}
					obj.items = kids
					menu.push(obj)
					return menu
				} else if (mainMenu[i].link.links) {
					let grandkids = mainMenu[i].link.links
					let menus = []
					for (let i = 0; i < grandkids.length; i++) {
						let grandKidLinks = grandkids[i].link.links

						let array = []

						let grandMenu = {
							order: `${i + 1}`,
							subheader: grandkids[i].name,
							cover: grandkids[i].link.menuImage.asset.url,
							items: [],
						}
						for (let j = 0; j < grandKidLinks.length; j++) {
							//console.log(grandKidLinks[i])
							let grandKid = {
								title: grandKidLinks[j].name,
								path: `/${grandKidLinks[j].link.slug.current}`,
							}
							array.push(grandKid)
						}

						grandMenu.items = array
						menus.push(grandMenu)
					}
					return menus
				}
			}
			let path = getPath()

			let obj1 = {
				title: mainMenu[i].name,
				path: `/${path}`,
			}

			let child = getChildren()

			if (child) {
				obj1.children = child
			}

			navConfig.push(obj1)
		}
	}

	const theme = useTheme()

	const isMdUp = useResponsive("up", "md")

	const isOffset = useOffSetTop()

	return (
		<AppBar color='transparent' sx={{ boxShadow: "none" }}>
			<Toolbar
				disableGutters
				sx={{
					height: {
						xs: HEADER.H_MOBILE,
						md: HEADER.H_MAIN_DESKTOP,
					},
					transition: theme.transitions.create(["height", "background-color"], {
						easing: theme.transitions.easing.easeInOut,
						duration: theme.transitions.duration.shorter,
					}),
					...(headerOnDark && {
						color: "common.white",
					}),
					...(isOffset && {
						...bgBlur({ color: theme.palette.background.default }),
						color: "text.primary",
						height: {
							md: HEADER.H_MAIN_DESKTOP - 16,
						},
					}),
				}}
			>
				<Container sx={{ height: 1, display: "flex", alignItems: "center", px: { xs: 1 } }}>
					<Box sx={{ lineHeight: 0, position: "relative", mr: 0 }}>
						<Logo settings={settings} />
					</Box>

					{isMdUp && <NavDesktop data={navConfig} />}

					<Stack spacing={2} flexGrow={1} direction='row' alignItems='center' justifyContent='flex-end'>
						<ModeOptions />

						{isMdUp && (
							<>
								{settings.mainMenuCTAs.map((cta) => (
									<CTA {...cta} key={cta._key} />
								))}
							</>
						)}
					</Stack>

					{!isMdUp && <NavMobile settings={settings} data={navConfig} />}
				</Container>
			</Toolbar>

			{isOffset && <HeaderShadow />}
		</AppBar>
	)
}

Header.propTypes = {
	headerOnDark: PropTypes.bool,
}
