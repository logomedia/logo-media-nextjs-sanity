"use client"
import { Box, Container, Grid, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import Image from "../../components/image"
import CustomBreadcrumbs from "../../components/custom-breadcrumbs"
import ProjectBody from "./ProjectBody"
import { CaseStudySummary } from "./details"

import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from "../../../config"

const RootStyle = styled("div")(({ theme }) => ({
	paddingTop: HEADER_MOBILE_HEIGHT,
	[theme.breakpoints.up("md")]: {
		paddingTop: HEADER_DESKTOP_HEIGHT,
	},
}))

export default function ProjectsPage(props) {
	const { project } = props
	let images = []
	const projectImages = project.images
	for (let i = 0; i < projectImages.length; i++) {
		let image = project.images[i].asset.url
		images.push(image)
	}

	return (
		<RootStyle>
			<Container>
				<Box
					sx={{
						pt: { xs: 5, md: 10 },
					}}
				>
					<Image alt='hero' src={project.coverImage.asset.url} ratio='16/9' sx={{ borderRadius: 2 }} />
				</Box>
				<CustomBreadcrumbs sx={{ my: { xs: 5, md: 10 } }} links={[{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }, { name: project.name }]} />
				<Grid
					container
					spacing={{ md: 8 }}
					direction={{ md: "row-reverse" }}
					sx={{
						pb: { xs: 10, md: 15 },
					}}
				>
					<Grid item xs={12} md={4}>
						<CaseStudySummary caseStudy={project} />
					</Grid>
					<Grid item xs={12} md={8}>
						<Typography variant='h3' component='h2' sx={{ mb: 2 }}>
							{" "}
							Project Brief
						</Typography>
						<Typography>{project.brief}</Typography>
						<Typography variant='h3' component='h2' sx={{ mt: 2, mb: 2 }}>
							{" "}
							Project Scope
						</Typography>
						<ProjectBody content={project.scope} />

						<Typography variant='h3' component='h2' sx={{ mt: 2, mb: 2 }}>
							{" "}
							Results
						</Typography>
						<ProjectBody content={project.results} />
						<Grid container spacing={2} columns={16}>
							{images.map((image, index) => (
								<Grid item xs={8}>
									<Image ratio='1/1' src={image} key={index} alt={project.name + " image " + index} />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	)
}
