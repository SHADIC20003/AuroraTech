import { AboutSection } from '@/components/sections/about-section'
import type { Metadata } from 'next'

const description =
    'We are a passionate team of experts who deliver innovative, high-quality software solutions. Aurora Tech is your software development partner committed to creating exceptional solutions through open communication, flexibility, and technological expertise. We collaborate closely with clients to understand their vision and deliver innovative products using the latest technologies.'

export const metadata: Metadata = {
    title: 'About Us | Aurora Tech',
    description,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://auroratech.me/about-us',
        title: 'About Us | Aurora Tech',
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
        site: 'https://auroratech.me/about-us',
        images: [
            {
                url: '/others/favicon.png',
                alt: 'Aurora Tech Logo',
            },
        ],
        card: 'summary_large_image',
    },
}

export default function page() {
    return (
        <main>
            <AboutSection hideImg />
        </main>
    )
}
