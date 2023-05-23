// next
import NextLink from "next/link"
// @mui
import { Typography, Container, Stack, Avatar, Link, Box } from "@mui/material"
// utils
import { fDate } from "../../../utils/formatTime"
// components
import Image from "../../components/image/Image"
//
import PostTimeBlock from "./PostTimeBlock"

// ----------------------------------------------------------------------

export default function FeaturedPost({ post }) {
	const { author, coverImage, date, excerpt, length, slug, title } = post

	return (
		<Box
			sx={{
				bgcolor: "background.neutral",
				py: { xs: 8, md: 10 },
			}}
		>
			<Container>
				<Stack direction={{ xs: "column", md: "row" }}>
					<Image src={coverImage.asset.url} alt={title} sx={{ flexGrow: 1, height: 560, borderRadius: 2 }} />

					<Stack
						spacing={1}
						sx={{
							mx: "auto",
							pl: { md: 8 },
							py: { xs: 3, md: 5 },
							maxWidth: { md: 408 },
						}}
					>
						<PostTimeBlock createdAt={fDate(date)} duration={length} />

						<Link component={NextLink} href={`/news-and-trends/${slug}`} color='inherit' variant='h3' sx={{ cursor: "pointer" }}>
							{title}
						</Link>

						<Typography sx={{ color: "text.secondary", flexGrow: 1 }}>{excerpt}</Typography>

						<Stack direction='row' alignItems='center' sx={{ pt: 1.5, typography: "body2" }}>
							<Avatar src={author.picture.asset.url} sx={{ mr: 1 }} />
							{author.name}
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}
