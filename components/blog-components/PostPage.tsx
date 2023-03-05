import {
  Avatar,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { PortableText } from '@portabletext/react'
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'

// components
import { Breadcrumbs, Markdown, Page, SocialsButton } from '../../components'
// sections
import { BlogSidebar } from '../../components/sections/blog'
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../config'
import { fDate } from '../../utils/formatTime'
import Image from '../Image'
import ShareButton from '../ShareButton'
import PostBody from './PostBody'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props) {
  const { preview, loading, morePosts, post, settings } = props

  const slug = post?.slug
  const posts = morePosts

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <RootStyle>
        <Container>
          <Image
            alt="hero"
            src={post.coverImage.asset.url}
            sx={{ borderRadius: 2 }}
          />
          <Breadcrumbs
            sx={{ my: 3, mb: 2 }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'News and Trends', href: '/news-and-trends' },
              { name: post.title },
            ]}
          />
        </Container>
        <Divider
          sx={{
            mb: { xs: 6 },
          }}
        />
        <Container>
          <Grid container spacing={{ md: 8 }} justifyContent={{ md: 'center' }}>
            <Grid item xs={12} md={8}>
              <Stack
                spacing={3}
                sx={{
                  pb: 6,
                  textAlign: 'left',
                  pt: { xs: 6, md: 5 },
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                  {post.length + ' minutes read'}
                </Typography>
                <Typography variant="h2" component="h1">
                  {post.title}
                </Typography>
                <Typography variant="h5">{post.excerpt}</Typography>
              </Stack>
              <Divider />
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={1.5}
                sx={{ py: 3 }}
              >
                <Avatar
                  src={post.author.picture.asset.url}
                  sx={{ width: 48, height: 48 }}
                />
                <Stack spacing={0.5} flexGrow={1}>
                  <Typography variant="subtitle2">
                    {post.author.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary' }}
                  >
                    {fDate(post.date, 'MM/dd/yyyy p')}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <ShareButton />
                </Stack>
              </Stack>
              <Divider sx={{ mb: 6 }} />
              <PostBody content={post.content} />
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                sx={{ my: 6 }}
              >
                <Typography variant="subtitle2" sx={{ mr: 1 }}>
                  Tags:
                </Typography>
                {post.tags.map((tag) => (
                  <Chip key={tag} size="small" label={tag} sx={{ m: 0.5 }} />
                ))}
              </Stack>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Typography variant="subtitle2" sx={{ mr: 1 }}>
                  Share:
                </Typography>
                <SocialsButton initialColor simple={false} />
              </Stack>

              <Divider sx={{ mt: 8 }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogSidebar
                recentPosts={{
                  list: posts.slice(0, 5),
                  path: '/news-and-trends',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </>
  )
}
