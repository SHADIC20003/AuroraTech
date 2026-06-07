'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { useCaseStudy, useCaseStudies } from '@/hooks/useCaseStudies'
import { InlineCTA } from '@/components/ui/inline-cta'

type Props = {
    slug: string
    locale: 'en' | 'ar'
}

export function CaseStudyDetailClient({ slug, locale }: Props) {
    const t = useTranslations('caseStudy')
    const isRtl = locale === 'ar'

    const { data: caseStudy, isLoading, isError } = useCaseStudy(slug)
    const { data: allCaseStudies } = useCaseStudies()

    if (isLoading) {
        return (
            <main className='pb-20 pt-20 md:pt-24'>
                <div className='mx-auto max-w-6xl px-6 py-20 text-center text-xl font-bold text-slate-900 dark:text-white'>
                    ...
                </div>
            </main>
        )
    }

    if (isError || !caseStudy) {
        notFound()
    }

    const displayTitle = locale === 'ar' && caseStudy.title_ar ? caseStudy.title_ar : caseStudy.title
    const displayDescription = locale === 'ar' && caseStudy.description_ar ? caseStudy.description_ar : caseStudy.description
    const displayContent = locale === 'ar' && caseStudy.content_ar ? caseStudy.content_ar : caseStudy.content

    const currentIndex = allCaseStudies?.findIndex((cs) => cs.id === slug) ?? -1
    const nextCaseStudy = allCaseStudies && currentIndex >= 0
        ? allCaseStudies[(currentIndex + 1) % allCaseStudies.length]
        : null

    const publishedDate = new Date(caseStudy.createdAt).toLocaleDateString(
        locale === 'ar' ? 'ar-EG' : 'en-US',
        { month: 'short', year: 'numeric' },
    )

    return (
        <main className='pb-20 pt-20 md:pt-24'>
            {/* ── Hero (text-only, no cover image) ── */}
            <section className='relative flex min-h-[40vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-[#000a15] px-6 text-center sm:px-12 lg:px-20'>
                <div className='animate-fade-in'>
                    <h1 className='font-slab text-5xl font-bold text-white sm:text-6xl lg:text-7xl'>
                        {displayTitle}
                    </h1>
                </div>
            </section>

            {/* ── Overview ── */}
            <section className='mx-auto max-w-6xl px-6 pt-20 sm:px-12 lg:px-20'>
                <div className='grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 sm:grid-cols-2'>
                    <div>
                        <h3 className='mb-2 font-inter text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500'>
                            {t('completed')}
                        </h3>
                        <p className='font-inter text-base font-medium text-slate-900 dark:text-white'>
                            {publishedDate}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Challenge / Description ── */}
            <section className='relative mx-auto max-w-6xl px-6 pt-20 sm:px-12 lg:px-20'>
                <div className='grid gap-8 md:grid-cols-[1fr,2fr] md:gap-16'>
                    {/* Sticky label column */}
                    <div className='md:sticky md:top-24 md:self-start'>
                        <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400'>
                            <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
                            </svg>
                        </div>
                        <h2 className='font-slab text-3xl font-bold text-slate-900 dark:text-white'>
                            {t('challenge')}
                        </h2>
                    </div>

                    {/* Scrollable content column */}
                    <div className='rounded-2xl bg-slate-50 p-8 dark:bg-white/5'>
                        <p className='font-inter text-lg leading-relaxed text-slate-600 dark:text-gray-300'>
                            {displayDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Solution / Content ── */}
            <section className='relative mx-auto max-w-6xl px-6 pt-12 sm:px-12 lg:px-20'>
                <div className='grid gap-8 md:grid-cols-[1fr,2fr] md:gap-16'>
                    {/* Sticky label column */}
                    <div className='md:sticky md:top-24 md:self-start'>
                        <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/30 dark:text-emerald-400'>
                            <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                            </svg>
                        </div>
                        <h2 className='font-slab text-3xl font-bold text-slate-900 dark:text-white'>
                            {t('solution')}
                        </h2>
                    </div>

                    {/* Scrollable content column */}
                    <div className='rounded-2xl bg-emerald-50 p-8 dark:bg-emerald-500/10'>
                        <p className='font-inter text-lg leading-relaxed text-slate-600 dark:text-gray-300'>
                            {displayContent}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Next Project ── */}
            {nextCaseStudy && (
                <section className='mx-auto max-w-6xl px-6 pt-32 sm:px-12 lg:px-20'>
                    <Link href={`/${locale}/our-work/${nextCaseStudy.id}`} className='group block'>
                        <div className='flex items-center justify-between border-t border-slate-200 pt-8 transition-colors hover:border-slate-400 dark:border-white/10 dark:hover:border-white/30'>
                            <div>
                                <p className='mb-2 font-inter text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500'>
                                    {t('nextProject')}
                                </p>
                                <h2 className='font-slab text-3xl font-bold text-slate-900 transition-colors group-hover:text-green-500 dark:text-white dark:group-hover:text-green-400 sm:text-4xl'>
                                    {locale === 'ar' && nextCaseStudy.title_ar ? nextCaseStudy.title_ar : nextCaseStudy.title}
                                </h2>
                            </div>
                            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-transform group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white dark:bg-white/10 dark:text-white dark:group-hover:bg-green-400 dark:group-hover:text-slate-900'>
                                {isRtl ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
                            </div>
                        </div>
                    </Link>
                </section>
            )}

            {/* ── CTA ── */}
            <div className='mt-24'>
                <InlineCTA />
            </div>
        </main>
    )
}
