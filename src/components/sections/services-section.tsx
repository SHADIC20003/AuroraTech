'use client'

import { Header } from '@/components/ui/header'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { useTranslations } from 'next-intl'
import {
    Activity, Braces, Code2, Cog,
} from 'lucide-react'

type CatchyEl = {
    icon: React.ReactNode
    pos: string
    yKf: number[]
    rotKf: number[]
    dur: number
    delay: number
}

// Floating icons only on the two featured (wide) cards
const CATCHY_ELEMENTS: (CatchyEl[] | null)[] = [
    [
        { icon: <Braces size={28} strokeWidth={1.5} />, pos: 'top-4 end-5', yKf: [0, -10, 0], rotKf: [-4, 4, -4], dur: 4.2, delay: 0 },
        { icon: <Code2 size={20} strokeWidth={1.5} />, pos: 'bottom-5 start-5', yKf: [0, 10, 0], rotKf: [0, -6, 0], dur: 5, delay: 1.4 },
    ],
    null,
    null,
    [
        { icon: <Cog size={26} strokeWidth={1.5} />, pos: 'top-4 start-5', yKf: [0, -6, 0], rotKf: [0, 360], dur: 7, delay: 0 },
        { icon: <Activity size={20} strokeWidth={1.5} />, pos: 'bottom-5 end-5', yKf: [0, 10, 0], rotKf: [-3, 3, -3], dur: 4.8, delay: 1.5 },
    ],
]

// Bento layout: web dev + maintenance are wide (2/3), others narrow (1/3)
const BENTO_COLS = [
    'md:col-span-2',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-2',
] as const

export const ServicesSection = () => {
    const t = useTranslations('services')

    return (
        <section className='mx-auto max-w-7xl px-4 md:px-6 pb-20'>
            <div className='flex justify-center'>
                <Header text1={t('label')} text2={t('title')} className='pb-8' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-10'>
                {SERVICES.map((service, idx) => {
                    const title = t(`${service.key}.title`)
                    const description = t(`${service.key}.description`)
                    const isWide = idx === 0 || idx === 3
                    const catchyEls = CATCHY_ELEMENTS[idx]

                    return (
                        <motion.div
                            key={service.key}
                            className={`${BENTO_COLS[idx]} group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] backdrop-blur-md p-6 shadow-card hover:-translate-y-2 transition-all duration-300`}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                        >
                            {/* Inner glow on hover */}
                            <div
                                aria-hidden
                                className='pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)' }}
                            />

                            {/* Floating catchy elements (wide cards only) */}
                            {catchyEls?.map((el, i) => (
                                <motion.div
                                    key={i}
                                    aria-hidden
                                    className={`pointer-events-none absolute z-20 opacity-10 dark:opacity-20 text-slate-900 dark:text-white ${el.pos}`}
                                    animate={{ y: el.yKf, rotate: el.rotKf }}
                                    transition={{
                                        duration: el.dur,
                                        delay: el.delay,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                        repeatType: el.rotKf.length === 2 ? 'loop' : 'mirror',
                                    }}
                                >
                                    {el.icon}
                                </motion.div>
                            ))}

                            {/* Card body: horizontal on wide desktop, vertical on mobile/narrow */}
                            <div className={`flex gap-6 ${isWide ? 'flex-col md:flex-row md:items-center' : 'flex-col items-center'}`}>
                                {/* Image */}
                                <div className={`flex-shrink-0 flex items-center justify-center ${isWide ? 'md:w-48' : 'w-full'}`}>
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
                                    >
                                        <Image
                                            src={service.img}
                                            alt={title}
                                            className='max-w-full h-auto max-h-44 object-contain'
                                        />
                                    </motion.div>
                                </div>

                                {/* Text */}
                                <div className={isWide ? 'text-start' : 'text-center'}>
                                    <h3 className='font-slab text-xl font-bold text-slate-900 dark:text-white mb-3'>
                                        {title}
                                    </h3>
                                    <p className='font-inter text-sm leading-relaxed text-slate-600 dark:text-gray-300'>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
