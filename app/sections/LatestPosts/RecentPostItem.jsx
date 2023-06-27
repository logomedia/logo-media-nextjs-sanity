import PropTypes from "prop-types"
// next
import NextLink from "next/link"
// @mui
import { styled, alpha } from "@mui/material/styles"
import { Typography, Stack, Link } from "@mui/material"

// utils
import { fDate } from "../../../utils/formatTime"
import { bgGradient } from "../../../utils/cssStyles"
// components
import Image from "../../components/image"
import TextMaxLine from "../../components/text-max-line"
//
import PostItemMobile from "./PostItemMobile"
import PostTimeBlock from "./PostTimeBlock"
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
	width: "100%",
	height: "100%",
	position: "absolute",
}))

// ----------------------------------------------------------------------

export default function PostItem({ post, order, largePost }) {
	const { title, length, coverImage, excerpt, date } = post

	return (
		<Stack
			spacing={2}
			sx={{
				...(largePost && {
					borderRadius: 2,
					overflow: "hidden",
					position: "relative",
				}),
			}}
		>
			<Image src={urlFor(coverImage.asset).url()} alt={title} ratio={(largePost && "1/1") || (order && "16/9")} sx={{ borderRadius: 2 }} />

			<Stack
				spacing={largePost ? 2 : 1}
				sx={{
					...(largePost && {
						p: 5,
						bottom: 0,
						zIndex: 9,
						position: "absolute",
						color: "common.white",
					}),
				}}
			>
				<PostTimeBlock
					createdAt={fDate(date)}
					duration={length + " minutes read"}
					sx={{
						...(largePost && { opacity: 0.72, color: "inherit" }),
					}}
				/>

				<Link component={NextLink} href={`/news-and-trends/${post.slug}`} color='inherit' sx={{ cursor: "pointer" }}>
					<TextMaxLine variant={largePost ? "h3" : "h6"} component={largePost ? "h3" : "h4"}>
						{title}
					</TextMaxLine>
				</Link>

				{largePost && (
					<TextMaxLine line={3} sx={{ opacity: 0.48 }}>
						{excerpt}
					</TextMaxLine>
				)}
			</Stack>

			{largePost && <StyledOverlay />}
		</Stack>
	)
}

PostItem.propTypes = {
	largePost: PropTypes.bool,
	order: PropTypes.number,
	post: PropTypes.shape({
		coverImg: PropTypes.string,
		createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
		description: PropTypes.string,
		duration: PropTypes.string,
		title: PropTypes.string,
	}),
}
