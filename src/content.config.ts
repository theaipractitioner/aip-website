import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    excerpt: z.string().max(200),
    category: z.enum([
      "AI Basics",
      "Professional Practice",
      "Case Study",
      "Tools & Techniques",
    ]),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
