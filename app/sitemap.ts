import { MetadataRoute } from 'next';
import { PROJECTS, JOURNAL_POSTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://houseofmeda.com';

  const staticRoutes = [
    '',
    '/work',
    '/services',
    '/process',
    '/about',
    '/journal',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = PROJECTS.map((proj) => ({
    url: `${baseUrl}/work/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const journalRoutes = JOURNAL_POSTS.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}

