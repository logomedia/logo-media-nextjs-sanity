// icons
import caretRight from "@iconify/icons-carbon/caret-right"
import { IconifyIcon } from "@iconify/react"
import { Box, BoxProps, Typography } from "@mui/material"
// @mui
import { alpha, styled, useTheme } from "@mui/material/styles"

import { IconButtonAnimate } from "../Animate"
//
import Iconify from "../Iconify"

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
	zIndex: 9,
	display: "flex",
	alignItems: "center",
	position: "absolute",
	bottom: theme.spacing(2),
	right: theme.spacing(2),
	color: theme.palette.common.white,
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.grey[900], 0.48),
}))

const ArrowStyle = styled(IconButtonAnimate)(({ theme }) => ({
	padding: 6,
	opacity: 0.48,
	color: theme.palette.common.white,
	"&:hover": { opacity: 1 },
}))

// ----------------------------------------------------------------------

export default function CarouselArrowsIndex({
	customIcon, // Set icon right
	index,
	total,
	onNext,
	onPrevious,
	...other
}) {
	const theme = useTheme()
	const isRTL = theme.direction === "rtl"

	return (
		<RootStyle {...other}>
			<ArrowStyle size='small' onClick={onPrevious}>
				<Iconify
					icon={customIcon ? customIcon : caretRight}
					sx={{
						width: 20,
						height: 20,
						transform: " scaleX(-1)",
						...(isRTL && { transform: " scaleX(1)" }),
					}}
				/>
			</ArrowStyle>

			<Typography variant='subtitle2'>
				{index + 1}/{total}
			</Typography>

			<ArrowStyle size='small' onClick={onNext}>
				<Iconify
					icon={customIcon ? customIcon : caretRight}
					sx={{
						width: 20,
						height: 20,
						...(isRTL && { transform: " scaleX(-1)" }),
					}}
				/>
			</ArrowStyle>
		</RootStyle>
	)
}
