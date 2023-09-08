type NavItemProps = {
    href: string
    text: string
    className?: string
}

export default function NavItem({ href, text, className }: NavItemProps) {
    return (
        <li>
            <a href={href} className={className}>
                {text}
            </a>
        </li>
    )
}
