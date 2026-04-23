// This route is intentionally a no-op. The middleware.ts intercepts all
// requests at "/" and redirects them to "/en" (the default locale).
// This file exists only to satisfy Next.js App Router's build requirements.
import { redirect } from 'next/navigation'

export default function RootPage() {
    redirect('/en')
}
