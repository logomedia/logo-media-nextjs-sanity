/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.jsx` route
 */
import {
  CogIcon,
  BlockContentIcon,
  CodeBlockIcon,
  DocumentsIcon,
} from "@sanity/icons";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { media } from "sanity-plugin-media";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import Iframe from "sanity-plugin-iframe-pane";

const title = "Logo Media";
const baseURL = window?.location.origin;

const defaultDocumentNode = (S, { schemaType }) => {
  const subpath =
    schemaType === "project"
      ? "projects/"
      : schemaType === "post"
      ? "news-and-trends/"
      : schemaType === "service"
      ? "services/"
      : "";

  return S.document().views([
    S.view.form(),

    S.view
      .component(Iframe)
      .options({
        url: (doc) =>
          doc?.slug?.current === "/"
            ? `${baseURL}/api/preview`
            : `${baseURL}/${subpath}${doc?.slug?.current}`,
      })
      .title("Preview"),
  ]);
};
function MyLogo(props) {
  // LogoProps includes the title from project config by default
  const { renderDefault, title } = props;
  // Overwrite the value of `title` after spreading the props object
  return renderDefault({
    ...props,
    title: (
      <img
        src="https://cdn.sanity.io/images/kgp6clwy/production/da21f1973a1e01a714423f2ac5328ae497ad4475-78x19.svg"
        style={{ height: "24px" }}
      />
    ),
  });
}
export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  title,
  schema,
  studio: {
    components: {
      logo: MyLogo,
    },
  },
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .icon(CogIcon)
              .title("Site Settings & Navigation")
              .child(
                S.list()
                  .title("Settings")
                  .items([
                    S.documentListItem().id("settings").schemaType("settings"),
                    S.documentTypeListItem("menus"),
                  ])
              ),
            S.divider(),
            S.listItem()
              .icon(DocumentsIcon)
              .title("Pages")
              .child(
                S.list()
                  .title("Pages")
                  .items([
                    S.documentTypeListItem("page"),
                    S.documentTypeListItem("service"),
                    S.documentTypeListItem("project"),
                  ])
              ),
            S.listItem()
              .icon(BlockContentIcon)
              .title("Blog Content")
              .child(
                S.list()
                  .title("Blogs")
                  .items([
                    S.documentTypeListItem("author"),
                    S.documentTypeListItem("post"),
                  ])
              ),
            S.documentTypeListItem("client"),
            S.documentTypeListItem("partner"),
            S.documentTypeListItem("review"),
          ]),

      defaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    vercelDeployTool(),
  ],
});
