// next
import { Avatar, Container, Link, Stack, Typography } from '@mui/material'
// @mui
import { styled } from '@mui/material/styles'
import NextLink from 'next/link'

// @types
// components
import { Image } from '../../components'
// utils
import { fDate } from '../../utils/formatTime'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}))

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}))

// ----------------------------------------------------------------------

export default function BlogFeaturedPosts({ post }) {
  const { author, coverImage, date, excerpt, length, slug, title } = post

  return (
    <RootStyle>
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Image
            ratio="16/9"
            src={coverImage.asset.url}
            alt={title}
            sx={{ borderRadius: 2 }}
          />

          <Stack
            spacing={1}
            sx={{
              mx: 'auto',
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{ typography: 'caption', color: 'text.disabled' }}
            >
              {fDate(date)}
              <DotStyle />
              {length + ' minutes read'}
            </Stack>

            <NextLink href={slug}>
              <Typography color="inherit" variant="h3">
                {title}
              </Typography>
            </NextLink>

            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>
              {excerpt}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              sx={{ pt: 1.5, typography: 'body2' }}
            >
              <Avatar src={author.picture.asset.url} sx={{ mr: 1 }} />
              {author.name}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  )
}
