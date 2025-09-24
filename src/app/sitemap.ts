import { MetadataRoute } from 'next';
import { BASE_URL, LOCAL_AREAS } from '@/data/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Pages principales
  const mainPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/urgence-degat-eau`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/entreprise`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Pages locales SEO spécifiques (priorité SEO)
  const specificLocalPages = [
    {
      url: `${BASE_URL}/assechement-urgence-lausanne`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Priorité max pour Lausanne
    },
    {
      url: `${BASE_URL}/assechement-urgence-nyon`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/assechement-urgence-vevey`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/assechement-urgence-yverdon`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/assechement-urgence-morges`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95, // QUICK WIN - Priorité maximale
    },
    {
      url: `${BASE_URL}/assechement-urgence-montreux`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/assechement-urgence-gros-de-vaud`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Pages locales SEO pour chaque ville (template dynamique)
  const localPages = LOCAL_AREAS.map((area) => ({
    url: `${BASE_URL}/assechement-urgence-${area.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...specificLocalPages, ...localPages];
}
