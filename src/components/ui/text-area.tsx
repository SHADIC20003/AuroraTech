import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-32 w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm font-semibold tracking-[0.00938em] text-slate-900 dark:text-white backdrop-blur-md placeholder:text-slate-400 dark:placeholder:text-white/40 shadow-sm dark:shadow-none transition-all duration-300 focus-visible:outline-none focus-visible:border-emerald-500 dark:focus-visible:border-[#359976] focus-visible:ring-4 focus-visible:ring-emerald-500/10 dark:focus-visible:ring-0 focus-visible:shadow-[0_0_15px_rgba(53,153,118,0.3)] disabled:cursor-not-allowed disabled:opacity-50',
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)
Textarea.displayName = 'Textarea'

export { Textarea }
