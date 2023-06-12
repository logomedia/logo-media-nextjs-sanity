// @mui
import { alpha, styled } from "@mui/material/styles"
import { Stack, Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"

// utils
import { bgGradient } from "../../../utils/cssStyles"
import urlFor from "../../../utils/imageUrl"
import StyledPortableText from "../../components/StyledPortableText/StyledPortableText"
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function PageTitle({ heading, description, image }) {
	const StyledRoot = styled("div")(({ theme }) => ({
		...bgGradient({
			startColor: `${theme.palette.common.white} 0%`,
			endColor: `${alpha(theme.palette.common.white, 0.4)} 100%`,
			imgUrl: urlFor(image.asset).url(),
		}),
		padding: theme.spacing(10, 0),
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(15, 0),
		},
	}))
	return (
		<StyledRoot>
			<Container>
				<Grid container spacing={3} justifyContent='center'>
					<Grid xs={12} md={8}>
						<Stack
							spacing={3}
							sx={{
								mb: 5,
								mx: "auto",
								maxWidth: 800,
								textAlign: "center",
								color: "common.black",
							}}
						>
							<Typography variant='h1'>{heading}</Typography>
							<StyledPortableText value={description} sx={{ opacity: 0.72, color: "common.black" }} />
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</StyledRoot>
	)
}

// ----------------------------------------------------------------------
