import PropTypes from "prop-types"
import { memo } from "react"
import { m } from "framer-motion"
// @mui
import { Box } from "@mui/material"
// components
import Image from "../../components/image/Image"
// pattern
import { Shape, Pattern01, Pattern02 } from "../../components/pattern"
import urlFor from "../../../utils/imageUrl"
// ----------------------------------------------------------------------

const varUp = {
	animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
	transition: { duration: 8, repeat: Infinity },
}

const varDown = {
	animate: { y: [8, -8, 8], x: [4, -4, 4] },
	transition: { duration: 8, repeat: Infinity },
}

const varLeft = {
	animate: { x: [8, -8, 8], y: [4, -4, 4] },
	transition: { duration: 7, repeat: Infinity },
}

const varRight = {
	animate: { x: [8, -8, 8], y: [4, -4, 4] },
	transition: { duration: 7, repeat: Infinity },
}

// ----------------------------------------------------------------------

function ElearningHeroIllustration({ imagesArray, image, imageAltText, sx, ...other }) {
	return (
		<Box
			sx={{
				width: 670,
				height: 670,
				display: "flex",
				alignItems: "center",
				position: "relative",
				justifyContent: "center",
				...sx,
			}}
			{...other}
		>
			<Box sx={{ position: "absolute", right: 18, bottom: 28, zIndex: 8 }}>
				<Image visibleByDefault disabledEffect alt={imageAltText} src={urlFor(image.asset).url()} sx={{ width: 546, height: 650 }} />
			</Box>

			{imagesArray[4] ? (
				<Box {...varDown} component={m.div} sx={{ position: "absolute", left: 115, bottom: 115, zIndex: 8 }}>
					<Image visibleByDefault disabledEffect alt={"icon"} src={urlFor(imagesArray[4].asset).url()} sx={{ width: 52, height: 62 }} />
				</Box>
			) : (
				<></>
			)}

			{imagesArray[2] ? (
				<Box {...varRight} component={m.div} sx={{ position: "absolute", left: 18, top: 220, zIndex: 8 }}>
					<Image visibleByDefault disabledEffect alt={"icon"} src={urlFor(imagesArray[2].asset).url()} sx={{ width: 60, height: 77 }} />
				</Box>
			) : (
				<></>
			)}

			{imagesArray[3] ? (
				<Box {...varUp} component={m.div} sx={{ zIndex: 9, left: 120, bottom: 168, position: "absolute" }}>
					<Image visibleByDefault disabledEffect alt={"icon"} src={urlFor(imagesArray[3].asset).url()} sx={{ width: 56, height: 56 }} />
				</Box>
			) : (
				<></>
			)}

			{/* Icon */}

			{imagesArray[0] ? (
				<Box {...varLeft} component={m.div} sx={{ top: 88, right: 72, zIndex: 8, position: "absolute" }}>
					<Image alt={"icon"} src={urlFor(imagesArray[0].asset).url()} sx={{ width: 90, height: 90 }} />
				</Box>
			) : (
				<></>
			)}

			{imagesArray[1] ? (
				<Box {...varRight} component={m.div} sx={{ zIndex: 8, bottom: 160, position: "absolute" }}>
					<Image
						alt={"icon"}
						src={urlFor(imagesArray[1].asset).url()}
						sx={{
							width: 80,
							height: 80,
							transform: "translateX(40px) scale(1.2) rotate(-15deg)",
						}}
					/>
				</Box>
			) : (
				<></>
			)}

			{imagesArray[5] ? (
				<Box {...varUp} component={m.div} sx={{ zIndex: 8, right: 90, position: "absolute" }}>
					<Image
						alt={"icon"}
						src={urlFor(imagesArray[5].asset).url()}
						sx={{
							width: 80,
							height: 80,
							transform: "translateX(40px) scale(1.2) rotate(-15deg)",
						}}
					/>
				</Box>
			) : (
				<></>
			)}

			{imagesArray[6] ? (
				<Box {...varDown} component={m.div} sx={{ zIndex: 8, position: "absolute" }}>
					<Image
						alt={"icon"}
						src={urlFor(imagesArray[6].asset).url()}
						sx={{
							width: 80,
							height: 80,
							transform: "scale(1.2) translate(-135px, -75px) rotate(15deg)",
						}}
					/>
				</Box>
			) : (
				<></>
			)}

			<Pattern01 sx={{ left: 0, top: 0 }} />
			<Pattern02 sx={{ top: 0, left: 0, opacity: 0.24, transform: "scale(1.2)" }} />
			<Shape sx={{ position: "absolute", right: 32, bottom: 32 }} />
		</Box>
	)
}

ElearningHeroIllustration.propTypes = {
	sx: PropTypes.object,
}

export default memo(ElearningHeroIllustration)
