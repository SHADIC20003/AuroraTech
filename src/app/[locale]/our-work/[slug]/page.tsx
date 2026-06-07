import type { Metadata } from 'next'
import { CaseStudiesQueryProvider } from '@/components/providers/case-studies-query-provider'
import { CaseStudyDetailClient } from './case-study-detail-client'

export const metadata: Metadata = {
    title: 'Case Study | Aurora Tech',
    openGraph: {
        type: 'article',
        url: 'https://auroratech.me/our-work',
        title: 'Case Study | Aurora Tech',
        images: [{ url: '/others/favicon.png', width: 512, height: 512, alt: 'Aurora Tech Logo' }],
    },
    twitter: {
        title: 'Case Study | Aurora Tech',
        site: 'https://auroratech.me/our-work',
        images: [{ url: '/others/favicon.png', alt: 'Aurora Tech Logo' }],
        card: 'summary_large_image',
    },
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>
}) {
    const { slug, locale } = await params
    const safeLocale = locale === 'ar' ? 'ar' : 'en'

    return (
        <CaseStudiesQueryProvider>
            <CaseStudyDetailClient slug={slug} locale={safeLocale} />
        </CaseStudiesQueryProvider>
    )
}
