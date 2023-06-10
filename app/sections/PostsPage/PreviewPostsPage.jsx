'use client';

import { usePreview } from '../../../lib/sanity.preview';
import { postBySlugQuery } from '../../../lib/sanity.queries';
import PostsPage from './PostsPage';

export default function PreviewPostsPage({ slug, morePosts }) {
  const query = postBySlugQuery;
  const post = usePreview(null, query, { slug });

  return <PostsPage post={post} morePosts={morePosts} />;
}
