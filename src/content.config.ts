import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const catalog = defineCollection({
  loader: glob({ base: './src/content/catalog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    parent: z.string().optional(),
    icon: z.string().optional(),
    sort: z.number().default(0),
    hidden: z.boolean().default(false),
    oldId: z.number().optional(),
  }),
});

export const collections = { catalog };
