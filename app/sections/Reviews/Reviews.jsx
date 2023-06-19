import { Masonry } from "@mui/lab"
import { Box } from "@mui/material"
import ReviewCard from "../../components/ReviewCard"

export default function Reviews({ reviews }) {
	return (
		<Box sx={{ p: 2 }}>
			<Masonry columns={{ xs: 1, md: 4 }} spacing={2} sx={{ mx: "auto" }}>
				{reviews.map((review) => (
					<ReviewCard key={review._id} review={review} />
				))}
			</Masonry>
		</Box>
	)
}
