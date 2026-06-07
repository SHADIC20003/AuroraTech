import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'
import type { Blog } from '@/types/content'

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ slug: string }> },
) {
    const { slug } = await params
    const blog = await prisma.blog.findUnique({ where: { id: slug } })

    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const result: Blog = {
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
    }

    return NextResponse.json(result)
}
