
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import { styled } from '@mui/material/styles';
import { Grid, Chip, Stack, Divider, Container, Typography } from '@mui/material';
// layouts
import Layout from '../../../src/layouts';
// components
import { Breadcrumbs,  Markdown,  Page,  } from '../../components';
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
      

       

        
        
      </RootStyle>
    
  );
}
