// @mui
import { styled, alpha } from "@mui/material/styles"
import { Box, Container, Typography, Button, Unstable_Grid2 as Grid } from "@mui/material"
// utils
import { fShortenNumber } from "../../../utils/formatNumber"
// hooks
import useResponsive from "../../../hooks/useResponsive"
// components
import Image from "../../components/image/Image"
import CountUp from "../../components/count-up"
import StyledPortableText from "../../components/StyledPortableText"
import Cta from "../../components/CTA/CTA"
import urlFor from "../../../utils/imageUrl"

// ----------------------------------------------------------------------

const StyledIcon = styled("div", {
	shouldForwardProp: (prop) => prop !== "color",
})(({ color, theme }) => ({
	width: 160,
	height: 160,
	margin: "auto",
	display: "flex",
	borderRadius: "50%",
	alignItems: "center",
	position: "relative",
	justifyContent: "center",
	color: theme.palette[color].darker,
	border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
	"&:before": {
		zIndex: 8,
		content: '""',
		borderRadius: "50%",
		position: "absolute",
		width: "calc(100% - 48px)",
		height: "calc(100% - 48px)",
		background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
	},
	"& svg": {
		zIndex: 9,
	},
}))

// ----------------------------------------------------------------------

export default function MarketingAbout(props) {
	const { heading, description, image, heroImageAlt, cards, ctas } = props

	const isMdUp = useResponsive("up", "md")

	return (
		<Container
			sx={{
				pt: { xs: 5, md: 10 },
				pb: 10,
			}}
		>
			<Grid container spacing={3} justifyContent='space-between' alignItems='center'>
				{isMdUp && (
					<Grid xs={12} md={6} lg={5}>
						<Image alt={heroImageAlt} src={urlFor(image.asset)} />
					</Grid>
				)}

				<Grid
					xs={12}
					md={6}
					lg={6}
					sx={{
						textAlign: { xs: "center", md: "left" },
					}}
				>
					<Typography variant='h2'>{heading}</Typography>

					<StyledPortableText value={description} variant='' sx={{ mt: 3, mb: 5, color: "text.secondary" }} />

					{ctas.map((cta) => (
						<Cta {...cta} key={cta._key} />
					))}
				</Grid>
			</Grid>

			<Box
				sx={{
					mt: 10,
					textAlign: "center",
					display: "grid",
					gap: { xs: 5, md: 8 },
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
						md: "repeat(4, 1fr)",
					},
				}}
			>
				{cards.map((value, index) => (
					<div key={value._key}>
						<StyledIcon color={value.color}>
							<Image alt={value.heading} src={value.image.asset.url} sx={{ width: 48, height: 48, zIndex: 10 }} />
						</StyledIcon>

						<Typography variant='h2' sx={{ mt: 2, mb: 1 }}>
							<CountUp start={value.stat / 5} end={value.stat} formattingFn={(newValue) => fShortenNumber(newValue)} />
						</Typography>

						<Typography sx={{ color: "text.secondary" }}>{value.heading}</Typography>
					</div>
				))}
			</Box>
		</Container>
	)
}
