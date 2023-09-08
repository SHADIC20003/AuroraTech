export default function Home() {
    return (
        <section id='home' className='bg-main-bg bg-no-repeat bg-cover'>
            <div className='flex flex-col gap-10 items-center justify-center min-h-[60vh] lg:min-h-screen text-primary'>
                <h1
                    style={{
                        textShadow: '5px 5px 4px rgba(0, 0, 0, 0.25)',
                    }}
                    className='xl:text-6xl md:text-4xl text-3xl font-bold text-center 2xl:-translate-x-80 xl:-translate-x-64 lg:-translate-x-40 md:-translate-x-36'
                >
                    <span className='block -translate-x-10 lg:-translate-x-14 xl:-translate-x-20'>
                        {' '}
                        Welcome to{' '}
                    </span>
                    <span className='block translate-x-10 lg:translate-x-14 xl:translate-x-20 text-[#E4F5FF]'>
                        Aurora Tech
                    </span>
                </h1>
                <p className='xl:text-2xl lg:text-xl md:text-base text-xs font-bold max-w-[35ch] md:max-w-[45ch] balance'>
                    Customized and state-of-the-art software solutions for
                    business that use cutting-edge tools and technologies to
                    deliver optimal results.
                </p>
            </div>
        </section>
    )
}
