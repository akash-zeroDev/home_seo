import { MetadataRoute } from 'next';
import { locations, subjects } from '../lib/seo-data';

// These two lines are the "Secret Sauce" to fix the 404/General HTTP error
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Re-generate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://delta-home-tuitions.vercel.app';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = [];

  if (locations && subjects) {
    locations.forEach((location) => {
      subjects.forEach((subject) => {
        dynamicRoutes.push({
          url: `${baseUrl}/tutors/${location}/${subject}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.9,
        });
      });
    });
  }

  return [...staticRoutes, ...dynamicRoutes];
}