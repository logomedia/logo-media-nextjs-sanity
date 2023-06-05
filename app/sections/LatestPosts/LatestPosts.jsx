import { use, useRef } from "react"
// next
import NextLink from "next/link"
// @mui
import { useTheme } from "@mui/material/styles"
import { Box, Container, Typography, Stack, Button } from "@mui/material"

// hooks
import useResponsive from "../../../hooks/useResponsive"
// components
import Iconify from "../../components/iconify"
import Carousel, { CarouselArrows, CarouselDots } from "../../components/Carousel"
//
import PostItem from "../Posts/PostItem"
import { getAllPosts } from "../../../lib/sanity.client"

export default function LatestPosts({ heading, posts }) {
	const theme = useTheme()

	const isMdUp = useResponsive("up", "md")

	const carouselRef = useRef(null)

	const carouselSettings = {
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		rtl: Boolean(theme.direction === "rtl"),
		...CarouselDots(),
		responsive: [
			{
				breakpoint: theme.breakpoints.values.md,
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: theme.breakpoints.values.sm,
				settings: { slidesToShow: 1 },
			},
		],
	}

	const handlePrev = () => {
		carouselRef.current?.slickPrev()
	}

	const handleNext = () => {
		carouselRef.current?.slickNext()
	}

	const viewAllBtn = (
		<Button component={NextLink} href='/news-and-trends' color='inherit' endIcon={<Iconify icon='carbon:chevron-right' />}>
			View All
		</Button>
	)

	return (
		<Container
			sx={{
				overflow: "hidden",
				py: { xs: 8, md: 15 },
				px: { xs: 1, md: 4 },
			}}
		>
			<Stack direction='row' alignItems='center' justifyContent={{ xs: "center", md: "space-between" }}>
				<Typography component='h3' variant='h2'>
					{heading}
				</Typography>

				{isMdUp && viewAllBtn}
			</Stack>

			<Box sx={{ position: "relative" }}>
				<CarouselArrows onNext={handleNext} onPrev={handlePrev} leftButtonProps={{ sx: { left: { xs: 0, md: -30 } } }} rightButtonProps={{ sx: { right: { xs: 0, md: -30 } } }}>
					<Carousel ref={carouselRef} {...carouselSettings}>
						{posts &&
							posts.map((post, index) => (
								<Box
									key={index}
									sx={{
										px: 2,
										py: { xs: 8, md: 10 },
									}}
								>
									<PostItem key={post._id} post={post} />
								</Box>
							))}
					</Carousel>
				</CarouselArrows>
			</Box>

			{!isMdUp && (
				<Stack alignItems='center' sx={{ mt: 8 }}>
					{viewAllBtn}
				</Stack>
			)}
		</Container>
	)
}
