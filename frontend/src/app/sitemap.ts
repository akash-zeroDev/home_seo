import { MetadataRoute } from 'next';
// Import your SEO data matrix
import { locations, subjects } from '../lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use your live Vercel URL here so Google accepts it
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://delta-home-tuitions.vercel.app';

  // 1. Define your base static routes
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

  // 2. Dynamically generate the 1,500+ SEO pages
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  // If your arrays are loaded correctly, this will create a link for every combination
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

  // 3. Combine and return the massive list to Google
  return [...staticRoutes, ...dynamicRoutes];
}