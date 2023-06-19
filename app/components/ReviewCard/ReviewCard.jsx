import { Box, Chip, Divider, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import StarIcon from "@mui/icons-material/Star"
export default function ReviewCard({ review }) {
	const { company, description, name, rating, title } = review
	const StyledContainer = styled("div")(({ theme }) => ({
		boxShadow: `4px 5px 10px ${theme.palette.boxShadow}`,
		backgroundColor: theme.palette.background.neutral,
	}))
	return (
		<StyledContainer sx={{ borderRadius: 1, p: 1 }}>
			<Box sx={{ borderRadius: 1, overflow: "hidden", justifyContent: "center", alignItems: "flex-start", position: "relative", p: 2 }}>
				<Stars rating={rating} />
				<Typography component='h2' variant='h5' sx={{ mt: 1 }}>
					"{description}"
				</Typography>
				<Typography sx={{ mt: 2, pl: 1 }}>-{name}</Typography>

				<Chip label={`${title} at ${company}`} />
			</Box>
		</StyledContainer>
	)
}
function Stars({ rating }) {
	switch (rating) {
		case 5:
			return (
				<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
				</Box>
			)
		case 4:
			return (
				<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
				</Box>
			)
		case 3:
			return (
				<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
				</Box>
			)
		case 2:
			return (
				<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<StarIcon color='yellow' />
					<StarIcon color='yellow' />
				</Box>
			)
		case 1:
			return (
				<Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
					<StarIcon color='yellow' />
				</Box>
			)
	}
}
