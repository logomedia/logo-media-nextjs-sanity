import { groq } from "next-sanity"
const pageFields = groq`
  _id,
  title,
  "slug": slug.current,
  content[]{
    ...,
    icons[]{ ..., icon{..., asset->}},
    ctas[]{..., route->},
    image{...,asset->},
    image1{...,asset->},
    image2{...,asset->},
    image3{...,asset->},
    image4{...,asset->},
    image5{...,asset->},
    image6{...,asset->},
    image7{...,asset->},
    plans[]{..., icons[]{...,icon{..., asset->}}},
    plans[]{..., image{..., asset->}},
    logos[]{...,asset->},
    cards[]{..., icons[]{...,icon{..., asset->}}},
    cards[]{..., icon{..., asset->}, image{..., asset->}},    
    addTestimonial[]{..., image{..., asset->}},
    info[]{..., icon{..., asset->}},
    includedServicesList[]{..., image{..., asset->}},
    imagesArray[]{...,asset->},
  },  
  description,
  ogImage{asset->},
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
const postFields = groq`
  _id,
  title,
  length,
  date,
  excerpt,
  coverImage{..., asset->},
  content[],
  "slug": slug.current,
  "author": author->{name, picture{...,asset->}},
  tags,
`

export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields}
}
`
export const homepageQuery = groq`
*[_type == "page" && slug.current == '/'][0] {
  ${pageFields}
}
`
export const pageQuery = groq`
*[type == "page" && slug !'projects'] {${pageFields}}`

export const settingsQuery = groq`*[_type == "settings"][0]
{..., 
  logo {asset->{extension, url}},
  mainMenu[]{..., link->{...,menuImage{..., asset->},links[]{..., link->{...,menuImage{..., asset->},links[]{...,link->}}}}},
  footerMenu[]{..., link->{...,menuImage{..., asset->},links[]{..., link->{...,menuImage{..., asset->},links[]{...,link->}}}}},
  mainMenuCTAs[]{..., route->},
}`
export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`
export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`
export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`
export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
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
