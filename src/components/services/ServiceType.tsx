type ServiceTypeProps = {
    title: string
    description: string
    image: string
}

export default function ServiceType({
    title,
    description,
    image,
}: ServiceTypeProps) {
    return (
        <div className='flex flex-col items-center gap-5'>
            <img
                src={image}
                alt={title}
                className='md:w-auto md:h-auto h-10 w-10'
            />
            <h1 className='2xl:text-4xl xl:text-2xl text-xl font-bold text-center text-dark-green whitespace-nowrap'>
                {title}
            </h1>
            <p className='text-service-text 2xl:text-2xl xl:text-xl lg:text-base text-[13px] max-w-[39ch] lg:max-w-[35ch] 2xl:max-w-[38ch] balance'>
                {description}
            </p>
        </div>
    )
}
