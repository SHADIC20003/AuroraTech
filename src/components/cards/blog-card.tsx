import Image from 'next/image'
import type { Blog } from '@prisma/client'
import Link from 'next/link'

type BlogCardProps = {
    blog: Blog
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <Link
            href={`/blog/${blog.id}`}
            className='shadow-blog-card flex flex-col rounded-3xl bg-border-gradient p-[0.125rem]'
        >
            <div className='flex grow flex-col rounded-3xl bg-blue'>
                <div className='relative flex overflow-hidden rounded-t-3xl'>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        className='w-full shrink-0 grow rounded-t-3xl object-cover duration-500'
                        width={500}
                        height={300}
                    />
                </div>
                <div className='flex grow flex-col gap-y-2 px-5 pb-5 pt-2'>
                    <h3 className='text-balance font-slab text-xl font-bold text-White md:text-2xl'>
                        {blog.title}
                    </h3>

                    <p className='line-clamp-4 font-inter text-sm text-gray-100'>
                        {blog.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
