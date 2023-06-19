"use client"
import { m } from "framer-motion"
// @mui
import { styled, alpha } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
// utils
import { bgGradient } from "../../../utils/cssStyles"
// components

import CTA from "../../components/CTA"
import urlFor from "../../../utils/imageUrl"

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function TextWithBackground(props) {
	const { image, eyebrow, heading, ctas } = props

	const StyledRoot = styled("div")(({ theme }) => ({
		...bgGradient({
			color: alpha(theme.palette.grey[900], 0.8),
			imgUrl: urlFor(image.asset),
		}),
		textAlign: "center",
		color: theme.palette.common.white,
		padding: theme.spacing(10, 0),
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(15, 0),
		},
	}))

	return (
		<StyledRoot>
			<Box>
				<Typography color='white' variant='overline' sx={{ opacity: 0.48 }}>
					{eyebrow}
				</Typography>
			</Box>

			<Box>
				<Typography variant='h2' color='white' sx={{ mt: 2, mb: 5 }}>
					{heading}
				</Typography>
			</Box>

			<Box>
				{ctas.map((cta) => (
					<CTA {...cta} key={cta._key} />
				))}
			</Box>
		</StyledRoot>
	)
}
