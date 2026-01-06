import { glob, file } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const resources = defineCollection({
  /* ... */
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(["en", "ef"]),
    image: z.object({
      path: z.string(),
      alt: z.string(),
    }),
  }),
});
const pattern_interrupts = defineCollection({
  /* ... */
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pattern-interrupts",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(["en", "ef"]),
    image: z.object({
      path: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { resources, pattern_interrupts };
