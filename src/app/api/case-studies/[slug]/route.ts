import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'
import type { CaseStudy } from '@/types/content'

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ slug: string }> },
) {
    const { slug } = await params
    const cs = await prisma.caseStudy.findUnique({ where: { id: slug } })

    if (!cs) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const result: CaseStudy = {
        id: cs.id,
        title: cs.title,
        description: cs.description,
        content: cs.content,
        title_ar: cs.title_ar,
        description_ar: cs.description_ar,
        content_ar: cs.content_ar,
        createdAt: cs.createdAt.toISOString(),
        updatedAt: cs.updatedAt.toISOString(),
    }

    return NextResponse.json(result)
}
