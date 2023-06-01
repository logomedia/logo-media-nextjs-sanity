// @mui
import { Container, Unstable_Grid2 as Grid } from "@mui/material"
//
import PostsList from "./PostsList"
import FeaturedPost from "./FeaturedPost"
import { getAllPosts } from "../../../lib/sanity.client"

// ----------------------------------------------------------------------

export default async function Posts() {
	const posts = await getAllPosts()

	return (
		<>
			<FeaturedPost post={posts[0]} />

			<Container
				sx={{
					pt: 10,
					pb: 10,
				}}
			>
				<Grid container spacing={{ md: 8 }}>
					<Grid xs={12}>
						<PostsList posts={posts} />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
