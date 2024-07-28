import { prisma } from '@/server/db'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const BASE_URL = 'https://auroratech.me'
    const BASE_WITH_WWW = 'https://www.auroratech.me'

    const blogs = await prisma.blog.findMany()

    return [
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${BASE_URL}/our-work`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${BASE_URL}/about-us`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${BASE_WITH_WWW}/`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${BASE_WITH_WWW}/our-work`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${BASE_WITH_WWW}/contact`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${BASE_WITH_WWW}/about-us`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${BASE_WITH_WWW}/services`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${BASE_WITH_WWW}/blogs`,
            lastModified: new Date(),
            priority: 0.9,
        },
        ...blogs.map((blog) => ({
            url: `${BASE_URL}/blog/${blog.id}`,
            lastModified: new Date(),
            priority: 0.8,
        })),
        ...blogs.map((blog) => ({
            url: `${BASE_WITH_WWW}/blog/${blog.id}`,
            lastModified: new Date(),
            priority: 0.8,
        })),
    ]
}
