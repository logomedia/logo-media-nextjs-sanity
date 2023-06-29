import { Container, Typography } from "@mui/material"
import { PortableText } from "@portabletext/react"

export default function TermsPages({ heading, description }) {
	return (
		<Container sx={{ py: 10 }}>
			{heading && (
				<Typography component='h1' variant='h2' sx={{ textAlign: "center" }}>
					{heading}
				</Typography>
			)}
			{description && <PortableText value={description} />}
		</Container>
	)
}
