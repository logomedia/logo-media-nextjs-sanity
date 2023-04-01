// @mui
import { Box,Pagination } from '@mui/material';

//
import BlogPostItem from './BlogPostItem';

// ----------------------------------------------------------------------


export default function BlogPostList({ posts }) {

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(3, 1fr)',
          },
        }}
      >
        {posts.slice(1, 10).map((post) => (
          <BlogPostItem key={post.slug} post={post} />
        ))}
      </Box>
    </>
  )
}
