import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { navigation } from "../data/portfolio";
import { projects } from "../data/projects";
import { publicationDate } from "../utils/date";

const escapeXML = (value: string) =>
  value.replace(
    /[<>&"']/g,
    (char) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]!,
  );

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error("Configure site in astro.config.mjs");
  const paths = [
    "/",
    ...navigation.map((item) => item.href),
    "/contacto/",
    ...projects.flatMap((project) =>
      project.details ? [project.details] : [],
    ),
  ];
  const posts = await getCollection("blog");
  const entries = [
    ...[...new Set(paths)].map(
      (path) => `<url><loc>${escapeXML(new URL(path, site).href)}</loc></url>`,
    ),
    ...posts.map(
      (post) =>
        `<url><loc>${escapeXML(new URL(`/blog/${post.id.split("/").map(encodeURIComponent).join("/")}/`, site).href)}</loc><lastmod>${publicationDate(post.data).toISOString()}</lastmod></url>`,
    ),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
