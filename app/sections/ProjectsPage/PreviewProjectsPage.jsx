'use client';

import { usePreview } from '../../../lib/sanity.preview';
import ProjectsPage from './ProjectsPage';

export default function PreviewProjectsPage({ query, queryParams }) {
  const project = usePreview(null, query, queryParams);

  return (
    <>
      <div>PreviewProjectsPage</div>

      <ProjectsPage project={project} />
    </>
  );
}
