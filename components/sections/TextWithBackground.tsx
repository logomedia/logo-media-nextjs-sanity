import { Button, Typography } from '@mui/material'
// @mui
import { alpha, styled } from '@mui/material/styles'
import { m } from 'framer-motion'

// utils
import cssStyles from '../../utils/cssStyles'
// routes
import { MotionViewport, varFade } from '../animate'
import Cta from '../Cta'
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function TextWithBackground(props) {
  const { image, eyebrow, heading, ctas } = props

  const RootStyle = styled('div')(({ theme }) => ({
    ...cssStyles(theme).bgImage({
      url: image.asset.url,
      startColor: alpha(theme.palette.grey[900], 0.8),
      endColor: alpha(theme.palette.grey[900], 0.8),
    }),
  }))

  const ContentStyle = styled('div')(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(10, 0),
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(15, 0),
    },
  }))
  return (
    <MotionViewport>
      <RootStyle>
        <ContentStyle>
          <m.div variants={varFade({ distance: 40 }).inUp}>
            <Typography variant="overline" sx={{ opacity: 0.48 }}>
              {eyebrow}
            </Typography>
          </m.div>

          <m.div variants={varFade({ distance: 40 }).inUp}>
            <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
              {heading}
            </Typography>
          </m.div>

          <m.div variants={varFade({ distance: 40 }).inUp}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </m.div>
        </ContentStyle>
      </RootStyle>
    </MotionViewport>
  )
}
