import Layout from 'components/layout/Layout'
import {
  getAllProjectSlugs,
  getProjectAndMoreProjects,
} from 'lib/sanity.client'
import { Project } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

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
  const { project, moreProjects } = props
  const { asPath } = useRouter()
  return (
    <>
      <NextSeo
        title={project.name}
        description={project.brief}
        canonical={`https://logo.media${asPath}`}
        titleTemplate="%s | Logo Media"
        openGraph={{
          url: `https://logo.media${asPath}`,
          title: project.name,
          description: project.brief,
          type: 'website',
          images: [
            {
              url: project.coverImage.asset.url,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Logo Media',
        }}
        twitter={{
          handle: '@Logo__Media',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <ProjectPage project={project} moreProjects={moreProjects} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { params = {} } = ctx

  const [{ project, moreProjects }] = await Promise.all([
    getProjectAndMoreProjects(params.slug),
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
