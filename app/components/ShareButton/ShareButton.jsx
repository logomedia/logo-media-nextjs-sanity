"use client"
import { useState } from "react"
//icon
import shareIcon from "@iconify/icons-carbon/share"
import logoLinkedin from "@iconify/icons-carbon/logo-linkedin"
import logoFacebook from "@iconify/icons-carbon/logo-facebook"
import logoTwitter from "@iconify/icons-carbon/logo-twitter"
import Link from "next/link"
// @mui
import { MenuItem, Popover } from "@mui/material"
// components
import Iconify from "../iconify"
import { IconButtonAnimate } from "../animate"
import { usePathname } from "next/navigation"

// ----------------------------------------------------------------------

export default function ShareButton({ sx }) {
	const [open, setOpen] = useState(null)

	const handleOpen = (event) => {
		setOpen(event.currentTarget)
	}

	const handleClose = () => {
		setOpen(null)
	}
	const pathname = usePathname()
	let title
	if (document === undefined) {
		title = ""
	} else {
		title = document.title
	}
	const SOCIALS = [
		{
			name: "FaceBook",
			icon: logoFacebook,
			socialColor: "#1877F2",
			path: `https://www.facebook.com/sharer.php?u=${"https://logo.media" + pathname}`,
		},
		{
			name: "Linkedin",
			icon: logoLinkedin,
			socialColor: "#007EBB",
			path: `https://www.linkedin.com/shareArticle?url=${"https://logo.media" + pathname + "&title=" + title}`,
		},
		{
			name: "Twitter",
			icon: logoTwitter,
			socialColor: "#00AAEC",
			path: `https://twitter.com/intent/tweet?url=${"https://logo.media" + pathname + "&title=" + title}`,
		},
	]

	return (
		<>
			<IconButtonAnimate
				onClick={handleOpen}
				sx={{
					...(open && {
						color: "primary.main",
					}),
					...sx,
				}}
			>
				<Iconify icon={shareIcon} sx={{ width: 20, height: 20 }} />
			</IconButtonAnimate>

			<Popover
				open={Boolean(open)}
				onClose={handleClose}
				anchorEl={open}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				transformOrigin={{ vertical: "top", horizontal: "center" }}
				PaperProps={{
					sx: { width: 220, p: 1 },
				}}
			>
				{SOCIALS.map((option) => (
					<MenuItem target='_blank' onClick={handleClose} component={Link} href={option.path} key={option.name} sx={{ typography: "body3" }}>
						<Iconify icon={option.icon} sx={{ width: 24, height: 24, mr: 2, color: option.socialColor }} />
						Share via {option.name}
					</MenuItem>
				))}
			</Popover>
		</>
	)
}
