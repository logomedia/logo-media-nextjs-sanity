/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { component, deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'
import authorType from 'schemas/author'
//import block components
import cta from 'schemas/blocks/cta'
import icon from 'schemas/blocks/icon'
import navItem from 'schemas/blocks/navItem'
import clientType from 'schemas/client'
import menus from 'schemas/menus'
import pageType from 'schemas/page'
import partnerType from 'schemas/partner'
import postType from 'schemas/post'
import projectType from 'schemas/project'
//import section components
import hero from 'schemas/sections/hero'
import posts from 'schemas/sections/posts'
import projects from 'schemas/sections/projects'
import settingsType from 'schemas/settings'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      authorType,
      menus,
      clientType,
      pageType,
      partnerType,
      postType,
      projectType,
      settingsType,
      hero,
      posts,
      projects,
      cta,
      icon,
      navItem,
    ],
  },
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings & Navigation')
              .child(
                S.list()
                  .title('Settings')
                  .items([
                    S.documentListItem().id('settings').schemaType('settings'),
                    S.documentTypeListItem('menus'),
                  ])
              ),
            S.divider(),
            S.documentTypeListItem('page'),
            S.listItem()
              .title('Blog Content')
              .child(
                S.list()
                  .title('Blogs')
                  .items([
                    S.documentTypeListItem('author'),
                    S.documentTypeListItem('post'),
                  ])
              ),
            S.listItem()
              .title('Projects & Clients')
              .child(
                S.list()
                  .title('Content')
                  .items([
                    S.documentTypeListItem('project'),
                    S.documentTypeListItem('client'),
                  ])
              ),
            S.documentTypeListItem('partner'),
          ]),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
})
