import Image from 'next/image'
import NavItem from './NavItem'
import logoMob from '../../../public/logo-mob.png'

export default function Navbar() {
    return (
        <nav>
            <Image
                src={logoMob}
                alt='logo'
                className='z-20 md:p-5 p-2 fixed top-0 left-0 lg:hidden'
            />
            <ul className='fixed inset-0 flex gap-[100px] justify-end md:h-[92px] h-[70px] text-center items-center bg-nav backdrop-blur-[25px] font-bold md:text-xl text-sm z-10'>
                <NavItem
                    href='#home'
                    text='Home'
                    className='md:block hidden hover:text-opacity-100 text-opacity-50 text-contact-btn duration-300'
                />
                <NavItem
                    href='#services'
                    text='Services'
                    className='md:block hidden hover:text-opacity-100 text-opacity-50 text-contact-btn duration-300'
                />
                <NavItem
                    href='#our-work'
                    text='Our Work'
                    className='md:block hidden hover:text-opacity-100 text-opacity-50 text-contact-btn duration-300'
                />
                <NavItem
                    href='#contact-us'
                    text='Contact Us'
                    className='lg:mr-[100px] mr-[20px] md:p-0 p-[0.3125rem] md:bg-transparent border border-contact-bg whitespace-nowrap rounded-[0.3125rem] md:hover:text-opacity-100 md:text-opacity-50 text-contact-btn duration-300 md:border-0'
                />
            </ul>
        </nav>
    )
}
