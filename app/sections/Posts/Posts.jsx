// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
//
import PostsList from './PostsList';
import FeaturedPost from './FeaturedPost';

// ----------------------------------------------------------------------

export default function Posts({ posts }) {
  return (
    <>
      {/* <FeaturedPost post={posts[0]} /> */}
      <p>Posts</p>

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            {/* <PostsList posts={posts} /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
