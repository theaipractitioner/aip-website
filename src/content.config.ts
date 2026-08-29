import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  // Posts are authored in ~/Documents/Claude Code/aip-content-management as
  // `content/<year>-W<week>/<day>-a-blog.md` and imported from there. That is
  // the source of truth: edit a post there, not here. `slug` in the source
  // becomes this file's name, and `description` becomes `excerpt`.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.coerce.date(),
      excerpt: z.string().max(200),
      category: z.enum([
        "AI Basics",
        "Professional Practice",
        "Case Study",
        "Tools & Techniques",
      ]),
      // Both required, deliberately. A hero image with missing or placeholder
      // alt text is what a screen reader actually announces, so the build
      // should fail rather than let a post ship without it.
      heroImage: image(),
      heroImageAlt: z.string().min(1),
      // 1200x630 crop of the same photo, for og:image. Lives in public/ rather
      // than assets/ because social scrapers need a stable absolute URL that
      // does not change with a content hash.
      shareImage: z.string(),
      tags: z.array(z.string()).default([]),
      readingTime: z.number(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
