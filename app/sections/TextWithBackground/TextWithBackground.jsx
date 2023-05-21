"use client"
import { m } from "framer-motion"
// @mui
import { styled, alpha } from "@mui/material/styles"
import { Button, Typography } from "@mui/material"
// utils
import { bgGradient } from "../../../utils/cssStyles"
// components

import { MotionViewport, varFade } from "../../components/animate"
import CTA from "../../components/CTA"
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function TextWithBackground(props) {
	const { image, eyebrow, heading, ctas } = props

	const StyledRoot = styled("div")(({ theme }) => ({
		...bgGradient({
			color: alpha(theme.palette.grey[900], 0.8),
			imgUrl: image.asset.url,
		}),
		textAlign: "center",
		color: theme.palette.common.white,
		padding: theme.spacing(10, 0),
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(15, 0),
		},
	}))

	return (
		<MotionViewport>
			<StyledRoot>
				<div variants={varFade({ distance: 40 }).inUp}>
					<Typography variant='overline' sx={{ opacity: 0.48 }}>
						{eyebrow}
					</Typography>
				</div>

				<div variants={varFade({ distance: 40 }).inUp}>
					<Typography variant='h2' sx={{ mt: 2, mb: 5 }}>
						{heading}
					</Typography>
				</div>

				<div variants={varFade({ distance: 40 }).inUp}>
					{ctas.map((cta) => (
						<CTA {...cta} key={cta._key} />
					))}
				</div>
			</StyledRoot>
		</MotionViewport>
	)
}