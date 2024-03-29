import { Box, Button, Chip, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { bgGradient } from "../../../utils/cssStyles"
import Image from "../../components/image"
import NextImage from "next/image"
import NextLink from "next/link"
import urlFor from "../../../utils/imageUrl"
import TextMaxLine from "../../components/text-max-line"

export default function ProjectItem({ project }) {
	const { brief, coverImage, logo, name, slug, tags } = project
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
	const StyledContainer = styled("div")(({ theme }) => ({
		boxShadow: `4px 5px 10px ${theme.palette.boxShadow}`,
		backgroundColor: theme.palette.background.neutral,
	}))
	return (
		<StyledContainer sx={{ borderRadius: 1, p: 1 }}>
			<Box sx={{ borderRadius: 1, overflow: "hidden", position: "relative" }}>
				<Image src={urlFor(coverImage.asset).width(400).url()} alt={name} ratio='4/3' />
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
						top: "50%",
						left: "50%",
						transform: "translate(-50%,-50%)",
						zIndex: 9,
						position: "absolute",
						color: "common.white",
						width: "100%",
					}}
				>
					<Box>
						<NextImage style={{ height: "35px", width: "auto", margin: "auto" }} src={urlFor(logo.asset).width(400).url()} alt={name + " logo"} width={logo.asset.metadata.dimensions.width} height={logo.asset.metadata.dimensions.height} />
					</Box>
				</Stack>

				<StyledOverlay />
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
				<Typography component='h3' variant='h4' sx={{ color: "text.primary" }}>
					{name}
				</Typography>

				<TextMaxLine
					sx={{
						color: "text.secondary",
						flexGrow: 1,
						mt: 1,
						fontSize: { xs: "14px" },
					}}
				>
					{brief}
				</TextMaxLine>

				<NextLink href={"/projects/" + slug} style={{ marginLeft: "auto" }}>
					<Button
						size='large'
						sx={{
							mt: 5,
							color: "primary.main",
							mt: 1,
							fontSize: { xs: "14px" },
						}}
					>
						View Project →
					</Button>
				</NextLink>
			</Box>
		</StyledContainer>
	)
}
