'use client';

import { usePreview } from '../../../lib/sanity.preview';
import { projectBySlugQuery } from '../../../lib/sanity.queries';
import ProjectsPage from './ProjectsPage';

export default function PreviewProjectsPage({ slug }) {
  const query = projectBySlugQuery;
  const project = usePreview(null, query, { slug });

  return <ProjectsPage project={project} />;
}
