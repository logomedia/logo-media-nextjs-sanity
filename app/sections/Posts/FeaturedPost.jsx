// next
import NextLink from "next/link"
// @mui
import { Typography, Container, Stack, Avatar, Link, Box } from "@mui/material"
// utils
import { fDate } from "../../../utils/formatTime"
// components
import Image from "../../components/image/Image"
import urlFor from "../../../utils/imageUrl"
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
					<Image src={urlFor(coverImage.asset).width(800).url()} alt={title} sx={{ flexGrow: 1, height: { xs: 250, md: 560 }, borderRadius: 2 }} />

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

						<Typography component='h2'>
							<Link component={NextLink} href={`/news-and-trends/${slug}`} color='inherit' variant='h3' sx={{ cursor: "pointer" }}>
								{title}
							</Link>
						</Typography>

						<Typography sx={{ color: "text.secondary", flexGrow: 1 }}>{excerpt}</Typography>

						<Stack direction='row' alignItems='center' sx={{ pt: 1.5, typography: "body2" }}>
							<Avatar src={urlFor(author.picture.asset).width(80).url()} sx={{ mr: 1 }} />
							{author.name}
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}
