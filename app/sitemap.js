import {
  getAllPageSlugs,
  getAllProjectSlugs,
  getAllPostSlugs,
  getAllServiceSlugs,
} from "../lib/sanity.client";
export default async function sitemap() {
  const sitemap = [];
  const pages = await getAllPageSlugs();
  const services = await getAllServiceSlugs();
  const projects = await getAllProjectSlugs();
  const posts = await getAllPostSlugs();

  pages.forEach((page) => {
    let object = {};
    object.lastModified = new Date();
    if (page.slug === "/") {
      object.url = `${process.env.LIVE_DOMAIN}`;
    } else {
      object.url = `${process.env.LIVE_DOMAIN}/${page.slug}`;
    }

    sitemap.push(object);
  });
  services.forEach((page) => {
    let object = {};
    object.lastModified = new Date();
    if (page.slug === "/") {
      object.url = `${process.env.LIVE_DOMAIN}`;
    } else {
      object.url = `${process.env.LIVE_DOMAIN}/${page.slug}`;
    }

    sitemap.push(object);
  });
  projects.forEach((page) => {
    let object = {};
    object.lastModified = new Date();

    object.url = `${process.env.LIVE_DOMAIN}/projects/${page.slug}`;

    sitemap.push(object);
  });
  posts.forEach((page) => {
    let object = {};
    object.lastModified = new Date();

    object.url = `${process.env.LIVE_DOMAIN}/news-and-trends/${page.slug}`;

    sitemap.push(object);
  });
  return sitemap;
}
