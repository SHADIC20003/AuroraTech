import Image from 'next/image'
import type { Blog } from '@/types/content'
import { Link } from '@/i18n/navigation'

type BlogCardProps = {
    blog: Blog
    locale: 'en' | 'ar'
}

export const BlogCard = ({ blog, locale }: BlogCardProps) => {
    const displayTitle = locale === 'ar' && blog.title_ar ? blog.title_ar : blog.title
    const displayDescription = locale === 'ar' && blog.description_ar ? blog.description_ar : blog.description

    return (
        <Link
            href={`/blogs/${blog.id}`}
            className='group flex flex-col rounded-3xl bg-gradient-to-b from-green-300 to-slate-200 dark:bg-border-gradient p-[0.125rem] shadow-blog-card'
        >
            <div className='flex grow flex-col rounded-3xl bg-white dark:bg-white/5 border border-transparent dark:border-white/10'>
                <div className='relative flex overflow-hidden rounded-t-3xl'>
                    <Image
                        src={blog.image}
                        alt={displayTitle}
                        className='w-full shrink-0 grow rounded-t-3xl object-cover transition-transform duration-500 group-hover:scale-105 md:min-h-80'
                        width={500}
                        height={300}
                    />
                </div>
                <div className='flex grow flex-col justify-between gap-y-2 px-5 pb-5 pt-2 text-start'>
                    <h3 className='text-balance font-slab text-xl font-bold text-slate-900 dark:text-white md:text-2xl'>
                        {displayTitle}
                    </h3>
                    <p className='line-clamp-4 font-inter text-sm text-slate-600 dark:text-gray-100'>
                        {displayDescription}
                    </p>
                </div>
            </div>
        </Link>
    )
}
