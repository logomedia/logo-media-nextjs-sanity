// icons
import directionStraightRight from "@iconify/icons-carbon/direction-straight-right"
import { Box, Stack } from "@mui/material"
// @mui
import { styled, useTheme } from "@mui/material/styles"

import { IconButtonAnimate } from "../Animate"
//
import Iconify from "../Iconify"

// ----------------------------------------------------------------------

const BUTTON_SIZE = 40

const ArrowStyle = styled(IconButtonAnimate)(({ theme }) => ({
	width: BUTTON_SIZE,
	height: BUTTON_SIZE,
	cursor: "pointer",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	"&:hover": {
		color: theme.palette.text.primary,
	},
}))

// ----------------------------------------------------------------------

export default function CarouselArrows({
	customIcon, // Set icon right
	onNext,
	onPrevious,
	children,
	...other
}) {
	const theme = useTheme()
	const isRTL = theme.direction === "rtl"

	const style = {
		position: "absolute",
		mt: -2.5,
		top: "50%",
		zIndex: 9,
	}

	if (children) {
		return (
			<Box {...other}>
				<Box className='arrow left' sx={{ ...style, left: 0 }}>
					<ArrowStyle onClick={onPrevious}>{leftIcon(customIcon, isRTL)}</ArrowStyle>
				</Box>

				{children}

				<Box className='arrow right' sx={{ ...style, right: 0 }}>
					<ArrowStyle onClick={onNext}>{rightIcon(customIcon, isRTL)}</ArrowStyle>
				</Box>
			</Box>
		)
	}

	return (
		<Stack direction='row' spacing={2} {...other}>
			<ArrowStyle onClick={onPrevious}>{leftIcon(customIcon, isRTL)}</ArrowStyle>
			<ArrowStyle onClick={onNext}>{rightIcon(customIcon, isRTL)}</ArrowStyle>
		</Stack>
	)
}

// ----------------------------------------------------------------------

const leftIcon = (customIcon, isRTL) => (
	<Iconify
		icon={customIcon ? customIcon : directionStraightRight}
		sx={{
			width: 24,
			height: 24,
			transform: " scaleX(-1)",
			...(isRTL && { transform: " scaleX(1)" }),
		}}
	/>
)

const rightIcon = (customIcon, isRTL) => (
	<Iconify
		icon={customIcon ? customIcon : directionStraightRight}
		sx={{
			width: 24,
			height: 24,
			...(isRTL && { transform: " scaleX(-1)" }),
		}}
	/>
)
