import Container from 'blog-components/BlogContainer'
import BlogHeader from 'blog-components/BlogHeader'
import Layout from 'blog-components/BlogLayout'
import MoreStories from 'blog-components/MoreStories'
import PostBody from 'blog-components/PostBody'
import PostHeader from 'blog-components/PostHeader'
import PostPageHead from 'blog-components/PostPageHead'
import PostTitle from 'blog-components/PostTitle'
import SectionSeparator from 'blog-components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: Post
  morePosts: Post[]
  settings: Settings
}

const NO_POSTS: Post[] = []

export default function PostPage(props: PostPageProps) {
  const { preview, loading, morePosts = NO_POSTS, post, settings } = props
  const { title = demo.title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <Head>
        <PostPageHead settings={settings} post={post} />
      </Head>

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} level={2} />
          {preview && !post ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
