// @mui
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

//
import BlogPostItem from './BlogPostItem'

// ----------------------------------------------------------------------

export default function BlogPostList({ posts }) {
  const pageSize = 6
  const [startIndex, setStartIndex] = useState(pageSize + 1)
  const [endIndex, setEndIndex] = useState(pageSize * 2 + 1)
  const [items, setItems] = useState(posts.slice(1, startIndex))
  const [newItems, setNewItems] = useState([])

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight) {
      setStartIndex((startIndex) => startIndex + 6)
      setEndIndex((endIndex) => endIndex + 6)
      setNewItems(posts.slice(startIndex, endIndex))
      setItems((items) => [...items, ...newItems])
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        {items.map((post) => (
          <BlogPostItem key={post.slug} post={post} />
        ))}
      </Box>
    </>
  )
}
