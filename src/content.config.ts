import { glob, file } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const resources = defineCollection({
  /* ... */
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(["en", "ef"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});
const pattern_interrupts = defineCollection({
  /* ... */
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(["en", "ef"]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { resources, pattern_interrupts };
