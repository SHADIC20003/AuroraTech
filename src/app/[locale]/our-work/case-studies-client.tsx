'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

import { PROJECTS } from '@/lib/constants'
import { InlineCTA } from '@/components/ui/inline-cta'

export function CaseStudiesClient() {
    const t = useTranslations('caseStudies')

    return (
        <main className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0B0C10]">
            {/* Glowing background orb */}
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/20 blur-[120px] dark:bg-green-500/10" />

            {/* Hero Section */}
            <section className="px-6 pb-20 pt-40 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-slate-400 md:text-7xl"
                >
                    {t('title')}
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 md:text-xl"
                >
                    {t('subtitle')}
                </motion.p>
            </section>

            {/* Alternating Showcase Layout */}
            <section className="mx-auto max-w-7xl px-6 pb-32">
                {PROJECTS.map((project, index) => {
                    const isOdd = index % 2 !== 0

                    return (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="mb-32 grid items-center gap-12 lg:grid-cols-2 lg:gap-20 last:mb-0"
                        >
                            {/* Image Column */}
                            <div className={`group relative overflow-hidden rounded-3xl shadow-2xl ${isOdd ? 'lg:order-last' : ''}`}>
                                <Link href={`/our-work/${project.slug}`}>
                                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            width={800}
                                            height={600}
                                            className="aspect-[4/3] w-full object-cover"
                                        />
                                    </motion.div>
                                </Link>
                            </div>

                            {/* Text Column */}
                            <div className="flex flex-col items-start justify-center">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                                    {project.title}
                                </h2>
                                <p className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                    {project.client}
                                </p>
                                
                                <p className="mt-6 text-slate-600 dark:text-slate-400">
                                    {project.challenge || project.description}
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span 
                                            key={tech}
                                            className="rounded-full border border-slate-200 bg-slate-50/50 px-4 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Primary Button */}
                                <Link 
                                    href={`/our-work/${project.slug}`}
                                    className="group mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                >
                                    {t('readFull')}
                                    <svg 
                                        className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    )
                })}
            </section>

            <InlineCTA />
        </main>
    )
}
