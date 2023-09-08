import NavItem from './NavItem'

export default function Navbar() {
    return (
        <nav>
            <img
                src='/logo-mob.png'
                alt='logo'
                className='z-20 md:p-5 p-2 fixed top-0 left-0 lg:hidden'
            />
            <ul className='fixed inset-0 flex gap-[100px] justify-end md:h-[92px] h-[70px] text-center items-center bg-nav backdrop-blur-[25px] text-nav-text font-bold md:text-xl text-sm z-10'>
                <NavItem href='#home' text='Home' className='md:block hidden' />
                <NavItem
                    href='#services'
                    text='Services'
                    className='md:block hidden'
                />
                <NavItem
                    href='#our-work'
                    text='Our Work'
                    className='md:block hidden'
                />
                <NavItem
                    href='#contact-us'
                    text='Contact Us'
                    className='lg:mr-[100px] mr-[20px] md:p-0 p-[5px] md:bg-transparent bg-contact-btn whitespace-nowrap rounded-[5px] md:text-inherit text-dark-green'
                />
            </ul>
        </nav>
    )
}
