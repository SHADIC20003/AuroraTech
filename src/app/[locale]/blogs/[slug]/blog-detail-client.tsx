'use client'

import { useBlog, useBlogs } from '@/hooks/useBlogs'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Clock, Calendar, Link as LinkIcon } from 'lucide-react'
import { BlogCard } from '@/components/cards/blog-card'
import { RenderMarkdown } from '@/components/ui/render-markdown'
import { useTranslations } from 'next-intl'

type Props = {
    slug: string
    locale: 'en' | 'ar'
}

export function BlogDetailClient({ slug, locale }: Props) {
    const t = useTranslations('blogs')
    const { data: blog, isLoading, isError } = useBlog(slug)
    const { data: allBlogs } = useBlogs()

    if (isLoading) {
        return (
            <main className='pt-32 pb-24 md:pt-40'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center text-xl font-bold text-slate-900 dark:text-white'>
                    ...
                </div>
            </main>
        )
    }

    if (isError || !blog) {
        notFound()
    }

    const displayTitle = locale === 'ar' && blog.title_ar ? blog.title_ar : blog.title
    const displayContent = locale === 'ar' && blog.content_ar ? blog.content_ar : blog.content

    const relatedBlogs = allBlogs?.filter((b) => b.id !== slug).slice(0, 2) ?? []

    return (
        <main className='pt-32 pb-24 md:pt-40'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mb-8'>
                    <h1 className='text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                        {displayTitle}
                    </h1>

                    {/* Meta Header */}
                    <div className='flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400'>
                        {blog.keywords.map((keyword) => (
                            <span key={keyword} className='bg-emerald-500/10 text-emerald-500 rounded-full px-3 py-1 text-sm font-medium'>
                                {keyword}
                            </span>
                        ))}
                        <div className='flex items-center gap-1.5 text-sm'>
                            <Clock className='w-4 h-4' />
                            <span>5 min read</span>
                        </div>
                        <div className='flex items-center gap-1.5 text-sm'>
                            <Calendar className='w-4 h-4' />
                            <span>
                                {new Date(blog.createdAt).toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                        </div>
                    </div>
                </div>

                <div className='mb-12 w-full overflow-hidden rounded-3xl shadow-2xl'>
                    <Image
                        src={blog.image}
                        alt={displayTitle}
                        width={1200}
                        height={600}
                        className='h-full w-full object-cover max-h-[600px]'
                    />
                </div>

                {/* Editorial Grid Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                    {/* Main Content */}
                    <article
                        className='lg:col-span-8 prose prose-lg md:prose-xl dark:prose-invert max-w-none
                            prose-headings:text-slate-900 dark:prose-headings:text-white
                            prose-p:text-slate-700 dark:prose-p:text-gray-100
                            prose-a:text-emerald-500 hover:prose-a:text-emerald-400
                            prose-blockquote:border-s-emerald-500 prose-blockquote:bg-emerald-500/5
                            prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-e-lg'
                    >
                        <RenderMarkdown content={displayContent} />
                    </article>

                    {/* Sidebar */}
                    <aside className='lg:col-span-4'>
                        <div className='sticky top-32 flex flex-col gap-8'>
                            <div className='rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-6 border border-slate-100 dark:border-slate-800'>
                                <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-4'>{t('shareArticle')}</h3>
                                <div className='flex items-center gap-4'>
                                    <button className='p-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm'>
                                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                                        </svg>
                                    </button>
                                    <button className='p-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm'>
                                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                                            <path fillRule='evenodd' d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' clipRule='evenodd' />
                                        </svg>
                                    </button>
                                    <button className='p-2 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm'>
                                        <LinkIcon className='w-5 h-5' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Related Posts Block */}
                {relatedBlogs.length > 0 && (
                    <div className='mt-24 border-t border-slate-200 dark:border-slate-800 pt-16'>
                        <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-8'>{t('relatedArticles')}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {relatedBlogs.map((relatedBlog) => (
                                <BlogCard key={relatedBlog.id} blog={relatedBlog} locale={locale} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
