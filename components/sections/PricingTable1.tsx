import checkmarkOutline from '@iconify/icons-carbon/checkmark-outline'
// icons
import chevronRight from '@iconify/icons-carbon/chevron-right'
import closeOutline from '@iconify/icons-carbon/close-outline'
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from '@mui/material'
// @mui
// @mui
import { alpha, styled } from '@mui/material/styles'
import { m } from 'framer-motion'

import { Iconify, Image, TextIconLabel } from '../../components'
// components
import { MotionViewport, varFade } from '../../components/animate'
// utils
import cssStyles from '../../utils/cssStyles'
//

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgGradient({
    direction: 'top',
    startColor: alpha(theme.palette.grey[500], 0),
    endColor: alpha(theme.palette.grey[500], 0.12),
  }),
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  },
}))

// ----------------------------------------------------------------------

export default function PricingTable1({
  description,
  eyebrow,
  heading,
  plans,
}) {
  return (
    <MotionViewport>
      <RootStyle>
        <Container>
          <Box
            sx={{
              mb: { xs: 8, md: 10 },
              textAlign: 'center',
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                {eyebrow}
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                {heading}
              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            </m.div>
          </Box>

          <Box
            sx={{
              alignItems: 'center',
              pb: 10,

              display: {
                xs: 'grid',
                md: 'grid',
              },
              gap: {
                xs: 1,
                md: 4,
              },
              overflow: 'auto',

              gridTemplateColumns: {
                xs: 'repeat(3,1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {plans.map((plan, index) => (
              <m.div key={plan.license} variants={varFade().inUp}>
                <PricingCard plan={plan} index={index} key={plan._key} />
              </m.div>
            ))}
          </Box>
        </Container>
      </RootStyle>
    </MotionViewport>
  )
}

function PricingCard({ plan, index }) {
  const { title, commons, options, icons, price } = plan

  return (
    <Card
      sx={{
        p: 5,
        width: '300px',
        boxShadow: 0,
        ...(index === 1 && {
          py: { md: 8 },
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      <Stack spacing={5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
            {title}
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Typography variant="h4">$</Typography>
            <Typography variant="h3">{price}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          {icons.map((i) => (
            <Image
              key={i._key}
              alt={i.title}
              src={i.icon.asset.url}
              sx={{ width: 32, height: 32 }}
            />
          ))}
        </Stack>

        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack
              key={option}
              spacing={1.5}
              direction="row"
              alignItems="center"
            >
              <Iconify
                icon={checkmarkOutline}
                sx={{ color: 'primary.main', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {options.map((option) => (
            <TextIconLabel
              key={option.title}
              icon={
                <Iconify
                  icon={option.disabled ? closeOutline : checkmarkOutline}
                  sx={{
                    mr: 1.5,
                    width: 20,
                    height: 20,
                    color: 'primary.main',
                    ...(option.disabled && { color: 'currentColor' }),
                  }}
                />
              }
              value={option.title}
              sx={{
                ...(option.disabled && { color: 'text.disabled' }),
              }}
            />
          ))}
        </Stack>

        <Stack alignItems="flex-end" spacing={3}>
          <Button
            size="large"
            fullWidth
            variant="contained"
            color={index === 1 ? 'primary' : 'inherit'}
            target="_blank"
            rel="noopener"
            href={'/'}
          >
            Choose Package
          </Button>
        </Stack>
      </Stack>
    </Card>
  )
}
