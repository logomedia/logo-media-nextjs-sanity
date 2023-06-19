import PropTypes from "prop-types"
// @mui
import { styled, alpha } from "@mui/material/styles"
import { Typography, Card, Box, Stack, IconButton } from "@mui/material"
// utils
import { bgGradient } from "../../../utils/cssStyles"
// components
import Image from "../../components/image/Image"
import Iconify from "../../components/iconify/Iconify"
import urlFor from "../../../utils/imageUrl"
// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
	...bgGradient({
		startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
		endColor: `${theme.palette.common.black} 75%`,
	}),
	top: 0,
	left: 0,
	zIndex: 8,
	opacity: 0,
	width: "100%",
	height: "100%",
	position: "absolute",
	transition: theme.transitions.create("opacity", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.short,
	}),
	"&:hover": { opacity: 1 },
}))

// ----------------------------------------------------------------------

export default function TeamMember({ member }) {
	const { name, position, image, icons } = member

	return (
		<Card>
			<Stack spacing={0.5} sx={{ textAlign: "center", pt: 3, pb: 1.5 }}>
				<Typography variant='h6'>{name}</Typography>

				<Typography variant='body2' sx={{ color: "text.disabled" }}>
					{position}
				</Typography>
			</Stack>

			<Box sx={{ position: "relative" }}>
				<Shape />

				<StyledOverlay></StyledOverlay>

				<Image src={urlFor(image.asset).url()} alt={name} ratio='1/1' />
			</Box>
		</Card>
	)
}

TeamMember.propTypes = {
	member: PropTypes.object,
}

// ----------------------------------------------------------------------

function Shape() {
	return (
		<Box
			sx={{
				top: 0,
				width: 1,
				height: 8,
				zIndex: 9,
				position: "absolute",
				color: "background.paper",
			}}
		>
			<svg xmlns='http://www.w3.org/2000/svg' width='1080' height='32' viewBox='0 0 1080 32'>
				<path fill='currentColor' d='M1080 32L0 0h1080v32z' />
			</svg>
		</Box>
	)
}
