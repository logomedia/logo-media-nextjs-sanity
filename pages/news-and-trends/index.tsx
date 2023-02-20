import { Container,Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import BlogFeaturedPosts from 'components/blog-components/BlogFeaturedPosts';
import BlogPostList from 'components/blog-components/BlogPostList';
import Layout from "components/layout/Layout";
import {
  getAllPosts,
} from 'lib/sanity.client'

import { Page } from '../../components';
import { HEADER_DESKTOP_HEIGHT,HEADER_MOBILE_HEIGHT } from '../../config';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}))

export default function NewsAndTrends({posts}){
    return (
      <Layout>
        <RootStyle>
          <BlogFeaturedPosts post={posts[0]} />
          <Container
            sx={{
              mt: { xs: 4, md: 10 },
            }}
          >
            <Grid container spacing={{ md: 4 }}>
              <Grid item xs={12}>
                <BlogPostList posts={posts} />
              </Grid>
            </Grid>
          </Container>
        </RootStyle>
      </Layout>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()

  return {
    props: {
      posts: posts,
    },
  };
}