"use client"
import { useRef } from "react"
// @mui
import { styled, alpha } from "@mui/material/styles"
import { Box, Stack, Button, Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"
// utils
import { bgGradient } from "../../../utils/cssStyles"
// hooks
import useResponsive from "../../../hooks/useResponsive"
import useBoundingClientRect from "../../../hooks/useBoundingClientRect"
import { HEADER } from "../../../config-global"
// components
import Image from "../../components/image"
import Iconify from "../../components/iconify"
import SvgColor from "../../components/svg-color"
import { PortableText } from "@portabletext/react"
import CTA from "../../components/CTA"

const StyledRoot = styled("div")(({ theme }) => ({
	...bgGradient({
		color: alpha(theme.palette.background.default, 0.9),
	}),
	position: "relative",
	overflow: "hidden",
	[theme.breakpoints.up("md")]: {
		height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP}px)`,
	},
}))

// ----------------------------------------------------------------------

const Hero = (props) => {
	const { ctas, description, eyebrow, heading, image, icons, heroImageAltText } = props

	const containerRef = useRef(null)

	const isMdUp = useResponsive("up", "md")

	const container = useBoundingClientRect(containerRef)

	const offsetLeft = container?.left

	return (
		<StyledRoot>
			<Container sx={{ height: 1 }}>
				<Grid container columnSpacing={3} alignItems='center' sx={{ height: 1 }}>
					<Grid xs={12} md={5}>
						<Stack
							spacing={5}
							justifyContent='center'
							alignItems={{ xs: "center", md: "flex-start" }}
							sx={{
								py: 15,
								textAlign: { xs: "center", md: "left" },
							}}
						>
							<Typography variant='overline' sx={{ color: "primary.main" }}>
								{eyebrow}
							</Typography>
							<Typography variant='h1'>{heading}</Typography>

							<PortableText sx={{ color: "text.secondary" }} value={description} />
							<Stack direction={{ xs: "column", sm: "row" }} justifyContent={{ xs: "center", md: "unset" }} spacing={3}>
								{ctas.map((cta) => (
									<CTA {...cta} key={cta._key} />
								))}
							</Stack>
							<Stack spacing={3}>
								<Stack direction='row' spacing={3}>
									{icons.map((icon) => (
										<Image key={icon._key} alt={icon.title} src={icon.icon.asset.url} sx={{ width: 32, height: 32 }} />
									))}
								</Stack>
							</Stack>
						</Stack>
					</Grid>

					<Grid xs={12} md={7}>
						<Box ref={containerRef} />
					</Grid>
				</Grid>
			</Container>

			{isMdUp && (
				<Box
					sx={{
						maxWidth: 1280,
						position: "absolute",
						bottom: { md: "20%", lg: 40 },
						right: { md: -110, xl: 0 },
						width: { md: `calc(100% - ${offsetLeft}px)` },
					}}
				>
					<Image visibleByDefault disabledEffect alt={heroImageAltText} src={image.asset.url} />
				</Box>
			)}
		</StyledRoot>
	)
}
export default Hero
