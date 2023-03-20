// @mui
import { Box, Pagination } from '@mui/material'
import {useState}
//
import BlogPostItem from './BlogPostItem'

// ----------------------------------------------------------------------

export default function BlogPostList({ posts }) {
  const [items, setItems] = useState(posts.slice(1, 7))
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {items.map((post) => (
          <BlogPostItem key={post.slug} post={post} />
        ))}
      </Box>
    </>
  )
}
