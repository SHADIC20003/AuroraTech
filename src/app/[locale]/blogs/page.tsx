import { BlogCard } from '@/components/cards/blog-card'
import { prisma } from '@/server/db'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Blogs | Aurora Tech',
    openGraph: {
        type: 'website',
        url: 'https://auroratech.me/blogs',
        title: 'Blogs | Aurora Tech',
        images: [{ url: '/others/favicon.png', width: 512, height: 512, alt: 'Aurora Tech Logo' }],
    },
    twitter: {
        title: 'Blogs | Aurora Tech',
        site: 'https://auroratech.me/blogs',
        images: [{ url: '/others/favicon.png', alt: 'Aurora Tech Logo' }],
        card: 'summary_large_image',
    },
}

export default async function page() {
    const t = await getTranslations('blogs')
    const blogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' },
    })

    return (
        <main className='pt-32 pb-24 md:pt-40'>
            <div className='mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3'>
            <h1 className='col-span-full text-center font-slab text-3xl font-semibold text-slate-900 dark:text-white md:text-[2.5rem]'>
                {t('title')}
            </h1>
            {blogs.length > 0 ? (
                blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
                <div className='col-span-full w-full py-20 text-center text-xl font-bold text-slate-900 dark:text-white md:text-2xl'>
                    {t('noBlogsFound')}
                </div>
            )}
            </div>
        </main>
    )
}
