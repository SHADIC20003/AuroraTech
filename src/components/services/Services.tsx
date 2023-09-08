import Intro from './Intro'
import ServiceType from './ServiceType'

export default function Services() {
    return (
        <section id='services' className='bg-primary xl:px-7 xl:py-9 py-5 px-5'>
            <Intro />

            <div className='flex md:flex-row flex-col items-center lg:gap-20 gap-10 mt-10 xl:translate-x-40 lg:translate-x-24 lg:justify-normal justify-center'>
                <ServiceType
                    title='Mobile application development'
                    description='We can build an app that works on both Android and iOS for your business. We use the best tools to create simple, complex, or hybrid apps. Our team will ensure a user-friendly, secure, and high-performing app.'
                    image='/service-mobile.png'
                />
                <div className='md:w-[2px] md:h-[264px] w-[264px] h-[2px] bg-service-text' />

                <ServiceType
                    title='Web application development'
                    description='No matter what kind of web project you have in mind, we can make it happen using the latest tools and technologies. Our team of experienced web developers will work with you closely to deliver your web project on time, on budget, and on quality.'
                    image='/service-web.png'
                />
            </div>
        </section>
    )
}
