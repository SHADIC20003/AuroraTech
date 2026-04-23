'use client'

import { cn } from '@/lib/utils'
import { Link, usePathname } from '@/i18n/navigation'

type NavItemProps = {
    href: string
    text: string
    handleNavigate?: () => void
}

export const NavItem = ({ href, text, handleNavigate }: NavItemProps) => {
    const pathname = usePathname()

    return (
        <Link
            className={cn(
                'relative z-[9999] rounded-md text-lg font-bold text-slate-600 dark:text-gray-100 outline-none ring-green-300 ring-offset-blue duration-300 hover:text-slate-900 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2',
                href === pathname && 'text-slate-900 dark:text-white',
            )}
            href={href}
            onClick={handleNavigate}
        >
            {text}
        </Link>
    )
}
