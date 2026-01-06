import { defineCollection, z } from "astro:content";

export const collections = {
  resources: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.array(z.string()).optional(),
      image: z
        .object({
          url: z.string(),
          alt: z.string(),
        })
        .optional(),
    }),
  }),
};
