import { ServicesSection } from '@/components/sections/services-section'
import type { Metadata } from 'next'

const description =
    'Whether you want to digitize and automate your business or to up scale and increase your reach. We can make it happen using the latest tools and technologies. Our team of experienced web developers will help you create a website that stands out from the crowd and get better search results with SEO optimization and responsive web designs.'

export const metadata: Metadata = {
    title: 'Services | Aurora Tech',
    description,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://auroratech.me/services',
        title: 'Services | Aurora Tech',
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
        title: 'Services | Aurora Tech',
        description,
        site: 'https://auroratech.me/services',
        images: [
            {
                url: '/others/favicon.png',
                alt: 'Aurora Tech Logo',
            },
        ],
        card: 'summary_large_image',
    },
    keywords: [
        'Services',
        'Aurora Tech',
        'Web Development',
        'Mobile Development',
        'UI/UX Design',
        'Maintenance',
    ],
}

export default function page() {
    return (
        <main className='pt-20'>
            <ServicesSection />
        </main>
    )
}
