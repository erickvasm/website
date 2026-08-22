import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      description: z.object({
        es: z.string().min(1),
        en: z.string().min(1),
      }),
      image: image(),
      technologies: z.string().min(1),
      url: z.string().url().nullable(),
      github: z.string().nullable(),
      slug: z.string().optional(),
      featured: z.number().min(1).optional(),
    }),
});

const research = defineCollection({
  type: "data",
  schema: z.object({
    type: z.enum(["paper", "template"]),
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.string().optional(),
    slug: z.string().optional(),
    url: z.string().url().optional(),
    authors: z.array(z.string()).optional(),
    venue: z.string().optional(),
    announcementUrl: z.string().url().optional(),
  }),
});

export const collections = {
  portfolio,
  research,
};
