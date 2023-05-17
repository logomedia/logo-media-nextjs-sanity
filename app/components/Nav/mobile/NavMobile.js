import PropTypes from "prop-types"
import { useState, useEffect } from "react"
// next
import { usePathname } from "next/navigation"
// @mui
import { List, Drawer, IconButton, Button, Stack } from "@mui/material"
// config
import { NAV } from "../../../../config-global"
// components
import Logo from "../../Logo"
import Iconify from "../../iconify"
import Scrollbar from "../../Scrollbar"
//
import NavList from "./NavList"

// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
	const { pathname } = usePathname()

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
			<IconButton onClick={handleOpen} sx={{ ml: 1, color: "inherit" }}>
				<Iconify icon='carbon:menu' />
			</IconButton>

			<Drawer
				open={open}
				onClose={handleClose}
				PaperProps={{
					sx: {
						pb: 5,
						width: NAV.W_BASE,
					},
				}}
			>
				<Scrollbar>
					<Logo sx={{ mx: 2.5, my: 3 }} />

					<List component='nav' disablePadding>
						{data.map((link) => (
							<NavList key={link.title} item={link} />
						))}
					</List>

					<Stack spacing={1.5} sx={{ p: 3 }}>
						<Button fullWidth variant='contained' color='inherit'>
							Buy Now
						</Button>
					</Stack>
				</Scrollbar>
			</Drawer>
		</>
	)
}

NavMobile.propTypes = {
	data: PropTypes.array,
}
