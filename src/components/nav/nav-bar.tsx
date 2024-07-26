'use client'

import Image from 'next/image'
import React from 'react'
import { Others } from '../svgs'
import { NavItem } from './nav-item'
import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { NavMob } from './nav-mob'
import { useHeadroom } from '@mantine/hooks'

export const Navbar = () => {
    const pinned = useHeadroom({ fixedAt: 0 })

    return (
        // <nav className='border-b border-gray-muted bg-blue py-3 font-inter'>
        <nav
            className='sticky top-0 z-[9999] border-b border-gray-muted bg-blue py-3 font-inter transition-transform duration-200'
            style={{
                transform: `translate3d(0, ${pinned ? 0 : '-100%'}, 0)`,
            }}
        >
            <ul className='mx-auto flex max-w-[100.75rem] items-center justify-between px-5'>
                <li className='flex items-center gap-2'>
                    <div className='block md:hidden'>
                        <NavMob />
                    </div>
                    <Link
                        href='/'
                        aria-label='Go to Home'
                        className='rounded-md outline-none ring-green-300 ring-offset-blue duration-300 focus-visible:ring-2 focus-visible:ring-offset-2'
                    >
                        <Image
                            src={Others.Logo}
                            alt='logo'
                            width={46}
                            height={67}
                        />
                    </Link>
                </li>

                <li className='hidden md:block'>
                    <ul className='flex gap-4'>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <NavItem href={item.href} text={item.text} />
                            </li>
                        ))}
                    </ul>
                </li>

                <li>
                    <Link
                        className='rounded-md bg-green-300 px-6 py-2 font-extrabold text-blue outline-none ring-green-300 ring-offset-blue duration-300 hover:bg-green-500 focus-visible:ring-2 focus-visible:ring-offset-2 active:bg-[#152F26]'
                        href={'/contact'}
                    >
                        Get in Touch
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
