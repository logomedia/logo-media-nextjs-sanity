"use client";

import { usePreview } from "../../../lib/sanity.preview";
import {
  homepageQuery,
  pageBySlugQuery,
  partnersQuery,
  recentPostsQuery,
  recentProjectsQuery,
  reviewsQuery,
  serviceBySlugQuery,
} from "../../../lib/sanity.queries";

import RenderSections from "./RenderSections";

export default function PreviewRenderSections(props) {
  const { home, page, preview, service } = props;

  // home content
  const homeData = usePreview(null, homepageQuery);
  const homeContent = homeData?.content;

  // [page] sections content
  const pageData = page
    ? usePreview(null, pageBySlugQuery, { slug: page })
    : usePreview(null, serviceBySlugQuery, { slug: service });

  const pageContent = pageData?.content;

  const projects = usePreview(null, recentProjectsQuery);
  const reviews = usePreview(null, reviewsQuery);
  const partners = usePreview(null, partnersQuery);
  const posts = usePreview(null, recentPostsQuery);

  return (
    <RenderSections
      sections={home ? homeContent : pageContent}
      partners={partners}
      projects={projects}
      posts={posts}
      preview={preview}
      reviews={reviews}
    />
  );
}
