type ContactInfoProps = {
    img: string
    text: string
}

export default function ContactInfo({ img, text }: ContactInfoProps) {
    return (
        <div className='flex items-center gap-2'>
            <img
                src={img}
                alt='Phone'
                className='xl:w-auto w-[13px] xl:h-auto h-[13px]'
            />
            <p className='text-contact-text 2xl:text-[24px] lg:text-xl md:text-base text-[13px]'>
                {text}
            </p>
        </div>
    )
}
