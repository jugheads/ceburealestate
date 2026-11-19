import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title:z.string(), slug:z.string(), hub:z.string().default(''),
    primary_keyword:z.string().default(''), description:z.string().default(''),
    status:z.enum(['draft','review','approved','published']).default('draft'),
    updated:z.string().optional()
  })
});
export const collections = { articles };
