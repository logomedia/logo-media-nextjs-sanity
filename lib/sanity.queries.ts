import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
const pageFields = groq`
  _id,
  title,
  "slug": slug.current,
  content[]{
    ...,
    heroImage {..., asset->},
    icons[]{ ..., icon{..., asset->}},
    ctas[]{..., route->}
  },  
  description,
  ogImage{asset->},
`

export const settingsQuery = groq`*[_type == "settings"][0]
{..., 
  logo {asset->{extension, url}},
  mainMenu[]{..., link->{...,menuImage{..., asset->},links[]{..., link->{...,menuImage{..., asset->},links[]{...,link->}}}}}
}`

export const menuQuery = groq`*[_type == "settings"][0]
{...,
  mainMenu[]{..., link->{...,links[]{..., link->{...,links[]{...,link->}}}}}
}`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const pageQuery = groq`
*[type == "page"] {${pageFields}}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content[]{..., asset->},
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}
export interface Page {
  _id: string
  title?: string
  ogImage?: any
  description?: string
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
