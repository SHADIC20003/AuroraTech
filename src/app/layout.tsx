import type { Metadata } from 'next'

// Ensures relative Open Graph / Twitter image URLs resolve during build and in dev.
export const metadata: Metadata = {
    metadataBase: new URL('https://auroratech.me'),
}

// Root layout — required by Next.js App Router.
// The full layout (html, body, providers) lives in [locale]/layout.tsx.
// This passthrough is valid because [locale]/layout.tsx renders <html> & <body>.
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
