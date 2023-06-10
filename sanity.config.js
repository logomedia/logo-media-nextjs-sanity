/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.jsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media } from 'sanity-plugin-media';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import Iframe from 'sanity-plugin-iframe-pane';

const title = 'Logo Media';

const defaultDocumentNode = (S) => {
  return S.document().views([
    S.view.form(),

    S.view
      .component(Iframe)
      .options({
        url: 'http://localhost:3000/api/preview',
      })
      .title('Preview'),
  ]);
};

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title,
  schema,
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
                    S.documentTypeListItem('action'),
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

      defaultDocumentNode: defaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    vercelDeployTool(),
  ],
});
