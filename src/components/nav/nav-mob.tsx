'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavItem } from './nav-item'
import { NAV_ITEMS } from '@/lib/constants'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import { Others } from '../svgs'

export const NavMob = () => {
    const [open, setOpen] = useState(false)
    const match = useMediaQuery('(min-width: 768px)')

    useEffect(() => {
        if (match) {
            setOpen(false)
        }
    }, [match])

    const handleNavigate = () => {
        setOpen(false)
    }

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                className='flex flex-col gap-1 outline-none ring-green-300 ring-offset-blue duration-300 focus-visible:ring-2 focus-visible:ring-offset-2'
                aria-label='Open Navigation'
            >
                <div className='h-0.5 w-6 rounded-full bg-White' />
                <div className='h-0.5 w-6 rounded-full bg-White' />
                <div className='h-0.5 w-6 rounded-full bg-White' />
            </SheetTrigger>
            <SheetContent side={'left'}>
                <ul className='flex flex-col gap-4 pt-10'>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <NavItem
                                href={item.href}
                                text={item.text}
                                handleNavigate={handleNavigate}
                            />
                        </li>
                    ))}
                </ul>

                {/* <Image src={Others.Logo} alt='Logo' /> */}
            </SheetContent>
        </Sheet>
    )
}
