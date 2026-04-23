'use client'

import Image from 'next/image'
import { Others } from '../svgs'
import { NAV_ITEMS } from '@/lib/constants'
import { Link, usePathname } from '@/i18n/navigation'
import { NavMob } from './nav-mob'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { Magnetic } from '../ui/magnetic'

export const Navbar = () => {
    const pathname = usePathname()
    const t = useTranslations('nav')

    return (
        <div className='fixed top-0 start-0 end-0 z-50 flex justify-center mt-6 px-4'>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                    'flex items-center justify-between rounded-full border border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-[#000A15]/80 px-4 py-2.5 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none',
                    'max-md:mx-auto max-md:w-[92%] max-md:px-6',
                    'md:w-full md:max-w-4xl gap-4',
                )}
            >
                {/* Logo */}
                <Link
                    href='/'
                    aria-label='Go to Home'
                    className='shrink-0 rounded-full text-slate-900 dark:text-white/90 outline-none ring-green-300 ring-offset-2 ring-offset-white dark:ring-offset-[#000A15] duration-300 focus-visible:ring-2'
                >
                    <Image
                        src={Others.Logo}
                        alt='logo'
                        width={36}
                        height={52}
                        className='h-[52px] w-auto max-md:h-10'
                        style={{ width: 'auto' }}
                    />
                </Link>

                {/* Mobile menu */}
                <div className='flex md:hidden items-center gap-3'>
                    <NavMob />
                </div>

                {/* Desktop nav links */}
                <ul className='hidden md:flex items-center gap-1 flex-1 justify-center'>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={cn(
                                    'relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 outline-none focus-visible:ring-2 ring-green-300',
                                    pathname === item.href
                                        ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white'
                                        : 'text-slate-600 dark:text-white/90 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white',
                                )}
                            >
                                {t(item.key)}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop: CTA */}
                <div className='hidden md:flex items-center gap-3 shrink-0'>
                    <Magnetic>
                        <div className='rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-[1.5px]'>
                            <Link
                                href='/contact'
                                className={cn(
                                    'block rounded-full bg-white dark:bg-[#000A15] px-3 py-1 text-xs font-bold text-slate-900 dark:text-white/90 outline-none transition-all duration-200 hover:opacity-90',
                                    'focus-visible:ring-2 focus-visible:ring-green-300',
                                    'md:px-5 md:py-1.5 md:text-sm md:text-slate-900 dark:md:text-white',
                                )}
                            >
                                {t('getInTouch')}
                            </Link>
                        </div>
                    </Magnetic>
                </div>
            </motion.nav>
        </div>
    )
}
