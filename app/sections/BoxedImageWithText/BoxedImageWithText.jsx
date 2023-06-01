"use client"
import { m } from "framer-motion"
// @mui
import { Button, Box, Container, Typography } from "@mui/material"
// hooks
import useResponsive from "../../../hooks/useResponsive"
// components
import Image from "../../components/image"
import Iconify from "../../components/iconify"
import { MotionViewport, varFade } from "../../components/animate"
import StyledPortableText from "../../components/StyledPortableText/StyledPortableText"
import Cta from "../../components/CTA"
import urlFor from "../../../utils/imageUrl"

// ----------------------------------------------------------------------

export default function BoxedImageWithText(props) {
	const { cta, description, heading, eyebrow, image, imageAltText } = props

	const isMdUp = useResponsive("up", "md")

	// const visitBtn = (
	//   <m.div variants={varFade().inLeft}>
	//     <Button
	//       size="large"
	//       color="inherit"
	//       variant="outlined"
	//       target="_blank"
	//       rel="noopener"
	//       href={paths.minimalStore}
	//       endIcon={<Iconify icon="carbon:chevron-right" width={16} />}
	//       sx={{ ...(isMdUp && { mt: 5 }) }}
	//     >
	//       Visit Minimal Dashboard
	//     </Button>
	//   </m.div>
	// );

	return (
		<Container
			component={MotionViewport}
			sx={{
				position: "relative",
				pt: { xs: 5, md: 10 },
				pb: { xs: 10, md: 15 },
				textAlign: { xs: "center", md: "left" },
			}}
		>
			<Box
				sx={{
					borderRadius: 3,
					p: { xs: 2, md: 10 },
					bgcolor: { xs: "transparent", md: "background.neutral" },
				}}
			>
				<m.div variants={varFade().inUp}>
					<Typography variant='overline' sx={{ color: "text.disabled", maxWidth: "400px", width: "100%" }}>
						{eyebrow}
					</Typography>
				</m.div>

				<m.div variants={varFade().inUp}>
					<Typography variant='h3' sx={{ my: 3, maxWidth: "400px", width: "100%" }}>
						{heading}
					</Typography>
				</m.div>

				<m.div variants={varFade().inUp}>
					<StyledPortableText
						value={description}
						variant=''
						sx={{
							color: "text.secondary",
							maxWidth: 400,
							mx: {
								xs: "auto",
								md: "unset",
							},
							mb: 2,
						}}
					/>
				</m.div>

				{isMdUp && <Cta {...cta} />}
			</Box>

			<Box
				sx={{
					top: { md: -40 },
					right: { md: -120 },
					my: { xs: 1, md: 0 },
					position: { md: "absolute" },
				}}
			>
				<m.div variants={varFade().inDown}>
					<Image
						alt={imageAltText}
						src={urlFor(image.asset)}
						sx={{
							maxWidth: { md: 790 },
						}}
					/>
				</m.div>
			</Box>

			{!isMdUp && <Cta {...cta} />}
		</Container>
	)
}
