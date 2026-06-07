'use client'

import { useTranslations } from 'next-intl'
import { useBlogs } from '@/hooks/useBlogs'
import { BlogCard } from '@/components/cards/blog-card'

type Props = {
    locale: 'en' | 'ar'
}

export function BlogsListClient({ locale }: Props) {
    const t = useTranslations('blogs')
    const { data: blogs, isLoading, isError } = useBlogs()

    return (
        <main className='pt-32 pb-24 md:pt-40'>
            <div className='mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3'>
                <h1 className='col-span-full text-center font-slab text-3xl font-semibold text-slate-900 dark:text-white md:text-[2.5rem]'>
                    {t('title')}
                </h1>

                {isLoading && (
                    <div className='col-span-full w-full py-20 text-center text-xl font-bold text-slate-900 dark:text-white md:text-2xl'>
                        ...
                    </div>
                )}

                {isError && (
                    <div className='col-span-full w-full py-20 text-center text-xl font-bold text-red-500'>
                        Failed to load blogs.
                    </div>
                )}

                {!isLoading && !isError && blogs && blogs.length > 0 &&
                    blogs.map((blog) => <BlogCard key={blog.id} blog={blog} locale={locale} />)
                }

                {!isLoading && !isError && (!blogs || blogs.length === 0) && (
                    <div className='col-span-full w-full py-20 text-center text-xl font-bold text-slate-900 dark:text-white md:text-2xl'>
                        {t('noBlogsFound')}
                    </div>
                )}
            </div>
        </main>
    )
}
