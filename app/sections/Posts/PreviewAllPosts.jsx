// 'use client';

import { usePreview } from '../../../lib/sanity.preview';
import AllPosts from './AllPosts';

export default function PreviewAllPosts({ query }) {
  const posts = usePreview(null, query);

  return <AllPosts posts={posts} />;
}
