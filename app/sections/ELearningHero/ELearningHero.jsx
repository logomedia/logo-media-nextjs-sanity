"use client"

import { useState } from "react"
// @mui
import { alpha, styled } from "@mui/material/styles"
import { Fab, Typography, Stack, Container, Box, Divider, Button, Unstable_Grid2 as Grid } from "@mui/material"
// utils
import { bgGradient } from "../../../utils/cssStyles"
import { fShortenNumber } from "../../../utils/formatNumber"
// hooks
import useResponsive from "../../../hooks/useResponsive"
// components
import ElearningHeroIllustration from "./ElearningHeroIllustration"
import Cta from "../../components/CTA"
import StyledPortableText from "../../components/StyledPortableText"
// import { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
	...bgGradient({
		color: alpha(theme.palette.background.default, 0.9),
		imgUrl: "/assets/background/overlay_1.jpg",
	}),
	overflow: "hidden",
}))

// ----------------------------------------------------------------------

export default function ELearningHero(props) {
	const { headingStart, headingHighlight, headingMainHighlight, headingEnd, description, ctas, imagesArray, image, imageAltText, stats } = props

	const isMdUp = useResponsive("up", "md")

	const [openVideo, setOpenVideo] = useState(false)

	const handleOpenVideo = () => {
		setOpenVideo(true)
	}

	const handleCloseVideo = () => {
		setOpenVideo(false)
	}

	return (
		<>
			<StyledRoot>
				<Container
					sx={{
						py: { xs: 7, md: 15 },
						display: { md: "flex" },
						alignItems: { md: "center" },
					}}
				>
					<Grid container spacing={3}>
						<Grid xs={12} md={6} lg={5}>
							<Stack
								sx={{
									textAlign: { xs: "center", md: "unset" },
								}}
							>
								<Typography variant='h1' sx={{ display: { xs: "flex", md: "block" }, flexDirection: "column" }}>
									<Box component='span' sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
										{headingStart}
									</Box>
									<Box component='span' sx={{ color: "text.disabled", fontSize: { xs: "1rem", md: "2rem" } }}>
										{" "}
										{headingHighlight}{" "}
									</Box>
									<Box component='span' sx={{ color: "primary.main", textDecoration: "underline", fontSize: { xs: "3rem", md: "4rem" } }}>
										{" "}
										{headingMainHighlight}{" "}
									</Box>
									<Box component='span' sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
										{headingEnd}
									</Box>
								</Typography>

								<StyledPortableText value={description} variant='' sx={{ color: "text.secondary", mt: 3, mb: 5 }} />

								<Stack spacing={2} alignItems='center' justifyContent={{ xs: "center", md: "flex-start" }} direction={{ xs: "row", md: "row" }}>
									{ctas.map((cta) => (
										<Cta {...cta} key={cta._key} />
									))}
									{/* <Button color="inherit" size="large" variant="contained">
                    Ready Start
                  </Button>

                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ typography: 'h6' }}
                  >
                    <Fab
                      size="medium"
                      color="info"
                      onClick={handleOpenVideo}
                      sx={{ mr: 1 }}
                    >
                      <Iconify width={24} icon="carbon:play" />
                    </Fab>
                    Watch Video
                  </Stack> */}
								</Stack>

								<Divider sx={{ borderStyle: "dashed", mt: 2, mb: 2 }} />

								{/* Stats */}
								<Stack sx={{ display: "grid", gap: 1, gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
									{stats.map((stat) => (
										<Stack key={stat._key} spacing={0.5} sx={{ position: "relative" }}>
											<Box
												sx={{
													top: 8,
													left: -4,
													width: 24,
													height: 24,
													opacity: 0.24,
													borderRadius: "50%",
													position: "absolute",
													bgcolor: stat.color,
												}}
											/>
											<Typography variant='h3'>{stat.number}+</Typography>
											<Typography variant='body2' sx={{ color: "text.secondary", textAlign: "left" }}>
												{stat.heading}
											</Typography>
										</Stack>
									))}
								</Stack>
							</Stack>
						</Grid>

						{isMdUp && (
							<Grid xs={12} md={6} lg={7}>
								<ElearningHeroIllustration imagesArray={imagesArray} image={image} imageAltText={imageAltText} />
							</Grid>
						)}
					</Grid>
				</Container>
			</StyledRoot>

			{/* <PlayerDialog
        open={openVideo}
        onClose={handleCloseVideo}
        videoPath={_mock.video(0)}
      /> */}
		</>
	)
}
