// @mui
import PropTypes from "prop-types"
import { Typography, Stack, Paper, Box } from "@mui/material"
// components
import NextImage from "next/image"
import Marquee from "react-fast-marquee"

// ----------------------------------------------------------------------

export default function OurClientsCareer({ heading, logos }) {
	return (
		<Box
			sx={{
				pt: { xs: 10, md: 15 },
				pb: { xs: 5, md: 10 },
			}}
		>
			<Stack
				spacing={3}
				sx={{
					mx: "auto",
					maxWidth: 680,
					textAlign: "center",
					mb: { xs: 8, md: 10 },
					px: { xs: 1, md: 0 },
				}}
			>
				<Typography variant='h2'>{heading}</Typography>
			</Stack>
			<Marquee gradientWidth='0' gradient='false' pauseOnHover='true' speed='50'>
				{logos.map((brand) => (
					<Box key={brand._key} sx={{ mx: 2 }}>
						<Paper
							variant='outlined'
							sx={{
								p: 2,
								borderRadius: 2,
								bgcolor: "background.default",
								width: "100%",
							}}
						>
							<NextImage priority style={{ height: "35px", width: "auto" }} alt={brand.clientName} width={brand.logo.asset.metadata.dimensions.width} height={brand.logo.asset.metadata.dimensions.height} src={brand.logo.asset.url} />
						</Paper>
					</Box>
				))}
			</Marquee>
		</Box>
	)
}

OurClientsCareer.propTypes = {
	brands: PropTypes.array,
}
