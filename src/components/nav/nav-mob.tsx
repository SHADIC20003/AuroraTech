'use client'

import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetVisuallyHidden } from '@/components/ui/sheet'
import { NavItem } from './nav-item'
import { NAV_ITEMS } from '@/lib/constants'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'

export const NavMob = () => {
    const [open, setOpen] = useState(false)
    const match = useMediaQuery('(min-width: 768px)')
    const locale = useLocale()
    const t = useTranslations('nav')
    const isRtl = locale === 'ar'

    useEffect(() => {
        if (match) setOpen(false)
    }, [match])

    const handleNavigate = () => setOpen(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                className='flex flex-col gap-1 outline-none ring-green-300 ring-offset-2 ring-offset-white dark:ring-offset-[#000A15] duration-300 focus-visible:ring-2 focus-visible:ring-offset-2'
                aria-label='Open Navigation'
            >
                <div className='h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white/90' />
                <div className='h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white/90' />
                <div className='h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white/90' />
            </SheetTrigger>
            <SheetContent
                side={isRtl ? 'left' : 'right'}
                className='flex flex-col border-none bg-white/95 dark:bg-[#000A15]/95 backdrop-blur-xl'
            >
                <SheetVisuallyHidden>
                    <SheetTitle>Navigation Menu</SheetTitle>
                </SheetVisuallyHidden>
                <div className='flex flex-col h-full pt-16 pb-8'>
                    <ul className='flex flex-col gap-6 items-center'>
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <NavItem
                                    href={item.href}
                                    text={t(item.key)}
                                    handleNavigate={handleNavigate}
                                />
                            </li>
                        ))}
                    </ul>

                    <div className='mt-auto flex justify-center'>
                        <div className='shrink-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-[1.5px] w-full max-w-[200px]'>
                            <Link
                                href='/contact'
                                onClick={handleNavigate}
                                className={cn(
                                    'block text-center rounded-full bg-white dark:bg-[#000A15] px-5 py-3 text-sm font-bold text-slate-900 dark:text-white outline-none transition-all duration-200 hover:opacity-90',
                                    'focus-visible:ring-2 focus-visible:ring-green-300',
                                )}
                            >
                                {t('getInTouch')}
                            </Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
