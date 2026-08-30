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

/* Policies are converted from the approved .docx on iCloud Drive, at
   `Cowork OS/Business Development/09 Policies`. That document is the source
   of truth — edit it there, take it through the review process, and re-run
   the importer. Never edit a policy here.

   A policy appears on the site only when its file exists in this directory,
   and the footer and index are both built from whatever is present. That is
   deliberate: policies are published one at a time as each reaches v1.0, and
   nothing should link to one that has not. */
const policies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/policies" }),
  schema: z.object({
    title: z.string(),
    policyId: z.string(),
    // Only approved policies belong on the site. A v0.x document is a draft,
    // and a published draft of a Privacy Policy is worse than no page at all.
    version: z.string().regex(/^\d+\.\d+$/),
    effectiveDate: z.coerce.date(),
    nextReview: z.string(),
    owner: z.string(),
    appliesTo: z.string(),
    // Written at import: the documents carry no abstract, and the index needs
    // one line per policy that a reader can actually choose from.
    summary: z.string().max(240),
    group: z.enum(["legal", "how-we-work"]),
    order: z.number(),
  }),
});

export const collections = { blog, policies };
