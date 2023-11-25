import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import './globals.css'

// const merriWeather = Merriweather({
//     subsets: ['latin'],
//     weight: ['300', '400', '700', '900'],
// })

export const metadata: Metadata = {
    title: 'Aurora Tech',
    description:
        'Aurora Tech is a software development company that specializes in web development and mobile development.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.png',
        },
    ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://auroratech.me',
        title: 'Aurora Tech',
        description:
            'Aurora Tech is a software development company that specializes in web development and mobile development.',
        images: [
            {
                url: '/favicon.png',
                width: 512,
                height: 512,
                alt: 'Aurora Tech Logo',
            },
        ],
    },
    twitter: {
        site: 'auroratech.me',
        images: [
            {
                url: '/favicon.png',
                alt: 'Aurora Tech Logo',
            },
        ],
        card: 'summary_large_image',
    },
    keywords: [
        'Aurora Tech',
        'Aurora',
        'Tech',
        'Software',
        'Development',
        'Web',
        'Mobile',
        'Web Development',
        'Mobile Development',
        'Software Development',
        'Software Development Company',
        'Web Development Company',
        'Mobile Development Company',
    ],
    authors: [
        {
            name: 'AuroraTech',
        },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body
            // className={merriWeather.className}
            >
                {children}
            </body>
        </html>
    )
}
