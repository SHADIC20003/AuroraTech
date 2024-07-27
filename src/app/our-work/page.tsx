import { ProjectsSection } from '@/components/sections/projects-section'
import type { Metadata } from 'next'

const description =
    'Latin is a beauty and fashion brand specializing in lip gloss, and other makeup and beauty products to match their fantastic and stylish brand we decided to make this elegant website for them.'

export const metadata: Metadata = {
    title: 'Our Work | Aurora Tech',
    description,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://auroratech.me/our-work',
        title: 'Our Work | Aurora Tech',
        description,
        images: [
            {
                url: '/others/favicon.png',
                width: 512,
                height: 512,
                alt: 'Aurora Tech Logo',
            },
        ],
    },
    twitter: {
        site: 'https://auroratech.me/our-work',
        images: [
            {
                url: '/others/favicon.png',
                alt: 'Aurora Tech Logo',
            },
        ],
        card: 'summary_large_image',
    },
    keywords: [
        'Work',
        'Aurora Tech',
        'Web Development',
        'Mobile Development',
        'UI/UX Design',
        'Maintenance',
    ],
}

export default function page() {
    return (
        <main>
            <ProjectsSection />
        </main>
    )
}
