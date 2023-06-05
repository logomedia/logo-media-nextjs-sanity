import directionStraightRight from "@iconify/icons-carbon/direction-straight-right"
import { Box, Button, Chip, Container, Divider, Stack, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { bgGradient } from "../../../utils/cssStyles"
import Iconify from "../../components/iconify"
import Image from "../../components/image"
import NextImage from "next/image"
import NextLink from "next/link"
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
	return (
		<Stack sx={{ background: "#f9fafb", borderRadius: 1, boxShadow: "4px 5px 10px #8b8b8bba;", p: 1 }}>
			<Box sx={{ borderRadius: 1, overflow: "hidden", position: "relative" }}>
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
			<Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
				<Typography component='h3' variant='h4'>
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
