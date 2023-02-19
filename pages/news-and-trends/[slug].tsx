import Layout from "components/layout/Layout";
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
} from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'

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
  const {  post, morePosts, } = props


  return (
  
    <Layout>
        <PostPage post={post} morePosts={morePosts}  />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
> = async (ctx) => {
  const { params = {} } = ctx


  const [ { post, morePosts }] = await Promise.all([
    getPostAndMoreStories(params.slug, ),
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
