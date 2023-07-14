"use client"

import PropTypes from "prop-types"
import { useState } from "react"
// @mui
import { Link, Stack, Button, Collapse, Typography } from "@mui/material"
// components
import Iconify from "../../components/iconify"
import Cta from "../../components/CTA"

// ----------------------------------------------------------------------

export default function PlanContentMobile({ plan, features }) {
	const { title, enabledFeatures, ctas } = plan

	const featureOptions = features.map((key, index) => ({
		title: key.feature,
		enabled: enabledFeatures[index],
	}))

	const [open, setOpen] = useState(false)

	const startLicense = title === "START"
	const proLicense = title === "PRO"
	const businessLicense = title === "BUSINESS"

	return (
		<Stack spacing={5} sx={{ px: 3, pb: 5 }}>
			<div>
				<Link
					variant='subtitle2'
					color={open ? "primary" : "inherit"}
					onClick={() => setOpen(!open)}
					sx={{
						display: "flex",
						alignItems: "center",
						...(open && {
							mb: 5,
						}),
					}}
				>
					{open ? "Hide" : "Show"} all feature
					<Iconify icon={open ? "carbon:chevron-up" : "carbon:chevron-down"} sx={{ ml: 1 }} />
				</Link>

				{/* Feature Options */}
				<Collapse unmountOnExit in={open}>
					<Stack spacing={2}>
						{featureOptions.map((option) => {
							const { title, enabled } = option
							return (
								<Stack key={title} direction='row' alignItems='center' justifyContent='space-between'>
									<Typography
										variant='body2'
										sx={{
											...(!enabled && {
												color: "text.disabled",
											}),
										}}
									>
										{title}
									</Typography>

									<Iconify
										icon={enabled ? "carbon:checkmark" : "carbon:close-outline"}
										sx={{
											color: "primary.main",
											...(!enabled && {
												color: "text.disabled",
											}),
										}}
									/>
								</Stack>
							)
						})}
					</Stack>
				</Collapse>
			</div>

			{/* CTA's */}
			{ctas.map((cta) => (
				<Cta {...cta} key={cta._key} />
			))}
			{/* <Button
        fullWidth
        size="large"
        variant={proLicense ? 'contained' : 'outlined'}
        color="inherit"
      >
        {startLicense && 'Start Free Trial'}
        {proLicense && 'Choose Pro'}
        {businessLicense && 'Contact Sale'}
      </Button> */}
		</Stack>
	)
}

PlanContentMobile.propTypes = {
	plan: PropTypes.shape({
		license: PropTypes.string,
		featureOptions: PropTypes.array,
	}),
}
