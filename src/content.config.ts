import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const discography = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    year: z.number(),
    role: z.string(),        // e.g. "Producer", "Mix Engineer"
    cover: z.string(),       // path to album art
    streamingUrl: z.string().optional(),
  }),
});


export const collections = { blog };
