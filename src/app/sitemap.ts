import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = 'https://auroratech.me'

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
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            priority: 1,
        },
    ]
}
