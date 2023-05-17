import PropTypes from "prop-types"
// @mui
import { Typography, Divider, Stack, Box, Link } from "@mui/material"
import Image from "next/image"
// utils
import { fDate } from "../../../../utils/formatTime"

// ----------------------------------------------------------------------

export default function CaseStudySummary({ caseStudy }) {
	const { title, logo, description, tags, website, date } = caseStudy

	return (
		<Stack spacing={3} sx={{ p: 5, borderRadius: 2, bgcolor: "background.neutral" }}>
			<Stack spacing={2}>
				<Typography variant='overline' sx={{ color: "text.disabled" }}>
					summary
				</Typography>
				<Box
					sx={{
						position: "relative",

						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					<Image style={{ height: "35px", width: "auto" }} src={logo.asset.url} alt={title} width={logo.asset.metadata.dimensions.width} height={logo.asset.metadata.dimensions.height} />
				</Box>
				<Typography variant='h6'>{title}</Typography>

				<Typography variant='body2'>{description}</Typography>
			</Stack>

			<Divider sx={{ borderStyle: "dashed" }} />

			<Stack spacing={1}>
				<Typography variant='overline' sx={{ color: "text.disabled" }}>
					Website
				</Typography>

				<Link variant='body2' color='inherit'>
					{website}
				</Link>

				<Typography variant='overline' sx={{ color: "text.disabled", pt: 1 }}>
					Category
				</Typography>

				{tags.map((tag) => (
					<Typography key={tag} variant='body2' sx={{ pb: 1 }}>
						{tag}
					</Typography>
				))}

				<Typography variant='overline' sx={{ color: "text.disabled" }}>
					Date
				</Typography>

				<Typography variant='body2'>{fDate(date)}</Typography>
			</Stack>

			<Divider sx={{ borderStyle: "dashed" }} />
		</Stack>
	)
}
