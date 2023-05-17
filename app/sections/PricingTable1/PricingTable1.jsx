"use client"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
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
				<div>
					<Typography variant='overline' sx={{ color: "text.disabled" }}>
						{eyebrow}
					</Typography>
				</div>

				<div>
					<Typography variant='h2' sx={{ my: 3 }}>
						{heading}
					</Typography>
				</div>

				<div>
					<Typography sx={{ color: "text.secondary" }}>{description}</Typography>
				</div>
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
					<PlanCard plan={plan} index={index} key={plan._key} />
				))}
			</Box>
		</Container>
	)
}
