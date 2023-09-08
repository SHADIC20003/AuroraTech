export default function Intro() {
    return (
        <div className='flex justify-between'>
            <div className='xl:translate-x-40 lg:translate-x-24'>
                <h2 className='text-service-header lg:text-4xl text-base font-bold'>
                    our services
                </h2>
                <h1 className='text-dark-green lg:text-7xl text-[28px] font-bold whitespace-nowrap'>
                    What we do?
                </h1>
            </div>
            <img
                src='/service-tools.png'
                alt='Service Tools'
                className='xl:translate-y-14 xl:w-auto xl:h-auto w-1/2 h-1/2'
            />
        </div>
    )
}
