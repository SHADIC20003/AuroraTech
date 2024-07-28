// Services
import Maintenance from '../../public/services/maintenance.svg'
import MobDev from '../../public/services/mob-dev.svg'
import WebDev from '../../public/services/web-dev.svg'
import UI_UX from '../../public/services/ui-ux.svg'

// Technologies
import AWS from '../../public/technologies/aws.svg'
import CSS from '../../public/technologies/css.svg'
import Figma from '../../public/technologies/figma.svg'
import Flutter from '../../public/technologies/flutter.svg'
import HTML from '../../public/technologies/html.svg'
import JS from '../../public/technologies/javascript.svg'
import JSON from '../../public/technologies/json.svg'
import MongoDB from '../../public/technologies/mongodb.svg'
import Next from '../../public/technologies/nextjs.svg'
import Node from '../../public/technologies/node.svg'
import Python from '../../public/technologies/python.svg'
import React from '../../public/technologies/react.svg'
import SQL from '../../public/technologies/sql.svg'
import Supabase from '../../public/technologies/supabase.svg'
import Tailwind from '../../public/technologies/tailwind.svg'
import TS from '../../public/technologies/typescript.svg'

// Others
import Logo from '../../public/others/logo.svg'
import Aurora from '../../public/others/aurora.svg'
import ContactBg from '../../public/others/contact-bg.svg'
import Phone from '../../public/others/phone.svg'
import Email from '../../public/others/email.svg'
import Facebook from '../../public/others/facebook.svg'
import LinkedIn from '../../public/others/linkedin.svg'
import Instagram from '../../public/others/instagram.svg'
import DotsRight from '../../public/others/dots-right.svg'
import DotsLeft from '../../public/others/dots-left.svg'
import WebDevTag from '../../public/others/web-dev.svg'
import Store from '../../public/others/store.svg'
import Medical from '../../public/others/medical.svg'
import Lines from '../../public/others/lines.svg'

// Work Latin
import LatinHome from '../../public/work/latin/home.png'
import LatinCheckout from '../../public/work/latin/checkout.png'
import LatinLogin from '../../public/work/latin/Login.png'

// Work Dhebh
import DhebhHome from '../../public/work/dhebh/home.png'
import DhebhContact from '../../public/work/dhebh/contact.png'
import DhebhHospital from '../../public/work/dhebh/hospital.png'
import DhebhReviews from '../../public/work/dhebh/reviews.png'
import DhebhMission from '../../public/work/dhebh/mission.png'

export const Services = {
    Maintenance,
    MobDev,
    WebDev,
    UI_UX,
}

export const Technologies = [
    {
        alt: 'AWS',
        icon: AWS,
    },
    {
        alt: 'CSS',
        icon: CSS,
    },
    {
        alt: 'Figma',
        icon: Figma,
    },
    {
        alt: 'Flutter',
        icon: Flutter,
    },
    {
        alt: 'HTML',
        icon: HTML,
    },
    {
        alt: 'JS',
        icon: JS,
    },
    {
        alt: 'JSON',
        icon: JSON,
    },
    {
        alt: 'MongoDB',
        icon: MongoDB,
    },
    {
        alt: 'Next',
        icon: Next,
    },
    {
        alt: 'Node',
        icon: Node,
    },
    {
        alt: 'Python',
        icon: Python,
    },
    {
        alt: 'React',
        icon: React,
    },
    {
        alt: 'SQL',
        icon: SQL,
    },
    {
        alt: 'Supabase',
        icon: Supabase,
    },
    {
        alt: 'Tailwind',
        icon: Tailwind,
    },
    {
        alt: 'TS',
        icon: TS,
    },
]

export const Others = {
    Logo,
    Aurora,
    ContactBg,
    Phone,
    Email,
    Facebook,
    LinkedIn,
    Instagram,
    DotsRight,
    DotsLeft,
    WebDevTag,
    Store,
    Medical,
    Lines,
    Arrow: (className1: string, className2: string) => (
        <svg
            width='61'
            height='61'
            viewBox='0 0 61 61'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className1}
        >
            <path
                className={className2}
                d='M44.7237 28.625H9.875C9.37772 28.625 8.90081 28.8226 8.54918 29.1742C8.19754 29.5259 8 30.0028 8 30.5C8 30.9973 8.19754 31.4742 8.54918 31.8259C8.90081 32.1775 9.37772 32.375 9.875 32.375H44.7237L31.0475 46.0475C30.6954 46.3996 30.4976 46.8771 30.4976 47.375C30.4976 47.873 30.6954 48.3505 31.0475 48.7025C31.3996 49.0546 31.8771 49.2524 32.375 49.2524C32.8729 49.2524 33.3504 49.0546 33.7025 48.7025L50.5775 31.8275C50.7521 31.6534 50.8906 31.4465 50.9852 31.2187C51.0797 30.9909 51.1283 30.7467 51.1283 30.5C51.1283 30.2534 51.0797 30.0092 50.9852 29.7814C50.8906 29.5536 50.7521 29.3467 50.5775 29.1725L33.7025 12.2975C33.3504 11.9455 32.8729 11.7477 32.375 11.7477C31.8771 11.7477 31.3996 11.9455 31.0475 12.2975C30.6954 12.6496 30.4976 13.1271 30.4976 13.625C30.4976 14.123 30.6954 14.6005 31.0475 14.9525L44.7237 28.625Z'
                fill='#359976'
            />
        </svg>
    ),
}

export const Work = {
    Latin: {
        Home: LatinHome,
        Checkout: LatinCheckout,
        Login: LatinLogin,
    },
    Dhebh: {
        Home: DhebhHome,
        Contact: DhebhContact,
        Hospital: DhebhHospital,
        Reviews: DhebhReviews,
        Mission: DhebhMission,
    },
}
