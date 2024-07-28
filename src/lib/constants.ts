import { Others, Services, Work } from '@/components/svgs'

export const MILLISECONDS = 6000

export const NAV_ITEMS = [
    { href: '/', text: 'Home' },
    { href: '/services', text: 'Services' },
    { href: '/our-work', text: 'Our Work' },
    { href: '/about-us', text: 'About Us' },
    { href: '/blogs', text: 'Blogs' },
]

export const FOOTER_LINKS = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/services',
        text: 'Services',
    },
    {
        href: '/our-work',
        text: 'Our Work',
    },
    {
        href: '/about-us',
        text: 'About Us',
    },
    {
        href: '/contact',
        text: 'Contact',
    },
    {
        href: '/blogs',
        text: 'Blogs',
    },
    {
        href: 'https://forms.gle/auo2Fq7QRErQFGbt9',
        text: 'Apply for Work',
    },
    {
        href: '/others/Aurora-Tech-Portfolio.pdf',
        text: 'Our Portfolio',
    },
]

export const FOOTER_CONTACT = [
    {
        icon: Others.Phone,
        text: '+201033573845',
        href: 'tel:+201033573845',
    },
    {
        icon: Others.Phone,
        text: '+201069965752',
        href: 'tel:+201069965752',
    },
    {
        icon: Others.Email,
        text: 'info@auroratech.me',
        href: 'mailto:info@auroratech.me',
    },
    {
        icon: Others.Facebook,
        text: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61551227603812',
    },
    {
        icon: Others.LinkedIn,
        text: 'Linkedin',
        href: 'https://www.linkedin.com/company/aurora-software-tech/',
    },
    {
        icon: Others.Instagram,
        text: 'Instagram',
        href: 'https://www.instagram.com/aurora.software.tech/',
    },
]

export const SERVICES = [
    {
        title: 'Web Development',
        img: Services.WebDev,
        description:
            'Whether you want to digitize and automate your business or to up scale and increase your reach. We can make it happen using the latest tools and technologies. Our team of experienced web developers will help you create a website that stands out from the crowd and get better search results with SEO optimization and responsive web designs.',
    },
    {
        title: 'Mobile Development',
        img: Services.MobDev,
        description:
            'Our Cutting-edge cross platform mobile application will help you build a stronger brand, connect with customers better, provide value to customers, and improve customer engagement, all while being user-friendly, secure and high-performing.',
    },
    {
        title: 'UI/UX Design',
        img: Services.UI_UX,
        description:
            'Need a prototype for your business? We got you covered, our team of UI/UX designers will help you create a prototype with modern design that will help boost your brand identity. Our Designs are made to be modern, user-friendly and customized to your brand.',
    },
    {
        title: 'Maintenance',
        img: Services.Maintenance,
        description:
            'What comes after the development? Well, of course we would help you maintain your service. In order to make sure that you never run into a problem, our Maintenance and cloud engineers will always be on the lookout to make sure that your website and mobile app are running on tip top conditions.',
    },
]

export const PROJECTS = [
    {
        title: 'Latin',
        description:
            'Latin is a beauty and fashion brand specializing in lip gloss, and other makeup and beauty products to match their fantastic and stylish brand we decided to make this elegant website for them.',
        images: [Work.Latin.Home, Work.Latin.Checkout, Work.Latin.Login],
        tags: [
            {
                name: 'Web Design & Development',
                icon: Others.WebDevTag,
            },
            {
                name: 'E-Commerce',
                icon: Others.Store,
            },
        ],
        websiteUrl: 'https://latin-ten.vercel.app/',
    },
    {
        title: 'DHEBH',
        description:
            'DHEBH is website for a leading hospital in Saudi Arabia, for this we made a professional looking modern website that reflects the professionalism of the hospital itself.',
        images: [
            Work.Dhebh.Home,
            Work.Dhebh.Contact,
            Work.Dhebh.Hospital,
            Work.Dhebh.Reviews,
            Work.Dhebh.Mission,
        ],
        tags: [
            {
                name: 'Web Design & Development',
                icon: Others.WebDevTag,
            },
            {
                name: 'Medical',
                icon: Others.Medical,
            },
        ],
        websiteUrl: 'https://www.dhebh.net/',
    },
]
