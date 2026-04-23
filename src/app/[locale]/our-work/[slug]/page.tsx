import { PROJECTS } from '@/lib/constants'
import { InlineCTA } from '@/components/ui/inline-cta'
import { Metadata, ResolvingMetadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string; locale: string }> },
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const { slug } = await params
    const metadata = await parent
    const openGraph = metadata.openGraph as OpenGraph
    const project = PROJECTS.find((p) => p.slug === slug)
    if (!project) return {}
    return {
        title: `${project.title} Case Study | Aurora Tech`,
        description: project.challenge.slice(0, 160),
        openGraph: {
            ...openGraph,
            title: `${project.title} | Aurora Tech`,
            description: project.challenge.slice(0, 160),
            url: `https://www.auroratech.me/our-work/${slug}`,
        },
        twitter: {
            title: `${project.title} | Aurora Tech`,
            description: project.challenge.slice(0, 160),
            card: 'summary_large_image',
        },
    }
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }))
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string; locale: string }>
}) {
    const { slug, locale } = await params
    const projectIndex = PROJECTS.findIndex((p) => p.slug === slug)
    const project = PROJECTS[projectIndex]
    if (!project) notFound()

    const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length]

    const t = await getTranslations({ locale, namespace: 'caseStudy' })
    const isRtl = locale === 'ar'

    // Use the first project image as the hero cover
    const coverImage = project.images[0]
    const galleryImages = project.images.slice(1)

    return (
        <main className='pb-20 pt-20 md:pt-24'>
            {/* ── Hero ── */}
            <section className='relative h-[65vh] min-h-[400px] w-full overflow-hidden'>
                <Image
                    src={coverImage}
                    alt={project.title}
                    fill
                    priority
                    className='object-cover'
                    sizes='100vw'
                />
                {/* Dark gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#000a15] via-[#000a15]/70 to-transparent' />

                {/* Hero text */}
                <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-12 lg:px-20'>
                    <div className='animate-fade-in'>
                        <p className='mb-4 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-green-400'>
                            {project.client}
                        </p>
                        <h1 className='font-slab text-5xl font-bold text-white sm:text-6xl lg:text-7xl'>
                            {project.title}
                        </h1>
                        <p className='mx-auto mt-6 max-w-2xl font-inter text-lg text-gray-300'>
                            {project.description}
                        </p>
                        {project.websiteUrl && (
                            <a
                                href={project.websiteUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-inter text-sm font-bold text-slate-900 transition-transform hover:scale-105'
                            >
                                {t('visitWebsite')}
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* ── Overview ── */}
            <section className='mx-auto max-w-6xl px-6 pt-20 sm:px-12 lg:px-20'>
                <div className='grid gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 sm:grid-cols-3'>
                    <div>
                        <h3 className='mb-2 font-inter text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500'>
                            {t('role')}
                        </h3>
                        <p className='font-inter text-base font-medium text-slate-900 dark:text-white'>
                            {project.role}
                        </p>
                    </div>
                    <div>
                        <h3 className='mb-2 font-inter text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500'>
                            {t('timeline')}
                        </h3>
                        <p className='font-inter text-base font-medium text-slate-900 dark:text-white'>
                            {project.timeline}
                        </p>
                    </div>
                    <div>
                        <h3 className='mb-2 font-inter text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500'>
                            {t('techStack')}
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span
                                    key={tech}
                                    className='rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300'
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 3 && (
                                <span className='rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300'>
                                    +{project.techStack.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Challenge ── */}
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
                            {project.challenge}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Solution ── */}
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
                            {project.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Gallery ── */}
            {galleryImages.length > 0 && (
                <section className='mx-auto max-w-6xl px-6 pt-20 sm:px-12 lg:px-20'>
                    <h2 className='mb-8 font-slab text-3xl font-bold text-slate-900 dark:text-white'>
                        {t('gallery')}
                    </h2>
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className='group relative aspect-video overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5'
                            >
                                <Image
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                />
                                <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20' />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── Tech Stack ── */}
            <section className='mx-auto max-w-6xl px-6 pt-20 sm:px-12 lg:px-20'>
                <h2 className='mb-8 text-center font-slab text-3xl font-bold text-slate-900 dark:text-white'>
                    {t('techStack')}
                </h2>
                <div className='flex flex-wrap justify-center gap-4'>
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className='rounded-full border border-slate-200 bg-white px-6 py-3 font-inter text-base font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* ── Results / Impact ── */}
            <section className='mx-auto max-w-4xl px-6 pt-20 sm:px-12 lg:px-20'>
                <div className='relative rounded-3xl bg-slate-900 px-8 py-12 text-center shadow-2xl dark:bg-white/5 sm:px-16'>
                    <div className='absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-green-400 text-slate-900'>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                        </svg>
                    </div>
                    <h2 className='mb-6 font-slab text-3xl font-bold text-white'>
                        {t('results')}
                    </h2>
                    <p className='font-inter text-xl leading-relaxed text-slate-300'>
                        "{project.results}"
                    </p>
                </div>
            </section>

            {/* ── Next Project ── */}
            <section className='mx-auto max-w-6xl px-6 pt-32 sm:px-12 lg:px-20'>
                <Link href={`/${locale}/our-work/${nextProject.slug}`} className='group block'>
                    <div className='flex items-center justify-between border-t border-slate-200 pt-8 transition-colors hover:border-slate-400 dark:border-white/10 dark:hover:border-white/30'>
                        <div>
                            <p className='mb-2 font-inter text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500'>
                                {t('nextProject')}
                            </p>
                            <h2 className='font-slab text-3xl font-bold text-slate-900 transition-colors group-hover:text-green-500 dark:text-white dark:group-hover:text-green-400 sm:text-4xl'>
                                {nextProject.title}
                            </h2>
                        </div>
                        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-transform group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white dark:bg-white/10 dark:text-white dark:group-hover:bg-green-400 dark:group-hover:text-slate-900'>
                            {isRtl ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
                        </div>
                    </div>
                </Link>
            </section>

            {/* ── CTA ── */}
            <div className='mt-24'>
                <InlineCTA />
            </div>
        </main>
    )
}
