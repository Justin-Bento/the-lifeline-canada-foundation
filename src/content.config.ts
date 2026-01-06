import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

// 4. Define your collection(s)
const resources = defineCollection({
  /* ... */
});
const patternInterrupts = defineCollection({
  /* ... */
});

export const collections = { resources, patternInterrupts };
