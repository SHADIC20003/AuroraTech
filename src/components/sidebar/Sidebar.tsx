import MailIcon from './MailIcon'

export default function Sidebar() {
    return (
        <section className='hidden bg-dark-green fixed min-h-screen min-w-[100px] max-w-[100px] z-20 lg:flex flex-col items-center justify-between'>
            <img src='/logo.png' alt='logo' />
            <div className='flex flex-row-reverse gap-3 items-center -rotate-90 -translate-y-[11rem] my-3 cursor-pointer group'>
                <p className='text-contact-btn text-opacity-50 font-bold tracking-[0.5em] group-hover:scale-110 group-hover:text-opacity-100 group-hover:translate-x-4 duration-150'>
                    info@auroratech.me
                </p>
                <MailIcon />
            </div>
        </section>
    )
}
