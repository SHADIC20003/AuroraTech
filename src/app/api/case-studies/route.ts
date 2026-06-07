import { NextResponse } from 'next/server'
import { prisma } from '@/server/db'
import type { CaseStudy } from '@/types/content'

export async function GET() {
    const caseStudies = await prisma.caseStudy.findMany({ orderBy: { createdAt: 'desc' } })

    const result: CaseStudy[] = caseStudies.map((cs) => ({
        id: cs.id,
        title: cs.title,
        description: cs.description,
        content: cs.content,
        title_ar: cs.title_ar,
        description_ar: cs.description_ar,
        content_ar: cs.content_ar,
        createdAt: cs.createdAt.toISOString(),
        updatedAt: cs.updatedAt.toISOString(),
    }))

    return NextResponse.json(result)
}
