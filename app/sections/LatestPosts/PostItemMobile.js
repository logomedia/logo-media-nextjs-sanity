import PropTypes from "prop-types"
// @mui
import { Stack, Link } from "@mui/material"
// utils
import { fDate } from "../../../utils/formatTime"
// components
import Image from "../../components/image"
import TextMaxLine from "../../components/text-max-line"
import urlFor from "../../../utils/imageUrl"
import PostTimeBlock from "./PostTimeBlock"

// ----------------------------------------------------------------------

export default function PostItemMobile({ post, onSiderbar }) {
	const { title, length, coverImage, date } = post

	return (
		<Stack spacing={2} direction='row' alignItems={{ xs: "flex-start", md: "unset" }} sx={{ width: 1 }}>
			<Image
				alt={title}
				src={urlFor(coverImage).url()}
				sx={{
					width: 80,
					height: 80,
					flexShrink: 0,
					borderRadius: 1.5,
				}}
			/>

			<Stack spacing={onSiderbar ? 0.5 : 1}>
				<Link color='inherit'>
					<TextMaxLine variant={onSiderbar ? "subtitle2" : "h6"}>{title}</TextMaxLine>
				</Link>

				<PostTimeBlock createdAt={fDate(date)} duration={length + " minutes read"} />
			</Stack>
		</Stack>
	)
}

PostItemMobile.propTypes = {
	onSiderbar: PropTypes.bool,
	post: PropTypes.shape({
		coverImg: PropTypes.string,
		createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
		duration: PropTypes.string,
		title: PropTypes.string,
	}),
}
