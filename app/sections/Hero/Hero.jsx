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
import StyledPortableText from "../../components/StyledPortableText/StyledPortableText"
import urlFor from "../../../utils/imageUrl"

const StyledRoot = styled("div")(({ theme }) => ({
	...bgGradient({
		color: alpha(theme.palette.background.default, 0.9),
	}),
	position: "relative",
	overflow: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	maxWidth: "1400px",
	margin: "auto",
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
			<Grid columnSpacing={0} alignItems='center' sx={{ height: 1, maxWidth: "600px", py: 10 }}>
				<Grid xs={12} md={8}>
					<Stack
						spacing={5}
						justifyContent='center'
						alignItems={{ xs: "center", md: "flex-start" }}
						sx={{
							py: { xs: 10, md: 15 },
							px: 3,
							textAlign: { xs: "center", md: "left" },
						}}
					>
						<Typography variant='overline' sx={{ color: "primary.main" }}>
							{eyebrow}
						</Typography>
						<Typography variant='h1'>{heading}</Typography>

						<StyledPortableText value={description} variant='' sx={{ color: "text.secondary" }} />

						<Stack direction={{ xs: "column", sm: "row" }} justifyContent={{ xs: "center", md: "unset" }} spacing={3}>
							{ctas.map((cta) => (
								<CTA {...cta} key={cta._key} />
							))}
						</Stack>
						<Stack spacing={3}>
							<Stack direction='row' spacing={3}>
								{icons.map((icon) => (
									<Image key={icon._key} alt={icon.title} src={urlFor(icon.icon)} sx={{ width: 32, height: 32 }} />
								))}
							</Stack>
						</Stack>
					</Stack>
				</Grid>
			</Grid>

			{isMdUp && (
				<Box
					sx={{
						maxWidth: 1200,
						position: "relative",
						top: "0%",

						right: "0%",
						width: { md: `calc(100% - ${offsetLeft}px)` },
					}}
				>
					<Image visibleByDefault disabledEffect alt={heroImageAltText} src={urlFor(image.asset)} />
				</Box>
			)}
		</StyledRoot>
	)
}
export default Hero
