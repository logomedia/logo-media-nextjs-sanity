// next
import { Stack } from "@mui/material"
// @mui
import { styled } from "@mui/material/styles"
import NextLink from "next/link"

// components
import Image from "../../../components/image"
import urlFor from "../../../../utils/imageUrl"
import TextMaxLine from "../../../components/text-max-line"
// utils
import { fDate } from "../../../../utils/formatTime"

// ----------------------------------------------------------------------

const DotStyle = styled("span")(({ theme }) => ({
	width: 4,
	height: 4,
	borderRadius: "50%",
	backgroundColor: "currentColor",
	margin: theme.spacing(0, 1),
}))

// ----------------------------------------------------------------------

export default function BlogPostItemMobile({ post, path, onSiderbar }) {
	const { title, slug, length, coverImage, date } = post

	const href = `${path}/${slug}`

	return (
		<Stack spacing={2} direction='row' alignItems={{ xs: "flex-start", md: "unset" }} sx={{ width: 1 }}>
			<Image
				alt={title}
				src={urlFor(coverImage.asset).width(150).url()}
				sx={{
					width: 80,
					height: 80,
					flexShrink: 0,
					borderRadius: 1.5,
				}}
			/>

			<Stack spacing={onSiderbar ? 0.5 : 1}>
				<NextLink href={href}>
					<TextMaxLine variant={onSiderbar ? "subtitle2" : "h6"}>{title}</TextMaxLine>
				</NextLink>

				<Stack direction='row' flexWrap='wrap' alignItems='center' sx={{ typography: "caption", color: "text.disabled" }}>
					{fDate(date)}
					<DotStyle />
					{length + " minutes read"}
				</Stack>
			</Stack>
		</Stack>
	)
}
