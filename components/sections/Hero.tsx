// @mui
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { PortableText } from '@portabletext/react'
import { Image } from 'components'
import { useBoundingClientRect } from 'hooks'
import { urlForImage } from 'lib/sanity.image'
import { useRef } from 'react'

import Cta from '../Cta'

// components

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
}))

// ----------------------------------------------------------------------

export default function Hero(props) {
  const {
    ctas,
    description,
    eyebrow,
    heading,
    image,
    icons,
    heroImageAltText,
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const container = useBoundingClientRect(containerRef)

  const offsetLeft = container?.left

  return (
    <RootStyle>
      <Container sx={{ height: 1 }}>
        <Grid
          container
          columnSpacing={3}
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid item xs={12} md={5}>
            <Stack
              spacing={2}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="center"
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main' }}>
                {eyebrow}
              </Typography>
              <Typography variant="h1">{heading}</Typography>
              <PortableText
                sx={{ color: 'text.secondary' }}
                value={description}
              />
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent={{ xs: 'center', md: 'unset' }}
                spacing={3}
              >
                {ctas.map((cta) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </Stack>

              <Stack direction="row" spacing={3}>
                {icons.map((icon) => (
                  <Image
                    key={icon._key}
                    alt={icon.title}
                    src={icon.icon.asset.url}
                    sx={{ width: 32, height: 32 }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          maxWidth: 1280,
          position: 'absolute',
          bottom: { md: '20%', lg: 40 },
          right: { md: -110, xl: 0 },
          display: { xs: 'none', md: 'block' },
          width: { md: `calc(100% - ${offsetLeft}px)` },
        }}
      >
        <Image alt={heroImageAltText} src={image.asset.url} />
      </Box>
    </RootStyle>
  )
}
