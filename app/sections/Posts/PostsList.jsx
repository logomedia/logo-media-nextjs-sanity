// @mui
import PropTypes from "prop-types"
import { Pagination, Box } from "@mui/material"
//
import PostItem from "./PostItem"

// ----------------------------------------------------------------------

export default function Posts({ posts }) {
	return (
		<>
			<Box
				sx={{
					columnGap: 4,
					display: "grid",
					rowGap: { xs: 4, md: 5 },
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						sm: "repeat(3, 1fr)",
					},
				}}
			>
				{posts.slice(1, 8).map((post) => (
					<PostItem key={post._id} post={post} />
				))}
			</Box>
		</>
	)
}

Posts.propTypes = {
	posts: PropTypes.array,
}
