import { BlogCard } from '@/components/cards/blog-card'
import { prisma } from '@/server/db'
import { Metadata } from 'next'
import React from 'react'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Blogs | Aurora Tech',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://auroratech.me/blogs',
        title: 'Blogs | Aurora Tech',
        images: [
            {
                url: '/others/favicon.png',
                width: 512,
                height: 512,
                alt: 'Aurora Tech Logo',
            },
        ],
    },
    twitter: {
        site: 'https://auroratech.me/blogs',
        images: [
            {
                url: '/others/favicon.png',
                alt: 'Aurora Tech Logo',
            },
        ],
        card: 'summary_large_image',
    },
}

export default async function page() {
    const blogs = await prisma.blog.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    })

    return (
        <main className='mx-auto grid max-w-[100.75rem] gap-8 px-5 pb-28 pt-10 md:grid-cols-2 lg:grid-cols-3'>
            <h1 className='col-span-full text-center font-slab text-3xl font-semibold text-White md:text-[2.5rem]'>
                Blogs
            </h1>
            {blogs.length > 0 ? (
                blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
                <div className='col-span-full w-full py-20 text-center text-xl font-bold text-White md:text-2xl'>
                    No blogs found
                </div>
            )}
        </main>
    )
}
