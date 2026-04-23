'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion'
import { ArrowUpRight, ArrowRight, BookOpen } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { PROJECTS } from '@/lib/constants'
import { useInterval } from '@/hooks/use-interval'
import { cn } from '@/lib/utils'
import { useHover } from '@mantine/hooks'

type ProjectCardProps = {
    project: (typeof PROJECTS)[number]
    index: number
}

// Overlay slides up from below with spring physics
const overlayVariants: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 280,
            damping: 26,
            staggerChildren: 0.07,
            delayChildren: 0.05,
        },
    },
}

// Individual tech pills pop into place
const pillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.75, y: 8 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 400, damping: 18 },
    },
}

// CTA line fades + slides in slightly after pills
const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300, damping: 22 },
    },
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [currentImage, setCurrentImage] = React.useState(0)
    const interval = useInterval({
        fn: () => setCurrentImage((prev) => (prev + 1) % project.images.length),
    })
    const { hovered, ref: hoverRef } = useHover()
    const cardRef = useRef<HTMLDivElement>(null)
    const locale = useLocale()
    const isRtl = locale === 'ar'
    const t = useTranslations('projects')
    const tCaseStudy = useTranslations('caseStudy')

    // 3D tilt values
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
        stiffness: 200,
        damping: 25,
    })
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
        stiffness: 200,
        damping: 25,
    })

    useEffect(() => {
        if (hovered && interval.isRunning) interval.stop()
        if (!hovered && !interval.isRunning) interval.start()
    }, [hovered, interval])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect()
        if (!rect) return
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: index * 0.15, ease: 'easeOut' }}
        >
            <motion.div
                ref={cardRef}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className='flex flex-col rounded-3xl bg-gradient-to-b from-green-300 to-slate-200 dark:bg-border-gradient p-[0.125rem] shadow-card'
                whileHover={{ boxShadow: '0 0 32px 4px rgba(74, 222, 128, 0.10)' }}
                transition={{ boxShadow: { duration: 0.3 } }}
            >
                <div className='flex grow flex-col rounded-3xl bg-white dark:bg-blue'>
                    {/* Image area with zoom-on-hover.
                        dir="ltr" locks the slide strip to LTR coordinates so
                        translateX(-N%) always moves left — works in both locales. */}
                    <div ref={hoverRef} dir='ltr' className='relative flex overflow-hidden rounded-t-3xl'>
                        {project.images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                className='w-full shrink-0 grow'
                                style={{
                                    transform: `translateX(-${currentImage * 100}%)`,
                                    transition: 'transform 500ms',
                                }}
                            >
                                <motion.div
                                    animate={{ scale: hovered ? 1.05 : 1 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    className='relative'
                                >
                                    <Image
                                        src={img}
                                        alt={project.title + ' Image ' + idx}
                                        className='w-full rounded-t-3xl object-cover'
                                    />
                                    {/* Light Sweep Shimmer */}
                                    <motion.div
                                        initial={{ x: '-100%', skewX: -12 }}
                                        animate={hovered ? { x: '200%' } : { x: '-100%' }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                        className='absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent'
                                    />
                                    {/* Glossy reflection overlay for light mode */}
                                    <div className='pointer-events-none absolute inset-0 rounded-t-3xl bg-gradient-to-tr from-transparent via-white/60 to-white/20 opacity-100 dark:opacity-0 mix-blend-overlay' />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Image dots indicator — centered horizontally (direction-agnostic) */}
                        <div className='absolute bottom-2 start-1/2 flex -translate-x-1/2 transform gap-1'>
                            {new Array(project.images.length).fill(0).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        'size-2.5 rounded-full bg-gray-100 outline-none ring-blue ring-offset-green-300 duration-300 focus-visible:ring-2 focus-visible:ring-offset-2',
                                        idx === currentImage && 'w-6',
                                    )}
                                    role='button'
                                    aria-label={`Image Selector ${idx + 1}`}
                                    tabIndex={0}
                                    onClick={() => { setCurrentImage(idx); interval.reset() }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') { setCurrentImage(idx); interval.reset() }
                                        if (e.key === 'ArrowLeft') {
                                            setCurrentImage((prev) =>
                                                prev - 1 < 0 ? project.images.length - 1 : prev - 1,
                                            )
                                            interval.reset()
                                        }
                                        if (e.key === 'ArrowRight') {
                                            setCurrentImage((prev) => (prev + 1) % project.images.length)
                                            interval.reset()
                                        }
                                    }}
                                />
                            ))}
                        </div>

                        {/* ── Task 1 & 2 & 3: Glass overlay – Desktop (lg+), animated on hover ── */}
                        <motion.div
                            initial='hidden'
                            animate={hovered ? 'visible' : 'hidden'}
                            variants={overlayVariants}
                            className='absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/10 bg-[#000A15]/90 p-4 backdrop-blur-md lg:block'
                        >
                            {/* Task 2: Staggered tech-stack pills */}
                            <div className='flex flex-wrap gap-1.5'>
                                {project.tags.map((tag, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={pillVariants}
                                        className='rounded-full bg-white/10 px-2 py-1 font-inter text-xs text-slate-200'
                                    >
                                        {tag.name}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Task 3: CTA with RTL-safe arrow */}
                            <motion.div
                                variants={ctaVariants}
                                className='mt-3 flex items-center gap-1.5 font-inter text-xs font-semibold text-green-300'
                            >
                                <span>{t('quickDetails')}</span>
                                {/* Arrow flips direction in Arabic — dir="ltr" on parent means
                                    we flip manually via rotate-180 instead of relying on CSS
                                    logical transforms. ms- / pe- are kept for spacing. */}
                                <ArrowRight
                                    size={14}
                                    className={cn('shrink-0 transition-transform', isRtl && 'rotate-180')}
                                />
                            </motion.div>
                        </motion.div>

                        {/* ── Task 4: Mobile fallback (< lg) – static, always visible ── */}
                        <div className='absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#000A15]/75 p-3 backdrop-blur-md lg:hidden'>
                            <div className='flex flex-wrap gap-1'>
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className='rounded-full bg-white/10 px-2 py-0.5 font-inter text-[10px] text-slate-300'
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex grow flex-col gap-y-2 px-5 pb-5 pt-2'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-slab text-2xl font-medium text-slate-900 dark:text-white'>
                                {project.title}
                            </h3>
                            <a
                                href={project.websiteUrl}
                                className='group flex items-center gap-1 rounded-md font-inter text-sm font-bold text-green-300 outline-none ring-green-300 ring-offset-blue duration-300 hover:text-green-500 focus-visible:ring-2 focus-visible:ring-offset-2 active:text-[#152F26]'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Visit Website
                                <motion.span
                                    animate={hovered ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className='inline-flex'
                                >
                                    <ArrowUpRight size={16} />
                                </motion.span>
                            </a>
                        </div>
                        {/* Read Case Study link */}
                        <Link
                            href={`/${locale}/our-work/${project.slug}`}
                            className='inline-flex w-fit items-center gap-1.5 rounded-full border border-green-300/30 bg-green-300/10 px-3 py-1 font-inter text-xs font-semibold text-green-400 transition-colors duration-200 hover:border-green-300/60 hover:bg-green-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400'
                        >
                            <BookOpen size={12} />
                            {tCaseStudy('readCaseStudy')}
                        </Link>

                        <div className='flex flex-wrap gap-x-3 gap-y-2'>
                            {project.tags.map((tag, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className='flex items-center justify-center gap-2 rounded-3xl border border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-white/5 px-3 py-1 font-slab text-xs leading-none text-slate-600 dark:text-gray-300 backdrop-blur-sm sm:text-sm'
                                >
                                    <Image src={tag.icon} alt={tag.name} />
                                    {tag.name}
                                </motion.div>
                            ))}
                        </div>

                        <div className='font-inter'>
                            <h4 className='text-xl font-medium text-slate-900 dark:text-white'>
                                Project Description
                            </h4>
                            <p className='text-sm text-slate-600 dark:text-gray-100'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
