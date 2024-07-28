import { RenderMarkdown } from '@/components/ui/render-markdown'
import { prisma } from '@/server/db'
import { Metadata, ResolvingMetadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { notFound } from 'next/navigation'
import React from 'react'
import { z } from 'zod'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

const paramSchema = z.object({
    id: z.string().cuid(),
})

export async function generateMetadata(
    {
        params: { id },
    }: {
        params: { id: string }
    },
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const metadata = await parent
    const openGraph = metadata.openGraph as OpenGraph

    const blog = await prisma.blog.findUnique({
        where: {
            id,
        },
    })

    return {
        title: blog?.title,
        description: blog?.description,
        keywords: blog?.keywords,
        openGraph: {
            ...openGraph,
            title: blog?.title,
            description: blog?.description,
            url: `https://www.auroratech.me/blog/${id}`,
            images: [
                {
                    url: blog?.image ?? '/others/favicon.png',
                    alt: blog?.title,
                },
            ],
        },
        twitter: {
            title: blog?.title,
            description: blog?.description,
            site: 'https://www.auroratech.me/blog',
            images: [
                {
                    url: blog?.image ?? '/others/favicon.png',
                    alt: blog?.title,
                },
            ],
        },
    }
}

export default async function page({ params }: { params: { id: string } }) {
    const parsedParams = paramSchema.safeParse(params)
    if (!parsedParams.success) notFound()
    const { id } = parsedParams.data

    const blog = await prisma.blog.findUnique({
        where: {
            id,
        },
    })

    if (blog == null) notFound()

    return (
        <main className='py-10'>
            <RenderMarkdown data={blog} />
        </main>
    )
}
