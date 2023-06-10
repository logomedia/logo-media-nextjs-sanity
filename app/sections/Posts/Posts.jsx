// import { draftMode } from 'next/headers';

import { usePreview } from '../../../lib/sanity.preview';

import { getAllPosts } from '../../../lib/sanity.client';
import { postsQuery } from '../../../lib/sanity.queries';

import PreviewSuspense from '../../components/PreviewSuspense';
import AllPosts from './AllPosts';
import PreviewAllPosts from './PreviewAllPosts';

// ----------------------------------------------------------------------

export default async function Posts({ preview }) {
  const posts = await getAllPosts();
  const query = postsQuery;

  // const previewPosts = usePreview(null, query);

  // console.log(previewPosts);

  // const { isEnabled } = draftMode();

  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewAllPosts query={query} />
      </PreviewSuspense>
    );
  }

  return (
    <>
      <AllPosts posts={posts} />
      {/* <PreviewSuspense fallback={<p>Loading...</p>}>
        <PreviewAllPosts query={query} />
      </PreviewSuspense> */}
    </>
  );
}
