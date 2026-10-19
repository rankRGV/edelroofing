// Blog posts (batch 5). One Markdown file per live post in src/content/blog,
// converted from the live Duda posts on 2026-10-18 with
// site-rebuild/tools/parse_blog.py. The file name is the live URL slug (posts
// live at the site root, e.g. /roof-repair-edinburg-rgv-guide).
// Dates: pubDate = live published date. Only add updatedDate when the body
// changes in a real way (project CLAUDE.md "Content Dates").
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string(),
      description: z.string(),
      lang: z.enum(['en', 'es']),
      pubDate: z.coerce.date(),
      modDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().optional(),
      image: image(),
      imageAlt: z.string().default(''),
      schemaHeadline: z.string(),
      twin: z.string().optional(),
      changes: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
