// @mui
import { Typography, Container, Box } from "@mui/material"
// components
import SvgColor from "../../components/svg-color/SvgColor"
import StyledPortableText from "../../components/StyledPortableText"
import urlFor from "../../../utils/imageUrl"
// ----------------------------------------------------------------------

export default function CoreValues(props) {
	const { heading, cards } = props

	return (
		<Container
			sx={{
				textAlign: "center",
				pt: { xs: 5, md: 10 },
				pb: { xs: 5, md: 15 },
				px: { xs: 2, md: 0 },
			}}
		>
			<Typography variant='h2' sx={{ mb: { xs: 8, md: 10 } }}>
				{heading}
			</Typography>

			<Box
				sx={{
					display: "grid",
					gap: { xs: 8, md: 2 },
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
						md: "repeat(4, 1fr)",
					},
				}}
			>
				{cards.map((value) => (
					<Box key={value.title}>
						<SvgColor src={urlFor(value.image.asset)} sx={{ width: 64, height: 64, mx: "auto", color: value.color }} />

						<Typography variant='h5' sx={{ mt: 5, mb: 2 }}>
							{value.title}
						</Typography>

						<StyledPortableText value={value.description} variant='' sx={{ color: "text.secondary" }} />
					</Box>
				))}
			</Box>
		</Container>
	)
}
