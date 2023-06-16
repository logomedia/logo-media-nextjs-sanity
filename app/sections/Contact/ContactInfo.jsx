// @mui
import { Typography, Stack, Link } from "@mui/material"
// hooks
import useResponsive from "../../../hooks/useResponsive"
// components
import Iconify from "../../components/iconify/Iconify"
import Image from "next/image"
import { client } from "../../../lib/sanity.client"
import { useNextSanityImage } from "next-sanity-image"
import SvgColor from "../../components/svg-color/SvgColor"
import urlFor from "../../../utils/imageUrl"
// ----------------------------------------------------------------------

export default function ContactMarketingInfo(props) {
	const { image, imageAltText, info } = props

	const isMdUp = useResponsive("up", "md")
	const imageProps = useNextSanityImage(client, image)
	return (
		<Stack spacing={3}>
			{isMdUp && (
				<Image
					priority
					alt={imageAltText}
					{...imageProps}
					style={{ width: "100%", maxWidth: 350, height: "auto", margin: "auto" }} // layout="responsive" prior to Next 13.0.0
					sizes='(max-width: 800px) 100vw, 800px'
				/>
			)}

			{/* Info List Items */}
			{info.map((item) => (
				<Stack key={item._key} spacing={2} direction='row' alignItems='flex-start'>
					<SvgColor src={urlFor(item.icon.asset).url()} sx={{ width: 28, height: 28 }} />

					<Stack spacing={0.5}>
						<Stack spacing={1} direction='row' alignItems='center'>
							<Typography variant='h6'>{item.title}</Typography>

							{item.title.includes("Visit") && (
								<Link sx={{ lineHeight: 0 }}>
									<Iconify icon='carbon:launch' width={18} />
								</Link>
							)}
						</Stack>

						{item.url ? (
							<Link color='inherit' variant='body2' href={item.url}>
								{item.subtitle}
							</Link>
						) : (
							<Typography variant='body2'>{item.subtitle}</Typography>
						)}
					</Stack>
				</Stack>
			))}
		</Stack>
	)
}
