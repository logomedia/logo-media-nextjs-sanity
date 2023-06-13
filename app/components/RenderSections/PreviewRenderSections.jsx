'use client';

import { usePreview } from '../../../lib/sanity.preview';
import {
  homepageQuery,
  pageBySlugQuery,
  recentPostsQuery,
  recentProjectsQuery,
} from '../../../lib/sanity.queries';

import RenderSections from './RenderSections';

export default function PreviewRenderSections(props) {
  const { home, page, preview } = props;

  // home content
  const homeData = usePreview(null, homepageQuery);
  const homeContent = homeData?.content;

  // [page] sections content
  const pageData = usePreview(null, pageBySlugQuery, { slug: page });
  const pageContent = pageData?.content;

  const projects = usePreview(null, recentProjectsQuery);

  const posts = usePreview(null, recentPostsQuery);

  return (
    <RenderSections
      sections={home ? homeContent : pageContent}
      projects={projects}
      posts={posts}
      preview={preview}
    />
  );
}
