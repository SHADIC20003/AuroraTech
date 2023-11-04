import React from 'react'

type SocialItemProps = {
    icon: React.JSX.Element
    href: string
}

export default function SocialItem({ icon, href }: SocialItemProps) {
    return (
        <a
            href={href}
            target='_blank'
            className='hover:scale-105 duration-300 group'
        >
            {icon}
        </a>
    )
}
