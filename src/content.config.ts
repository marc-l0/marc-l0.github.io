import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // Exact publication time for change notes; older date-only posts remain valid.
    publishedAt: z.string().datetime({ offset: true }).optional(),
    number: z.number(),
  }),
});

export const collections = {
  blog,
};
