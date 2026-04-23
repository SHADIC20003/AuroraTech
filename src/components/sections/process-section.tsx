'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Search, PenTool, Code2, Rocket, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Header } from '@/components/ui/header'
import { PROCESS_STEPS } from '@/lib/constants'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

const STEP_ICONS: LucideIcon[] = [Search, PenTool, Code2, Rocket]

function StepRow({
    step,
    index,
}: {
    step: (typeof PROCESS_STEPS)[number]
    index: number
}) {
    const rowRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(rowRef, { amount: 0.4, once: false })
    const Icon = STEP_ICONS[index]
    const isLeft = index % 2 === 0
    const t = useTranslations('process')
    const locale = useLocale()
    const isRtl = locale === 'ar'

    // Directional slide: flip x-axis in RTL
    const slideX = (dir: 'left' | 'right') => {
        const base = dir === 'left' ? -40 : 40
        return isRtl ? -base : base
    }

    const card = (slideDir: 'left' | 'right') => (
        <motion.div
            initial={{ opacity: 0, x: slideX(slideDir) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-full max-w-sm rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 shadow-[0_4px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.5)] backdrop-blur-sm'
        >
            <p className='mb-2 font-inter text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-300'>
                {t('step')} {step.step}
            </p>
            <h3 className='font-slab text-xl font-bold text-slate-900 dark:text-white'>
                {t(`steps.${step.key}.title`)}
            </h3>
            <p className='mt-2 text-sm leading-relaxed text-slate-600 dark:text-gray-100'>
                {t(`steps.${step.key}.description`)}
            </p>
        </motion.div>
    )

    return (
        <div ref={rowRef} className='relative flex items-center py-8 lg:py-14'>
            {/* LEFT SLOT — desktop even steps */}
            <div
                className={cn(
                    'hidden lg:flex lg:flex-1 lg:justify-end lg:pe-12',
                    !isLeft && 'lg:invisible',
                )}
            >
                {isLeft && card('left')}
            </div>

            {/* CENTER ICON */}
            <motion.div
                animate={{ scale: isInView ? 1.12 : 1 }}
                transition={{ duration: 0.35 }}
                className={cn(
                    'relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300',
                    isInView
                        ? 'border-green-500 bg-green-50 dark:border-green-300 dark:bg-green-300/10 text-green-600 dark:text-green-300 shadow-[0_0_24px_rgba(53,153,118,0.2)] dark:shadow-[0_0_24px_rgba(53,153,118,0.45)]'
                        : 'border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-100',
                )}
            >
                <Icon size={22} />
            </motion.div>

            {/* RIGHT SLOT — desktop odd + mobile all */}
            <div
                className={cn(
                    'ms-4 flex-1 lg:ms-0 lg:ps-12',
                    isLeft && 'lg:invisible',
                )}
            >
                {/* Mobile: always show */}
                <div className='lg:hidden'>{card('right')}</div>
                {/* Desktop: only odd steps */}
                {!isLeft && <div className='hidden lg:block'>{card('right')}</div>}
            </div>
        </div>
    )
}

export function ProcessSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const t = useTranslations('process')
    const locale = useLocale()
    const isRtl = locale === 'ar'

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 0.75', 'end 0.35'],
    })

    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <section
            ref={sectionRef}
            className='relative overflow-hidden bg-slate-50 dark:bg-blue py-20 lg:py-28'
        >
            {/* Ambient glow accents */}
            <div className='pointer-events-none absolute -end-40 top-1/3 h-96 w-96 rounded-full bg-green-500/10 dark:bg-green-300/5 blur-3xl' />
            <div className='pointer-events-none absolute -start-40 bottom-1/3 h-96 w-96 rounded-full bg-green-500/10 dark:bg-green-300/5 blur-3xl' />

            {/* Section header */}
            <div className='flex flex-col items-center gap-3 pb-12 lg:pb-20'>
                <Header text1={t('label')} text2={t('title')} />
                <p className='max-w-md text-center text-sm text-slate-600 dark:text-gray-100'>
                    {t('subtitle')}
                </p>
            </div>

            {/* Timeline */}
            <div className='relative mx-auto max-w-4xl px-6'>
                {/* Vertical line — start-side on mobile, center on desktop */}
                <div
                    className={cn(
                        'absolute top-0 h-full w-px bg-slate-200 dark:bg-white/10 lg:start-1/2',
                        isRtl ? 'end-[3.25rem]' : 'start-[3.25rem]',
                    )}
                >
                    <motion.div
                        className='h-full w-full origin-top bg-gradient-to-b from-green-500 to-green-500/20 dark:from-green-300 dark:to-green-300/20'
                        style={{ scaleY: lineScaleY }}
                    />
                </div>

                {PROCESS_STEPS.map((step, index) => (
                    <StepRow key={step.step} step={step} index={index} />
                ))}
            </div>
        </section>
    )
}
