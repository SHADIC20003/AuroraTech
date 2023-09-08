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
                <a
                    href='https://www.facebook.com/profile.php?id=61551227603812'
                    target='_blank'
                >
                    <img
                        src='/facebook.svg'
                        alt='facebook'
                        className='lg:w-auto w-[25px] lg:h-auto h-[25px]'
                    />
                </a>
                <a
                    href='https://www.instagram.com/aurora.software.tech/'
                    target='_blank'
                >
                    <img
                        src='/instagram.svg'
                        alt='instagram'
                        className='lg:w-auto w-[25px] lg:h-auto h-[25px]'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/company/aurora-software-tech/'
                    target='_blank'
                >
                    <img
                        src='/linkedin.svg'
                        alt='linkedin'
                        className='lg:w-auto w-[25px] lg:h-auto h-[25px]'
                    />
                </a>
            </div>
        </div>
    )
}
