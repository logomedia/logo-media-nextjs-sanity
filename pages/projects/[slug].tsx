import Layout from "components/layout/Layout";
import {
  getAllProjectSlugs,
  getProjectAndMoreProjects,
} from 'lib/sanity.client'
import { Project } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'

import ProjectPage from '../../components/project-components/ProjectPage'

interface PageProps {
  project: Project
  moreProjects: Project[]

}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const {  project, moreProjects } = props



  return (
  
    <Layout>
      <ProjectPage project={project} moreProjects={moreProjects}/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
> = async (ctx) => {
  const {  params = {} } = ctx



  const [ { project, moreProjects }] = await Promise.all([
    getProjectAndMoreProjects(params.slug,),
  ])

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
      moreProjects,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllProjectSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/projects/${slug}`) || [],
    fallback: false,
  }
}
