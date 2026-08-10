import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const explorationLog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/exploration-log' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    status: z.enum(['note', 'working', 'reflection', 'release']).default('note'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { explorationLog };
