import type { Metadata } from 'next'
import { BlogsQueryProvider } from '@/components/providers/blogs-query-provider'
import { BlogDetailClient } from './blog-detail-client'

export const metadata: Metadata = {
    title: 'Blog | Aurora Tech',
    openGraph: {
        type: 'article',
        url: 'https://auroratech.me/blogs',
        title: 'Blog | Aurora Tech',
        images: [{ url: '/others/favicon.png', width: 512, height: 512, alt: 'Aurora Tech Logo' }],
    },
    twitter: {
        title: 'Blog | Aurora Tech',
        site: 'https://auroratech.me/blogs',
        images: [{ url: '/others/favicon.png', alt: 'Aurora Tech Logo' }],
        card: 'summary_large_image',
    },
}

export default async function page({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>
}) {
    const { slug, locale } = await params
    const safeLocale = locale === 'ar' ? 'ar' : 'en'

    return (
        <BlogsQueryProvider>
            <BlogDetailClient slug={slug} locale={safeLocale} />
        </BlogsQueryProvider>
    )
}
