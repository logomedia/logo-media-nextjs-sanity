// @mui
import { Divider, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import Image from 'next/image'

// utils
import { fDate } from '../../../utils/formatTime'
import { SocialsButton } from '../..'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.palette.background.neutral,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}))

// ----------------------------------------------------------------------

export default function MarketingCaseStudySummary({ frontmatter }) {
  const { name, logo, description, tags, website, date } = frontmatter

  return (
    <RootStyle>
      <Stack spacing={3}>
        <Stack spacing={2} sx={{ alignItems: 'start' }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            summary
          </Typography>
          <Box
            sx={{
              position: 'relative',
              height: '35px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Image
              style={{ height: '35px', width: 'auto' }}
              src={logo.asset.url}
              alt={name}
              width={logo.asset.metadata.dimensions.width}
              height={logo.asset.metadata.dimensions.height}
            />
          </Box>

          <Typography variant="body2">{description}</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Website
          </Typography>
          <Typography variant="body2">{website}</Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
            Category
          </Typography>

          {tags.map((tag) => (
            <Typography key={tag} variant="body2" sx={{ pb: 1 }}>
              {tag}
            </Typography>
          ))}

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Date
          </Typography>
          <Typography variant="body2">{fDate(date, 'MMM dd yyyy')}</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="subtitle2">Share:</Typography>
          <SocialsButton initialColor />
        </Stack>
      </Stack>
    </RootStyle>
  )
}
