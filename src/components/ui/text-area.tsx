import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className='rounded-md bg-gradient-to-b from-green-300 to-blue p-[0.125rem]'>
                <textarea
                    className={cn(
                        'flex min-h-32 w-full rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold tracking-[0.00938em] text-gray-500 ring-offset-gray-500 placeholder:text-gray-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    },
)
Textarea.displayName = 'Textarea'

export { Textarea }
