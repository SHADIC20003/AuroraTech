import type { Metadata } from 'next'
import { Inter, Roboto_Slab, Open_Sans } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/nav/nav-bar'
import { Footer } from '@/components/sections/footer'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})
const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-slab',
})
const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
})

export const metadata: Metadata = {
    title: 'Aurora Tech',
    description:
        'Aurora Tech is a software development company that specializes in web development and mobile development.',
    icons: [
        {
            rel: 'icon',
            url: '/others/favicon.png',
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
                url: '/others/favicon.png',
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
                url: '/others/favicon.png',
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
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    `${inter.variable} ${robotoSlab.variable} ${openSans.variable}`,
                    'bg-blue font-sans',
                )}
            >
                <Navbar />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    )
}
