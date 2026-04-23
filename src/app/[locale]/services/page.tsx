import { ServicesSection } from '@/components/sections/services-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services | Aurora Tech',
    openGraph: {
        type: 'website',
        url: 'https://auroratech.me/services',
        title: 'Services | Aurora Tech',
        images: [{ url: '/others/favicon.png', width: 512, height: 512, alt: 'Aurora Tech Logo' }],
    },
    twitter: {
        title: 'Services | Aurora Tech',
        site: 'https://auroratech.me/services',
        images: [{ url: '/others/favicon.png', alt: 'Aurora Tech Logo' }],
        card: 'summary_large_image',
    },
    keywords: ['Services', 'Aurora Tech', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Maintenance'],
}

export default function page() {
    return (
        <main className='pt-28 md:pt-32 overflow-x-hidden'>
            <ServicesSection />
        </main>
    )
}
