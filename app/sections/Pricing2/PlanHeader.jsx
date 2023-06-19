import PropTypes from "prop-types"
// @mui
import { Stack, Typography } from "@mui/material"
// components
import Image from "../../components/image"
import Label from "../../components/label"
//
import StyledPortableText from "../../components/StyledPortableText"
import urlFor from "../../../utils/imageUrl"
// ----------------------------------------------------------------------

export default function PlanHeader({ plan }) {
	const { title, description, price, popular, image } = plan

	const startLicense = title === "START"
	const proLicense = title === "PRO"

	return (
		<Stack
			spacing={2}
			alignItems={{ xs: "flex-start", md: "center" }}
			sx={{
				px: 3,
				py: 5,
				position: "relative",
				...(proLicense && {
					bgcolor: { md: "background.neutral" },
					borderRadius: "16px 16px 0 0",
				}),
			}}
		>
			{popular && (
				<Label color='info' sx={{ position: "absolute", top: 16, right: 16 }}>
					POPULAR
				</Label>
			)}

			<Typography variant='overline' sx={{ color: "text.secondary" }}>
				{title}
			</Typography>

			<Stack
				direction='row'
				alignItems='center'
				justifyContent='center'
				spacing={0.5}
				sx={{
					...(proLicense && {
						color: { md: "primary.main" },
					}),
				}}
			>
				{!startLicense && (
					<Typography variant='h4' component='span'>
						$
					</Typography>
				)}

				<Typography variant='h3' component='span'>
					{price}
				</Typography>

				{!startLicense && (
					<Typography variant='subtitle2' component='span'>
						/mo
					</Typography>
				)}
			</Stack>

			<Image alt={image.asset.originalFilename} src={urlFor(image.asset).url()} sx={{ width: 80, height: 80 }} />

			<StyledPortableText value={description} variant='body2' sx={{ color: "text.secondary" }} />
		</Stack>
	)
}

PlanHeader.propTypes = {
	plan: PropTypes.shape({
		caption: PropTypes.string,
		icon: PropTypes.node,
		license: PropTypes.string,
		price: PropTypes.string,
	}),
}
