import PropTypes from "prop-types"
import { useState, useEffect } from "react"
// next
import { usePathname } from "next/navigation"
// @mui
import { List, Drawer, IconButton, Stack, Box } from "@mui/material"
// config
import { NAV } from "../../../../config-global"
// components
import Logo from "../../Logo"
import Iconify from "../../iconify"

//
import NavList from "./NavList"
import Cta from "../../CTA"

// ----------------------------------------------------------------------

export default function NavMobile({ data, settings }) {
	const pathname = usePathname()

	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (open) {
			handleClose()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<Cta {...settings.mainMenuCTAs[0]} />
			<IconButton onClick={handleOpen} sx={{ ml: 1, color: "inherit" }}>
				<Iconify icon='carbon:menu' />
			</IconButton>

			<Drawer
				open={open}
				onClose={handleClose}
				PaperProps={{
					sx: {
						p: 2,
						width: NAV.W_BASE,
					},
				}}
			>
				<Box sx={{ position: "relative" }}>
					<IconButton fontSize='large' onClick={handleClose} sx={{ ml: 1, color: "inherit", position: "absolute", top: "0px", right: "0px" }}>
						<Iconify icon='carbon:close' fontSize='large' />
					</IconButton>
					<Logo settings={settings} sx={{ mx: 2.5, my: 3, p: 1 }} />

					<List component='nav' disablePadding>
						{data.map((link) => (
							<NavList key={link.title} item={link} />
						))}
					</List>

					<Stack spacing={1.5} sx={{ p: 3 }}>
						{settings.mainMenuCTAs.map((cta) => (
							<Cta {...cta} key={cta._key} />
						))}
					</Stack>
				</Box>
			</Drawer>
		</>
	)
}

NavMobile.propTypes = {
	data: PropTypes.array,
}
