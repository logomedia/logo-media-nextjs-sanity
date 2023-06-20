import Marquee from "react-fast-marquee"
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import Iconify from "../../components/iconify"
import ReviewCard from "./ReviewCard"
import NextLink from "next/link"
import useResponsive from "../../../hooks/useResponsive"

export default function LatestReviews({ reviews, heading }) {
	const isMdUp = useResponsive("up", "md")
	const viewAllBtn = (
		<Button component={NextLink} href='/reviews' color='inherit' endIcon={<Iconify icon='carbon:chevron-right' />}>
			View All
		</Button>
	)
	return (
		<Box sx={{ p: 2 }}>
			<Container
				sx={{
					overflow: "hidden",

					px: { xs: 1, md: 4 },
				}}
			>
				<Stack direction='row' alignItems='center' justifyContent={{ xs: "center", md: "space-between" }} sx={{ mb: { xs: 3, md: 4 } }}>
					<Typography component='h3' variant='h2'>
						{heading}
					</Typography>

					{isMdUp && viewAllBtn}
				</Stack>
			</Container>
			<Marquee gradientWidth='0' gradient='false' pauseOnHover='true' speed='50'>
				{reviews.slice(0, 8).map((review) => (
					<Box key={review._id} sx={{ maxWidth: { xs: 300, md: 400 }, m: 2 }}>
						<ReviewCard review={review} />
					</Box>
				))}
			</Marquee>
			{!isMdUp && (
				<Stack alignItems='center' sx={{ mt: 8 }}>
					{viewAllBtn}
				</Stack>
			)}
		</Box>
	)
}
