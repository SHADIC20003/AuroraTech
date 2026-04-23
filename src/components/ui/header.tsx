import { cn } from '@/lib/utils'
import React from 'react'

type HeaderProps = {
    text1: string
    text2?: string
    className?: string
}

export const Header = ({ text1, text2, className }: HeaderProps) => {
    return (
        <h2
            className={cn(
                'font-slab text-4xl font-bold text-slate-900 dark:text-white sm:text-[2.5rem]',
                className,
            )}
        >
            <span className='animate-shimmer bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 dark:from-white dark:via-slate-400 dark:to-white bg-[length:200%_auto] bg-clip-text text-transparent'>
                {text1}
            </span>
            <span className='text-green-300'> {text2}</span>
        </h2>
    )
}
