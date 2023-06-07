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
import Masonry from "@mui/lab/Masonry"
//
import RecentPostItem from "./RecentPostItem"
import PostItemMobile from "./PostItemMobile"

export default function LatestPosts({ heading, posts }) {
	const isMdUp = useResponsive("up", "md")

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
			<Stack direction='row' alignItems='center' justifyContent={{ xs: "center", md: "space-between" }} sx={{ mb: { xs: 3, md: 4 } }}>
				<Typography component='h3' variant='h2'>
					{heading}
				</Typography>

				{isMdUp && viewAllBtn}
			</Stack>

			<Box
				sx={{
					display: "grid",
					gap: { xs: 3, md: 4 },
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
					},
				}}
			>
				{isMdUp ? (
					<>
						<RecentPostItem key={posts[0]._id} post={posts[0]} largePost />

						<Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
							{posts.slice(1, 7).map((post, index) => (
								<RecentPostItem key={post._id} post={post} order={index % 2} />
							))}
						</Masonry>
					</>
				) : (
					<>
						{posts.slice(0, 5).map((post) => (
							<PostItemMobile key={post._id} post={post} />
						))}
					</>
				)}
			</Box>

			{!isMdUp && (
				<Stack alignItems='center' sx={{ mt: 8 }}>
					{viewAllBtn}
				</Stack>
			)}
		</Container>
	)
}
