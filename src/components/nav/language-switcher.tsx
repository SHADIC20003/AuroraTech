'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const LanguageSwitcher = () => {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const toggle = (next: 'en' | 'ar') => {
        if (next === locale) return
        router.replace(pathname, { locale: next })
    }

    return (
        <div
            role='group'
            aria-label='Language switcher'
            className='relative flex items-center rounded-full p-0.5 text-xs font-bold'
        >
            {(['en', 'ar'] as const).map((lang) => {
                const isActive = locale === lang
                return (
                    <button
                        key={lang}
                        onClick={() => toggle(lang)}
                        aria-pressed={isActive}
                        className={cn(
                            'relative z-10 rounded-full px-2.5 py-1 uppercase tracking-widest transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-green-300',
                            isActive
                                ? 'text-slate-900 dark:text-white'
                                : 'text-slate-500 dark:text-white/50 hover:text-slate-800 dark:hover:text-white/80',
                        )}
                    >
                        {isActive && (
                            <motion.span
                                layoutId='lang-pill'
                                className='absolute inset-0 rounded-full bg-white dark:bg-white/15 shadow-sm'
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className='relative'>{lang}</span>
                    </button>
                )
            })}
        </div>
    )
}
