'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

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
                'relative z-[9999] rounded-md text-lg font-bold text-gray-100 outline-none ring-green-300 ring-offset-blue duration-300 hover:text-White focus-visible:ring-2 focus-visible:ring-offset-2',
                href === pathname && 'text-White',
            )}
            href={href}
            onClick={handleNavigate}
        >
            {text}
        </Link>
    )
}
