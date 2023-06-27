import { Container, Box, Paper, Stack, Typography, Divider, Chip, Button } from "@mui/material"
import Image from "next/image"
import { useNextSanityImage } from "next-sanity-image"
import { client } from "../../../lib/sanity.client"
import NextLink from "next/link"
import Iconify from "../../components/iconify/Iconify"

export default function Partners(props) {
	const { partners } = props

	return (
		<Container sx={{ py: 2, mb: { xs: 1, md: 3 } }}>
			<Box
				sx={{
					display: "grid",
					gap: 3,
					mt: 3,
					gridTemplateColumns: {
						xs: "repeat(1, 1fr)",
						md: "repeat(3, 1fr)",
					},
				}}
			>
				{partners.map((partner) => (
					<PartnerCard key={partner._id} partner={partner} />
				))}
			</Box>
		</Container>
	)
}
function PartnerCard({ partner }) {
	const { description, name, partnerImage, tags, website } = partner
	const imageProps = useNextSanityImage(client, partnerImage)
	return (
		<Paper variant='outlined' sx={{ borderRadius: 2, overflow: "hidden", p: 2, position: "relative" }}>
			<Box sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mb: 2 }}>
				<Box sx={{ my: 2 }}>
					{tags.map((tag) => (
						<Chip
							key={tag}
							size='small'
							label={tag}
							sx={{
								m: 0.5,
								color: "common.white",
								backgroundColor: "primary.main",
								fontSize: {
									xs: "10px",
								},
							}}
						/>
					))}
				</Box>
				<Image alt={name} {...imageProps} style={{ height: 75, width: "auto" }} />
				<Divider sx={{ mt: 1, mb: 0.5 }} />
				<Stack>
					<Typography>{description}</Typography>
				</Stack>
			</Box>
			<Button sx={{ position: "absolute", bottom: 1, right: 1 }} component={NextLink} href={website} target='_blank' color='inherit' endIcon={<Iconify icon='carbon:chevron-right' />}>
				Visit {name}
			</Button>
		</Paper>
	)
}
