import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactForm } from '@/components/contact-form'

const description =
    "With our cutting-edge technology, we will weave our creativity with your project to deliver you exceptional results. Ready to unlock the full potential of your digital presence? We're here to help."

export const metadata: Metadata = {
    title: 'Contact Us | Aurora Tech',
    description,
    openGraph: {
        type: 'website',
        url: 'https://auroratech.me/contact',
        title: 'Contact Us | Aurora Tech',
        description,
        images: [{ url: '/others/favicon.png', width: 512, height: 512, alt: 'Aurora Tech Logo' }],
    },
    twitter: {
        title: 'Contact Us | Aurora Tech',
        description,
        site: 'https://auroratech.me/contact',
        images: [{ url: '/others/favicon.png', alt: 'Aurora Tech Logo' }],
        card: 'summary_large_image',
    },
}

export default async function ContactPage() {
    const t = await getTranslations('contact')

    return (
        <main className='max-w-3xl mx-auto pt-32 pb-24 px-4'>
            {/* Page header */}
            <div className='mb-12 text-center'>
                <h1 className='font-slab text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl'>
                    {t('letsTalk')}
                </h1>
                <p className='mt-4 font-inter text-base text-slate-500 dark:text-slate-400 sm:text-lg'>
                    {t('responseNote')}
                </p>
            </div>

            <ContactForm />
        </main>
    )
}
