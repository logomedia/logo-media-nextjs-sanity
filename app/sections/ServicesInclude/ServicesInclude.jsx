// @mui
import { Typography, Container, Box } from "@mui/material"
// components
import urlFor from "../../../utils/imageUrl"
import StyledPortableText from "../../components/StyledPortableText/StyledPortableText"
import Image from "../../components/image/Image"

// ----------------------------------------------------------------------

export default function ServicesInclude(props) {
	const { heading, description, cards } = props

	return (
		<Container
			sx={{
				textAlign: "center",
				pt: { xs: 5, md: 10 },
				pb: { xs: 10, md: 15 },
			}}
		>
			<Typography variant='h2'>{heading}</Typography>

			<StyledPortableText
				value={description}
				variant=''
				sx={{
					mt: 3,
					mx: "auto",
					maxWidth: 480,
					color: "text.secondary",
					mb: { xs: 8, md: 10 },
				}}
			/>

			<Box
				sx={{
					rowGap: 8,
					columnGap: 10,
					display: "grid",
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						sm: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
					},
				}}
			>
				{cards.map((service) => (
					<div key={service.title}>
						<Image
							src={urlFor(service.image.asset).url()}
							sx={{
								width: 100,
								height: 100,
								mx: "auto",
							}}
						/>

						<Typography variant='h5' sx={{ mt: 5, mb: 2 }}>
							{service.title}
						</Typography>

						<StyledPortableText value={service.description} variant='' sx={{ color: "text.secondary" }} />
					</div>
				))}
			</Box>
		</Container>
	)
}
