'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Others } from '../svgs'
import { useTranslations, useLocale } from 'next-intl'

export const IntroSection = () => {
    const t = useTranslations('intro')
    const locale = useLocale()
    const isArabic = locale === 'ar'

    return (
        <section className='relative w-full py-20 xl:py-40'>
            {/* Noise texture overlay for background depth */}
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0 opacity-[0.04]'
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px',
                }}  
            />

            {/* Content constrained — full-width outer, max-w inner */}
            <div className='mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-6 xl:flex-row'>

                {/* Text content — Task 1: Frosted glass shield (light mode only) */}
                <div className=''>
                    {/* Task 2: Arabic gets heavier weight + larger size */}
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className={
                            isArabic
                                ? 'flex flex-col font-slab text-4xl font-extrabold leading-tight sm:text-[4.5rem] dark:[filter:drop-shadow(0_2px_16px_rgba(0,0,0,0.6))]'
                                : 'flex flex-col font-slab text-4xl font-semibold leading-tight sm:text-[4rem] dark:[filter:drop-shadow(0_2px_16px_rgba(0,0,0,0.6))]'
                        }
                    >
                        <span className='animate-shimmer bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 dark:from-white dark:via-slate-400 dark:to-white bg-[length:200%_auto] bg-clip-text text-transparent'>
                            {t('headline1')}
                        </span>
                        <span className='bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-green-300'>
                            {t('headline2')}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
                        className={
                            isArabic
                                ? 'font-inter text-lg font-semibold sm:text-2xl leading-relaxed text-slate-800 dark:text-slate-200 [text-shadow:0_0_6px_rgba(255,255,255,1)] dark:[text-shadow:none]'
                                : 'font-inter text-base font-medium sm:text-xl leading-relaxed text-slate-800 dark:text-slate-200 [text-shadow:0_0_6px_rgba(255,255,255,1)] dark:[text-shadow:none]'
                        }
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* Aurora blob — fade in + float + scale pulse */}
                {/* Task 3: Shift blob off-center so brightest point avoids text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.36 }}
                    className='translate-x-12 translate-y-12'
                >
                    <motion.div
                        animate={{ y: [0, -20, 0], scale: [1, 1.045, 1] }}
                        transition={{
                            duration: 6,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    >
                        <Image
                            src={Others.Aurora}
                            alt='Aurora'
                            className='pointer-events-none opacity-70 saturate-150 dark:opacity-100 dark:saturate-100 transition-all duration-300'
                        />
                    </motion.div>
                </motion.div>

            </div>

            {/* Animated scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className='absolute bottom-4 start-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5'
            >
                <span className='font-inter text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500'>
                    {t('scroll')}
                </span>
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
                    className='flex h-8 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5'
                >
                    <div className='h-1.5 w-1 rounded-full bg-gradient-to-b from-green-400 to-blue-500' />
                </motion.div>
            </motion.div>
        </section>
    )
}
