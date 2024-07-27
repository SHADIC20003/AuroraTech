import type { Metadata } from 'next'

const description =
    "With our cutting-edge technology, we will weave our creativity with your project to deliver you exceptional results. Ready to unlock the full potential of your digital presence? We're here to help."

export const metadata: Metadata = {
    title: 'Contact Us | Aurora Tech',
    description,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://auroratech.me/contact',
        title: 'Contact Us | Aurora Tech',
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
        site: 'https://auroratech.me/contact',
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
    return <div className='pt-12 md:pt-36' />
}
