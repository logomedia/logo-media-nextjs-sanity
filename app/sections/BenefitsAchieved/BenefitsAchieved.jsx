// @mui
import { Box, Container, Typography, Stack } from "@mui/material"
// hooks
import useResponsive from "../../../hooks/useResponsive"
// components
import Image from "../../components/image/Image"
import StyledPortableText from "../../components/StyledPortableText/StyledPortableText"
import urlFor from "../../../utils/imageUrl"
import Cta from "../../components/CTA/CTA"
// ----------------------------------------------------------------------

export default function MarketingServicesBenefits(props) {
	const { heading, description, benefits, image, imageAltText, cta } = props

	const isMdUp = useResponsive("up", "md")

	return (
		<Box
			sx={{
				bgcolor: "background.neutral",
				py: { xs: 10, md: 15 },
			}}
		>
			<Container>
				<Typography variant='h2' sx={{ textAlign: "center" }}>
					{heading}
				</Typography>

				<StyledPortableText
					value={description}
					variant=''
					sx={{
						mt: 3,
						mx: "auto",
						opacity: 0.72,
						maxWidth: 480,
						textAlign: "center",
						mb: { xs: 8, md: 10 },
					}}
				/>

				<Box
					sx={{
						display: "grid",
						alignItems: "center",
						gap: { xs: 4, md: 8 },
						gridTemplateColumns: { md: "repeat(3, 1fr)" },
					}}
				>
					<Stack spacing={{ xs: 4, md: 10 }}>
						{benefits.slice(0, 3).map((benefit, index) => (
							<BenefitItem key={benefit._key} benefit={benefit} index={index} reverse />
						))}
					</Stack>

					{isMdUp && <Image alt={imageAltText} src={urlFor(image.asset).url()} />}

					<Stack spacing={{ xs: 4, md: 10 }}>
						{benefits.slice(-3).map((benefit, index) => (
							<BenefitItem key={benefit._key} benefit={benefit} index={index} />
						))}
					</Stack>
					<Stack></Stack>
					{cta ? <Cta style={{ margin: "auto" }} {...cta} /> : ""}
				</Box>
			</Container>
		</Box>
	)
}

// ----------------------------------------------------------------------

function BenefitItem({ benefit, reverse, index }) {
	const { title, description, color } = benefit

	return (
		<Stack
			spacing={1}
			direction={{ xs: "row", md: reverse ? "row-reverse" : "row" }}
			sx={{
				...(reverse && {
					textAlign: { md: "right" },
				}),
				...(index === 1 && {
					pl: { md: 6 },
					...(reverse && {
						pl: { md: 0 },
						pr: { md: 6 },
					}),
				}),
			}}
		>
			<Box
				sx={{
					m: 1,
					width: 16,
					height: 16,
					flexShrink: 0,
					borderRadius: "50%",
					background: (theme) => `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
					...(color === "secondary" && {
						background: (theme) => `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
					}),
					...(color === "success" && {
						background: (theme) => `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
					}),
					...(color === "orange" && {
						background: (theme) => `linear-gradient(to bottom, ${theme.palette.orange.light}, ${theme.palette.orange.main})`,
					}),
					...(color === "yellow" && {
						background: (theme) => `linear-gradient(to bottom, ${theme.palette.yellow.light}, ${theme.palette.yellow.main})`,
					}),
					...(color === "pink" && {
						background: (theme) => `linear-gradient(to bottom, ${theme.palette.pink.light}, ${theme.palette.pink.main})`,
					}),
					...(color === "error" && {
						background: (theme) => `linear-gradient(to bottom, ${theme.palette.error.light}, ${theme.palette.error.main})`,
					}),
				}}
			/>

			<Stack spacing={1}>
				<Typography variant='h5'>{title}</Typography>

				<StyledPortableText value={description} variant='' sx={{ color: "text.secondary" }} />
			</Stack>
		</Stack>
	)
}
