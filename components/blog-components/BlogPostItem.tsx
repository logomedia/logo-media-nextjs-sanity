// next
// @mui
import { Avatar, Divider, Paper, Stack, Typography } from '@mui/material'
import NextLink from 'next/link'

// @types
// components
import { Image, TextMaxLine } from '../../components'
// utils
import { fDate } from '../../utils/formatTime'

// ----------------------------------------------------------------------

export default function BlogPostItem({ post }) {
  const { author, coverImage, date, excerpt, length, slug, tags, title } = post

  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
      <Image src={coverImage.asset.url} alt={title} ratio="16/9" />

      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle2">{fDate(date, 'MMM')}</Typography>
          <Divider sx={{ mt: 1, mb: 0.5 }} />
          <Typography variant="h3">{fDate(date, 'dd')}</Typography>
        </Stack>

        <Stack spacing={1}>
          <NextLink href={'/news-and-trends/' + slug}>
            <TextMaxLine variant="h6" persistent>
              {title}
            </TextMaxLine>
          </NextLink>

          <TextMaxLine variant="body2" persistent color="text.secondary">
            {excerpt}
          </TextMaxLine>

          <Stack
            spacing={1.5}
            direction="row"
            alignItems="center"
            sx={{ pt: 1.5 }}
          >
            <Avatar
              src={author.picture.asset.url}
              sx={{ width: 40, height: 40 }}
            />
            <Stack>
              <Typography variant="body2">{author.name}</Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {length + ' minutes read'}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}
