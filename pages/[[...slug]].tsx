import Layout from "components/layout/Layout";
import RenderSections from "components/layout/RenderSections"
import { getAllPageSlugs, getPageBySlug } from "lib/sanity.client"
// next
import Head from 'next/head';
import { slugParamToPath } from "utils/urls"

export default function Page(props) {
  const { content } = props
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>

  
                  <Layout>
                    {content && <RenderSections sections={content}  />}
                  </Layout>
  
  </>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = slugParamToPath(params?.slug)

  let data;
  let data2;

  data = await getPageBySlug(slug)
  data2 = await getAllPageSlugs()
  let page = data2.find(slug => slug.slug == data.slug)
  if (!page) {
    return {
      notFound:true
    }
  }
  

  return {
    props: data || {},
  }
}
export const getStaticPaths = async () => {
  const slugs = await getAllPageSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/${slug}`) || [],
    fallback: false,
  }
}