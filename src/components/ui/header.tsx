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
                'font-slab text-4xl font-bold text-White sm:text-[2.5rem]',
                className,
            )}
        >
            <span>{text1}</span>
            <span className='text-green-300'> {text2}</span>
        </h2>
    )
}
