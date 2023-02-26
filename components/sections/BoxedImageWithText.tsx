// icons
import chevronRight from '@iconify/icons-carbon/chevron-right'
import { Box, Button, Container, Paper, Typography } from '@mui/material'
// @mui
import { styled } from '@mui/material/styles'
import { PortableText } from '@portabletext/react'
import { m } from 'framer-motion'

// components
import { Iconify, Image } from '../../components'
import { MotionViewport, varFade } from '../../components/animate'
// routes
import Cta from '../Cta'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: theme.spacing(10, 0, 15, 0),
  },
}))

// ----------------------------------------------------------------------

export default function HomeCombination(props) {
  const { ctas, description, heading, eyebrow, image, imageAltText } = props
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Paper
          sx={{
            borderRadius: 3,
            p: { md: 10 },
            bgcolor: { xs: 'transparent', md: 'background.neutral' },
          }}
        >
          <Box
            sx={{
              maxWidth: 360,
              mx: { xs: 'auto', md: 'unset' },
            }}
          >
            <m.div variants={varFade().inLeft}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                {eyebrow}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft}>
              <Typography variant="h3" sx={{ mt: 2, mb: 3 }}>
                {heading}
              </Typography>
            </m.div>

            <m.div variants={varFade().inLeft} style={{ marginBottom: '20px' }}>
              <PortableText value={description} />
            </m.div>

            <m.div variants={varFade().inLeft}>
              {ctas.map((cta) => (
                <Cta {...cta} key={cta._key} />
              ))}
            </m.div>
          </Box>
        </Paper>

        <Box
          sx={{
            top: { md: -40 },
            right: { md: -120 },
            my: { xs: 8, md: 0 },
            position: { md: 'absolute' },
          }}
        >
          <m.div variants={varFade().inRight}>
            <Image
              alt={imageAltText}
              src={image.asset.url}
              sx={{
                maxWidth: { md: 790 },
              }}
            />
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  )
}
