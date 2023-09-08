type WorkDescriptionProps = {
    title: string
    description: string
}

export default function WorkDescription({
    title,
    description,
}: WorkDescriptionProps) {
    return (
        <div className='xl:translate-x-40 lg:translate-x-24 flex flex-col gap-5 font-bold'>
            <h2 className='text-primary xl:text-4xl lg:text-3xl text-xl'>
                {title}
            </h2>
            <p className='text-nav-text xl:text-2xl lg:text-xl text-[13px] lg:max-w-[39ch] balance'>
                {description}
            </p>
        </div>
    )
}
