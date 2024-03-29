import { groq } from "next-sanity"
const pageFields = groq`
  _id,
  title,
  metaTitle,
  schemaDescription,
  keywords,
  "slug": slug.current,
  description,
  ogImage,
  content[]{
    ...,
    image{ asset->{..., metadata}},
    ctas[]{..., route->},
    cta{..., route->},
    plans[]{..., cta{..., route->}},
    logos[]{...,logo{..., asset->}},
  },  
`
const projectFields = groq`
  _id,
  name,
  logo{...,asset->},
  description,
  website,
  brief,
  scope[]{...,asset->},
  results,
  coverImage,
  date,
 
  "slug": slug.current,
  tags,
`
const postFields = groq`
  _id,
  title,
  length,
  date,
  excerpt,
  coverImage,
  content[],
  "slug": slug.current,
  "author": author->{name, picture},
  tags,
`
const recentPostFields = groq`
  _id,
  title,
  length,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields}
}
`
export const serviceBySlugQuery = groq`
*[_type == "service" && slug.current == $slug][0] {
  ${pageFields}
}
`
export const homepageQuery = groq`
*[_type == "page" && slug.current == '/'][0] {
  ${pageFields}
}
`

export const pageQuery = groq`
*[type == "page"]{${pageFields}}`
export const serviceQuery = groq`
*[type == "service"]{${pageFields}}`

export const settingsQuery = groq`*[_type == "settings"][0]
{..., 
  logo {asset->{extension, url}},
  logoDark {asset->{extension, url}},
  mainMenu[]{..., link->{...,menuImage{..., asset->},links[]{..., link->{...,menuImage{..., asset->},links[]{...,link->}}}}},
  footerMenu[]{..., link->{...,menuImage{..., asset->},links[]{..., link->{...,menuImage{..., asset->},links[]{...,link->}}}}},
  mainMenuCTAs[]{..., route->},
}`
export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)]| order(date desc, _updatedAt desc)[].slug.current
`
export const serviceSlugsQuery = groq`
*[_type == "page" && defined(slug.current)]| order(date desc, _updatedAt desc)[].slug.current
`
export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)]| order(date desc, _updatedAt desc)[].slug.current
`
export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`
export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)]| order(date desc, _updatedAt desc)[].slug.current
`
export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const postsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const projectQuery = groq`
*[_type == "project"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`
export const recentPostsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc)[0..10] {
  ${recentPostFields}
}`
export const recentProjectsQuery = groq`
*[_type == "project"] | order( _updatedAt desc)[0..8] {
  ${projectFields}
}`
export const reviewsQuery = groq`
*[_type == "review"] | order(date desc, _updatedAt desc) `

export const partnersQuery = groq`
*[_type == "partner"] | order(date asc, _updatedAt asc) `
