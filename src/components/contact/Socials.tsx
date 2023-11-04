import { Facebook, Instagram, LinkedIn } from './SocialIcons'
import SocialItem from './SocialItem'

type Props = {
    className?: string
}

export default function Socials({ className }: Props) {
    return (
        <div className={`${className} flex-col lg:gap-10 gap-1`}>
            <h1 className='font-bold text-contact-header lg:text-5xl text-3xl text-center'>
                Aurora Tech
            </h1>
            <div className='flex items-center gap-3 justify-center'>
                <SocialItem
                    icon={Facebook()}
                    href='https://www.facebook.com/profile.php?id=61551227603812'
                />

                <SocialItem
                    icon={Instagram()}
                    href='https://www.instagram.com/aurora.software.tech/'
                />

                <SocialItem
                    icon={LinkedIn()}
                    href='https://www.linkedin.com/company/aurora-software-tech/'
                />
            </div>
        </div>
    )
}
