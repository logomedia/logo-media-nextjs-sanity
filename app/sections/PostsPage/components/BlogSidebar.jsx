// @mui
import { Stack } from "@mui/material"

import BlogSidebarRecentPosts from "./BlogSidebarRecentPosts"

// ----------------------------------------------------------------------

export default function BlogSidebar(props) {
	const { recentPosts } = props
	return (
		<>
			<Stack
				spacing={5}
				sx={{
					pt: { md: 5 },
					pb: { xs: 8, md: 0 },
				}}
			>
				<BlogSidebarRecentPosts recentPosts={recentPosts} />
			</Stack>
		</>
	)
}
