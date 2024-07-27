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

const description =
    'Aurora Tech is your software development partner committed to creating exceptional solutions through open communication, flexibility, and technological expertise. We collaborate closely with clients to understand their vision and deliver innovative products using the latest technologies.'

export const metadata: Metadata = {
    title: 'Aurora Tech',
    description,
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
        site: 'https://auroratech.me',
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
        'Aurora Tech Egypt',
        'Mobile App Development',
        'Mobile Development Company',
        'Web Development Egypt',
        'Web Development Company',
        'Website Design',
        'UI/UX Design',
        'Software Development',
        'E-commerce Development',
        'Landing Page Development',
        'Custom Software',
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
