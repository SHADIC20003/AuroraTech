import type { Metadata } from 'next'
import { Inter, Roboto_Slab, Open_Sans, Cairo } from 'next/font/google'
import { Toaster } from 'sonner'
import '../globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/nav/nav-bar'
import { Footer } from '@/components/sections/footer'
import NextTopLoader from 'nextjs-toploader'
import { ThemeProvider } from '@/components/theme-provider'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { FloatingDock } from '@/components/ui/floating-dock'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

// ── English / Latin fonts ──────────────────────────────────────────────────
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

// ── Arabic font — only injected as a CSS variable; applied via globals.css ─
const cairo = Cairo({
    subsets: ['arabic', 'latin'],
    display: 'swap',
    variable: '--font-cairo',
})

const description =
    'Aurora Tech is your software development partner committed to creating exceptional solutions through open communication, flexibility, and technological expertise.'

export const metadata: Metadata = {
    title: 'Aurora Tech',
    description,
    icons: [{ rel: 'icon', url: '/others/favicon.png' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://auroratech.me',
        title: 'Aurora Tech',
        description,
        images: [
            { url: '/others/favicon.png', width: 512, height: 512, alt: 'Aurora Tech Logo' },
        ],
    },
    twitter: {
        title: 'Aurora Tech',
        description,
        site: 'https://auroratech.me',
        images: [{ url: '/others/favicon.png', alt: 'Aurora Tech Logo' }],
        card: 'summary_large_image',
    },
    keywords: [
        'Aurora Tech', 'Aurora Tech Egypt', 'Mobile App Development',
        'Mobile Development Company', 'Web Development Egypt',
        'Web Development Company', 'Website Design', 'UI/UX Design',
        'Software Development', 'E-commerce Development',
        'Landing Page Development', 'Custom Software',
    ],
    authors: [{ name: 'AuroraTech' }],
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    // Guard against unsupported locales
    if (!routing.locales.includes(locale as 'en' | 'ar')) {
        notFound()
    }

    // Load translation messages for the current locale
    const messages = await getMessages()

    const isArabic = locale === 'ar'
    const dir = isArabic ? 'rtl' : 'ltr'

    return (
        <html
            lang={locale}
            dir={dir}
            className='overflow-x-hidden'
            suppressHydrationWarning
        >
            <body
                className={cn(
                    `${inter.variable} ${robotoSlab.variable} ${openSans.variable} ${cairo.variable}`,
                    'bg-[#F8FAFC] dark:bg-[#000a15] overflow-x-hidden transition-colors duration-700 ease-in-out',
                    isArabic ? 'font-cairo' : 'font-sans',
                )}
                suppressHydrationWarning
            >
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='dark'
                        enableSystem
                        disableTransitionOnChange={false}
                    >
                        {/* Global background — fixed so it never scrolls or clips */}
                        <div className='fixed inset-0 -z-10 h-full w-full bg-[#F8FAFC] dark:bg-[#000a15]'>
                            <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/50 dark:from-blue-900/20 via-transparent to-transparent' />
                        </div>
                        <NextTopLoader zIndex={99999} />
                        <Navbar />
                        {children}
                        <Footer />
                        <Toaster />
                        <WhatsAppButton />
                        <FloatingDock />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
