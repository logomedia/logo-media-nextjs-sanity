// @mui
import { Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"
//
import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"

// ----------------------------------------------------------------------

export default function Contact(props) {
	const { heading, image, imageAltText, info } = props

	return (
		<Container
			sx={{
				overflow: "hidden",
				pt: { xs: 10, md: 12 },
				pb: { xs: 10, md: 15 },
			}}
		>
			<Grid container spacing={{ xs: 5, md: 3 }} justifyContent='space-between' direction={{ xs: "column-reverse", md: "row" }}>
				<Grid xs={12} md={6} lg={5}>
					<ContactInfo image={image} imageAltText={imageAltText} info={info} />
				</Grid>

				<Grid xs={12} md={6} lg={6}>
					<Typography variant='h3' sx={{ mb: 5 }}>
						{heading}
					</Typography>

					<ContactForm />
				</Grid>
			</Grid>
		</Container>
	)
}
