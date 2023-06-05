// @mui
import PropTypes from "prop-types"
import { useTheme } from "@mui/material/styles"
import { Typography, Stack, Container, Paper, Box } from "@mui/material"
// components
import Image from "../../components/image"
import Carousel from "../../components/Carousel"
import urlFor from "../../../utils/imageUrl"

// ----------------------------------------------------------------------

export default function OurClientsCareer({ heading, logos }) {
	const theme = useTheme()

	const carouselSettings = {
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		rtl: Boolean(theme.direction === "rtl"),
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 5000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: theme.breakpoints.values.md,
				settings: { slidesToShow: 4 },
			},
			{
				breakpoint: theme.breakpoints.values.sm,
				settings: { slidesToShow: 2 },
			},
		],
	}

	return (
		<Container
			sx={{
				pt: { xs: 10, md: 15 },
				pb: { xs: 5, md: 10 },
			}}
		>
			<Stack
				spacing={3}
				sx={{
					mx: "auto",
					maxWidth: 680,
					textAlign: "center",
					mb: { xs: 8, md: 10 },
				}}
			>
				<Typography variant='h2'>{heading}</Typography>
			</Stack>

			<Carousel {...carouselSettings}>
				{logos.map((brand) => (
					<Box key={brand._key} sx={{ px: 1.5 }}>
						<Paper
							variant='outlined'
							sx={{
								py: 3,
								borderRadius: 2,
								bgcolor: "background.default",
							}}
						>
							<Image
								alt={brand.clientName}
								src={urlFor(brand.logo.asset)}
								sx={{
									maxHeight: 32,
									height: "100%",
									mx: "auto",
									px: 2,
								}}
							/>
						</Paper>
					</Box>
				))}
			</Carousel>
		</Container>
	)
}

OurClientsCareer.propTypes = {
	brands: PropTypes.array,
}
