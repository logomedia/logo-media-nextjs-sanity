import Container from './BlogContainer'
import BlogHeader from './BlogHeader'
import Layout from './BlogLayout'
import HeroPost from './HeroPost'
import IndexPageHead from './IndexPageHead'
import MoreStories from './MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Head>
        <IndexPageHead settings={settings} />
      </Head>
      <Layout preview={preview} loading={loading}>
        <Container>
          
        </Container>
      </Layout>
    </>
  )
}
