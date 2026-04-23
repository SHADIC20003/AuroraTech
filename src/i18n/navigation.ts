import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

// Locale-aware navigation helpers — use these instead of next/link &
// next/navigation throughout the app so hrefs are automatically prefixed
// with the active locale (/en/services, /ar/services, etc.)
export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing)
