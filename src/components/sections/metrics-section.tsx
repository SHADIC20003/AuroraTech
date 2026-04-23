'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { animate } from 'framer-motion'

type Metric = {
    value: number
    suffix: string
    label: string
    description: string
}

const METRICS: Metric[] = [
    {
        value: 3,
        suffix: '+',
        label: 'Years of Experience',
        description: 'Shipping production-grade software since 2022',
    },
    {
        value: 20,
        suffix: '+',
        label: 'Projects Delivered',
        description: 'Across web, mobile, e-commerce & AI',
    },
    {
        value: 98,
        suffix: '%',
        label: 'Client Satisfaction',
        description: 'Based on post-launch client feedback',
    },
]

function CountUp({ to, suffix }: { to: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    useEffect(() => {
        if (!inView || !ref.current) return
        const node = ref.current
        const controls = animate(0, to, {
            duration: 2,
            ease: 'easeOut',
            onUpdate(value) {
                node.textContent = Math.round(value) + suffix
            },
        })
        return () => controls.stop()
    }, [inView, to, suffix])

    return <span ref={ref}>{'0' + suffix}</span>
}

export const MetricsSection = () => {
    return (
        <section className='mx-auto max-w-5xl px-4 md:px-6 py-20'>
            {/* Subtle top rule */}
            <div className='mb-16 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent' />

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6'>
                {METRICS.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        className='flex flex-col items-center text-center'
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
                    >
                        <p className='font-slab text-6xl font-black bg-gradient-to-br from-[#6EE7B7] to-green-300 bg-clip-text text-transparent tabular-nums'>
                            <CountUp to={metric.value} suffix={metric.suffix} />
                        </p>
                        <h3 className='mt-4 font-slab text-lg font-bold text-slate-900 dark:text-white'>
                            {metric.label}
                        </h3>
                        <p className='mt-1 font-inter text-sm text-slate-500 dark:text-slate-400'>
                            {metric.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className='mt-16 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent' />
        </section>
    )
}
