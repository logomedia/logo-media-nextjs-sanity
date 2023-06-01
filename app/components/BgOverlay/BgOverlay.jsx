// @mui
import { styled, alpha } from "@mui/material/styles"
import { Box, NoSsr } from "@mui/material"
// utils
import bgGradient from "../../../utils/cssStyles"

// ----------------------------------------------------------------------

const StyledOverlay = styled("div")(({ theme }) => ({
	...bgGradient({
		direction: "to top",
		startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
		endColor: `${theme.palette.common.black} 75%`,
	}),
	top: 0,
	left: 0,
	zIndex: 8,
	width: "100%",
	height: "100%",
	position: "absolute",
}))

// ----------------------------------------------------------------------

export default function BgOverlay({ direction, startColor, endColor, ...other }) {
	return (
		<NoSsr>
			<StyledOverlay direction={direction} startColor={startColor} endColor={endColor} {...other} />
		</NoSsr>
	)
}
