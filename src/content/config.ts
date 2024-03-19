import { defineCollection, z } from "astro:content";

const article = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      ogImage: z.string().optional(),
    }),
});

export const collections = { article };
