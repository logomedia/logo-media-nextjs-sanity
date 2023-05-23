"use client"
import { m } from "framer-motion"

// @mui
import { Box, Container, Typography } from "@mui/material"
// components
import { MotionViewport, varFade } from "../../components/animate"
//
import PlanCard from "./PlanCard"

// ----------------------------------------------------------------------

export default function PricingTable1({ description, eyebrow, heading, plans }) {
	return (
		<Container
			component={MotionViewport}
			sx={{
				pt: { xs: 10, md: 15 },
				pb: { xs: 5, md: 10 },
			}}
		>
			<Box
				sx={{
					mb: { xs: 8, md: 10 },
					textAlign: "center",
				}}
			>
				<m.div variants={varFade().inDown}>
					<Typography variant='overline' sx={{ color: "text.disabled" }}>
						{eyebrow}
					</Typography>
				</m.div>

				<m.div variants={varFade().inDown}>
					<Typography variant='h2' sx={{ my: 3 }}>
						{heading}
					</Typography>
				</m.div>

				<m.div variants={varFade().inDown}>
					<Typography sx={{ color: "text.secondary" }}>{description}</Typography>
				</m.div>
			</Box>

			<Box
				sx={{
					gap: 4,
					display: "grid",
					alignItems: "center",
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						md: "repeat(3, 1fr)",
					},
				}}
			>
				{plans.map((plan, index) => (
					<m.div key={plan._key} variants={varFade().inUp}>
						<PlanCard plan={plan} index={index} />
					</m.div>
				))}
			</Box>
		</Container>
	)
}
