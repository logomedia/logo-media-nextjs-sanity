import Layout from 'components/layout/Layout'
import {
  getAllProjectSlugs,
  getProjectAndMoreProjects,
  getSettings,
} from 'lib/sanity.client'
import { Project, settingsQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { BreadcrumbJsonLd, LogoJsonLd, NextSeo } from 'next-seo'

import ProjectPage from '../../components/project-components/ProjectPage'
interface PageProps {
  project: Project
  moreProjects: Project[]
  settings?: any
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props) {
  const { project, moreProjects, settings } = props
  const { asPath } = useRouter()
  return (
    <>
      <NextSeo
        title={project.name}
        description={project.brief}
        canonical={`https://logo.media${asPath}`}
        titleTemplate="%s | Logo Media"
        themeColor="#540e6f"
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
          handle: '@logangelzer',
          site: '@Logo__Media',
          cardType: 'summary_large_image',
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://logo.media',
          },
          {
            position: 2,
            name: 'News and Trends',
            item: 'https://logo.media/projects',
          },
          {
            position: 3,
            name: project.name,
            item: 'https://logo.media/projects/' + project.slug,
          },
        ]}
      />
      <LogoJsonLd
        logo="https://cdn.sanity.io/images/kgp6clwy/production/d2f37088c876a1ca329a045f1c291bced0e62f79-92x53.svg"
        url="https//logo.media"
      />
      <Layout settings={settings}>
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
  const settings = await getSettings(settingsQuery)
  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
      moreProjects,
      settings: settings,
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
