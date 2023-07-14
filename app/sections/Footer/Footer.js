"use client"
// next
import { useState } from "react"
import Masonry from "@mui/lab/Masonry"
import { Link, Stack, Box, Button, Divider, Container, TextField, Typography, IconButton, InputAdornment, Unstable_Grid2 as Grid } from "@mui/material"
// hooks
import useResponsive from "../../../hooks/useResponsive"

// components
import Logo from "../../components/Logo"
import Iconify from "../../components/iconify"
//

import ListDesktop from "./ListDesktop"
import ListMobile from "./ListMobile"
import emailjs from "@emailjs/browser"
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Footer({ settings }) {
	const currentYear = new Date().getFullYear()
	let navConfig = []
	const footerMenu = settings.footerMenu
	if (!footerMenu) {
		return
	} else {
		for (let i = 0; i < footerMenu.length; i++) {
			function getPath() {
				let menuPath = footerMenu[i].link.slug
				if (!menuPath) {
					return "#"
				} else {
					return menuPath.current
				}
			}
			function getChildren() {
				let navItems = footerMenu[i].link

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
				} else if (footerMenu[i].link.links) {
					let grandkids = footerMenu[i].link.links
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
				title: footerMenu[i].name,
				path: `/${path}`,
			}

			let child = getChildren()

			if (child) {
				obj1.children = child
			}

			navConfig.push(obj1)
		}
	}

	const isMdUp = useResponsive("up", "md")

	const mobileList = navConfig

	const desktopList = navConfig

	const renderLists = isMdUp ? desktopList : mobileList
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [success, setSuccess] = useState("")
	function submitEmail(e) {
		e.preventDefault()
		const toSend = {
			from_name: name,
			to_name: "Logo Media",
			message: name + " " + email,
			reply_to: email,
		}
		emailjs
			.send("service_1tbbiwc", "template_ihms0lc", toSend, "XtmHxL5zdet_8tKjY")
			.then((response) => {
				setSuccess("Your email has been submitted")
				window.dataLayer.push({
					event: "subscriber",
					page: url,
				})
			})
			.catch((err) => {
				setSuccess(err)
			})
	}
	return (
		<footer>
			<Divider />

			<Container
				sx={{
					overflow: "hidden",
					py: { xs: 8, md: 10 },
				}}
			>
				<Grid container spacing={3} justifyContent={{ md: "space-between" }}>
					<Grid xs={12} md={4}>
						<Stack spacing={{ xs: 3, md: 5 }}>
							<Stack alignItems='flex-start' spacing={3}>
								<Logo settings={settings} />
								<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center " }}>
									<IconButton color='primary' href='https://www.google.com/maps/place/Logo+Media/@25.7659378,-80.1928169,17z/data=!3m1!4b1!4m6!3m5!1s0x87c5cd2f6960ff51:0x59728db521b11a74!8m2!3d25.765933!4d-80.190242!16s%2Fg%2F11tmrf8yln' target='_blank'>
										<Iconify icon={"mdi:location"} />
									</IconButton>
									<Typography variant='body2' sx={{ color: "text.secondary" }}>
										{settings.address}
									</Typography>
								</Box>
								<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center " }}>
									<IconButton color='primary' href={"tel:" + settings.phone} target='_blank'>
										<Iconify icon={"bi:phone-fill"} />
									</IconButton>
									<Typography variant='body2' sx={{ color: "text.secondary" }}>
										{settings.phone}
									</Typography>
								</Box>
								<Box sx={{ display: "flex", flexDirection: "row", alignItems: "center " }}>
									<IconButton color='primary' href={"mailto:" + settings.email} target='_blank'>
										<Iconify color='primary' icon={"ic:baseline-email"} />
									</IconButton>

									<Typography variant='body2' sx={{ color: "text.secondary" }}>
										{settings.email}
									</Typography>
								</Box>
							</Stack>

							<Stack spacing={2}>
								<Stack direction='row' alignItems='center'>
									{settings.socials.map((social) => (
										<IconButton key={social._key} color='primary' href={social.link} target='_blank'>
											<Iconify icon={`carbon:logo-${social.socials_types}`} />
										</IconButton>
									))}
								</Stack>
							</Stack>
						</Stack>
					</Grid>

					<Grid xs={12} md={8}>
						{isMdUp ? (
							<Masonry columns={4} spacing={2} defaultColumns={4} defaultSpacing={2}>
								{renderLists.map((list) => (
									<ListDesktop key={list.title} list={list.children[0]} />
								))}
							</Masonry>
						) : (
							<Stack spacing={1.5}>
								{renderLists.map((list) => (
									<ListMobile key={list.title} list={list} />
								))}
							</Stack>
						)}
						<Stack spacing={2} sx={{ mt: 2, maxWidth: 520 }}>
							<Stack spacing={1}>
								<Typography variant='h6'>{settings.newsletterTitle}</Typography>
								<Typography variant='caption' sx={{ color: "text.secondary" }}>
									{settings.newsletterDescription}
								</Typography>
							</Stack>
							<form style={{ width: "100%" }} onSubmit={submitEmail}>
								<Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
									<TextField sx={{ width: { xs: "100%", md: "40%" }, mr: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }} hiddenLabel placeholder='Name' name='name' type='name' onChange={(e) => setNamel(e.target.value)} required />
									<TextField
										sx={{ width: { md: "60%", xs: "100%" } }}
										hiddenLabel
										placeholder='Email address'
										InputProps={{
											endAdornment: (
												<InputAdornment position='end'>
													<Button type='submit' variant='contained' color='secondary' size='large'>
														Subscribe
													</Button>
												</InputAdornment>
											),
											sx: { pr: 0.5 },
										}}
									/>
								</Box>
								<Typography>{success}</Typography>
							</form>
						</Stack>
					</Grid>
				</Grid>
			</Container>
			<Divider />
			<Container>
				<Stack spacing={2.5} direction={{ xs: "column", md: "row" }} justifyContent='space-between' sx={{ py: 3, textAlign: "center" }}>
					<Typography variant='caption' sx={{ color: "text.secondary" }}>
						© {currentYear}. All rights reserved
					</Typography>

					<Stack direction='row' spacing={3} justifyContent='center'>
						<Link href='/privacy-policy' variant='caption' sx={{ color: "text.secondary", cursor: "pointer" }}>
							Privacy Policy
						</Link>
						<Link href='/terms-of-service' variant='caption' sx={{ color: "text.secondary", cursor: "pointer" }}>
							Terms of Service
						</Link>
					</Stack>
				</Stack>
			</Container>
		</footer>
	)
}

// ----------------------------------------------------------------------
