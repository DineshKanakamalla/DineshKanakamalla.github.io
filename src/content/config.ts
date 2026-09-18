import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      updated: z.date().optional(),
      category: z.enum(['os', 'embedded-linux', 'rtos', 'networking', 'wifi', 'misc']),
      postType: z.enum(['build', 'benchmark', 'debug', 'port', 'deep-dive', 'toolbox']),
      difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
      summary: z.string().max(220),
      hero: image().optional(),

      hardware: z.array(z.string()).min(1),
      tested: z.array(z.string()).min(1),
      repo: z.string().url().optional(),
      bomCost: z.string().optional(),

      tags: z.array(z.string()).default([]),
      series: z.string().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
