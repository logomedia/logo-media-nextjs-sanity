import Layout from 'components/layout/Layout'
import RenderSections from 'components/layout/RenderSections'
import {
  getAllPageSlugs,
  getAllPosts,
  getAllProjects,
  getPageBySlug,
  getSettings,
} from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'
import { useRouter } from 'next/router'
// next
import { LocalBusinessJsonLd, LogoJsonLd, NextSeo } from 'next-seo'
import { slugParamToPath } from 'utils/urls'

export default function Page(props) {
  const { data, projects, posts, settings } = props
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
      {data.slug === '/' || data.slug === '/contact' ? (
        <LocalBusinessJsonLd
          type="ProfessionalService"
          id="https://logo.media"
          name="Logo Media"
          description={data.description}
          url="https://logo.media"
          telephone="+13053172807"
          email="info@logo.media"
          address={{
            streetAddress: '500 SW 19th Rd',
            addressLocality: 'Miami',
            addressRegion: 'Fl',
            postalCode: '33129',
            addressCountry: 'US',
          }}
          keywords={[
            'Web Designer',
            'Ecommerce Agency',
            'Web Developer',
            'Shopify Agency',
          ]}
          logo="https://cdn.sanity.io/images/kgp6clwy/production/d2f37088c876a1ca329a045f1c291bced0e62f79-92x53.svg"
          images={[data.ogImage.asset.url]}
          priceRange="$1000+"
          openingHours={[
            {
              opens: '08:00',
              closes: '20:00:00',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
            },
          ]}
          rating={{
            ratingValue: '5.0',
            ratingCount: '79',
          }}
        />
      ) : (
        ''
      )}
      <Layout siteSettings={settings}>
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
  const settings = await getSettings()
  return {
    props: {
      data: data || {},
      projects: projects,
      posts: posts,
      settings: settings,
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
