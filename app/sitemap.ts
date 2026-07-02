import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/blog';
import { getSortedDocsData } from '@/lib/docs';
import { siteConfig } from '@/lib/seo';

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getSortedPostsData();
    const docs = getSortedDocsData();

    const blogRoutes = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const docRoutes = docs.map((doc) => ({
        url: `${BASE_URL}/docs/${doc.slug}`,
        lastModified: new Date().toISOString(), // Docs are usually kept up to date
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const staticRoutes = [
        '',
        '/blog',
        '/about',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
        priority: route === '' ? 1 : 0.75,
    }));

    return [...staticRoutes, ...blogRoutes, ...docRoutes];
}
