import { useQuery } from '@tanstack/react-query'
import type { CaseStudy } from '@/types/content'

async function fetchCaseStudies(): Promise<CaseStudy[]> {
    const res = await fetch('/api/case-studies')
    if (!res.ok) throw new Error('Failed to fetch case studies')
    return res.json()
}

async function fetchCaseStudy(slug: string): Promise<CaseStudy> {
    const res = await fetch(`/api/case-studies/${slug}`)
    if (!res.ok) throw new Error('Failed to fetch case study')
    return res.json()
}

export function useCaseStudies() {
    return useQuery<CaseStudy[]>({
        queryKey: ['case-studies'],
        queryFn: fetchCaseStudies,
    })
}

export function useCaseStudy(slug: string) {
    return useQuery<CaseStudy>({
        queryKey: ['case-studies', slug],
        queryFn: () => fetchCaseStudy(slug),
        enabled: Boolean(slug),
    })
}
