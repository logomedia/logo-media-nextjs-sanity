import PropTypes from "prop-types"
// @mui
import { styled, alpha } from "@mui/material/styles"
import { Container, Typography, Stack, Box, Unstable_Grid2 as Grid } from "@mui/material"
// hooks
import useResponsive from "../../../hooks/useResponsive"
// utils
import { bgGradient } from "../../../utils/cssStyles"
// components
import Image from "../../components/image/Image"
import SvgColor from "../../components/svg-color/SvgColor"
import TextMaxLine from "../../components/text-max-line/TextMaxLine"
import StyledPortableText from "../../components/StyledPortableText"
import urlFor from "../../../utils/imageUrl"

// ----------------------------------------------------------------------

export const StyledOverlay = styled("div")(({ theme }) => ({
	...bgGradient({
		startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
		endColor: `${theme.palette.common.black} 75%`,
	}),
	top: 0,
	left: 0,
	zIndex: 8,
	width: "100%",
	height: "100%",
	position: "absolute",
}))

// ----------------------------------------------------------------------

export default function TravelLandingFavoriteDestinations(props) {
	const { heading, description, favoritesList, cards } = props

	return (
		<Container
			sx={{
				py: { xs: 5, md: 10 },
			}}
		>
			<Grid container rowSpacing={{ xs: 8, md: 0 }} columnSpacing={{ xs: 0, md: 3 }} alignItems={{ md: "center" }} justifyContent={{ md: "space-between" }}>
				<Grid xs={12} md={4}>
					<Typography variant='h2'>{heading}</Typography>

					<StyledPortableText value={description} variant='' sx={{ my: 3, color: "text.secondary" }} />

					<Stack spacing={2}>
						{favoritesList.map((item) => (
							<Stack key={item} direction='row' alignItems='center' sx={{ typography: "body1" }}>
								<Box
									sx={{
										mr: 2,
										width: 6,
										height: 6,
										borderRadius: "50%",
										bgcolor: "primary.main",
									}}
								/>
								{item}
							</Stack>
						))}
					</Stack>
				</Grid>

				<Grid container xs={12} md={6} spacing={{ xs: 4, md: 3 }}>
					{cards.map((card, index) => (
						<Grid
							key={card._key}
							xs={12}
							sm={6}
							sx={{
								...(index === 1 && {
									display: { md: "inline-flex" },
									alignItems: { md: "flex-end" },
								}),
							}}
						>
							<DestinationItem card={card} order={index % 3} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Container>
	)
}

TravelLandingFavoriteDestinations.propTypes = {
	tours: PropTypes.array,
}

// ----------------------------------------------------------------------

function DestinationItem({ card, order }) {
	const { heading, location, icon, iconColor, image, imageAltText } = card

	const isMdUp = useResponsive("up", "md")

	return (
		<Box
			sx={{
				width: 1,
				borderRadius: 2,
				position: "relative",
				overflow: "hidden",
			}}
		>
			<StyledOverlay />

			<Image alt={imageAltText} src={urlFor(image.asset).url()} ratio={(!isMdUp && "1/1") || (order && "1/1") || "4/6"} />

			<Stack
				spacing={1}
				sx={{
					p: 3,
					left: 0,
					bottom: 0,
					zIndex: 9,
					color: "common.white",
					position: "absolute",
				}}
			>
				<TextMaxLine variant='h5' line={1}>
					{heading}
				</TextMaxLine>

				<Stack direction='row' alignItems='center'>
					<SvgColor src={urlFor(icon.asset).url()} sx={{ width: 20, height: 20, mr: 1, color: iconColor }} />
					<TextMaxLine variant='body2' line={1} sx={{ opacity: 0.72 }}>
						{location}
					</TextMaxLine>
				</Stack>
			</Stack>
		</Box>
	)
}

DestinationItem.propTypes = {
	order: PropTypes.number,
	card: PropTypes.shape({
		continent: PropTypes.string,
		coverImg: PropTypes.string,
		location: PropTypes.string,
	}),
}
