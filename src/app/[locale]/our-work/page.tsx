import type { Metadata } from 'next'
import { CaseStudiesClient } from './case-studies-client'

export const metadata: Metadata = {
    title: 'Our Work | Aurora Tech',
    openGraph: {
        type: 'website',
        url: 'https://auroratech.me/our-work',
        title: 'Our Work | Aurora Tech',
        images: [{ url: '/others/favicon.png', width: 512, height: 512, alt: 'Aurora Tech Logo' }],
    },
    twitter: {
        title: 'Our Work | Aurora Tech',
        site: 'https://auroratech.me/our-work',
        images: [{ url: '/others/favicon.png', alt: 'Aurora Tech Logo' }],
        card: 'summary_large_image',
    },
}

export default function page() {
    return <CaseStudiesClient />
}
