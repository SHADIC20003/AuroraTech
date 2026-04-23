'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { toast } from 'sonner'
import { Others } from '../svgs'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

type AboutSectionProps = {
    hideImg?: boolean
}

export const AboutSection = ({ hideImg = false }: AboutSectionProps) => {
    const magnetRef = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 150, damping: 15 })
    const springY = useSpring(y, { stiffness: 150, damping: 15 })
    const t = useTranslations('about')
    const locale = useLocale()
    const isRtl = locale === 'ar'

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = magnetRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        x.set((e.clientX - cx) * 0.25)
        y.set((e.clientY - cy) * 0.25)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const copyEmail = () => {
        navigator.clipboard.writeText('info@auroratech.me')
        toast("Email copied! We'll talk soon.")
    }

    // Flip slide direction for RTL
    const slideFrom = (physical: number) => (isRtl ? -physical : physical)

    return (
        <section className='relative mx-auto flex max-w-[95rem] flex-col gap-12 overflow-hidden px-5 py-20 font-semibold text-slate-900 dark:text-white lg:gap-24 xl:flex-row xl:py-44 2xl:gap-48'>
            {/* AURORA watermark */}
            <span
                aria-hidden
                className='pointer-events-none absolute inset-0 flex select-none items-center justify-center font-slab text-[20rem] font-black uppercase leading-none text-slate-900 dark:text-white opacity-[0.03]'
            >
                AURORA
            </span>

            {!hideImg && (
                <Image
                    src={Others.DotsRight}
                    alt='Dots Right'
                    className='pointer-events-none absolute -top-7 end-6 sm:end-12 2xl:end-0'
                />
            )}

            {/* Text column — slides in from inline-start */}
            <motion.div
                initial={{ opacity: 0, x: slideFrom(-48) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className='flex max-w-3xl flex-col'
            >
                <span className='pb-6 font-inter text-xl text-green-600 dark:text-green-300'>
                    {t('label')}
                </span>
                <span className='text-balance font-slab text-xl leading-normal text-slate-900 dark:text-white md:text-[2rem]'>
                    {t('headline')}
                </span>
                <span className='pt-3 font-inter text-base font-normal text-slate-600 dark:text-gray-100 md:text-xl'>
                    {t('body')}
                </span>
            </motion.div>

            {/* Contact column — slides in from inline-end */}
            <motion.div
                initial={{ opacity: 0, x: slideFrom(48) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                className='flex shrink-0 flex-col xl:self-end'
            >
                <span className='pb-6 font-slab text-xl text-slate-900 dark:text-white md:text-[2rem]'>
                    {t('contactHeadline')}
                </span>
                <span className='pb-3 font-inter text-sm font-normal text-slate-600 dark:text-gray-100'>
                    {t('contactLabel')}
                </span>

                {/* Live availability badge */}
                <div className='mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-gradient-to-r from-emerald-50 to-teal-100 dark:bg-green-500/10 dark:bg-none px-3 py-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-none'>
                    <span className='relative flex h-2 w-2'>
                        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                        <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
                    </span>
                    <span className='font-inter text-xs font-medium text-green-600 dark:text-green-400'>
                        {t('available')}
                    </span>
                </div>

                {/* Magnetic email area */}
                <div ref={magnetRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <motion.div style={{ x: springX, y: springY }}>
                        <button
                            onClick={copyEmail}
                            className='group flex cursor-pointer items-center justify-between gap-4 rounded-md bg-transparent font-inter text-2xl font-medium leading-normal text-green-600 dark:text-green-300 underline outline-none ring-green-300 ring-offset-blue duration-300 hover:text-green-700 dark:hover:text-green-500 focus-visible:ring-2 focus-visible:ring-offset-2 active:text-[#152F26] md:text-[2.5rem] xl:gap-16'
                        >
                            info@auroratech.me
                            {Others.Arrow(
                                'duration-300 group-hover:-translate-x-7 group-active:-translate-x-7 max-md:w-7',
                                'duration-300 group-hover:fill-green-700 dark:group-hover:fill-green-500 group-active:fill-[#152F26] fill-green-600 dark:fill-green-300',
                            )}
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
