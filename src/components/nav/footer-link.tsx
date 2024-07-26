import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterLinkProps = {
    icon?: any
    href: string
    text: string
}

export const FooterLink = ({ href, text, icon }: FooterLinkProps) => {
    return (
        <li>
            <Link
                href={href}
                target={
                    icon ||
                    text === 'Our Portfolio' ||
                    text === 'Apply for Work'
                        ? '_blank'
                        : '_self'
                }
                download={
                    text === 'Our Portfolio'
                        ? 'Aurora Tech Portfolio.pdf'
                        : undefined
                }
                className={cn(
                    'flex items-center gap-2 rounded-md font-inter text-base font-semibold leading-none text-gray-300 outline-none ring-blue ring-offset-green-300 duration-300 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 max-lg:justify-center sm:text-lg',
                    text === 'info@auroratech.me' && 'gap-1',
                )}
            >
                {icon && <Image src={icon} alt={text} />}
                {text}
            </Link>
        </li>
    )
}
