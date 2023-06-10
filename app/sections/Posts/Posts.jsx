import { getAllPosts } from '../../../lib/sanity.client';

import AllPosts from './AllPosts';
import PreviewAllPosts from './PreviewAllPosts';
import PreviewSuspense from '../../components/PreviewSuspense';
import LoadingPreview from '../../components/LoadingPreview';

// ----------------------------------------------------------------------

export default async function Posts({ preview }) {
  const posts = await getAllPosts();

  if (preview) {
    return (
      <PreviewSuspense fallback={<LoadingPreview />}>
        <PreviewAllPosts />
      </PreviewSuspense>
    );
  }

  return <AllPosts posts={posts} />;
}
