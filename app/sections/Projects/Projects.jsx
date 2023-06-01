import directionStraightRight from "@iconify/icons-carbon/direction-straight-right"
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { bgGradient } from "../../../utils/cssStyles"
import Iconify from "../../components/iconify"
import Image from "../../components/image"
import NextImage from "next/image"
import NextLink from "next/link"

import { getAllProjects } from "../../../lib/sanity.client"

const RootStyle = styled("div")(({ theme }) => ({
	padding: theme.spacing(10, 0, 2, 0),
	backgroundColor: theme.palette.background.neutral,
	[theme.breakpoints.up("md")]: {
		padding: theme.spacing(20, 0, 10, 0),
	},
}))

export default async function FeaturedProject(props) {
	const projects = await getAllProjects()

	if (projects) {
		return (
			<>
				<RootStyle>
					<Container>
						<ProjectItemLarge project={projects[0]} />
					</Container>
				</RootStyle>
				<Container>
					<Typography variant='h2' component='h2' sx={{ mt: 2, mb: 2 }}>
						Our Recent Projects
					</Typography>
					<Box
						sx={{
							display: "grid",
							gap: 3,
							mt: 3,
							gridTemplateColumns: {
								xs: "repeat(2, 1fr)",
								md: "repeat(3, 1fr)",
							},
						}}
					>
						{projects.slice(1).map((project) => (
							<ProjectItem key={project.slug} project={project} />
						))}
					</Box>
				</Container>
			</>
		)
	} else {
		return <></>
	}
}

const StyledOverlay = styled("div")(({ theme }) => ({
	...bgGradient({
		direction: "to bottom",
		startColor: `#000000a8 0%`,
		endColor: `#000000a8 100%`,
	}),
	top: 0,
	left: 0,
	zIndex: 8,
	width: "100%",
	height: "100%",
	position: "absolute",
}))
function ProjectItem({ project }) {
	const { description, coverImage, logo, name, slug, tags } = project

	return (
		<Stack>
			<Box sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}>
				<Image src={coverImage.asset.url} alt={name} ratio='1/1' />
				<Box
					sx={{
						typography: "body2",
						zIndex: 10,
						position: "absolute",
						top: {
							xs: "5px",
							md: "10px",
						},
						left: {
							xs: "5px",
							md: "10px",
						},
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					{tags.slice(0, 3).map((tag) => (
						<Chip
							key={tag}
							size='small'
							label={tag}
							sx={{
								m: 0.5,
								color: "#fff",
								backgroundColor: "rgb(248 141 27 / 30%)",
								fontSize: {
									xs: "10px",
								},
							}}
						/>
					))}
				</Box>

				<Stack
					spacing={1}
					sx={{
						p: 1,
						top: "50%",
						left: "50%",
						transform: "translate(-50%,-50%)",
						zIndex: 9,
						position: "absolute",
						color: "common.white",
					}}
				>
					<Box>
						<NextImage style={{ height: "45px", width: "auto" }} src={logo.asset.url} alt={name + " logo"} width={logo.asset.metadata.dimensions.width} height={logo.asset.metadata.dimensions.height} />
					</Box>
				</Stack>

				<StyledOverlay />
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Typography
					sx={{
						color: "text.secondary",
						flexGrow: 1,
						mt: 1,
						fontSize: { xs: "14px" },
					}}
				>
					{description}
				</Typography>

				<NextLink href={"/projects/" + slug} style={{ marginLeft: "auto" }}>
					<Button
						size='large'
						endIcon={<Iconify icon={directionStraightRight} />}
						sx={{
							mt: 5,
							color: "var(--purple)",
							mt: 1,
							fontSize: { xs: "14px" },
						}}
					>
						View Project{" "}
					</Button>
				</NextLink>
			</Box>
		</Stack>
	)
}
function ProjectItemLarge({ project }) {
	const { description, coverImage, logo, name, slug, tags } = project

	return (
		<Stack direction={{ xs: "column", md: "row" }}>
			<Box
				sx={{
					borderRadius: 2,
					overflow: "hidden",
					position: "relative",
					width: "100%",
				}}
			>
				<Image ratio='16/9' src={coverImage.asset.url} alt={name} sx={{ borderRadius: 2 }} />
				<Box
					sx={{
						position: "absolute",
						bottom: "10px",
						left: "10px",
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					{tags.slice(0, 3).map((tag) => (
						<Chip
							key={tag}
							size='small'
							label={tag}
							sx={{
								m: 0.5,
								color: "#fff",
								backgroundColor: "rgb(248 141 27 / 30%)",
								fontSize: {
									xs: "10px",
								},
							}}
						/>
					))}
				</Box>
			</Box>

			<Stack
				spacing={1}
				sx={{
					mx: "auto",
					pl: { md: 8 },
					py: { xs: 3, md: 5 },
					maxWidth: { md: 408 },
					width: "100%",
					justifyContent: "center",
				}}
			>
				<Typography
					variant='h4'
					component='h3'
					sx={{
						m: 1,
						fontWeight: "700",
						textTransform: "uppercase",
					}}
				>
					Featured Project
				</Typography>
				<Box>
					<NextImage style={{ height: "45px", width: "auto" }} src={logo.asset.url} alt={name + " logo"} width={logo.asset.metadata.dimensions.width} height={logo.asset.metadata.dimensions.height} />
				</Box>

				<Box>
					<Typography sx={{ color: "text.secondary", flexGrow: 1 }}>{description}</Typography>

					<NextLink href={"/projects/" + slug}>
						<Button size='large' endIcon={<Iconify icon={directionStraightRight} />} sx={{ mt: 5, color: "var(--purple)", mt: 1 }}>
							View Project{" "}
						</Button>
					</NextLink>
				</Box>
			</Stack>
		</Stack>
	)
}
