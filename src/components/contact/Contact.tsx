import ContactInfo from './ContactInfo'
import Socials from './Socials'

export default function Contact() {
    return (
        <section
            id='contact-us'
            className='bg-contact-bg lg:px-7 px-5 py-5 lg:py-20'
        >
            <h1 className='text-contact-header xl:text-7xl lg:text-5xl text-[28px] font-bold xl:translate-x-40 lg:translate-x-24'>
                Contact Us
            </h1>
            <div className='flex md:flex-row flex-col md:items-center xl:gap-16 gap-5 3xl:translate-x-40 lg:mt-20 3xl:justify-start justify-center'>
                <Socials className='3xl:flex hidden' />

                <div className='lg:w-px lg:h-[227px] w-[227px] h-px bg-contact-text/40 3xl:block hidden' />

                <div className='flex flex-col xl:gap-10 lg:gap-5 gap-2 md:m-0 md:mt-0 mt-5'>
                    <h1 className='font-bold text-contact-header lg:text-3xl md:text-2xl text-xl'>
                        About us
                    </h1>
                    <p className='text-contact-text 2xl:text-[24px] lg:text-xl md:text-base text-[13px] balance max-w-[40ch] lg:max-w-[30ch] xl:max-w-[40ch]'>
                        We are a passionate team of software experts who create
                        innovative and high-quality products for our clients. We
                        value honesty, effectiveness, competence, integrity and
                        accountability.
                    </p>
                </div>

                <div className='md:w-px md:h-[227px] w-[227px] h-px bg-contact-text/40 self-center' />

                <div className='flex flex-col xl:gap-10 lg:gap-5 gap-2 md:m-0'>
                    <h1 className='font-bold text-contact-header lg:text-3xl md:text-2xl text-xl'>
                        Our info
                    </h1>
                    <ContactInfo img='/phone.svg' text='+20 1033573845' />
                    <ContactInfo img='/phone.svg' text='+20 1069965752' />
                    <ContactInfo
                        img='contact-mail.svg'
                        text='info@auroratech.me'
                    />
                </div>
            </div>

            {/* <div className='w-[227px] h-px bg-contact-text/40 block 3xl:hidden m-auto mt-10 mb-4' /> */}
            <div className='md:w-px m-auto mt-5 md:h-[227px] w-[227px] h-px bg-contact-text/40 self-center block md:hidden' />
            <Socials className='flex 3xl:hidden md:mt-10 mt-3' />
        </section>
    )
}
