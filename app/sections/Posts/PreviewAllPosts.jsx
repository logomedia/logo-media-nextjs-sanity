import { usePreview } from '../../../lib/sanity.preview';
import { postsQuery } from '../../../lib/sanity.queries';

import AllPosts from './AllPosts';

export default function PreviewAllPosts() {
  const query = postsQuery;
  const posts = usePreview(null, query);

  return <AllPosts posts={posts} />;
}
