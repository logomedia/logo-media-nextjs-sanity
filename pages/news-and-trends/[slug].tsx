import Layout from 'components/layout/Layout'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { Post, settingsQuery } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { ArticleJsonLd, BreadcrumbJsonLd, LogoJsonLd } from 'next-seo'

import PostPage from '../../components/blog-components/PostPage'

interface PageProps {
  post: Post
  morePosts: Post[]
  settings?: any
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props) {
  const { post, morePosts, settings } = props
  const { asPath } = useRouter()
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://logo.media${asPath}`}
        titleTemplate="%s | Logo Media"
        themeColor="#540e6f"
        openGraph={{
          url: `https://logo.media${asPath}`,
          title: post.title,
          description: post.excerpt,
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: [post.author.name],
            tags: post.tags,
          },
          images: [
            {
              url: post.coverImage.asset.url,
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
          site: '@@Logo__Media',
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={'https://logo.media/news-and-trends/' + post.slug}
        title={post.title}
        images={[post.coverImage.asset.url]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={post.author.name}
        description={post.excerpt}
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
            item: 'https://logo.media/news-and-trends',
          },
          {
            position: 3,
            name: post.title,
            item: 'https://logo.media/news-and-trends/' + post.slug,
          },
        ]}
      />
      <LogoJsonLd
        logo="https://cdn.sanity.io/images/kgp6clwy/production/d2f37088c876a1ca329a045f1c291bced0e62f79-92x53.svg"
        url="https//logo.media"
      />
      <Layout siteSettings={settings}>
        <PostPage post={post} morePosts={morePosts} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { params = {} } = ctx

  const [{ post, morePosts }] = await Promise.all([
    getPostAndMoreStories(params.slug),
  ])
  const settings = await getSettings(settingsQuery)
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
      settings: settings,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/news-and-trends/${slug}`) || [],
    fallback: false,
  }
}
