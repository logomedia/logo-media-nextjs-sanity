"use client"
import { Avatar, Chip, Stack, Container, Grid, Typography, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import Image from "../../components/image"
import CustomBreadcrumbs from "../../components/custom-breadcrumbs"
import PortableBody from "../../components/portable-body"
import { fDate } from "../../../utils/formatTime"
import SocialsButton from "../../components/SocialsButton"
import ShareButton from "../../components/ShareButton"
import { BlogSidebar } from "./components"
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from "../../../config"
import urlFor from "../../../utils/imageUrl"

const RootStyle = styled("div")(({ theme }) => ({
	paddingTop: HEADER_MOBILE_HEIGHT,
	[theme.breakpoints.up("md")]: {
		paddingTop: HEADER_DESKTOP_HEIGHT,
	},
}))

export default function PostsPage({ morePosts, post }) {
	return (
		<RootStyle>
			<Container>
				<Image alt='hero' src={urlFor(post.coverImage.asset).width(800).url()} sx={{ borderRadius: 2 }} />
				<CustomBreadcrumbs sx={{ my: 3, mb: 2 }} links={[{ name: "Home", href: "/" }, { name: "News and Trends", href: "/news-and-trends" }, { name: post.title }]} />
			</Container>
			<Divider
				sx={{
					mb: { xs: 1 },
				}}
			/>
			<Container>
				<Grid container justifyContent={{ md: "center" }} sx={{ mt: 0 }}>
					<Grid item xs={12} md={8}>
						<Stack
							spacing={3}
							sx={{
								pb: 6,
								textAlign: "left",
								pt: { xs: 1, md: 5 },
							}}
						>
							<Typography variant='body2' sx={{ color: "text.disabled" }}>
								{post.length + " minutes read"}
							</Typography>
							<Typography variant='h2' component='h1'>
								{post.title}
							</Typography>
							<Typography variant='h5'>{post.excerpt}</Typography>
						</Stack>
						<Divider />
						<Stack direction='row' justifyContent='space-between' spacing={1.5} sx={{ py: 3 }}>
							<Avatar src={urlFor(post.author.picture.asset).width(80).url()} sx={{ width: 48, height: 48 }} />
							<Stack spacing={0.5} flexGrow={1}>
								<Typography variant='subtitle2'>{post.author.name}</Typography>
								<Typography variant='caption' sx={{ color: "text.secondary" }}>
									{fDate(post.date, "MM/dd/yyyy p")}
								</Typography>
							</Stack>
							<Stack direction='row' alignItems='center'>
								<ShareButton />
							</Stack>
						</Stack>
						<Divider sx={{ mb: 6 }} />
						<PortableBody content={post.content} />
						<Stack direction='row' alignItems='center' flexWrap='wrap' sx={{ my: 6 }}>
							<Typography variant='subtitle2' sx={{ mr: 1 }}>
								Tags:
							</Typography>
							{post.tags.map((tag) => (
								<Chip key={tag} size='small' label={tag} sx={{ m: 0.5 }} />
							))}
						</Stack>

						<Stack direction='row' alignItems='center' flexWrap='wrap'>
							<Typography variant='subtitle2' sx={{ mr: 1 }}>
								Share:
							</Typography>
							<SocialsButton initialColor simple={false} />
						</Stack>

						<Divider sx={{ mt: 8 }} />
					</Grid>
					<Grid item xs={12} md={4} sx={{ pl: 2 }}>
						<BlogSidebar
							recentPosts={{
								list: morePosts.slice(0, 5),
								path: "/news-and-trends",
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	)
}
