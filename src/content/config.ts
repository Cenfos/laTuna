import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    image: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { posts };
