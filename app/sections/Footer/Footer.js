"use client"
// next
import { useRouter } from "next/navigation"
// @mui
import { alpha, styled } from "@mui/material/styles"
import Masonry from "@mui/lab/Masonry"
import { Link, Stack, Button, Divider, Container, TextField, Typography, IconButton, InputAdornment, Unstable_Grid2 as Grid } from "@mui/material"
// hooks
import useResponsive from "../../../hooks/useResponsive"

// components
import Logo from "../../components/Logo"
import Iconify from "../../components/iconify"
//

import ListDesktop from "./ListDesktop"
import ListMobile from "./ListMobile"

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
	flexShrink: 0,
	padding: "5px 12px",
	margin: theme.spacing(1),
	color: theme.palette.common.white,
	border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
	background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
	"& .MuiButton-startIcon": {
		marginLeft: 0,
	},
}))

// ----------------------------------------------------------------------

export default function Footer({ settings }) {
	const isMdUp = useResponsive("up", "md")

	const { pathname } = useRouter()

	const mobileList = []

	const desktopList = []

	const renderLists = isMdUp ? desktopList : mobileList
	const _socials = []

	const isHome = pathname === "/"

	const simpleFooter = (
		<Container sx={{ py: 8, textAlign: "center" }}>
			<Logo settings={settings} />

			<Typography variant='caption' component='div' sx={{ color: "text.secondary" }}>
				© 2023. All rights reserved
			</Typography>
		</Container>
	)

	const mainFooter = (
		<>
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
								<Typography variant='body2' sx={{ color: "text.secondary" }}>
									The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.
								</Typography>
							</Stack>

							<Stack spacing={2}>
								<Stack spacing={1}>
									<Typography variant='h6'>Let’s stay in touch</Typography>
									<Typography variant='caption' sx={{ color: "text.secondary" }}>
										Ubscribe to our newsletter to receive latest articles to your inbox weekly.
									</Typography>
								</Stack>

								<TextField
									fullWidth
									hiddenLabel
									placeholder='Email address'
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>
												<Button variant='contained' color='inherit' size='large'>
													Subscribe
												</Button>
											</InputAdornment>
										),
										sx: { pr: 0.5 },
									}}
								/>
							</Stack>

							<Stack spacing={2}>
								<Typography variant='h6'>Social</Typography>
								<Stack direction='row' alignItems='center'>
									{_socials.map((social) => (
										<IconButton key={social.value} color='primary'>
											<Iconify icon={social.icon} />
										</IconButton>
									))}
								</Stack>
							</Stack>
						</Stack>
					</Grid>

					<Grid xs={12} md={6}>
						{isMdUp ? (
							<Masonry columns={4} spacing={2} defaultColumns={4} defaultSpacing={2}>
								{renderLists.map((list) => (
									<ListDesktop key={list.subheader} list={list} />
								))}
							</Masonry>
						) : (
							<Stack spacing={1.5}>
								{renderLists.map((list) => (
									<ListMobile key={list.subheader} list={list} />
								))}
							</Stack>
						)}
					</Grid>
				</Grid>
			</Container>
			<Divider />
			<Container>
				<Stack spacing={2.5} direction={{ xs: "column", md: "row" }} justifyContent='space-between' sx={{ py: 3, textAlign: "center" }}>
					<Typography variant='caption' sx={{ color: "text.secondary" }}>
						© 2023. All rights reserved
					</Typography>

					<Stack direction='row' spacing={3} justifyContent='center'>
						<Link variant='caption' sx={{ color: "text.secondary" }}>
							Help Center
						</Link>

						<Link variant='caption' sx={{ color: "text.secondary" }}>
							Terms of Service
						</Link>
					</Stack>
				</Stack>
			</Container>
		</>
	)

	return <footer>{isHome ? simpleFooter : mainFooter}</footer>
}

// ----------------------------------------------------------------------
