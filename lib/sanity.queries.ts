import { groq } from 'next-sanity'
import { string } from 'yup'

const postFields = groq`
  _id,
  title,
  length,
  date,
  excerpt,
  coverImage{..., asset->},
  "slug": slug.current,
  "author": author->{name, picture{...,asset->}},
  tags,
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
  coverImage{..., asset->},
  date,
  images[]{...,asset->},
  "slug": slug.current,
  tags,
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

export const projectQuery = groq`
*[_type == "project"] | order( _updatedAt desc) {
  ${projectFields}
}`

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
export const projectAndMoreProjectsQuery = groq`
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    ${projectFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`
export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const projectBySlugQuery = groq`
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
export interface Project {
  _id: string
  name?: string
  logo?: any
  description?: string
  website?: string
  brief?: string
  scope?: string
  results?: string
  coverImage?: any
  date?: sting
  images?: any
  slug?: any
  tags?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
