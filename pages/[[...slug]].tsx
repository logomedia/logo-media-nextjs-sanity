import Layout from 'components/layout/Layout'
import RenderSections from 'components/layout/RenderSections'
import {
  getAllPageSlugs,
  getAllPosts,
  getAllProjects,
  getPageBySlug,
} from 'lib/sanity.client'
import { useRouter } from 'next/router'
// next
import { LogoJsonLd, NextSeo } from 'next-seo'
import { slugParamToPath } from 'utils/urls'

export default function Page(props) {
  const { data, projects, posts } = props
  const content = data.content
  const { asPath } = useRouter()

  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://logo.media${asPath}`}
        titleTemplate="%s | Logo Media"
        themeColor="#540e6f"
        openGraph={{
          url: `https://logo.media${asPath}`,
          title: data.title,
          description: data.description,
          type: 'website',
          images: [
            {
              url: data.ogImage.asset.url,
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
      <LogoJsonLd
        logo="https://cdn.sanity.io/images/kgp6clwy/production/d2f37088c876a1ca329a045f1c291bced0e62f79-92x53.svg"
        url="https//logo.media"
      />
      <Layout>
        {content && (
          <RenderSections
            sections={content}
            projects={projects}
            posts={posts}
          />
        )}
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = slugParamToPath(params?.slug)

  let data
  let data2

  data = await getPageBySlug(slug)
  data2 = await getAllPageSlugs()
  let page = data2.find((slug) => slug.slug == data.slug)
  if (!page) {
    return {
      notFound: true,
    }
  }
  const projects = await getAllProjects()
  const posts = await getAllPosts()

  return {
    props: {
      data: data || {},
      projects: projects,
      posts: posts,
    },
  }
}
export const getStaticPaths = async () => {
  const slugs = await getAllPageSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/${slug}`) || [],
    fallback: false,
  }
}
