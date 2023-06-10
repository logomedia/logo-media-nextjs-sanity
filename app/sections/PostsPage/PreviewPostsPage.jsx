'use client';

import { usePreview } from '../../../lib/sanity.preview';
import PostsPage from './PostsPage';

export default function PreviewPostsPage({ query, queryParams, morePosts }) {
  const post = usePreview(null, query, queryParams);

  console.log(post);
  console.log('first');

  return (
    <>
      <div style={{ padding: '80px 10px' }}>Preview Post</div>
      <PostsPage post={post} morePosts={morePosts} />
    </>
  );
}
