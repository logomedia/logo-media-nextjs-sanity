"use client"
// icons
import logoLinkedin from "@iconify/icons-carbon/logo-linkedin"
import logoFacebook from "@iconify/icons-carbon/logo-facebook"
import logoTwitter from "@iconify/icons-carbon/logo-twitter"
import logoInstagram from "@iconify/icons-carbon/logo-instagram"
// @mui
import { alpha } from "@mui/material/styles"
import { Stack, IconButton, Button, Link } from "@mui/material"
// @types

//
import Iconify from "../iconify"
import { usePathname } from "next/navigation"

// ----------------------------------------------------------------------

export default function SocialsButton({ initialColor = false, simple = true, links = {}, sx, ...other }) {
	const pathname = usePathname()
	let title
	if (document) {
		title = document.title
	} else {
		title = ""
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
			path: `https://twitter.com/intent/tweet?url=${"https://logo.media" + pathname + "&text=" + title}`,
		},
	]

	return (
		<Stack direction='row' flexWrap='wrap' alignItems='center'>
			{SOCIALS.map((social) => {
				const { name, icon, path, socialColor } = social
				return simple ? (
					<Link key={name} href={path}>
						<IconButton
							color='inherit'
							sx={{
								...(initialColor && {
									color: socialColor,
									"&:hover": {
										bgcolor: alpha(socialColor, 0.08),
									},
								}),
								...sx,
							}}
							{...other}
						>
							<Iconify icon={icon} sx={{ width: 20, height: 20 }} />
						</IconButton>
					</Link>
				) : (
					<Button
						key={name}
						href={path}
						color='inherit'
						variant='outlined'
						size='small'
						startIcon={<Iconify icon={icon} />}
						sx={{
							m: 0.5,
							flexShrink: 0,
							...(initialColor && {
								color: socialColor,
								borderColor: socialColor,
								"&:hover": {
									borderColor: socialColor,
									bgcolor: alpha(socialColor, 0.08),
								},
							}),
							...sx,
						}}
						{...other}
					>
						{name}
					</Button>
				)
			})}
		</Stack>
	)
}
