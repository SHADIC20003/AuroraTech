'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

const DISPLAY_NAMES: Record<string, string> = {
    AWS: 'AWS',
    CSS: 'CSS3',
    Figma: 'Figma',
    Flutter: 'Flutter',
    HTML: 'HTML5',
    JS: 'JavaScript',
    JSON: 'JSON',
    MongoDB: 'MongoDB',
    Next: 'Next.js',
    Node: 'Node.js',
    Python: 'Python',
    React: 'React',
    SQL: 'PostgreSQL',
    Supabase: 'Supabase',
    Tailwind: 'Tailwind CSS',
    TS: 'TypeScript',
}

export const InfiniteMovingTechnologies = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: { alt: string; icon: any }[]
    direction?: 'left' | 'right'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    className?: string
}) => {
    const [isPaused, setIsPaused] = useState(false)
    const duration =
        speed === 'fast' ? '20s' : speed === 'normal' ? '60s' : '80s'
    const animationDirection = direction === 'left' ? 'normal' : 'reverse'

    // Duplicate items so the CSS keyframe can translate -50% seamlessly
    const doubled = [...items, ...items]

    return (
        <div
            className={cn(
                'relative overflow-x-hidden',
                '[mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]',
                className,
            )}
            dir="ltr"
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            {/* subtle track backdrop — logical inset so it spans full width in both directions */}
            <div className='absolute inset-0 rounded-full bg-slate-100 dark:bg-white/[0.03]' />

            <ul
                className='relative flex w-max min-w-full shrink-0 flex-nowrap items-center gap-10 pt-10 pb-5 md:gap-20'
                style={{
                    animation: `scroll ${duration} ${animationDirection} linear infinite`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                }}
            >
                {doubled.map((item, idx) => (
                    <li
                        key={idx}
                        className='group/logo relative flex flex-shrink-0 flex-col items-center'
                    >
                        {/* Tooltip — centered above icon using start-1/2 logical property */}
                        <span
                            className='pointer-events-none absolute -top-8 start-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-200 dark:bg-white/10 px-2 py-1 font-inter text-[11px] font-medium tracking-wide text-slate-900 dark:text-white/80 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/logo:opacity-100'
                            aria-hidden
                        >
                            {DISPLAY_NAMES[item.alt] ?? item.alt}
                        </span>

                        <Image
                            src={item.icon}
                            alt={item.alt}
                            className='grayscale opacity-80 dark:opacity-50 transition-all duration-300 ease-out group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110'
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
