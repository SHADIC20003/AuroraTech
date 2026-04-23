'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function InlineCTA() {
    const t = useTranslations('inlineCta')

    return (
        <section className='relative z-10 px-6 py-16'>
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className='mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-3xl border border-slate-200/50 bg-slate-50 px-8 py-12 dark:border-white/10 dark:bg-white/5 md:flex-row'
            >
                {/* Text */}
                <div className='flex flex-col gap-2 text-center md:text-start'>
                    <h2 className='font-slab text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl'>
                        {t('heading')}
                    </h2>
                    <p className='font-inter text-base font-medium text-slate-600 dark:text-gray-300'>
                        {t('subheading')}
                    </p>
                </div>

                {/* CTA Button */}
                <Link
                    href='/contact'
                    className='shrink-0 rounded-full bg-gradient-to-r from-green-300 to-blue-400 px-8 py-3.5 font-inter text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-green-300/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 active:scale-[0.97]'
                >
                    {t('button')}
                </Link>
            </motion.div>
        </section>
    )
}
