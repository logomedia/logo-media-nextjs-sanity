import Layout from 'components/layout/Layout'
import { getAllPostsSlugs, getPostAndMoreStories } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import PostPage from '../../components/blog-components/PostPage'

interface PageProps {
  post: Post
  morePosts: Post[]
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function ProjectSlugRoute(props: PageProps) {
  const { post, morePosts } = props
  const { asPath } = useRouter

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`https://logo.media${asPath}`}
        titleTemplate="%s | Logo Media"
        openGraph={{
          url: `https://logo.media${asPath}`,
          title: post.title,
          description: post.description,
          images: [
            {
              url: post.coverImage.asset.url,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: ' Logo Media',
        }}
        twitter={{
          handle: '@Logo__Media',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
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

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      morePosts,
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
