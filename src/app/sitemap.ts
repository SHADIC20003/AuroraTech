import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = 'https://auroratech.me'
    const BASE_WITH_WWW = 'https://www.auroratech.me'

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
    ]
}
