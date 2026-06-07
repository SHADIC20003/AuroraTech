export interface Blog {
    id: string
    image: string
    title: string
    description: string
    content: string // Markdown
    keywords: string[]
    title_ar: string | null
    description_ar: string | null
    content_ar: string | null
    createdAt: string
    updatedAt: string
}

export interface CaseStudy {
    id: string
    title: string
    description: string
    content: string
    title_ar: string | null
    description_ar: string | null
    content_ar: string | null
    createdAt: string
    updatedAt: string
}
