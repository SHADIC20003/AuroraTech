import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'
import type { Blog } from '@/types/content'

export async function GET() {
    const blogs = await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } })

    const result: Blog[] = blogs.map((blog) => ({
        id: blog.id,
        image: blog.image,
        title: blog.title,
        description: blog.description,
        content: blog.content,
        keywords: blog.keywords,
        title_ar: blog.title_ar,
        description_ar: blog.description_ar,
        content_ar: blog.content_ar,
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
    }))

    return NextResponse.json(result)
}
