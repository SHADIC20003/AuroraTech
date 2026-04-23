import { permanentRedirect } from 'next/navigation'

export default async function LegacyBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    permanentRedirect(`/en/blog/${id}`)
}
