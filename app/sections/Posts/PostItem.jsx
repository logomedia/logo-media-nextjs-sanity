// next
import NextLink from "next/link"
// @mui
import { Stack, Avatar, Typography, Paper, Divider, Link } from "@mui/material"
// utils
import { fDate } from "../../../utils/formatTime"
// components
import Image from "../../components/image/Image"
import TextMaxLine from "../../components/text-max-line/TextMaxLine"

// ----------------------------------------------------------------------

export default function PostItem({ post }) {
	const { title, length, coverImage, excerpt, author, date, slug } = post

	return (
		<Paper variant='outlined' sx={{ borderRadius: 2, overflow: "hidden" }}>
			<Image src={coverImage.asset.url} alt={title} ratio='16/9' />

			<Stack direction='row' spacing={3} sx={{ p: 3 }}>
				<Stack sx={{ textAlign: "center" }}>
					<Typography variant='subtitle2'>{fDate(date, "MMM")}</Typography>

					<Divider sx={{ mt: 1, mb: 0.5 }} />

					<Typography variant='h3'>{fDate(date, "dd")}</Typography>
				</Stack>

				<Stack spacing={1}>
					<Link component={NextLink} href={`/news-and-trends/${slug}`} color='inherit' sx={{ cursor: "pointer" }}>
						<TextMaxLine variant='h6' persistent>
							{title}
						</TextMaxLine>
					</Link>

					<TextMaxLine variant='body2' persistent color='text.secondary'>
						{excerpt}
					</TextMaxLine>

					<Stack spacing={1.5} direction='row' alignItems='center' sx={{ pt: 1.5 }}>
						<Avatar src={author.picture.asset.url} sx={{ width: 40, height: 40 }} />
						<Stack>
							<Typography variant='body2'>{author.name}</Typography>
							<Typography variant='caption' sx={{ color: "text.disabled" }}>
								{length + " minutes read"}
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Paper>
	)
}
