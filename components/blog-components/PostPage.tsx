
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import { styled } from '@mui/material/styles';
import { Grid, Chip, Stack, Divider, Container, Typography } from '@mui/material';
// layouts
import Layout from '../../../src/layouts';
// components
import { Breadcrumbs, SocialsButton,  Page,  } from '../../components';
// sections
import {
  BlogSidebar,
  BlogAuthorInfo,
  BlogPostHero,
  BlogLatestPosts,
  BlogFeaturedPosts,
  BlogTrendingTopics,
  BlogPostList

} from '../../components/sections/blog';
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../config';
import PostBody from './PostBody';
import { PortableText } from '@portabletext/react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props

  const slug = post?.slug
  const posts = []

  if (!slug && !preview) {
    notFound()
  }

  return (
   
      <RootStyle>
      <BlogPostHero post={post} /> 
      <Container>
          <Breadcrumbs
            sx={{ my: 3 }}
            links={[
              { name: 'Home', href: '/' },
              { name: 'News and Trends', href: '/news-and-trends' },
              { name: post.title },
            ]}
          />
        </Container>
        <Divider
          sx={{
            mb: { xs: 6, md: 10 },
          }}
        />
        <Container>
          <Grid container spacing={{ md: 8 }}>
            <Grid item xs={12} md={8}>
              
                <PostBody content={post.content}/>
                <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ my: 6 }}>
                <Typography variant="subtitle2" sx={{ mr: 1 }}>
                  Tags:
                </Typography>
                {post.tags.map((tag) => (
                  <Chip key={tag} size="small" label={tag} sx={{ m: 0.5 }} onClick={() => {}} />
                ))}
              </Stack>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Typography variant="subtitle2" sx={{ mr: 1 }}>
                  Share:
                </Typography>
                <SocialsButton initialColor  simple={false} />
              </Stack>
              
            </Grid>
            <Grid item xs={12} md={4}>
              <BlogSidebar
                author={post.author}
                recentPosts={{
                  list: posts.slice(-4),
                  path: '/travel/blog',
                }}
               
              />
            </Grid>
          </Grid>
        </Container>
        

       

        
        
      </RootStyle>
    
  );
}
