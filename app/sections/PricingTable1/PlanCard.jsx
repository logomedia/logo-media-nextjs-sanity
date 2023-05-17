import PropTypes from "prop-types"
// @mui
import { Card, Link, Stack, Button, Divider, Typography } from "@mui/material"

// components
import Iconify from "../../components/iconify"
import Image from "../../components/image"
import Label from "../../components/label"
import urlFor from "../../../utils/imageUrl"
// ----------------------------------------------------------------------

export default function PlanCard({ plan, index }) {
	const { title, commons, options, icons, price } = plan

	return (
		<Card
			sx={{
				p: 5,
				boxShadow: (theme) => theme.customShadows.z8,
				...(index === 1 && {
					py: 10,
					boxShadow: (theme) => theme.customShadows.z24,
				}),
			}}
		>
			{index === 1 && (
				<Label color='info' sx={{ position: "absolute", top: 40, left: 40 }}>
					POPULAR
				</Label>
			)}

			<Stack spacing={5}>
				<Stack direction='row' justifyContent='space-between'>
					<Typography variant='h5' component='div' sx={{ textTransform: "uppercase" }}>
						{title}
					</Typography>

					<Stack direction='row' spacing={0.5}>
						<Typography variant='h4' component='span'>
							$
						</Typography>
						<Typography variant='h3' component='span'>
							{price}
						</Typography>
					</Stack>
				</Stack>

				<Stack direction='row' spacing={1.5}>
					{icons.map((i) => (
						<Image key={i._key} alt={i} src={urlFor(i.icon.asset)} sx={{ width: 24, height: 24 }} />
					))}
				</Stack>

				<Stack spacing={2.5}>
					{commons.map((option) => (
						<Stack key={option} spacing={1.5} direction='row' alignItems='center'>
							<Iconify icon='carbon:checkmark-outline' sx={{ color: "primary.main", width: 20, height: 20 }} />
							<Typography variant='body2'>{option}</Typography>
						</Stack>
					))}

					<Divider sx={{ borderStyle: "dashed" }} />

					{options.map((option) => (
						<Stack
							key={option.title}
							direction='row'
							alignItems='center'
							sx={{
								typography: "body2",
								...(option.disabled && { color: "text.disabled" }),
							}}
						>
							<Iconify
								icon={option.disabled ? "carbon:close-outline" : "carbon:checkmark-outline"}
								sx={{
									mr: 2,
									color: "primary.main",
									...(option.disabled && { color: "currentColor" }),
								}}
							/>
							{option.title}
						</Stack>
					))}
				</Stack>

				<Stack alignItems='flex-end' spacing={3}>
					<Button size='large' fullWidth variant={index === 0 ? "outlined" : "contained"} color={index === 2 ? "primary" : "inherit"} target='_blank' rel='noopener' href={"/"}>
						Choose Package
					</Button>
				</Stack>
			</Stack>
		</Card>
	)
}
