import { useQuery } from '@tanstack/react-query'
import type { Blog } from '@/types/content'

async function fetchBlogs(): Promise<Blog[]> {
    const res = await fetch('/api/blogs')
    if (!res.ok) throw new Error('Failed to fetch blogs')
    return res.json()
}

async function fetchBlog(slug: string): Promise<Blog> {
    const res = await fetch(`/api/blogs/${slug}`)
    if (!res.ok) throw new Error('Failed to fetch blog')
    return res.json()
}

export function useBlogs() {
    return useQuery<Blog[]>({
        queryKey: ['blogs'],
        queryFn: fetchBlogs,
    })
}

export function useBlog(slug: string) {
    return useQuery<Blog>({
        queryKey: ['blogs', slug],
        queryFn: () => fetchBlog(slug),
        enabled: Boolean(slug),
    })
}
